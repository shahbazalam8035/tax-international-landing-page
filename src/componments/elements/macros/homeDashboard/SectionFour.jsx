import React from "react";
import GroupImage from "../../../../assets/icons/GroupImage.svg";

const SectionFour = () => {
  const nav = [
    {
      name: "Leave the Work to Us",
      description: `With extensive experience and a vast network in the nuclear sector, we are skilled at understanding the exact requirements and sourcing relevant individuals. Our seasoned professionals will guide you through the entire hiring process, ensuring a smooth and successful experience.`,
    },
    {
      name: "Global Reach",
      description:
        "Since 2019, we have supported global companies and projects across multiple sub-sectors, achieving several successful placements. Let us leverage our extensive network of international clients to highlight and utilise your abilities in the best possible way.",
    },
    {
      name: "Continuous Support",
      description:
        "Once we identify the ideal position based on your needs, our experts will maintain constant communication with you throughout the recruitment process, providing ongoing support every step of the way.",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#2B1845] to-[#6B3BAB] xl:h-[800px]  w-screen flex xl:flex-row flex-col px-8 xl:px-0  py-12 xl:py-5   xl:pb-0 pb-16 gap-4 xl:gap-0 ">
      <h1 className="  xl:hidden text-center  text-white   font-bold font-poppins  text-[33px]">
        Candidates
      </h1>
      {/* <div className="xl:w-1/2 w-full  bg-black xl:h-full  flex justify-center items-center px-8 xl:px-0 mt-4 xl:mt-0 ">
        <img src={GroupImage} className="w-auto h-auto" />
      </div> */}
      <div className="xl:w-1/2 w-full  xl:h-full flex justify-center items-center px-8 xl:px-0 mt-4 xl:mt-0 py-4 ">
        <img src={GroupImage} className="h-[]" />
      </div>

      <div className="xl:w-1/2 w-full h-full flex justify-center items-center ">
        <div className="xl:w-[601px] xl:h-[582px] flex flex-col gap-8">
          <h1 className="text-white  hidden xl:flex  font-bold font-poppins  text-[33px]">
            Candidates
          </h1>
          <div className="flex flex-col gap-6">
            {nav.map((data, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <h1 className="text-white font-poppins text-[23px]  font-semibold">
                    {data.name}
                  </h1>
                  <p className="text-white  leading-[24px]    font-poppins  font-[350] text-start text-[16px] ">
                    {data.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
