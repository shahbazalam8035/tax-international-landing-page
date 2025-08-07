import React from 'react';
import bgVideo from "../../../../../assets/videos/nuclear-power-plant.mp4"
import bgVideoThumb from "../../../../../assets/images/employer-hero-video-thumb.webp"

const HeroSection = () => {
  return (
    <div className='relative bg-[#E6E6FF] overflow-hidden mt-[-80px]'>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={bgVideoThumb}
      >
        <source src={bgVideo} type="video/mp4" />
        {/* Fallback for unsupported browsers */}
        Your browser does not support the video tag.
      </video>

      {/* Overlay (Optional) */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto px-[24px] pt-[140px] lg:pb-[80px] py-[40px]">
        <div className="flex w-full">
          <div className="lg:flex-[0.5] flex-1 lg:p-[40px]">
            <h1 className="lg:text-[56px] text-[30px] lg:text-start text-center leading-[120%] text-white font-bold mb-[20px]">
              Connect With Our Nuclear Talent Database
            </h1>
            <div className="pr-[20px] lg:text-start text-center">
              <p className="text-[#ffffff] text-[18px] leading-[120%] mb-[20px]">
                At TRX, we focus exclusively on talent for the nuclear industry
                — it’s not one of our verticals, it’s our entire business. This
                deep specialization gives us unmatched insight into the sector’s
                evolving demands, complex technical requirements, and regulatory
                frameworks.
              </p>
              <p className="text-[#ffffff] text-[18px] leading-[120%]">
                We don’t generalize. We deliver precisely matched candidates who
                are ready to perform in high-stakes, safety-critical
                environments.
              </p>
            </div>
          </div>

          {/* <div className='flex-[0.5]'></div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
