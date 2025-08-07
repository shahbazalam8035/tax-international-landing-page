import React from 'react';
import bgVideo from "../../../../../assets/videos/research_doctors_walking_and_talking.mp4"
import bgVideoThumb from "../../../../../assets/images/medicine-hero-video-thumb.webp"

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
      <div className='relative container mx-auto px-6 pt-[140px] lg:pb-[80px] py-[40px]'>
        <div className='flex w-full'>
          <div className='lg:flex-[0.5] lg:p-[40px]'>
            <h1 className='lg:text-[56px] text-[30px] leading-[120%] text-white font-bold mb-[20px] lg:text-start text-center'>
            Unlock World-Class Nuclear Medicine Talent — Fast
            </h1>
            <div className='pr-[20px] lg:text-start text-center'>
            <p className='text-[#ffffff] text-[18px] leading-[120%] mb-[20px]'>TRX International is the trusted recruitment partner for healthcare organizations, academic institutions, and radiopharma companies globally. We specialize in connecting you with credentialed, experienced professionals across the full spectrum of nuclear medicine — from cyclotron operations to theranostics and regulatory oversight.
            </p>
              <p className='text-[#ffffff] text-[18px] leading-[120%]'> Whether you’re launching a new PET-CT center, building a GMP-compliant radiopharmacy, or staffing a Phase I theranostics trial, TRX delivers tailored workforce solutions with unmatched speed and precision.
              </p>
            </div>
          </div>

          <div className='lg:flex-[0.5]'></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
