import React from "react";
import candidatesGroup from "../../../../assets/icons/candidatesGroup.webp";
import candidateLeft from "../../../../assets/icons/candidateLeft.webp";
import candidateMiddle from "../../../../assets/icons/candidateMiddle.webp";
import candidateRight from "../../../../assets/icons/candidateRight.webp";

const SectionOne = () => {
  return (
    <>
      <div className=" w-[762px] absolute  h-[762px] top-[-354px] left-[-356px] bg-custom-colour "></div>
      <div className="bg-[#341845]  h-screen md:h-[850px] w-screen md:grid md:grid-cols-5 px-5 ">
        <div className="     hidden md:col-span-3 md:flex flex-col justify-center items-center gap-[15px] md:px-12 px-8  md:h-[850px]  ">
          <h1 className="font-poppins text-white  md:text-[47px] text-[33px] text-left ">
            We are always looking for great 
            <span className="font-bold"> nuclear talent </span>
          </h1>
          <p className="font-poppins text-white  text-[18px] md:text-left text-center">
            Since 2019, we have been supporting individuals secure new positions
            in the nuclear sector, drawing on our unparalleled expertise in the
            field.
          </p>
          <div className="md:hidden flex justify-center ">
            <img src={candidatesGroup} className="w-[224px] h-[159px]" alt="" />
          </div>
        </div>

        <div className=" md:hidden h-screen flex flex-col justify-between">
          <div className=" flex flex-col justify-center items-center gap-[15px] px-4 grow">
            <h1 className="font-poppins text-white text-[33px]  text-center">
              Exceptional openings available in the
              <span className="font-bold"> nuclear domain! </span>
            </h1>
            <p className="font-poppins text-white text-[18px]  text-center">
              Since 2019, we have been supporting individuals secure new
              positions in the nuclear sector, drawing on our unparalleled
              expertise in the field.
            </p>
          </div>
          <div className="md:hidden flex justify-center ">
            <img src={candidatesGroup} className="w-4/5 " alt="" />
          </div>
        </div>

        <div className="col-span-2  hidden md:grid grid-cols-3">
          
          <div className="flex flex-col justify-center  px-1">
            <img src={candidateLeft} alt="" />
          </div>

          <div className="flex flex-col justify-end  px-1 py-10">
            <img src={candidateMiddle} alt="" />
          </div>

          <div className="flex flex-col justify-center  px-1">
            <img src={candidateRight} alt="" />
          </div>

        </div>
      </div>
    </>
  );
};

export default SectionOne;
