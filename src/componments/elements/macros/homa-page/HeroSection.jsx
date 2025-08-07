import React from 'react';
import bgVideo from "../../../../assets/videos/home-herosection-bg-video.mp4"
import bgVideothumb from "../../../../assets/images/home-hero-video-thumb.webp"

const HeroSection = () => {
  return (
    <div className="relative bg-[#E6E6FF] overflow-hidden mt-[-80px]">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
         poster={bgVideothumb}
      >
        <source src={bgVideo} type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-[24px] pt-[140px] lg:pb-[80px] pb-[40px]">
        <div className="flex w-full">
          <div className="lg:flex-[0.5] flex-1 lg:p-[40px]">
            <h1 className="lg:text-[56px] text-[30px] lg:text-start text-center leading-[120%] text-white font-bold mb-[20px]">
              Empowering the Global Nuclear Workforce
            </h1>
            <div className="lg:pr-[20px]">
              <p className="text-[#ffffff] text-[18px] leading-[120%] mb-[20px] lg:text-start text-center">
                At TRX, we specialize in connecting world-class talent with
                critical roles across the global nuclear industry. From new
                build and decommissioning projects to research, regulation, and
                advanced reactor technologies, we are trusted by industry
                leaders to deliver the expertise that drives safety, innovation,
                and long-term success.
              </p>
              <p className="text-[#ffffff] text-[18px] leading-[120%] lg:text-start text-center">
                With deep sector knowledge and a global network of nuclear
                professionals, TRX supports utilities, EPCs, regulators, and
                government agencies in meeting their workforce demands, no
                matter how complex or specialized.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
