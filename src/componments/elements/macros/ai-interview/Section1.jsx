import React, { useState, useEffect, useRef } from "react";
import ReportUnpaidVersionGif from "../../../../assets/images/ReportUnpaidVersionGif.gif";
import AiInterviewHeroSectionImage from "../../../../assets/images/AiInterviewHeroSectionImage.png";
import ContactForm from "../ContactForm";

function Section1() {
  // Animated percentage states
  const [screening, setScreening] = useState(0);
  const [matching, setMatching] = useState(0);
  const [costs, setCosts] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isOpenModel,setIsOpenModel] = useState(false);

  const statsRef = useRef(null);

  // Smooth animation function using requestAnimationFrame
  const animateValue = (setter, startValue, endValue, duration) => {
    const startTime = performance.now();
    const valueDifference = endValue - startValue;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use easeOutCubic for smooth deceleration
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.round(
        startValue + valueDifference * easedProgress
      );

      setter(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Intersection Observer for viewport detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start animations with slight delays for staggered effect
            setTimeout(() => animateValue(setScreening, 0, 70, 3000), 100);
            setTimeout(() => animateValue(setMatching, 0, 86, 3000), 300);
            setTimeout(() => animateValue(setCosts, 0, 82, 3000), 500);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element is fully visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <>
    <div className="container mx-auto lg:pt-[160px] pt-[140px] lg:pb-[80px] pb-[40px] px-6 w-full flex flex-col gap-[50px] items-center mt-[-80px]">
      {/* Hero Section Main */}
      <div className="flex justify-center">
        <div className="w-full flex flex-col lg:flex-row gap-[40px]">
          {/* Left Side */}
          <div className="flex flex-col items-center lg:items-start flex-[0.55] justify-center text-center lg:text-left">
            {/* Title */}
            <h1 className="font-[700] lg:text-[48px] text-[30px] leading-[120%] text-[#2B1845] lg:px-0 px-[30px] ">
              Why <span className="text-[#864EFFCC] lg:text-[#2b1845]">Interview Manually</span>  When AI Can Do It for You?
            </h1>

            {/* Subtitle */}
            <p className="font-[400] text-[18px] leading-[150%] text-[#424242] mt-[20px]">
              <span className="font-bold text-[#6A2CBE]">
                Hiring in the nuclear sector demands precision.
              </span>{" "}
              <br />
              Discover top talent faster with{" "}
              <span className="font-bold text-[#323232]">
                avua’s AI-driven interview
              </span>
              solution built specifically for complex, high-stakes nuclear roles
              — from operations and commissioning to safety and maintenance. Our
              simulations replicate real-world nuclear scenarios, helping you
              assess candidate fit faster and more effectively.
            </p>

            {/* Buttons */}
            <div className="w-fit flex flex-col lg:flex-row gap-[15px] mt-[30px]">
              {/* Book a Demo Button */}
              <button 
              onClick={()=>{setIsOpenModel(true)}}
              className="font-[500] md:font-[600] text-[16px] leading-[120%] text-[#FFFFFF] rounded-[50px] bg-gradient-to-r from-[#6B3BAB] to-[#2B1845] px-[40px] md:px-[45px] py-[15px] md:py-[20px] hover:scale-105 transition-all duration-200 ease-in-out">
                <p>Book a Demo</p>
              </button>

              {/* Try SmartHire Button */}
              <button
                onClick={() => navigate("/employer-sign-up")}
                className="font-[500] md:font-[600] text-[16px] leading-[120%] text-[#2B1845] rounded-[50px] border border-[#2B1845]  px-[40px] md:px-[45px] py-[15px] md:py-[20px] hover:scale-105 transition-all duration-200 ease-in-out"
              >
                <p>Try SmartHire</p>
              </button>
            </div>
            <p className="font-[400] text-[14px] leading-[120%] text-[#8A8A8A] mt-[20px]">
              You'll be redirected to our partner avua’s SmartHire page
            </p>
          </div>

          {/* Right Side */}
          <div className="flex-[0.45] flex items-center">
            <div className=" shadow-lg rounded-[15px] p-3 bg-white">
              <img
                src={ReportUnpaidVersionGif}
                // src={AiInterviewHeroSectionImage}
                alt="SmartHire Questions Image"
                className="w-full object-cover border border-[#d9d9d9] rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section - with ref for intersection observer */}
      <div ref={statsRef} className="flex gap-[30px] flex-col lg:flex-row">
        <div
          className="relative flex flex-col gap-[15px] my-[15px] bg-[#FFFFFF] rounded-[16px] border-[3px] border-[#FFFFFF] p-5 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out
"
          style={{
            boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h2 className="font-[700] lg:text-[44px] text-[30px] leading-[150%] text-[#2B1845]">
            {screening}%
          </h2>
          <p className="font-[400] text-[18px] leading-[150%] text-[#424242]">
            of hiring teams report faster candidate screening by leveraging AI
            interviews.
          </p>
        </div>

        <div
          className="relative flex flex-col justify-evenly gap-[15px] my-[15px] bg-[#FFFFFF] rounded-[16px] border-[3px] border-[#FFFFFF] p-5 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out
"
          style={{
            boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h2 className=" font-[700] lg:text-[44px] text-[30px] leading-[150%] text-[#2B1845]">
            {matching}%
          </h2>
          <p className=" font-[400] text-[18px] leading-[150%] text-[#424242]">
            boost in role-to-candidate matching accuracy through AI-driven
            evaluations.
          </p>
        </div>

        <div
          className="relative flex flex-col justify-evenly gap-[15px] my-[15px] bg-[#FFFFFF] rounded-[16px] border-[3px] border-[#FFFFFF] p-5 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out
"
          style={{
            boxShadow: "0px 10px 30px 0px rgba(0, 0, 0, 0.15)",
          }}
        >
          <h2 className=" font-[700] lg:text-[44px] text-[30px] leading-[150%] text-[#2B1845]">
            {costs}%
          </h2>
          <p className=" font-[400] text-[18px] leading-[150%] text-[#424242]">
            reduction in hiring costs achieved by using AI for screening and
            shortlisting.
          </p>
        </div>
      </div>
    </div>
    {isOpenModel && (
        <ContactForm
          setIsOpenModel={setIsOpenModel}
          isOpenModel={isOpenModel}
        />
      )}
    </>
  );
}

export default Section1;
