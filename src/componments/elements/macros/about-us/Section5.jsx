import React from "react";
import ContactForm from "../ContactForm";

function Section5() {
  const [isOpenModel,setIsOpenModel] = React.useState(false);
  return (
    <div className="">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="flex flex-col gap-[20px] items-center">
          <h2 className="font-medium lg:text-[44px] text-[28px] leading-[120%] tracking-[-0.44px] text-[#7130FF] text-center">
            Together, We're Powering the Future of Nuclear
          </h2>
          <p className="font-semibold text-[18px] leading-[25.6px] tracking-[-0.32px] text-[#424242] text-center">
            As the demand for clean baseload power intensifies, TRX
            International remains firmly committed to advancing the role of
            nuclear energy—by empowering the people who make it possible.
          </p>
          <button
          onClick={()=>{setIsOpenModel(true)}}
          className="w-fit px-[55px] py-[20px] font-semibold text-[16px] leading-[120%] text-[#FFFFFF] bg-gradient-to-r from-[#864EFF] to-[#502F99] rounded-[50px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
            Contact Us
          </button>
        </div>
      </div>
      {isOpenModel && (
        <ContactForm
          setIsOpenModel={setIsOpenModel}
          isOpenModel={isOpenModel}
        />
      )}
    </div>
  );
}

export default Section5;
