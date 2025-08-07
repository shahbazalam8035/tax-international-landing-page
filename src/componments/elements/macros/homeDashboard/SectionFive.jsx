import React from "react";
import WhyUs1 from "../../../../assets/icons/WhyUs1.svg";
import Construction from "../../../../assets/icons/Construction.svg";

const SectionFive = () => {
  return (
    <div className="bg-white md:h-[740px] w-screen flex flex-col justify-center items-center px-16 py-12 md:py-0">
      <div className=" flex flex-col  gap-[30px] ">
        <div>
          <h1 className="md:text-[47px] text-[33px] font-poppins font-bold text-center md:text-start ">Why Us</h1>
        </div>

        <div className="flex flex-col gap-[50px]">
          <div className="flex md:flex-row flex-col md:gap-[25px] gap-[20px]">
            <div className="flex flex-col gap-[15px]">
              <span
                style={{ color: "transparent" }}
                className=" bg-gradient-to-tr from-[#A77AEE] to-[#9173C0] md:text-[47px] text-[33px]  font-poppins font-bold bg-clip-text"
              >
                01
              </span>
              <h1 className="font-poppins md:text-[33px]  text-[23px] font-bold">
                Specialized Knowledge
              </h1>
              <p className="font-poppins text-[16px]   font-[400] leading-[24px]">
                Operating solely within the nuclear industry we have the
                knowledge base, research capabilities, and an incredible roster
                of professionals that enables us to work across each sector
                within the industry.
              </p>
            </div>

            <div className="md:border-l-[1px] border-b-[1px]  border-[#7E38ED] mx-4"></div>

            <img src={WhyUs1} className="w-[186px] h-[199px]  my-auto xl:my-0    mx-auto xl:mx-0       " />
          </div>

          <div className="flex md:flex-row flex-col md:gap-[25px] gap-[20px] ">
            <span
              style={{ color: "transparent" }}
              className=" md:hidden   bg-gradient-to-tr from-[#A77AEE] to-[#9173C0] text-[33px]  font-poppins font-bold bg-clip-text"
            >
              02
            </span>
            <h1 className="md:hidden  font-poppins text-[23px] font-bold">
              Excellent Track Record
            </h1>
            <p className="  md:hidden font-poppins text-[16px]   font-[400] leading-[24px]">
              We have an excellent track record of offering cutting-edge human
              capital solutions. Whether you’re a client or a potential job
              candidate, we have the resources to facilitate your requirements.
            </p>
            <div className="  md:hidden  border-b-[1px]  border-[#7E38ED] mx-4"></div>

            <img src={Construction} className="w-[186px] h-[199px] my-auto xl:my-0     mx-auto xl:mx-0      "    />

            <div className="  hidden md:flex border-l-[1px]  border-[#7E38ED] mx-4"></div>

            <div className="flex flex-col gap-[15px]">
              <span
                style={{ color: "transparent" }}
                className=" hidden md:flex   bg-gradient-to-tr from-[#A77AEE] to-[#9173C0] text-[47px]  font-poppins font-bold bg-clip-text"
              >
                02
              </span>
              <h1 className="hidden md:flex font-poppins text-[33px] font-bold">
                Excellent Track Record
              </h1>
              <p className="  hidden md:flex font-poppins text-[16px]   font-[400] leading-[24px]">
                We have an excellent track record of offering cutting-edge human
                capital solutions. Whether you’re a client or a potential job
                candidate, we have the resources to facilitate your
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
