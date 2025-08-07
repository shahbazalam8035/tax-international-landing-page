import React from "react";
import Bullet2 from "../../../../assets/icons/Bullet2.svg";

const SectionTwo = () => {
  const sectorsArray = [
    {
      name: "Large New Build",
    },
    {
      name: "SMR/ MMR",
    },
    {
      name: "Fusion",
    },
    {
      name: "Decommissioning",
    },
    {
      name: "Radioactive Waste Management",
    },
    {
      name: "Fuel Handling ",
    },
    {
      name: "Uranium Mining ",
    },
  ];
  const repeatedSectorsArray = Array(10).fill(sectorsArray).flat();
  const print = () => {
    console.log(repeatedSectorsArray.length);
  
  };
  print()

  return (
    <>
      <div className="bg-white   mt-12 xl:mt-0 xl:h-[400px] w-screen flex flex-col  xl:items-center xl:justify-center gap-[40px] xl:px-[60px]">
        <div className="flex justify-evenly w-screen xl:px-[200px] ">
          <div className="flex flex-col w-1/2 justify-center items-center">
            <div className="h-[2px] w-full bg-gradient-to-r from-white to-[#8A3DEFD9]"></div>
          </div>
          <div className="xl:w-[800px] w-[900px] ">
            <h1 className="font-poppins text-[24px] xl:text-[33px] font-bold  text-center xl:leading-[70px]  ">
              Sectors We Support
            </h1>
          </div>

          <div className="flex flex-col w-1/2 justify-center items-center">
            <div className="h-[2px] w-full bg-gradient-to-l from-white to-[#8A3DEFD9]"></div>
          </div>
        </div>

        <div className="slider w-11/12 h-[100px] bg-[#F9F4FF] overflow-hidden relative mx-auto ">
          <div className="slide-track flex animate-scroll">
            {repeatedSectorsArray.map((sector, index) => (
              <div
                key={index}
                className="slide mx-10 h-[100px] flex-shrink-0 flex items-center justify-center"
              >
                <div className="text-center flex gap-[30px] ">
                  <img src={Bullet2} alt="bullet" />
                  <p className="text-[23px] font-poppins  font-bold">
                    {sector.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-[200px] h-[100px] bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-[200px] h-[100px] bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
