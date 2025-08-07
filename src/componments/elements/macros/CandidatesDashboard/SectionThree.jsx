import React from "react";
import CandidatePageConstruction from "../../../../assets/icons/CandidatePageConstruction.webp";
import Bullet from "../../../../assets/icons/Bullet.svg";

const SectionThree = () => {
  const arrayLeft = [
    "Project Management",
    "Licensing and Regulation",
    "Project Controls (Planning, scheduling & cost)",
    "Safety Analysis",
    "HSE (On-Site)",
    "Construction/ Commissioning personnel",
    "Procurement",
  ];
  const arrayRight = [
    "Field Services",
    "Operation & Maintenance",
    "Contract Management",
    "Radiation Protection",
    "Document Control",
    "Sales/ Business Development",
    "Engineering/ Design (Mechanical, Electrical, Civil and I&C)",
  ];
  return (
    <>
      <div className="flex justify-center items-center md:mt-[-15px] mt-44 ">
        <h1 className="font-poppins md:text-[47px] text-[33px] font-bold ">Why Us</h1>
      </div>
      <div className="w-screen  md:grid md:grid-cols-8 md:mt-6  mt-8 flex flex-col  px-12 gap-[20px]  md:gap-[40px] ">

        <div className="md:col-span-4 md:pr-28  md:h-[1000px] h-[310px]">
          <img
            src={CandidatePageConstruction}
            alt="image"
            className="  object-cover rounded-[23px] md:h-[900px] h-[310px] w-full "
          />
        </div>


        <div className="md:col-span-4 md:ml-[-110px] md:grid md:grid-rows-5 flex flex-col  gap-[20px]">
          <div className="flex flex-col gap-4"> 
            <h1 className="font-poppins md:text-[33px]  text-[23px] font-bold">
              Range of Disciplines
            </h1>
            <p className="font-poppins text-[16px] text-justify text-[#000000]">
              {" "}
              TRX functions as a representative for professionals that want to
              advance or pursue their careers in the nuclear industry. We can
              help you secure both contract and permanent employment. Types of
              positions we can support include:
            </p>
          </div>
          <div className="md:row-span-2 md:grid md:grid-cols-2 md:mt-[-120px]  justify-center items-center  flex flex-col   ">
            <div>
              {arrayLeft.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-6 font-poppins text-[16px] py-1"
                  >
                    <img src={Bullet} alt="" /> <h1 className="py-2">{data}</h1>
                  </div>
                );
              })}
            </div>
            <div>
              {arrayRight.map((data, index) => {
                return (
                  <div
                    key={index}
                    className="flex gap-6 font-poppins text-[16px] py-1 md:mr-12"
                  >
                    <img src={Bullet} alt="" /> <h1 className="py-2">{data}</h1>
                  </div>
                );
              })}
            </div>
          </div>

          <div  className="flex flex-col gap-[20px] md:mt-[-50px]  ">
            <h1 className="font-poppins md:text-[33px] text-[23px]  font-bold">
              Strong Communication{" "}
            </h1>
            <p className="font-poppins text-[16px] text-justify text-[#000000]">
              {" "}
              At our company, communication and collaboration are fundamental
              values that guide our operations. As such, we pledge to maintain a
              high level of transparency and consistency in all our interactions
              with you throughout the entire hiring process.
            </p>
          </div>

          <div    className="flex flex-col gap-[20px] md:mt-[-70px] ">
            <h1 className="font-poppins md:text-[33px] text-[23px]  font-bold">
              Market Excellence{" "}
            </h1>
            <p className="font-poppins text-[16px] leading-[24px] text-justify text-[#000000]">
              {" "}
              Our extensive global network of clients has given us unique
              insights into the employment practices being carried out in the
              industry. Hence, provided our unparalleled industry knowledge, we
              are dedicated to precisely pairing the most suitable candidates
              with fitting career opportunities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionThree;
