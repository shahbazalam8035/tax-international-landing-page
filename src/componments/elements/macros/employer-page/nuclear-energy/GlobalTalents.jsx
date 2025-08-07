

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { images, icons } from "../../../../assets/exportImgs";
import { motion, useInView } from "framer-motion";
import image1 from "../../../../../assets/images/businessman-touching-red-icon.png"

const GlobalTalents = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true });
  const cardRef = useRef(null);
  const isInViewCard = useInView(cardRef, { once: true });
  const imageVariants = {
    hidden: {
      x: '-50%', // Start from bottom of screen
      opacity: 0,
    },
    in: {
      x: '0%', // Animate to original position
      opacity: 1,
      // transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' }, // Customize animation
    },
  };
  const cardVariants = {
    hidden: {
      x: '50%', // Start from bottom of screen
      opacity: 0,
    },
    in: {
      x: '0%', // Animate to original position
      opacity: 1,
      // transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' }, // Customize animation
    },
  };

  return (
    <>
     <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
  <div className="w-full relative flex flex-col md:flex-row md:justify-between overflow-x-clip items-center">
    
    {/* Left Image Section */}
    <div className="lg:hidden block">
      <p className="text-[20px] leading-[150%] font-medium text-[#864EFF] mb-[10px]">
        Our global talent database
      </p>
      <p className="lg:text-[36px] text-[24px] leading-[120%] lg:font-semibold font-medium text-[#2B1845] mb-[20px]">
        Includes thousands of vetted professionals
      </p>
      </div>
    <motion.div
      ref={imgRef}
      variants={imageVariants}
      initial="hidden"
      animate={isInView ? "in" : "hidden"}
      transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
      className="w-full md:w-1/2 flex justify-center items-center"
    >
      <img
        src={image1}
        alt="images"
        className="w-full h-auto md:h-[410px] object-cover rounded-xl"
      />
    </motion.div>

    {/* Right Content Section */}
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInViewCard ? "in" : "hidden"}
      transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
      className="w-full md:w-1/2 lg:py-[28px] py-[20px] lg:pl-[60px] "
    >
      <div className="lg:block hidden">
      <p className="text-[20px] leading-[150%] font-medium text-[#864EFF] mb-[10px]">
        Our global talent database
      </p>
      <p className="text-[36px] leading-[120%] font-semibold text-[#2B1845] mb-[20px]">
        Includes thousands of vetted professionals
      </p>
      </div>
      <p className="text-[20px] leading-[150%] text-[#646868] text-start">
        Across civil, mechanical, electrical, and I&C engineering; safety and licensing; radiation protection; project controls; cyber security; decommissioning; and advanced fusion research. Whether you’re staffing a greenfield development, an operating facility, or a decommissioning project, TRX provides immediate access to the right people — at the right time.
      </p>
    </motion.div>
  </div>
</div>

    </>
  );
};

export default GlobalTalents;
