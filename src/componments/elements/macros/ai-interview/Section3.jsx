import React, { useState, useEffect, useRef } from "react";
import TechnicalAssessmentIconNew from "../../../../assets/images/TechnicalAssessmentIconNew.svg";
import TechnicalAssessmentIconColoredNew from "../../../../assets/images/TechnicalAssessmentIconColoredNew.svg";
import CultureFitIcon from "../../../../assets/images/CultureFitIcon.svg";
import CultureFitIconColored from "../../../../assets/images/CultureFitIconColored.svg";
import RoleBasedScenariosIcon from "../../../../assets/images/RoleBasedScenariosIcon.svg";
import RoleBasedScenariosIconColored from "../../../../assets/images/RoleBasedScenariosIconColored.svg";
import Ellipse from "../../../../assets/images/Ellipse.svg";
import Section3Mobile from "./Section3Mobile";

const cards = [
  {
    title: "Technical Assessment",
    desc: "Explore how you've handled past situations, teamwork, and challenges. Dive into real-world problem-solving abilities, collaboration, and relevant expertise.",
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

// Ellipse configuration for positioning cards
const ellipse = {
  cx: 500, // center x
  cy: 140, // center y
  rx: 573, // radius x
  ry: 30, // radius y
};

// Separate ellipse for dots - positioned on the actual elliptical line
const dotEllipse = {
  cx: 500, // center x
  cy: 130, // center y
  rx: 700, // radius x
  ry: 30, // radius y
};

function getEllipsePos(index, total, offset = 0) {
  const angle = ((index + offset) / total) * 2 * Math.PI + Math.PI / 2;
  return {
    left: ellipse.cx + ellipse.rx * Math.cos(angle),
    top: ellipse.cy + ellipse.ry * Math.sin(angle),
  };
}

function getDotPos(index, totalCards, offset = 0) {
  // Same calculation but for dots on the elliptical line
  const angle = ((index + offset) / totalCards) * 2 * Math.PI + Math.PI / 2;
  return {
    left: dotEllipse.cx + dotEllipse.rx * Math.cos(angle),
    top: dotEllipse.cy + dotEllipse.ry * Math.sin(angle),
  };
}

function Section3() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % cards.length);
    }, 3000);
  };

  const handleManualChange = (index) => {
    setActive(index);
    clearInterval(intervalRef.current);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 2000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="w-full flex justify-center bg-[#ECEDFE]">
      <div className="container mx-auto px-6 w-full flex justify-center lg:py-[80px] py-[40px] overflow-hidden ">
        <div className="w-[90%] flex flex-col items-center gap-[0px]">
          <div className="flex flex-col items-center gap-[20px]">
            <h1 className=" font-[600] text-[30px] md:text-[55px] leading-[150%] text-[#2B1845] text-center bg-gradient-to-r from-[#864EFF] to-[#502F99] text-transparent bg-clip-text">
              The 360° Hiring Lens
            </h1>
            <p className=" font-[400] text-[18px] md:text-[18px] leading-[150%] text-[#1B1B1B] text-center">
              Our process ensures a comprehensive understanding of every{" "}
              <br className="hidden md:block" />
              candidate—technically, behaviorally, and culturally.
            </p>
          </div>

          {/*--- mobile carousel ---*/}
          <Section3Mobile />

          {/* Desktop - Elliptical Carousel */}
          <div className="relative w-full max-w-[1000px] h-[400px] hidden lg:block">
            <img
              src={Ellipse}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rotate-[-1.5deg]"
              alt=""
            />

            {/* Cards */}
            {cards.map((card, i) => {
              const pos = getEllipsePos(i, cards.length, cards.length - active);
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className="flex flex-col items-start justify-center overflow-hidden"
                  style={{
                    position: "absolute",
                    left: pos.left - (isActive ? 200 : 120),
                    top: pos.top - (isActive ? 80 : 60),
                    width: isActive ? 400 : 240,
                    height: isActive ? 170 : 120,
                    background: "#FFFFFF",
                    borderRadius: 8,
                    boxShadow: isActive
                      ? "0px 30px 45px -30px rgba(50, 50, 93, 0.25), 0px 18px 36px -18px rgba(0, 0, 0, 0.1)"
                      : "",
                    zIndex: isActive ? 30 : 20,
                    transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    padding: isActive ? 24 : 10,
                    cursor: isActive ? "default" : "pointer",
                    border: isActive ? "1px solid #D9D9D9" : "",
                  }}
                  onClick={() => handleManualChange(i)}
                >
                  <div className="w-[100%] h-[100%] flex flex-col justify-center gap-[5px]">
                    <h3
                      className=" font-[600] leading-[150%] text-[#1B1B1B]"
                      style={{
                        fontSize: isActive ? 18 : 10,
                        opacity: isActive ? 1 : 0.85,
                        transition:
                          "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        transform: `translateY(${isActive ? 0 : 2}px) scale(${
                          isActive ? 1 : 0.98
                        })`,
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                      }}
                    >
                      {card?.title}
                    </h3>
                    <p
                      className=" font-[400] leading-[150%] text-[#7B7B7B]"
                      style={{
                        fontSize: isActive ? 16 : 9,
                        opacity: isActive ? 1 : 0.7,
                        transition:
                          "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        transform: `translateY(${isActive ? 0 : 3}px) scale(${
                          isActive ? 1 : 0.96
                        })`,
                        transitionDelay: isActive ? "0.1s" : "0s",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                        textRendering: "optimizeLegibility",
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                      }}
                    >
                      {card?.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Dots - positioned below the cards */}
            {cards.map((card, i) => {
              const pos = getEllipsePos(i, cards.length, cards.length - active);
              const isActive = i === active;
              return (
                <div
                  key={`dot-${i}`}
                  style={{
                    position: "absolute",
                    left: pos.left - 8,
                    top: pos.top + (isActive ? 80 : 60) + 20, // Position below the cards
                    zIndex: 40, // Higher than cards to appear on top
                    transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    width: active === i ? 16 : 10,
                    height: active === i ? 16 : 10,
                    background: "#d9d9d9",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={() => handleManualChange(i)}
                />
              );
            })}
          </div>

          {/* Icon Buttons */}
          <div className="hidden lg:flex gap-[55px] rounded-[8px] p-5 border border-[#D9D9D9] bg-white">
            {cards.map((card, i) => (
              <div
                key={i}
                onClick={() => handleManualChange(i)}
                className="cursor-pointer transition-all duration-300 ease-out min-h-[30px] min-w-[30px]"
              >
                <img
                  src={active === i ? card?.activeIcon : card?.icon}
                  alt={card?.title}
                  className="transition-all duration-300 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
