import React from "react";
import NuclearSectorImage from "../../../../assets/images/NuclearSectorImage.webp";
import { FaArrowRight } from "react-icons/fa6";
import {motion, AnimatePresence} from "framer-motion"

function Section4() {
  const [showModal, setShowModal] = React.useState(false);
  const [activeCard, setActiveCard] = React.useState(null);

  const openModal = (card) => {
    setActiveCard(card);
    setShowModal(true);
  };

  const cardData = [
    {
      country: "United Kingdom",
      title:"Nuclear power station operator",
      challenge: "Ensuring consistent, high-quality hiring for engineering and operations roles across multiple nuclear generation sites, while meeting safety and compliance expectations.",
      solution:"AI-powered interviews using structured, role-specific question banks aligned with NRC guidelines; automated scoring and auditable logs.",
      impact:["100% audit pass rate across all reviewed hiring cycles","Standardization of interviews across 7 locations","Hiring cycle time reduced by 28%"],
    },
    {
      country: "United Kingdom",
      title:"National nuclear research and safety laboratory",
      challenge: "Rapidly recruiting hundreds of short-term technical workers for outage and maintenance projects while maintaining compliance with national nuclear safety regulations.",
      solution:"AI-led interviews conducted at scale, assessing safety awareness, technical capability, and regulatory readiness in multiple languages.",
      impact:["Interview consistency improved by 90%","Reduced regulatory findings related to hiring documentation "," Cut average interview-to-offer time by 35%"],
    
    },
    {
      country: "Canada",
      title:"Small Modular Reactor (SMR) developer",
      challenge: "Filling highly technical roles amid workforce transitions, with a focus on compliance, fairness, and transparency in hiring practices",
      solution:"AI interviews applied to screen for technical aptitude, safety culture alignment, and behavioral traits; full traceability enabled for audits",
      impact:["Improved regulatory confidence through consistent, auditable processes "," Reduced manual interview time by 50% "," Increased successful onboarding rates by 22%"],
    
    },
  ];
  return (
    <div className="bg-[#FFFFFF] flex justify-center">
      <div className="container flex gap-[40px] flex-col lg:flex-row mx-auto px-6 lg:py-[80px] py-[40px]">
        <h2 className="font-semibold text-[30px] leading-[150%] text-[#502F99] text-left lg:hidden block">
          What Makes SmartHire Different for the Nuclear Sector
        </h2>
        <motion.img
          src={NuclearSectorImage}
          alt=""
          className="lg:h-[551px] md:h-[400px]  h-auto rounded-xl object-cover"
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
          }}
          transition={{ type: "spring", stiffness: 300 }}
        />
        <div className="flex flex-col gap-5">
          <div className="">
            <h2 className="font-semibold lg:text-[40px] text-[30px] leading-[120%] text-[#502F99] text-center lg:text-left lg:block hidden mb-[16px]">
              What Makes SmartHire Different for the Nuclear Sector
            </h2>
            <p className="font-normal text-[18px] leading-[26px] text-[#424242]">
              We go beyond generic solutions. Tailored for the each
              sector—accounting for clearance protocols, technical depth, and
              mission-critical standards. We help you hire smarter, faster, and
              safer.
            </p>
          </div>
          <div className="flex gap-4 flex-col lg:flex-row ">
            {cardData.map((card, index) => (
              <div
                key={index}
                onClick={() => {
                  openModal(card);
                }}
                className="rounded-[12px] p-5 bg-[#F9F5FF] border border-[#E8DEF8] cursor-pointer  hover:scale-105 transition-all duration-200 ease-in-out min-h-[280px]"
              >
                <div className="flex justify-between gap-1">
                  <h5 className="font-bold text-[18px] leading-[150%] text-[#6A2CBE]">
                    {card.country}
                  </h5>
                  <FaArrowRight
                    style={{ fontSize: "20px", color: "#502F99" }}
                  />
                </div>
                <div>
                  <h5 className="text-[#502F99] font-bold text-[16px] leading-[150%] mt-1">
                    {card.title}
                  </h5>
                  <h6 className="font-bold text-[16px] leading-[150%] text-[#424242] mt-1">
                    Challenge:
                  </h6>
                  <p className="font-normal text-[16px] leading-[140%] text-[#7E7E7E] mt-1">
                    {card.challenge}
                  </p>
                </div>
              </div>
            ))}
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
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="rounded-xl max-w-[900px] w-full overflow-hidden shadow-xl relative bg-[#ffffff] lg:mx-[0px] mx-[20px]"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-[#864EFF] font-bold text-[24px] transition-all duration-300 ease-in-out hover:text-[#502F99] hover:rotate-90"
              >
                &times;
              </button>
              <div className="lg:p-[60px] p-[20px] flex flex-col h-full space-y-[30px] max-h-[80vh] overflow-y-auto  ">
                <div>
                  <h2 className="lg:text-[36px] text-[20px] leading-[150%] font-semibold text-[#864EFF] mb-2">
                    {activeCard.country}
                  </h2>
                  <h3 className="lg:text-[24px] text-[18px] leading-[150%]  text-[#502F99]">{activeCard.title}</h3>
                  <div className="text-[#17181F] lg:text-[20px] text-[18px] leading-[150%]">
                    {" "}
                    <span>Challenge:</span>
                    {activeCard.challenge}
                  </div>
                </div>
                <div className="bg-[#F4F4F4] lg:p-[30px] p-[20px] rounded-xl">
                  <h3 className="text-[#1D1D1F] font-medium lg:text-[26px] text-[18px] leading-[120%] mb-[10px]">
                    Solution:
                  </h3>
                  <p className="lg:text-[20px] text-[16px] text-[#1D1D1F] medium leading-[120%] space-y-1 ">
                    {" "}
                    {activeCard.solution}
                  </p>
                </div>
                <div>
                  <h3 className="text-[#502F99] text-[18px] leading-[120%] font-semibold mb-2">
                    Impact:
                  </h3>
                  <ul className="list-disc pl-5 space-y-1 lg:text-[18px] text-[16px] text-[#502F99]">
                    {activeCard.impact.map((point, idx) => (
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
}

export default Section4;
