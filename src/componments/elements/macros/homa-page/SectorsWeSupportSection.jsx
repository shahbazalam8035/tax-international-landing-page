import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image4 from "../../../../assets/images/Underground.png";
import image5 from "../../../../assets/images/Underground1.png";
import image3 from "../../../../assets/images/Underground2.png";
import image1 from "../../../../assets/images/Underground3.png";
import image6 from "../../../../assets/images/Underground4.png";
import image2 from "../../../../assets/images/Underground5.png";

const cards = [
  { id: 0, img: image1, text: "Large new build" },
  { id: 1, img: image2, text: "Fusion" },
  { id: 2, img: image3, text: "SMR & MMR " },
  { id: 3, img: image4, text: "Radioactive Waste Management" },
  { id: 4, img: image5, text: "Decommissioning" },
  { id: 5, img: image6, text: "Fuel Handling" },
];

const SectorsWeSupportSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  // Slider settings for mobile
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F8F5FF]">
      <div className="py-[40px] lg:py-[80px] px-6 container mx-auto ">
        <div className="text-center">
          <h2 className="text-[#502F99] text-[30px] lg:text-[42px] leading-[150%] font-semibold mb-3 lg:mb-0">
            Sectors We Support
          </h2>
          <p className="text-[#646868] text-[18px] leading-[150%]">
            We currently focus on six critical areas of the nuclear energy
            industry:
          </p>
        </div>

        {isMobile ? (
          // Mobile Screen with Slider
          <div className="mt-3 case-studies-slider">
            <Slider {...sliderSettings}>
              {cards.map((card, index) => (
                <div key={card.id} className="px-2">
                  <div className="relative">
                    <img
                      src={card.img}
                      alt={card.text}
                      className="w-full h-[250px] object-cover"
                    />
                    <p className="absolute bottom-0 left-0 text-white text-[14px] font-bold leading-[150%] px-4 py-3">
                      {card.text}
                      {index === 2 && (
                        <span className="text-white text-[12px] leading-[150%] block mt-1">
                          (Small & Micro Modular Reactors)
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          //  Desktop Screen
          <div className="w-full flex justify-center items-center mt-[50px]">
            <div className="w-full max-w-[1280px] flex justify-between items-center gap-4 px-[24px]">
              {cards.map((card, index) => {
                const isHovered = hoveredIndex === index;
                const isFirstByDefault = hoveredIndex === null && index === 0;

                return (
                  <div className="relative" key={card.id}>
                    <img
                      src={card.img}
                      alt=""
                      onMouseEnter={() => setHoveredIndex(index)}
                      className={`object-cover border-2 border-[#d9d9d9] transition-all duration-500 ease-in-out`}
                      style={{
                        height: "250px",
                        width:
                          isHovered || isFirstByDefault ? "300px" : "167px",
                      }}
                    />

                    {/* Overlay */}
                    {!(isHovered || isFirstByDefault) && (
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(0deg, #000000, #000000), linear-gradient(180deg, rgba(0, 0, 0, 0) 42.19%, rgba(0, 0, 0, 0.5) 100%)",
                          opacity: 0.6,
                          pointerEvents: "none", // Allow interactions to pass through
                          transition: "opacity 0.5s ease-in-out",
                        }}
                      />
                    )}

                    <p className="absolute bottom-0 left-0 text-[#ffffff] text-[17px] leading-[150%] px-[13px] py-[8px] transition-all duration-500 ease-in-out">
                      {card.text}
                      {index === 2 && (
                        <span className="text-[#ffffff] text-[14px] leading-[150%] inline-block transition-all duration-500 ease-in-out">
                          (Small & Micro Modular Reactors)
                        </span>
                      )}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SectorsWeSupportSection;
