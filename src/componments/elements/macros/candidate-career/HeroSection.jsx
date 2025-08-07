import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import avuaLogo from "../../../../assets/images/avua-logo.svg"
import Lottie from 'lottie-react';
import worldAnimations from "../../../../assets/images/lotties/candidate-hero-section-world.json"


const HeroSection = () => {
  return (
    <div className="relative bg-[#F6F7FF] overflow-hidden mt-[-80px]">
      {/* Content */}
      <div className="relative container mx-auto px-[24px] lg:pt-[140px] pt-[140px]  lg:pb-[80px] pb-[40px]">
        <div className="flex w-full flex-col lg:flex-row">
          <div className="flex-[0.5] lg:p-[40px]">
            <h1 className="lg:text-[56px] text-[30px] leading-[120%] text-[#2b1845] font-bold mb-[20px] text-center lg:text-start">
              Supporting Nuclear Professionals at Every Stage
            </h1>
            <div className="lg:pr-[20px]">
              <p className="text-[#424242] text-[18px] leading-[120%] mb-[20px] lg:text-start text-center">
                At TRX, we specialise in placing highly skilled professionals
                across the nuclear industry. From operational support to project
                delivery and decommissioning, we’re committed to providing a
                recruitment experience that is efficient, informed, and tailored
                to your career goals.
              </p>
            </div>
          </div>

          <div className="flex-[0.5] lg:mt-[-30px]">
          <Lottie animationData={worldAnimations} loop={true} />
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col justify-between bg-gradient-to-r from-[#6B3BAB] to-[#2b1845] rounded-xl lg:px-[40px] lg:py-[20px] px-[20px] py-[20px] gap-5">
          <div className='space-y-[10px]'>
            <img src={avuaLogo} alt="" />
            <p className='lg:text-[24px] text-[20px] leading-[120%] text-[#FFFFFF] lg:font-bold'>Applying for a job but not hearing back? It's not you, it's your CV</p>
          </div>
          <div className='max-w-[342ppx] flex gap-[10px] items-center justify-between bg-gradient-to-r from-[#FFFFFF66] to-[#FFFFFF33] border-[#d9d9d9] border rounded-md p-[10px] text-[#E0E0E0]'>
            <div className=''>
            <p>Explore more</p>
            <p>Check our partners page</p>
            </div>
            <div><BsArrowUpRightCircleFill size={20} /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
