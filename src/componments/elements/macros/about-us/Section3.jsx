import React from "react";
import WhyTRXInternationImage from "../../../../assets/images/WhyTRXInternationImage.png";

function Section3() {
  return (
    <div className="bg-[#FFFFFF] rounded-[20px] flex justify-center">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="flex lg:gap-[50px] gap-6 lg:flex-row flex-col  ">
          <div className="flex-[0.5] flex flex-col items-center gap-[5px]">
            <div>
            <h2 className="w-full font-medium lg:text-[44px] text-[28px] leading-[120%] tracking-[-0.44px] text-[#7130FF] text-center">
              Why TRX?
            </h2>
            </div>
            <img src={WhyTRXInternationImage} alt="" className="lg:h-[516px] h-auto" />
          </div>
          <div className="flex-[0.5]">
            <ul>
              <li className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] rounded-[12px] py-[25px] px-[25px] bg-[#EEEEFF] lg:mb-3 mb-4">
                <span className="font-semibold">Exclusive Nuclear Focus</span>:
                We understand the sector inside and out—from regulation to
                reactor design.
              </li>
              <li className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] rounded-[12px] py-[25px] px-[25px] bg-[#EEEEFF] lg:mb-3 mb-5">
                <span className="font-semibold">Global Talent Network</span>:
                Thousands of qualified candidates with active security
                clearances, nuclear certifications, and global project
                experience.
              </li>
              <li className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] rounded-[12px] py-[25px] px-[25px] bg-[#EEEEFF] lg:mb-3 mb-5">
                <span className="font-semibold">Proven Track Record</span>:
                Successful delivery of permanent, contract, and executive hires
                across Europe, North America, the Middle East, and Asia.
              </li>
              <li className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] rounded-[12px] py-[25px] px-[25px] bg-[#EEEEFF] lg:mb-3 mb-5">
                <span className="font-semibold">Compliance-Led Approach</span>:
                All services are underpinned by ISO 9001-aligned quality
                frameworks and robust candidate vetting processes.
              </li>
              <li className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] rounded-[12px] py-[20px] px-[25px] bg-[#EEEEFF]">
                <span className="font-semibold">
                  Consultative Service Model
                </span>
                : We partner with clients as an extension of their
                team—proactively solving hiring challenges with speed,
                precision, and discretion.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
