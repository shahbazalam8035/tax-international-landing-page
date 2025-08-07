import React from "react";
import Neuclear from "../../../../assets/icons/Neuclear.webp";
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
    <div className="bg-white xl:h-[650px] xl:mt-[-10px]  w-screen xl:px-14 px-8  mb-12 xl:mb-0 flex flex-col gap-[30px]  ">
      <div className="flex flex-col items-center  gap-[30px] ">
        <h1 className="font-poppins xl:text-[47px] text-[33px] text-center font-bold ">
          Large Range of Disciples
        </h1>
        <p className="font-poppins text-[16px] xl:text-justify text-start">
          TRX functions as a representative for professionals that want to
          advance or pursue their careers in the nuclear industry. We can help
          you secure both contract and permanent employment. Types of positions
          we support include:
        </p>
      </div>


      <div className="   w-full  xl:hidden flex justify-center items-center  h-[264px]">
        <img
          src={Neuclear}
          alt="icon"
          className="rounded-[21px]  w-full h-[264px] object-cover "
        />
      </div>

      <div className="xl:flex  ">
        <div className="xl:w-[330px] w-full mb-[20px] xl:mb-0 flex flex-col  gap-[20px] ">
          {arrayLeft.map((data, index) => {
            const hasParentheses = data.includes("(") && data.includes(")");

            const isHseException = data === "HSE (On-Site)";
            const isConstructionCommissioning =
              data === "Construction/ Commissioning personnel";

            let part1, part2;
            if (hasParentheses && !isHseException) {
              const splitIndex = data.indexOf("(");
              part1 = data.substring(0, splitIndex);
              part2 = data.substring(splitIndex);
            }

            if (isConstructionCommissioning) {
              part1 = "Construction/";
              part2 = "Commissioning personnel";
            }

            return (
              <div key={index} className="flex gap-6 font-poppins text-[16px] ">
                <img src={Bullet} alt="" />
                <h1 className=" text-[16px]">
                  {hasParentheses && !isHseException ? (
                    <>
                      {part1}
                      <br />
                      {part2}
                    </>
                  ) : isConstructionCommissioning ? (
                    <>
                      {part1}
                      <br />
                      {part2}
                    </>
                  ) : (
                    data
                  )}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="xl:w-[414px] w-full flex flex-col gap-[25px]">
          {arrayRight.map((data, index) => {
            const hasParentheses = data.includes("(") && data.includes(")");

            const isHseException = data === "HSE (On-Site)";
            const isConstructionCommissioning =
              data === "Construction/ Commissioning personnel";

            let part1, part2;
            if (hasParentheses && !isHseException) {
              const splitIndex = data.indexOf("(");
              part1 = data.substring(0, splitIndex);
              part2 = data.substring(splitIndex);
            }

            if (isConstructionCommissioning) {
              part1 = "Construction/";
              part2 = "Commissioning personnel";
            }

            return (
              <div key={index} className="flex gap-6 font-poppins text-[16px] ">
                <img src={Bullet} alt="" />
                <h1 className=" text-[16px]">
                  {hasParentheses && !isHseException ? (
                    <>
                      {part1}
                      <br />
                      {part2}
                    </>
                  ) : isConstructionCommissioning ? (
                    <>
                      {part1}
                      <br />
                      {part2}
                    </>
                  ) : (
                    data
                  )}
                </h1>
              </div>
            );
          })}
        </div>

        <div className="   hidden xl:flex ml-10 w-[533px] h-[380px]">
          <img
            src={Neuclear}
            alt="icon"
            className="rounded-[21px]  w-[533px] h-[380px] "
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
