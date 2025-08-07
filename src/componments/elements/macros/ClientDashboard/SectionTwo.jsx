import React from "react";
import Construction from "../../../../assets/icons/Construction.webp";


const SectionTwo = () => {
  return (
    <div className="bg-white md:h-[407px] h-[639px] my-[103px] w-screen md:grid md:grid-cols-5 flex flex-col gap-[40px] md:gap-0  md:px-10 px-8">


      <h1 className=" md:hidden font-poppins text-center font-bold text-[33px]   ">
        Long-term Relationship
      </h1>

      <div className="md:col-span-2 flex justify-center items-center   ">
        <img
          src={Construction}
          className="rounded-[33px] md:h-[404px] md:w-[505px] w-[220px] h-[204px] object-cover"
        />
      </div>

      <div className="md:col-span-3 md:px-10">
        <div className="flex flex-col justify-center items-start h-full gap-[40px]">
          <h1 className=" hidden md:flex font-poppins font-bold text-[47px]   ">
            Long-term Relationship
          </h1>
          <p className="font-poppins text-[16px]  leading-[24px] md:text-justify text-start ">
            We are with you every step of the way, from conception to execution.
            Our comprehensive consultancy services cover every phase of your
            project’s operations, providing you with the support and guidance
            needed to achieve your goals. Whether you need strategic advice or
            hands-on support, our team of specialists are fully prepared to
            offer holistic assistance throughout each phase of your project’s
            life cycle.
          </p>
        </div>
      </div>

    </div>
  );
};

export default SectionTwo;
