import React from "react";
import trx_icon from "../../assets/icons/trx_icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="hidden absolute top-0 left-0 right-0 md:flex justify-between items-center p-4 mx-[40px] bg-transparent ">
<Link to={'/'}>      <div className="text-xl font-bold  ">
        <img
          src={trx_icon}
          alt="Tax Icon"
          className="relative h-[86px] w-[73px] opacity-100 "
        />
      </div></Link>
      <div className="flex gap-[60px]">


        <Link to="/client">
          <h1 className="text-white text-[16px] font-poppins cursor-pointer ">
            Clients
          </h1>
        </Link>

        <Link to="/candidates">
          <h1 className="text-white text-[16px] font-poppins cursor-pointer ">
            Candidates
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
