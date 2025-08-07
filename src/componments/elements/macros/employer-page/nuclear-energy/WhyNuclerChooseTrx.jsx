import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
// import { images } from "../../../../assets/exportImgs";
import { motion, useInView } from 'framer-motion';
import { nuclearCompanyChooseTrxCard } from "../../../../constants/variables";
import image1 from "../../../../../assets/images/global-nuclear-talent.svg"
import image2 from "../../../../../assets/images/sector-savvy-teams.svg"
import image3 from "../../../../../assets/images/support-accross-team.svg"



const WhyNuclerChooseTrx = () => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true });

const images = [image1,image2,image3];

 

    const cardVariants = {
        hidden: {
            y: '50%', // Start from bottom of screen
            opacity: 0,
        },
        in: {
            y: '0%', // Animate to original position
            opacity: 1,
            // transition: { delay: 0.2, duration: 0.4, ease: 'easeInOut' }, // Customize animation
        },
    };



    return (
        <>
        <div className="bg-[#F5F7FF]">
            <div className="container mx-auto px-6 lg:py-[80px] py-[40px] ">
                <div className="flex flex-col gap-[20px]">
                    <h2 className="lg:text-[40px] text-[24px] leading-[120%] text-[#2B1845] font-semibold">
                        Why Nuclear Companies Choose TRX?        </h2>
                    <p className=" lg:text-[20px] text-[18px] leading-[120%] text-[#5C5C5C] font-medium mb-[20px]"
                    >
                        Our clients don’t just come to TRX for resumes. They come for clarity, speed, and sector-specific knowledge that saves time and reduces hiring risk. With every engagement, we bring:
                    </p>
                    {/* for desktop */}
                    <div className="">
                        <div className="">
                            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"   ref={cardRef}>
                                {nuclearCompanyChooseTrxCard.map((card, index) => (
                                    <motion.div
                                        key={card.number}
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate={isInView ? "in" : "hidden"}
                                        transition={{ delay: index * 0.2 + 0.2, duration: 0.4, ease: 'easeInOut' }}
                                        className="bg-[#ffffff] border border-[#d9d9d9] lg:py-[30px] lg:px-[40px] px-5 py-5 rounded-xl"
                                    >
                                         <div className=" mb-[20px]">
                                            <img
                                                src={images[index]}
                                                alt={card.title}
                                                className=" lg:h-[90px] h-[60px] object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#502F99] text-[22px] leading-[150%] text-start mb-2">
                                                {card.title}
                                            </div>
                                            <p className="text-[#696969] text-[18px] leading-[150%] font-normal mb-2">{card.desc1}</p>
                                        </div>
                                       
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default WhyNuclerChooseTrx;
