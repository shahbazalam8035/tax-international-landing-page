import React from "react";
import trc_icon_2 from "../../../assets/images/trx-logo-2.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full xl:h-[155px] flex flex-col xl:gap-[30px]  gap-[20px] mb-28 xl:px-16 px-6 mt-10 xl:mt-[30px] ">
      <div className="flex gap-[34px] justify-start">
      <Link to={'/'}>  <h1 className="font-poppins  text-[14px] xl:text-[16px]  ">Home</h1></Link>
       <Link to={'/client'}> <h1 className="font-poppins text-[14px] xl:text-[16px]  ">Clients</h1></Link>
    <Link to={'/candidates'}>    <h1 className="font-poppins  text-[14px] xl:text-[16px] ">
          Candidates
        </h1></Link>
      </div>
      <div className="border-[0.1px] border-t  border-black " />

      <div className="xl:w-1/2 flex xl:flex-row flex-col justify-between gap-4  ">
        <h1 className="font-poppins  text-[14px] xl:text-[16px]  text-start ">
          © 2024 - TRX International
        </h1>
        <img
          src={trc_icon_2}
          className=" relative  bottom-[-70px] hidden xl:flex  xl:mr-[-35px] w-[61px]  h-[71px]  "
          alt="icon"
        />
        <div className="xl:hidden w-full flex justify-center items-center  ">
          <img
            src={trc_icon_2}
            className="    xl:mr-[-35px] w-[61px]  h-[71px]  "
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
