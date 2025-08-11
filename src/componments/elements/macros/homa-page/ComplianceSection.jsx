import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import lottieAnimation from "../../../../assets/images/lotties/trx-home-hero-section.json";
import bgImage from "../../../../assets/images/compliance-bg-img.png";

const animationData = [
  {
    title: "Compliance",
    desc: " Full adherence to industry regulations, certifications, and workforce standards, mitigating risk and safeguarding your operations.",
  },
  {
    title: "Training & Development",
    desc: " Tailored programs that keep teams qualified, safety-focused, and ready to meet evolving industry demands.",
  },
  {
    title: "Consulting",
    desc: " Workforce strategy, market intelligence, and project-specific guidance designed to help you stay competitive in a regulated and evolving landscape.",
  },
  {
    title: "Talent Acquisition",
    desc: " Connecting top-tier professionals with leading nuclear energy projects, ensuring precision matches across engineering, safety, operations, and leadership roles.",
  },
  {
    title: "Payroll",
    desc: " Streamlined, compliant payroll services tailored to the complexities of the nuclear sector. Focus stays on operations while financial accuracy is handled with care.",
  },
  {
    title: "Onboarding Support",
    desc: " From pre-screening to site-readiness, onboarding is managed with speed, structure, and strict attention to nuclear compliance.",
  },
];

const ComplianceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === animationData.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
      
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const currentItem = animationData[currentIndex];

  return (
    <div className="">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="flex mx-auto lg:flex-row flex-col lg:gap-[40px] gap-[20px] ">
          <div className="lg:flex-[0.4] flex-1">
            <div className="lg:hidden block lg:text-start text-center lg:mb-[20px] h-[80px] overflow-hidden">
              <div 
                className={`transition-all duration-1000 ease-in-out ${
                  isAnimating 
                    ? 'transform translate-y-[-100%] opacity-0' 
                    : 'transform translate-y-0 opacity-100'
                }`}
              >
                <p className="lg:text-[56px] text-[30px] text-[#2b1845] leading-[120%]">
                  {currentItem.title}
                </p>
              </div>
            </div>
            <Lottie
              animationData={lottieAnimation}
              loop={true}
              className="lg:h-[300px] h-[250px]"
            />
          </div>
          <div className="lg:flex-[0.6] flex-1 flex flex-col justify-center relative">
            <div className="absolute lg:top-[50px]">
              <img
                src={bgImage}
                alt=""
                className=" lg:w-[600px] lg:h-[300px] object-cover "
              />
            </div>
            <div className="lg:block hidden h-[80px] overflow-hidden">
              <div 
                className={`transition-all duration-1000 ease-in-out ${
                  isAnimating 
                    ? 'transform opacity-0' 
                    : 'transform opacity-100'
                }`}
              >
                <p className="text-[56px] text-[#2b1845] leading-[120%]">
                  {currentItem.title}
                </p>
              </div>
            </div>
            <div className="mt-4 h-[120px] lg:h-[80px] overflow-hidden">
              <div 
                className={`transition-all duration-1000 ease-in-out ${
                  isAnimating 
                    ? 'transform opacity-0' 
                    : 'transform opacity-100'
                }`}
              >
                <p className="max-w-[900px] text-[18px] text-[#424242] leading-[150%] lg:text-start text-center">
                  {currentItem.desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceSection;