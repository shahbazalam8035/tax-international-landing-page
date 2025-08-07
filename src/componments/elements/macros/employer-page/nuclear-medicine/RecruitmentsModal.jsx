import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const RecruitmentsModal = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const recruitmentModels = [
    {
      title: 'Permanent Search',
      subtitle: 'Full-time hires, screened for longevity & cultural fit',
      description: 'Use Cases: Expansion of diagnostic/therapy departments',
    },
    {
      title: 'Project-Based Hiring',
      subtitle: 'End-to-end staffing for new facilities or clinical programs',
      description: 'New radiopharmacy, trial launch, multi-site expansion',
    },
    {
      title: 'Contract Staffing',
      subtitle: 'Interim coverage for key roles (weeks to months)',
      description: 'Use Cases: Maternity/sick leave, regulatory backlog',
    },
    {
      title: 'Executive & Strategic Search',
      subtitle: 'Confidential hiring of senior leaders',
      description: 'Clinical Directors, GMP QA Heads, Scientific Advisors',
    },
  ];

  return (
    <div className='bg-[#E6E9FF]'>
      <div className='container mx-auto lg:py-[80px] py-[40px] px-6'>
        <h3 className='lg:text-[54px] text-[24px] leading-[120%] text-[#2b1845] font-medium lg:mb-[40px] mb-[20px] text-center'>
          Our Recruitment Models
        </h3>
        <div
          className='grid grid-cols-1 md:grid-cols-2 gap-[20px]'
          ref={containerRef}
        >
          {recruitmentModels.map((model, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className='lg:p-[40px] p-5 border border-[#d9d9d9] bg-white rounded-xl space-y-[16px] shadow-md'
            >
              <h3 className='text-[#6A2CBE] lg:text-[26px] text-[22px] leading-[120%] font-semibold'>
                {model.title}
              </h3>
              <p className='text-[#424242] lg:text-[20px] text-[18px] leading-[120%] font-semibold'>
                {model.subtitle}
              </p>
              <p className='text-[#424242] lg:text-[20px] text-[18px] leading-[120%]'>
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruitmentsModal;
