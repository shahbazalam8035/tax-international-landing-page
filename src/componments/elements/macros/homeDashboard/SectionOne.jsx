import React from "react";
import trxStar from "../../../../assets/icons/trxStar.png";
import trxGif from '../../../../assets/gifs/texGif.gif'
import AnimationStar3 from '../../../../assets/icons/AnimationStar3.json'
import Lottie from 'lottie-react';
const SectionOne = () => {
  const style = {
    height: 2000
   
   
  };
  const style2 = {
    height: 400
   
   
  };
  
  return (
    <>
      <div className=" md:flex md:w-[762px] w-[700px] absolute  h-[762px] top-[-354px] left-[-356px] bg-custom-colour  ">
  
      </div>

      <div className="bg-[#341845]  md:h-[800px] h-screen  w-screen    md:flex items-center justify-between px-4  py-20  md:px-0 ">

        <div className="w-full md:w-1/2 md:h-screen h-1/2 flex  pt-14  justify-center items-center px-5">
          <div className=" w-full  xl:w-[647px]">
            <div className="md:flex    ">
              <h1 className="  text-[32px]  text-center md:text-start  md:text-[72px] text-white font-poppins font-bold">
                TRX
              </h1>
              <span className=" text-[48px] hidden md:block  md:text-[72px] text-white font-poppins ml-3">
                International
              </span>
              <h1 className=" md:hidden text-[32px]  text-center md:text-start  md:text-[72px] text-white font-poppins ">
              International
              </h1>
            </div>
            <p className="   text-center md:text-start font-poppins text-[16px] text-white">
              TRX is a leading nuclear recruitment company with a core focus on
              helping shape and implement a zero carbon future. Our in-depth
              proficiencies, knowledge of the industry alongside our
              demonstrated experience provides us with a strategic edge to offer
              highly customised services.
            </p>
          </div>
        </div>

        <div className="  hidden md:w-1/2 md:h-screen md:flex justify-center items-center  ">
          {/* <img src={trxStar} className="md:w-[791px] md:h-[781px] w-[360px]   " /> */}
          <Lottie animationData={AnimationStar3} style={style}   />
        </div>
        <div className=" w-full  md:hidden  flex justify-center items-center  ">
          {/* <img src={trxStar} className="md:w-[791px] md:h-[781px] w-[360px]   " /> */}
          <Lottie animationData={AnimationStar3} style={style2}   />
        </div>

      </div>
    </>
  );
};

export default SectionOne;
