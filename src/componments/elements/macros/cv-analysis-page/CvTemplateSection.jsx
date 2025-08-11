import React, { useState, useEffect } from "react";
import "./CvSlider.css";
import temp1 from "../../../../assets/images/sleek-template.png";
import temp2 from "../../../../assets/images/bold-template.png";
import temp3 from "../../../../assets/images/advanced-template.png";
import temp4 from "../../../../assets/images/classic-template.png";
import temp5 from "../../../../assets/images/elegant-template.png";
import temp6 from "../../../../assets/images/Madrid.png";
import temp7 from "../../../../assets/images/Essential.png";

const CvTemplateSection = () => {
  const templates = [
    { id: 1, image: temp1, name: `Sleek` },
    { id: 2, image: temp2, name: `Bold` },
    { id: 3, image: temp3, name: `Advanced` },
    { id: 4, image: temp4, name: `Classic` },
    { id: 5, image: temp5, name: `Elegant` },
    { id: 6, image: temp6, name: `Madrid` },
    { id: 7, image: temp7, name: `Essential` },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Touch state variables for swipe functionality
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  // Configuration for different screen sizes
  const getConfig = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      return {
        slidesToShow: 5,
        slideWidth: 225,
        gap: 16,
        containerWidth: 5 * 225 + 4 * 16, // 1189px - exact width for 5 slides
      };
    } else if (width >= 768) {
      return {
        slidesToShow: 3,
        slideWidth: 200,
        gap: 12,
        containerWidth: 3 * 200 + 2 * 12, // 624px - exact width for 3 slides
      };
    } else {
      return {
        slidesToShow: 1,
        slideWidth: 227, // Updated to your desired width
        gap: 0,
        containerWidth: 227,
      };
    }
  };

  const [config, setConfig] = useState(getConfig());

  useEffect(() => {
    const handleResize = () => {
      setConfig(getConfig());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Create extended array for infinite scrolling
  const createExtendedTemplates = () => {
    const copies = 5; // Multiple copies for smooth infinite scrolling
    return Array(copies).fill(templates).flat();
  };

  const extendedTemplates = createExtendedTemplates();
  const startOffset =
    Math.floor(extendedTemplates.length / 2) - Math.floor(templates.length / 2);

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToPrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (templateIndex) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const currentTemplateIndex =
      ((currentIndex % templates.length) + templates.length) % templates.length;
    const diff = templateIndex - currentTemplateIndex;

    let newIndex;
    if (Math.abs(diff) <= templates.length / 2) {
      newIndex = currentIndex + diff;
    } else if (diff > 0) {
      newIndex = currentIndex + diff - templates.length;
    } else {
      newIndex = currentIndex + diff + templates.length;
    }

    setCurrentIndex(newIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    setTouchEnd(null); // Reset touch end to avoid false swipes
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      goToNext(); // Swipe left = next slide
    }
    
    if (isRightSwipe) {
      goToPrev(); // Swipe right = previous slide
    }
  };

  // Infinite scroll reset logic
  useEffect(() => {
    if (!isTransitioning) {
      const threshold = templates.length;
      if (currentIndex >= threshold) {
        setTimeout(() => {
          setCurrentIndex(currentIndex - templates.length);
        }, 0);
      } else if (currentIndex < -threshold) {
        setTimeout(() => {
          setCurrentIndex(currentIndex + templates.length);
        }, 0);
      }
    }
  }, [currentIndex, isTransitioning, templates.length]);

  // Calculate transform for proper centering
  const getTransformValue = () => {
    const slideWidth = config.slideWidth + config.gap;
    const centerOffset = Math.floor(config.slidesToShow / 2);

    // Calculate the starting index of visible slides
    const visibleStartIndex = startOffset + currentIndex - centerOffset;
    const offset = visibleStartIndex * slideWidth;

    return `translateX(-${offset}px)`;
  };

  // Get current active template for dots
  const getCurrentTemplateIndex = () => {
    return (
      ((currentIndex % templates.length) + templates.length) % templates.length
    );
  };

  // Get center slide for highlighting - corrected logic
  const getCenterSlideIndex = () => {
    const centerOffset = Math.floor(config.slidesToShow / 2);
    const visibleStartIndex = startOffset + currentIndex - centerOffset;
    return visibleStartIndex + centerOffset;
  };

  return (
    <div className="bg-[#D2D5FF4D] lg:py-[80px] py-[40px] relative">
      <div className="container mx-auto px-6">
        <div>
          <h3 className="lg:text-[54px] text-[30px] leading-[150%] text-[#2b1845] font-bold lg:mb-[40px] mb-[20px] text-center">
            Explore the curated resume templates we've created for you
          </h3>
        </div>

        <div className="flex justify-center lg:py-[20px]">
          <div
            className="custom-carousel-container"
            style={{
              width: `${config.containerWidth}px`,
              maxWidth: `${config.containerWidth}px`, // Ensures exactly 5 cards show
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="custom-carousel-track"
              style={{
                transform: getTransformValue(),
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
            >
              {extendedTemplates.map((template, index) => {
                const centerIndex = getCenterSlideIndex();
                const isCenter = index === centerIndex;

                return (
                  <div
                    key={`${template.id}-${Math.floor(
                      index / templates.length
                    )}-${index % templates.length}`}
                    className={`custom-carousel-slide ${
                      isCenter ? "center-slide" : ""
                    }`}
                    onClick={() => {
                      if (!isCenter) {
                        const templateIndex =
                          (template.id - 1 + templates.length) %
                          templates.length;
                        goToSlide(templateIndex);
                      }
                    }}
                    style={{
                      width: `${config.slideWidth}px`,
                      marginRight:
                        index < extendedTemplates.length - 1
                          ? `${config.gap}px`
                          : "0",
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden group cursor-pointer h-[340px] w-[227px] lg:h-[338px] lg:w-[225px] md:h-[300px] md:w-[200px] md:my-[20px]">
                      {/* Remove the spacer div completely for mobile */}
                      <div className="h-[16px] hidden lg:block"></div>
                      <img
                        src={template.image}
                        alt={template.name}
                        className="rounded-xl shadow-lg w-full h-full object-cover absolute top-0 left-0"
                      />
                      <div className="template-name-overlay rounded-bl-xl rounded-br-xl">
                        {template.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="custom-dots">
          {templates.map((_, index) => (
            <button
              key={index}
              className={`custom-dot ${
                getCurrentTemplateIndex() === index ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CvTemplateSection;
