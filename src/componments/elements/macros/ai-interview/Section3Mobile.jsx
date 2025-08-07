import React, { useState, useEffect } from "react";
import TechnicalAssessmentIconNew from "../../../../assets/images/TechnicalAssessmentIconNew.svg";
import TechnicalAssessmentIconColoredNew from "../../../../assets/images/TechnicalAssessmentIconColoredNew.svg";
import CultureFitIcon from "../../../../assets/images/CultureFitIcon.svg";
import CultureFitIconColored from "../../../../assets/images/CultureFitIconColored.svg";
import RoleBasedScenariosIcon from "../../../../assets/images/RoleBasedScenariosIcon.svg";
import RoleBasedScenariosIconColored from "../../../../assets/images/RoleBasedScenariosIconColored.svg";

const Section3Mobile = () => {
  const cards = [
    {
      title: "Technical Assessment",
      desc: "Explore how you’ve handled past situations, teamwork, and challenges. Dive into real-world problem-solving abilities, collaboration, and relevant expertise.",
      icon: TechnicalAssessmentIconNew,
      activeIcon: TechnicalAssessmentIconColoredNew,
    },
    {
      title: "Culture Fit",
      desc: "Understand your values, working style, and alignment with company culture. Ensure the candidate thrives within your team dynamics and long-term vision.",
      icon: CultureFitIcon,
      activeIcon: CultureFitIconColored,
    },
    {
      title: "Role-Based Scenarios",
      desc: "Assess your decision-making in hypothetical, job-relevant scenarios. Understand how candidates think under pressure and how they align with role expectations.",
      icon: RoleBasedScenariosIcon,
      activeIcon: RoleBasedScenariosIconColored,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
      setIsTransitioning(false);
    }, 150);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
      setIsTransitioning(false);
    }, 150);
  };

  const goToSlide = (index) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  return (
    <div className="lg:hidden w-full max-w-md mx-auto">
      {/* Carousel Container */}
      <div className="relative h-[290px] overflow-hidden">
        <div className="flex items-center justify-center h-full">
          {cards.map((item, index) => {
            const isActive = index === activeIndex;
            const isPrev =
              index === (activeIndex - 1 + cards.length) % cards.length;
            const isNext = index === (activeIndex + 1) % cards.length;

            let translateX = "100%";
            let opacity = 0;
            let scale = 0.8;

            if (isActive) {
              translateX = "0%";
              opacity = 1;
              scale = 1;
            } else if (isPrev) {
              translateX = "-100%";
              opacity = 0;
              scale = 0.8;
            } else if (isNext) {
              translateX = "100%";
              opacity = 0;
              scale = 0.8;
            }

            return (
              <div
                key={index}
                className={`absolute min-w-[300px] p-5 bg-[#F4EEFF] border border-[#D9D9D9] rounded-[8px] transition-all duration-500 ease-in-out ${
                  isTransitioning ? "duration-150" : "duration-500"
                }`}
                style={{
                  boxShadow:
                    "0px 30px 45px -30px rgba(50, 50, 93, 0.25), 0px 18px 36px -18px rgba(0, 0, 0, 0.1)",
                  transform: `translateX(${translateX}) scale(${scale})`,
                  opacity: opacity,
                  zIndex: isActive ? 10 : 5,
                }}
              >
                <div className=" flex flex-col">
                  <h3
                    className={`font-poppins font-[600] text-[18px] leading-[150%] text-[#1B1B1B]`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`font-poppins font-[400] text-[16px] leading-[150%] text-[#7B7B7B]`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-[40px] rounded-[8px] p-4 border border-[#D9D9D9] bg-white mt-4 w-fit mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            onClick={() => goToSlide(i)}
            className="cursor-pointer flex items-center justify-center"
          >
            <img
              src={activeIndex === i ? card?.activeIcon : card?.icon}
              alt={card?.title}
              className={`transition-all duration-300 ${
                activeIndex === i ? "scale-110" : "opacity-60"
              }`}
              style={{ width: 32, height: 32 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3Mobile;
