import React, { useState, useEffect, useRef } from "react";
// import "./styles/heroSection.css";
import HeroFrameFrontImage from "../../../../assets/images/HeroFrameFront.png"
import HeroFrameBackImage from "../../../../assets/images/HeroFrameBack.png"
import { Navigate, useNavigate } from "react-router-dom";

const HeroSection = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const navigate = useNavigate();

    const widgetRef = useRef(null);

    useEffect(() => {
        if (window.Trustpilot) {
            window.Trustpilot.loadFromElement(widgetRef.current, true);
        }
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsFlipped((prev) => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    <script type="text/javascript" src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js" async></script>


    return (
     <div className="bg-[#f6f7ff] mt-[-80px]">
         <div
        className=" container mx-auto pt-[140px] lg:h-[800px] flex justify-center items-start bg-cover bg-center   "
      >
        <div className="w-full  flex flex-col lg:flex-row items-center lg:gap-8 gap-0  lg:pb-[10px] pb-[30px] lg:overflow-visible overflow-hidden">
          {/* Left Column */}
          <div className="w-full lg:w-1/2.5 flex flex-col items-start px-6">
            <h1 className="text-[30px] lg:text-[55px] font-[600] leading-[120%] tracking-[0%] text-[#2B1845] text-center sm:text-left">
            Applying for jobs but not receiving any responses? It's not you, it's your CV
            </h1>
            <p className="lg:text-[18px] text-[16px] font-[400] leading-[150%] text-[#424242] tracking-[0%] mt-4 text-center md:text-left py-[10px]">
            96% of CVs are ignored. Be in the 4% that gets noticed.
            </p>
            <div className="md:ml-[-30px] flex justify-center md:justify-start items-center w-full">
              <div
                ref={widgetRef}
                class="trustpilot-widget"
                data-locale="en-US"
                data-template-id="5419b637fa0340045cd0c936"
                data-businessunit-id="65421604e9710b8d0403b398"
                data-style-height="20px"
                data-style-width="100%"
              >
                <a
                  href="https://www.trustpilot.com/review/avua.com"
                  target="_blank"
                  rel="noopener"
                >
                  Trustpilot
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto my-[30px]">
              <a
                href="https://avua.online/applicant/resume-builder?scrollTo=cv-upload" target="blank"
        className=" p-[20px] rounded-[50px] text-center font-[600] text-[16px] leading-[120%] bg-gradient-to-r from-[#6B3BAB] to-[#2B1845] text-[#FFFFFF]"
              >
                Get Your Free Resume Score
              </a>
              <a
              href="https://avua.com/applicant/growth-plan/build-resume" target="blank"
                className="w-full sm:w-[200px] h-[50px] sm:h-[59px] 
    rounded-[50px]  text-base flex items-center 
    justify-center text-[16px]     font-[500] md:font-[600] leading-[120%] 
    border border-[#2B1845] 
    text-[#2B1845] btn"
              >
                <span>Build Your Resume</span>
              </a>
            </div>
            <p className="text-[14px] leading-[120%] text-[#8a8a8a] text-center">This will take you to our partner’s page to analyze your CV.</p>
          </div>

          {/* Right Column - Resume Flip Animation */}
          <div className="w-full lg:w-[82%] flex justify-center md:mt-0 mt-[30px] px-[20px] ">
            <div
              className="
            w-full
            max-w-[58rem]
            h-[340px]
            sm:h-[500px]
            [perspective:700px]
            overflow-visible
          "
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
                  transform: isFlipped
                    ? "rotateY(-180deg) translateX(-30px) scale(1.2)"
                    : "rotateY(0deg) translateX(20px) scale(1.1)",
                }}
              >
                {/* Front Side */}
                <div
                  style={{
                    position: "absolute",
                    right: "20px",
                    width: "100%",
                    top: "8px",
                    height: "100%",
                    backfaceVisibility: "hidden",
                    overflow: "visible",
                  }}
                >
                  <img
                    src={HeroFrameFrontImage}
                    alt="Resume Preview"
                    className="
    w-full
    h-full
    object-contain
    drop-shadow-[0px_10px_10px_rgba(0,0,0,0.2)]
    pr-[5px] md:pr-0
    md:mt-[10px] "
                  />
                </div>

                {/* Back Side */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    left: "5px",
                    bottom: "3px",
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    overflow: "visible",
                  }}
                >
                  <img
                    src={HeroFrameBackImage}
                    alt="Resume Back"
                    className="  w-full h-full  object-contain drop-shadow-[0px_10px_10px_rgba(0,0,0,0.2)] pr-[45px] md:pr-0  md:mt-[40px] "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    );
};

export default HeroSection;
