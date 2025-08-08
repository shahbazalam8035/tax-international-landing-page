import React from "react";
import MockInterviewGif from "../../../../assets/images/MockInterviewGif.gif";
import ScenarioImage from "../../../../assets/images/ScenarioImage.png";
import ConfidenceImage from "../../../../assets/images/ConfidenceImage.png";
import FeedbackImage from "../../../../assets/images/FeedbackImage.png";
import squarePurpleIcon from "../../../../assets/images/Background.svg";

function Section2() {
  return (
    <div className=" bg-[#FFFFFF]">
      <div className="container mx-auto px-6 py-[80px]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-[10px] mb-12">
            <h1 className="font-[600] lg:text-[48px] text-[30px] leading-[120%] text-[#2B1845] text-center">
              <span className="bg-gradient-to-r from-[#864EFF] to-[#502F99] bg-clip-text text-transparent">
                Mock Interviews
              </span>{" "}
              That Build Comfort and Clarity
            </h1>
            <p className="font-normal lg:text-[20px] text-[18px] leading-[150%] text-[#424242] text-center">
              Let nuclear candidates experience simulation-based interviews
              designed for real-time thinking, not memorized answers. These
              interviews are powered by our partner platform —{" "}
              <span className="font-semibold">avua</span> — optimized for
              real-time, high-stakes simulation experiences.
            </p>
          </div>
          <div className="flex justify-between gap-[48px] flex-col lg:flex-row mb-5">
            <div className="flex-[0.55] max-w-[650px] flex justify-center items-center p-6 border border-[#6B3BABB2] relative">
           <img src={squarePurpleIcon} alt="" className="absolute -top-1 -left-1" />
           <img src={squarePurpleIcon} alt="" className="absolute -top-1 -right-1" />
           <img src={squarePurpleIcon} alt="" className="absolute -bottom-1 -left-1" />
           <img src={squarePurpleIcon} alt="" className="absolute -bottom-1 -right-1" />

            <img
              src={MockInterviewGif}
              alt=""
              className=""
            />
            </div>
            <div className="flex-[0.45] space-y-6">
              {/* card 1 */}
              <div className="lg:bg-[#ffffff] bg-[#f8f9fe]  flex gap-5 items-center p-5 rounded-[16px] border border-[#D9D9D9] hover:border-[#864EFF] hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <img src={ScenarioImage} alt="" className="w-[50px] h-[50px]" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[18px] leading-[150%] text-[#1B1B1B]">
                    Scenario-Based Questions
                  </h3>
                  <p className="font-normal text-[16px] leading-[150%] text-[#7B7B7B]">
                    From shift failures to radiation incidents — we test more
                    than textbook knowledge.
                  </p>
                </div>
              </div>

              {/* card 2 */}
              <div className="lg:bg-[#ffffff] bg-[#f8f9fe]  flex gap-5 items-center p-5 rounded-[16px] border border-[#D9D9D9] hover:border-[#864EFF] hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <img
                  src={ConfidenceImage}
                  alt=""
                  className="w-[50px] h-[50px]"
                />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[18px] leading-[150%] text-[#1B1B1B]">
                    Confidence Through Clarity
                  </h3>
                  <p className="font-normal text-[16px] leading-[150%] text-[#7B7B7B]">
                    Familiarity with format leads to stronger performance and
                    more authentic responses in the actual interview.
                  </p>
                </div>
              </div>

              {/* card 3 */}
              <div className="lg:bg-[#ffffff] bg-[#f8f9fe]  flex gap-5 items-center p-5 rounded-[16px] border border-[#D9D9D9] hover:border-[#864EFF] hover:scale-[1.02] hover:shadow-[0_10px_25px_rgba(0,0,0,0.1)] transition-all duration-300 ease-in-out">
                <img src={FeedbackImage} alt="" className="w-[50px] h-[50px]" />
                <div className="space-y-2">
                  <h3 className="font-semibold text-[18px] leading-[150%] text-[#1B1B1B]">
                    Real-Time Feedback
                  </h3>
                  <p className="font-normal text-[16px] leading-[150%] text-[#7B7B7B]">
                    Get reports on how candidates handle responsibility,
                    escalation, and SOP alignment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
