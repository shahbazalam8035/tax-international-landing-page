import React from 'react'
import { Link } from 'react-router-dom'
import trxIcon2 from "../../assets/images/trx-logo-2.svg"
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full container mx-auto">
        <div className='px-6 py-[40px] flex flex-col gap-[20px]'>
            <div className='flex justify-between'>
          <div className="flex lg:gap-[34px] gap-3 justify-start lg:text-[18px] leading-[100%] text-[#424242] lg:flex-row flex-col font-bold">
            <Link to={"/about-us"}><h1 className=" ">About Us</h1></Link>
            <Link to={"/privacy-policy"}><h1 className=" ">Privacy Policy</h1></Link>
            <Link to={"/cookie-policy"}><h1 className=" ">Cookie Policy</h1></Link>
          </div>
          <a href="https://www.linkedin.com/company/avua-international/" target='blank'>
         <FaLinkedin size={40}/>
          </a>
        </div>
            <div className='border border-t  border-[#d9d9d9] '></div>
        <div>
          <p className="lg:text-start text-center text-[#2b1845] text-[18px] leading-[100%] font-bold">
            © 2025 - TRX International
          </p>
        </div>
        <div className=" w-full flex justify-center items-center ">
             <img
               src={trxIcon2}
               className=" w-[61px]  h-[71px]  "
               alt="icon"
             />
           </div>
        </div>
      </div>
  )
}

export default Footer