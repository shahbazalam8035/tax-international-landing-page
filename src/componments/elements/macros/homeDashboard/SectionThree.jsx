import React from "react";
import HomeCard from "../../micros/HomeCard";
import process from "../../../../assets/icons/process.svg";
import knowledge from "../../../../assets/icons/knowledge.svg";
import desciples from "../../../../assets/icons/desciples.svg";

const SectionThree = () => {
  const arr = [
    {
      image: process,
      name: `Our Process`,
      discription: `From FEED (Front End Engineering and Design) to construction, commissioning and operation we
            support throughout the full project life cycle. Our team of professionals are available to offer continuous
            assistance and direction, ensuring the success of the project.`,
    },
    {
      image: knowledge,
      name: `Specialist Knowledge `,
      discription: `We operate and hire solely within the nuclear industry, providing us with industry experience and unparalleled knowledge. With innovative and robust R&D, we pride ourselves on working with top-tier nuclear consultants in a diverse, multicultural, and highly collaborative working environment.`,
    },
    {
      image: desciples,
      name: `All Disciples Covered `,
      discription: `We take a comprehensive approach to hiring, seeking out talent across a multitude of disciplines within the nuclear industry. We collaborate within vertical markets and consultants who are devoted to their disciplines.`,
    },
  ];

  return (
    <div className="bg-white xl:h-[463px] mt-[100px] xl:mt-0 mb-[150px] xl:mb-[100px] w-screen flex xl:flex-row  flex-col  items-center justify-center xl:gap-[40px]  gap-14 px-10">
      {arr.map((data, index) => {
        return (
          <HomeCard
            name={data.name}
            image={data.image}
            description={data.discription}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default SectionThree;
