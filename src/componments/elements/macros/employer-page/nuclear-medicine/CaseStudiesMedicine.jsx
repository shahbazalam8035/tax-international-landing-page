import React, { useState, useEffect, useRef } from 'react';
import { CiCalendar } from 'react-icons/ci';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import {caseStudiesCardItemMedicine} from "../../../../constants/variables"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CaseStudiesMedicine = () => {
    const sliderRef1 = useRef()
    const [showModal, setShowModal] = useState(false);
    const [activeCard, setActiveCard] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        rows: 2,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                rows: 1,
              },
            },
            {
              breakpoint: 768,
              settings: {
                rows: 1,
              },
            },
          ],
    };

   

    const openModal = (card) => {
        setActiveCard(card);
        setShowModal(true);
    };


    return (
        <div className='container mx-auto lg:py-[80px] py-[40px]'>
            <div className='flex  gap-[40px] sm:flex-row flex-col'>
                {/* Left Section */}
                <div className='flex-[0.33] items-center'>
                    <div className='h-full flex flex-col justify-center px-[24px]'>
                        <p className='text-[#000000] lg:text-[48px] text-[24px] leading-[150%] font-medium mb-[10px] lg:mb-0'>Case Studies</p>
                        <p className='text-[#17181F] lg:text-[18px] text-[16px] leading-[150%] font-medium'>Discover how we've helped businesses like yours achieve measurable success and overcome their biggest challenges.</p>
                         <div className="flex gap-[10px] lg:hidden justify-end pt-[20px] ">
                                    <BsArrowLeftCircleFill
                                      size={35}
                                      className="bg-[#864EFF] text-[#EEE6FF] rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"
                                      onClick={() => sliderRef1.current?.slickPrev()}
                                    />
                                    <BsArrowRightCircleFill
                                      size={35}
                                      className="bg-[#864EFF] text-[#EEE6FF] rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer"
                                      onClick={() => sliderRef1.current?.slickNext()}
                                    />
                                  </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className='flex-[0.67] lg:min-h-[520px] min-h-[300px] overflow-hidden'>
                    <div className='lg:block hidden'>
                    {caseStudiesCardItemMedicine.map((card, index) => (
                            <div key={index} className='lg:py-[12px] lg:px-0 px-[24px]'>
                                <div className='shadow-lg border border-[#d9d9d9] bg-[#f3f2ff] rounded-[20px] p-[24px] lg:min-h-[230px] min-h-[300px]'>
                                    <div className='flex items-center gap-[20px] mb-[12px]'>
                                        {/* <CiCalendar size={25} /> */}
                                        {/* <p className='text-[18px] leading-[120%] text-[#424242]'>{card.date}</p> */}
                                    </div>
                                    <div className='mb-[20px]'>
                                        <p className='text-[#17181F] lg:text-[24px] text-[18px] font-semibold mb-[10px]'>{card.title}</p>
                                        <p className='text-[#424242] text-[18px]'>{card.client}</p>
                                    </div>
                                    <button
                                        onClick={() => openModal(card)}
                                        className="text-[#864EFF] text-[16px] flex items-center gap-[10px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                                        >
                                        Read More <BsArrowUpRightCircleFill size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                  <div className='case-studies-slider lg:hidden block'>
                    <Slider {...settings} ref={sliderRef1}>
                        {caseStudiesCardItemMedicine.map((card, index) => (
                            <div key={index} className='lg:py-[12px] lg:px-0 px-[24px]'>
                                <div className='shadow-lg border border-[#d9d9d9] bg-[#f3f2ff] rounded-[20px] p-[24px] lg:min-h-[230px] min-h-[300px]'>
                                    <div className='flex items-center gap-[20px] mb-[12px]'>
                                        {/* <CiCalendar size={25} /> */}
                                        {/* <p className='text-[18px] leading-[120%] text-[#424242]'>{card.date}</p> */}
                                    </div>
                                    <div className='mb-[20px]'>
                                        <p className='text-[#17181F] lg:text-[24px] text-[18px] font-semibold mb-[10px]'>{card.title}</p>
                                        <p className='text-[#424242] text-[18px]'>{card.client}</p>
                                    </div>
                                    <button
                                        onClick={() => openModal(card)}
                                        className="text-[#864EFF] text-[16px] flex items-center gap-[10px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                                        >
                                        Read More <BsArrowUpRightCircleFill size={20} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                  </div>
                </div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {showModal && activeCard && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="rounded-xl max-w-[900px] w-full overflow-hidden shadow-xl relative bg-[#ffffff] lg:mx-[0px] mx-6"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 text-[#864EFF] font-bold text-[24px] transition-all duration-300 ease-in-out hover:text-[#502F99] hover:rotate-90"
                            >
                                &times;
                            </button>
                            <div className="lg:p-[60px] p-[20px] flex flex-col h-full lg:space-y-[40px] space-y-5 max-h-[80vh] overflow-y-auto  ">
                                <div>
                                    <h2 className="lg:text-[32px] text-[20px] leading-[150%] font-semibold text-[#17181F] mb-3">
                                        {activeCard.title}
                                    </h2>
                                    <div className='text-[#17181F] lg:text-[22px] text-[18px] leading-[150%] mb-3'>  <span>Client:</span>{activeCard.client}</div>
                                    <div className='text-[#502F99] lg:text-[18px] text-[16px] leading-[150%]'>  <span>Challenge:</span>{activeCard.challenge}</div>
                                </div>
                                <div className='bg-[#F4F4F4] lg:p-[40px] p-[20px] rounded-xl'>
                                    <h3 className='text-[#1D1D1F] font-medium text-[22px] leading-[130%] mb-[10px]'>Our Approach:</h3>
                                    <ul className="list-disc pl-5 lg:text-[18px] text-[16px] text-[#1D1D1F] medium leading-[120%] space-y-1 ">
                                        {activeCard.solution.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                <h3 className='text-[#502F99] text-[20px] leading-[120%] font-semibold mb-2'>Impact:</h3>
                                <ul className="list-disc pl-5 space-y-1 text-[18px] text-[#502F99]">
                                    {activeCard.overCome.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CaseStudiesMedicine;
