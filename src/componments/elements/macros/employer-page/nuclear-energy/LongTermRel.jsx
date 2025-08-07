import React, { useRef } from 'react'
import { trxOffersYouCardItem } from '../../../../constants/variables';
import {motion,useInView} from "framer-motion"
import image1 from "../../../../../assets/images/relatationship-background.png"

const LongTermRel = () => {
    const imgRef = useRef(null);
    const isInViewImg = useInView(imgRef, { once: true });
    const headingRef = useRef(null);
    const isInViewHeading = useInView(headingRef, { once: true });
    const cardRef = useRef(null);
    const isInViewCard = useInView(cardRef, { once: true });
    const headingVariants = {
        hidden: { y: '-50%', opacity: 0 },
        in: { y: '0%', opacity: 1 },
    };
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
    }
    return (
      <div className="bg-[#ffffff] overflow-hidden">
        <div className="container mx-auto lg:py-[80px] py-[40px] px-6 lg:space-y-[40px] space-y-[20px]">
          <h3 className="text-[#2b1845] lg:text-[44px] text-[30px] leading-[120%] font-medium lg:text-center text-start ">
            Long-Term Relationships That Power Project Success
          </h3>
          <div className="flex gap-[60px]">
            <motion.div
             ref={imgRef}
             variants={imageVariants}
             initial="hidden"
             animate={isInViewImg ? "in" : "hidden"}
             transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
            className="flex-[0.25] lg:flex hidden">
                <img src={image1} alt="" className='w-full object-cover rounded-xl h-[800px]'/>
            </motion.div>
            <div className="lg:flex-[0.75] flex-1">
                <motion.div
                  ref={headingRef}
                  variants={headingVariants}
                  initial="hidden"
                  animate={isInViewHeading ? "in" : "hidden"}
                  transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
                >
              <p className="text-[20px] leading-[150%] text-[#424242] mb-[20px]">
                At TRX, recruitment is just the beginning. We support our
                partners across the full lifecycle of their nuclear projects —
                from feasibility and licensing, to construction, operations, and
                decommissioning. We know the timelines, the pressure points, and
                the people who can make a difference.
              </p>
              <p className="text-[18px] leading-[150%] text-[#7B7B7B] mb-[24px]">
                Our model is built for long-term collaboration. That means
                strategic advisory support, resource planning, and workforce
                scaling aligned with your delivery schedule. We embed ourselves
                in your world to understand the technical, cultural, and
                compliance needs that define your project.
              </p>
                </motion.div>
              <motion.div 
               ref={cardRef}
               variants={cardVariants}
               initial="hidden"
               animate={isInViewCard ? "in" : "hidden"}
               transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
              className="lg:space-y-[24px] space-y-5">
                <h3 className=" lg:text-[32px] text-[24px] leading-[150%] text-[#6B3BAB] font-semibold">
                  TRX offers you
                </h3>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[24px] gap-4">
                    {
                        trxOffersYouCardItem.map((item,index)=>(
                            <div className='space-y-[8px] rounded-xl border border-[#e0e0e0] bg-[#FAF8FF] p-[20px]'>
                            <p className='text-[20px] leading-[150%] text-[#864EFF] font-semibold '>{item.title}</p>
                            <p className='text-[16px] leading-[150%] text-[#525252] '>{item.para}</p>
                          </div>
                        ))
                    }
                 
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default LongTermRel