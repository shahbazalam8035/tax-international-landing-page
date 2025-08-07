import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../../../../assets/images/nuclear-page-hand-lapi.png";
import image1 from "../../../../../assets/images/nuclear-energy-hand-laptop.png";
import image2 from "../../../../../assets/images/serch-doc.svg";
import image3 from "../../../../../assets/images/hand-tick.svg";

const NuclearRegionProject = () => {
  const imgRef = useRef(null);
  const isInView = useInView(imgRef, { once: true });

  const cardRef = useRef(null);
  const isInViewCard = useInView(cardRef, { once: true });

  const headingRef = useRef(null);
  const isInViewHeading = useInView(headingRef, { once: true });

  const cardVariants = {
    hidden: { x: '-50%', opacity: 0 },
    in: { x: '0%', opacity: 1 },
  };

  const imageVariants = {
    hidden: { x: '50%', opacity: 0 },
    in: { x: '0%', opacity: 1 },
  };
  const headingVariants = {
    hidden: { y: '-50%', opacity: 0 },
    in: { y: '0%', opacity: 1 },
  };

  return (
    <div className="bg-[#F6F0FF]">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="w-full relative flex flex-col md:flex-row md:justify-between overflow-x-clip">
          {/* Left Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <motion.div
              ref={headingRef}
              variants={headingVariants}
              initial="hidden"
              animate={isInViewHeading ? "in" : "hidden"}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
              className="w-full"
            >
              <p className="lg:text-[40px] text-[24px] leading-[120%] font-semibold text-[#2B1845] lg:mb-5 mb-4">
                With a presence across key nuclear regions and projects
              </p>
              <p className="text-[18px] leading-[150%] text-[#646868] text-start">
                Our reach spans international markets while maintaining local
                agility.
              </p>
            </motion.div>
            <div
            className=" lg:hidden flex justify-end items-center "
          >
            <img
              src={image}
              alt="Nuclear energy"
              className="h-full w-full mt-[20px] object-contain rounded-xl"
            />
          </div>
            <motion.div
              ref={cardRef}
              variants={cardVariants}
              initial="hidden"
              animate={isInViewCard ? "in" : "hidden"}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
              className="mt-[40px] pb-[25px]"
            >
              <p className="lg:text-[32px] text-[24px] leading-[120%] font-semibold text-[#2B1845] lg:mb-5 mb-4">
                Our in-house experts
              </p>
              <div className="w-full flex flex-col md:flex-row gap-[40px]">
                <div className="w-full md:w-1/2 rounded-xl bg-[#ffffff] lg:h-[248px] lg:px-6 lg:py-10 p-6 flex flex-col  gap-[20px]">
                  <img src={image2} alt="" className="w-[60px]" />
                  <p className="text-[16px] leading-[150%] text-[#646868] text-start">
                    Understand the exact standards of working in the nuclear
                    field.
                  </p>
                </div>
                <div className="w-full md:w-1/2 rounded-xl bg-[#ffffff] lg:h-[248px] lg:px-6 lg:py-10 p-6 flex flex-col gap-[20px]">
                  <img src={image3} alt="" className="w-[60px]" />
                  <p className="text-[16px] leading-[150%] text-[#646868] text-start">
                    Our candidate assessments go beyond qualifications — we
                    evaluate suitability, adaptability, and mission alignment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image Section */}
          <motion.div
            ref={imgRef}
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "in" : "hidden"}
            transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
            className="w-full md:w-1/2 lg:flex hidden justify-end items-center mt-[40px] md:mt-0 "
          >
            <img
              src={image1}
              alt="Nuclear energy"
              className="w-1/2 h-[560px] object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NuclearRegionProject;
