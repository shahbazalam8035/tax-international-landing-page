// import React from "react";

// const HomeCard = ({image, name, description}) => {
//   return (
//     <div className="xl:w-[414px] w-full xl:h-[424px] flex flex-col gap-6    shadow-2xl    rounded-xl  py-8  ">
//       <div className="flex justify-center items-center ">
//         <img src={image} />
//       </div>
//       <div className="flex flex-col justify-between gap-8 items-center  px-4 ">
//         <h1  className="text-[24px] font-poppins font-[700] text-center  ">{name}</h1>
//         <p className="text-[16px] font-poppins text-center font-[400] leading-[24px] ">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeCard;


import React, { useRef, useEffect } from 'react';
import { motion,useInView } from 'framer-motion';

const HomeCard = ({ image, name, description,index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  const cardVariants = {
    hidden: {
      y: '100%', // Start from bottom of screen
      opacity: 0,
    },
    in: {
      y: '0%', // Animate to original position
      opacity: 1,
      transition: { delay: index * 0.2, duration: 0.4, ease: 'easeInOut' }, // Customize animation
    },
  };

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "in" : "hidden"}
      className="xl:w-[414px] w-full xl:h-[424px] flex flex-col gap-6 shadow-2xl rounded-xl py-8"
    >
      <div className="flex justify-center items-center">
        <img src={image} alt={name} />
      </div>
      <div className="flex flex-col justify-between gap-8 items-center px-4">
        <h1 className="text-[24px] font-poppins font-[700] text-center">{name}</h1>
        <p className="text-[16px] font-poppins text-center font-[400] leading-[24px]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default HomeCard;

