import React, { useState } from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { allRoles } from '../../../../constants/variables';
import { motion, AnimatePresence } from 'framer-motion';

const OnGoingTalentsNeed = () => {
    const [showModal, setShowModal] = useState(false);

    return (
      <div className="bg-gradient-to-b from-[#A3A0FC] to-[#DFDEF8]">
        <div className="container mx-auto lg:py-[80px] py-[40px] px-6 space-y-[20px]">
          <div className="text-center mb-[10px]">
            <p className="lg:text-[36px] text-[24px] leading-[120%] text-[#ffffff] font-semibold">
            Frequently Recruited Positions That Reflect 
              <br /> Our Ongoing Talent Needs
            </p>
          </div>

          <div
            className="rounded-xl lg:px-[30px] lg:py-[40px] px-[20px] py-[20px]"
            style={{
              background:
                "linear-gradient(109.73deg, rgba(229, 213, 255, 0.4) 1.8%, rgba(248, 243, 255, 0.979) 57.29%, #F8F4FF 59.45%)",
            }}
          >
            <div className="list-disc pl-5 grid lg:grid-cols-2 grid-cols-1 max-w-[1044px] w-full items-start lg:text-[20px] text-[18px] leading-[150%] text-[#585858] m-auto gap-x-[20px] gap-y-[10px]">
              {allRoles.slice(0, 12).map((title, index) => (
                <li key={index}>{title}</li>
              ))}
            </div>

            <div className="border border-[#C4C4C4] w-full mt-[20px]"></div>

            <div className="flex items-center justify-center mt-[20px]">
              <button
                onClick={() => setShowModal(true)}
                className="text-[#864EFF] text-[16px] flex items-center gap-[10px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
              >
                View more roles
                <BsArrowUpRightCircleFill size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {showModal && (
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
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="rounded-xl max-w-[900px] w-full max-h-[100vh] overflow-hidden shadow-xl relative bg-gradient-to-br from-[#E5D5FF] to-[#F8F4FF] mx-6"
              >
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-[#864EFF] font-bold text-[24px] transition-all duration-300 ease-in-out hover:text-[#502F99] hover:rotate-90"
                >
                  &times;
                </button>

                {/* Modal Content */}
                <div className="p-[30px] pb-[40px] flex flex-col h-full">
                  <h2 className="text-[24px] leading-[120%] font-semibold text-[#864EFF] mb-4">
                    All Roles
                  </h2>

                  <div className='border-[#C4C4C4] border w-full mb-4'></div>

                  <div className="flex-1 overflow-y-auto max-h-[80vh] pr-4">
                    <ul className="list-disc pl-5 text-[18px] text-[#585858] grid grid-cols-1  lg:grid-cols-2 max-w-[850px] w-full items-start gap-x-[20px] gap-y-[10px]">
                      {allRoles.map((title, index) => (
                        <li key={index}>{title}</li>
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

export default OnGoingTalentsNeed;
