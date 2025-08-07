import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheck } from "react-icons/fa6";

const faqs = [
  {
    question: "Deep Domain Knowledge",
    answer:
      "We don’t just place healthcare workers — we place nuclear medicine specialists who meet your technical, operational, and compliance requirements. Our team understands:",
    answerLists: [
        "Cyclotron and hot lab operations",
        "PET, SPECT, and hybrid imaging modalities",
        "Radiopharmaceutical production and QA/QC",
        "Regulatory frameworks: IR(ME)R, GMP, 21 CFR, PIC/S, and IAEA",
    ],
  },
  {
    question: "Global Reach with Local Precision",
    answer:
      "Our database includes thousands of actively screened professionals across:",
    answerLists:[
        "UK, EU, US, Middle East, Asia-Pacific",
        "Candidates licensed under CNMT, ARRT(N), NMTCB, QP, and equivalent",
        "Visa-ready and credentialed professionals, including those open to relocation",
    ]
  },
  {
    question: "Speed and Precision",
    answer: "",
    answerLists: [
        "Targeted shortlists in 7–10 business days",
        "Vetted professionals matched by both skill and regulatory fit",
        "Flexibility to scale hiring based on your site’s ramp-up needs",
    ],
  },
  {
    question: "Regulatory & Compliance Alignment",
    answer:
      "We bring compliance to the forefront, pre-aligning candidates with your required standards.",
    answerLists: [
        "IR(ME)R 2017 (UK), ARRT/NMTCB (US), AHPRA (AU), DHA/MOH (UAE)",
        "GMP (Annex 3 & 15), 21 CFR 212, IAEA & ISO standards",
        "Radiation safety vetting, nuclear transport clearances, and QP qualifications",
    ],
  },
];

const WhyChoseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="container mx-auto lg:py-[80px] py-[40px] px-6">
    <div className="flex lg:h-[590px] gap-[40px] flex-col lg:flex-row">
      {/* Left Section */}
      <div className="lg:flex-[0.38] items-center">
        <div className="h-full flex flex-col justify-center lg:p-[24px] gap-3">
          <p className="text-[#000000] lg:text-[48px] text-[24px] leading-[150%] font-medium">
            Why Choose Us?
          </p>
          <p className="text-[#646868] lg:text-[24px] text-[18px] leading-[150%]">
            We offer flexible recruitment solutions—contract, permanent, and executive
            search—to ensure your project's success from start to finish.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:flex-[0.62]">
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                // onMouseEnter={() => setActiveIndex(index)}
                onClick={() => handleInteraction(index)}
                initial={false}
                animate={{
                  backgroundColor: isActive ? "#EDE9FF" : "#FAF9FF",
                  height: isActive ? "auto" : "auto",
                  
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`rounded-[12px] border border-white cursor-pointer shadow-[inset_0px_4px_22.6px_0px_#502F991F] p-5 select-none`}
              >
                <div className={`${isActive ? 'text-[#6A2CBE]' : 'text-[#7B7B7B]'} lg:text-[24px] text-[22px] leading-[120%] font-medium flex items-center gap-3`}>
                <FaCheck className='w-[20px] h-[20px]'/> {faq.question}
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden mt-2 text-[#5B4A7F] lg:text-[20px] text-[18px] leading-[150%]"
                    >
                      {faq.answer && <p className="mb-2">{faq.answer}</p>}
                      <ul className="ml-5 list-disc pl-5 space-y-1">
                        {faq.answerLists.map((list, i) => (
                          <li key={i}>{list}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  </div>
  );
};

export default WhyChoseUs;
