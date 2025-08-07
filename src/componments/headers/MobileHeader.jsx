import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useLocation, useNavigate, Link } from "react-router-dom";
import trx_icon from "../../assets/icons/trx_icon.svg";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const menuStyle = {
    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <>
      <div className="md:hidden absolute top-0 w-full h-[66px] mt-5 flex justify-between items-center   px-14 py-9 z-20">
        <Link to={'/'}>
         
          <img
            src={trx_icon}
            alt="icon"
            className="h-[66px] w-[54px] ml-[-10px]"
          />
        </Link>
        {isMenuOpen ? (
          <RxCross1
            className="text-[30px] text-white cursor-pointer mr-[-20px]"
            onClick={toggleMenu}
          />
        ) : (
          <RxHamburgerMenu
            className="text-[40px] text-white cursor-pointer"
            onClick={toggleMenu}
          />
        )}
      </div>
      <div
        className="fixed md:hidden top-0 right-0 w-2/5 h-screen bg-[#360C71] z-10 pt-20"
        style={menuStyle}
      >
        <h1
          className={`text-white font-poppins px-6 text-[16px] font-[400] py-4 cursor-pointer ${
            location.pathname === "/client" ? "bg-[#4500A4]" : ""
          }`}
          onClick={() => handleNavigation("/client")}
        >
          Client
        </h1>
        <h1
          className={`text-white font-poppins px-6 text-[16px] font-[400] py-4 cursor-pointer ${
            location.pathname === "/candidates" ? "bg-[#4500A4]" : ""
          }`}
          onClick={() => handleNavigation("/candidates")}
        >
          Candidates
        </h1>
      </div>
    </>
  );
};

export default MobileHeader;
