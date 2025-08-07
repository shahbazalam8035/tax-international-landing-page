import React from "react";

const SectionSix = () => {
  return (
    <div className="bg-white h-screen w-screen  flex flex-col justify-start items-center ">
      <div>
        <h1 className="text-[47px] font-poppins font-bold ">
          Hear what our clients and candidates think
        </h1>
        <div className="flex justify-center ">
          <p className="text-[16px] font-poppins w-4/6  text-center">
            Don't take our word for it, find out what our past clients and
            candidates have said about us, and why they chose TRX.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 w-full h-[534px] ">
        <div className="w-full h-full border-[2px] border-[#D9D9D9] rounded-lg ">
          <div className="flex flex-col  h-full items-center  justify-center gap-4">
            <h1 className="text-[#8440EE] text-[19px] font-semibold">Ben Watt</h1>
            <h1 className="font-poppins  text-[19px] font-semibold ">CEO of (Company name)</h1>
            <p className="font-poppins text-[16px]   ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
