import React from "react";
import talentDatabase from "../../../../assets/icons/talentDatabase.png";

const SectionOne = () => {
  return (
    <>
      <div className=" w-[762px] absolute  h-[762px] top-[-354px] left-[-356px] bg-custom-colour "></div>
      <div className="bg-[#341845]  h-screen xl:h-[850px] w-screen flex flex-col items-center justify-center  xl:gap-[40px] gap-[20px] ">
        <div className="xl:w-2/3  w-full flex flex-col gap-[15px] items-center mt-12 xl:px-4  px-6">
          <h1 className="font-poppins text-white text-center xl:text-[72px] text-[33px] xl:leading-[87px] leading-[49px]">
            Connect with our  <span className="font-bold">Nuclear talent database</span>
          </h1>
          <p className="font-poppins text-white text-center text-[16px] leading-[24px]  ">
            We only focus on the nuclear sector, providing us with unmatched
            industry knowledge, a global network of candidates, and cutting-edge
            resources for sourcing the right talent for the right position.
          </p>
        </div>

        <div className="px-6 xl:px-0">
          <img src={talentDatabase}   alt="" />
        </div>
      </div>
    </>
  );
};

export default SectionOne;
