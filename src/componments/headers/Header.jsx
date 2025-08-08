import React, { useState } from "react";
import { RiArrowDropDownLine, RiMenuLine, RiCloseLine } from "react-icons/ri";
import trxLogo from "../../assets/images/trx-logo.svg"; // Update this path
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <header className="w-full sticky top-[24px] z-50 px-5 ">
      <div className="relative container mx-auto flex items-center justify-between py-[15px] px-[24px] rounded-full shadow-lg bg-white ">
        {/* Logo (Left) */}
        <div
          className="flex-shrink-0 z-10"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={trxLogo} alt="Logo" className="h-[50px]" />
        </div>

        {/* Nav (Centered absolutely) */}
        <nav className="hidden lg:flex gap-10 items-center absolute left-1/2 transform -translate-x-1/2">
          {/* Employer */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#424242] text-[18px] leading-[150%] px-[12px] py-[8px] font-medium hover:text-[#864EFF] transition">
              Employers <RiArrowDropDownLine size={20} />
            </button>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-[40px] pointer-events-auto bg-transparent group-hover:block hidden"></div>

            <div className="absolute top-[70px] left-0 bg-white shadow-lg rounded-lg p-5 w-[330px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <NavLink
                to={"/nuclear-energy"}
                className="block px-[16px] py-[14px] hover:bg-gray-100 hover:text-[#864EFF]"
              >
                Nuclear Energy
              </NavLink>
              <NavLink
                to={"nuclear-medicine"}
                className="block px-[16px] py-[14px] hover:bg-gray-100 hover:text-[#864EFF]"
              >
                Nuclear Medicine
              </NavLink>
            </div>
          </div>

          {/* Candidates */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[#424242] text-[18px] leading-[150%] px-[12px] py-[8px] font-medium hover:text-[#864EFF] transition">
              Candidates <RiArrowDropDownLine size={20} />
            </button>

            {/* Invisible hover bridge */}
            <div className="absolute top-full left-0 w-full h-[40px] pointer-events-auto bg-transparent group-hover:block hidden"></div>

            <div className="absolute top-[70px] left-0 bg-white shadow-lg rounded-lg p-5 w-[330px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200">
              <NavLink
                to={"/candidate-careers"}
                className="block px-[16px] py-[14px] hover:bg-gray-100 hover:text-[#864EFF]"
              >
                TRX Candidates
              </NavLink>
              <NavLink
                to={"/cv-analysis"}
                className="block px-[16px] py-[14px] hover:bg-gray-100 hover:text-[#864EFF]"
              >
                CV Analysis
              </NavLink>
            </div>
          </div>

          {/* Direct Links */}
          <NavLink
            to="/ai-interviews"
            className="text-[#424242] text-[18px] leading-[150%] px-[12px] py-[8px]  font-medium hover:text-[#864EFF] transition flex-shrink-0 whitespace-nowrap"
          >
            AI Interviews
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-[#424242] text-[18px] leading-[150%] px-[12px] py-[8px]  font-medium hover:text-[#864EFF] transition flex-shrink-0 whitespace-nowrap"
          >
            About Us
          </NavLink>
          {/* <a
            href="#"
            className="text-[#424242] text-[18px] leading-[150%] px-[12px] py-[8px]  font-medium hover:text-[#864EFF] transition"
          >
            Blogs
          </a> */}
        </nav>

        {/* Hamburger Button (Right) */}
        <button
          className="lg:hidden text-gray-700 text-2xl z-10"
          onClick={toggleMenu}
        >
          {menuOpen ? <RiCloseLine /> : <RiMenuLine />}
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      {/* Backdrop overlay */}
  {menuOpen && (
    <div
      onClick={toggleMenu} // Optional: clicking closes the menu
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-30 transition-opacity duration-300"
    />
  )}
       <div
      className={`fixed top-0 left-0 h-full w-1/2 bg-white shadow-xl z-40 transform transition-transform duration-300 ease-in-out ${
        menuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="overflow-y-auto h-full">
        <motion.ul
          layout
          className="flex flex-col p-6 gap-5"
          initial={false}
          animate="visible"
          exit="exit"
        >
          <li>
            <NavLink to="/" className={({ isActive }) =>
              `text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#141414]"
              }`
            }>
              Home Page
            </NavLink>
          </li>

          {/* Dropdown - Employer */}
          <li>
            <button
              className="w-full flex justify-between items-center text-[#141414] text-[16px] leading-[150%]"
              onClick={() => toggleDropdown("employer")}
            >
              Employer <RiArrowDropDownLine size={20} />
            </button>

            <AnimatePresence initial={false}>
              {openDropdown === "employer" && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="ml-4 mt-2 flex flex-col overflow-hidden"
                >
                  <NavLink to="/nuclear-energy" className={({ isActive }) =>
              `py-1 text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#828282]"
              }`
            }>
                    Nuclear Energy
                  </NavLink>
                  <NavLink to="/nuclear-medicine" className={({ isActive }) =>
              `py-1 text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#828282]"
              }`
            }>
                    Nuclear Medicine
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Dropdown - Candidates */}
          <li>
            <button
              className="w-full flex justify-between items-center text-[#141414] text-[16px] leading-[150%]"
              onClick={() => toggleDropdown("candidates")}
            >
              Candidates <RiArrowDropDownLine size={20} />
            </button>

            <AnimatePresence initial={false}>
              {openDropdown === "candidates" && (
                <motion.div
                  variants={menuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="ml-4 mt-2 flex flex-col overflow-hidden"
                >
                  <NavLink to="/candidate-careers" className={({ isActive }) =>
              `py-1 text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#828282]"
              }`
            }>
                    TRX Candidates
                  </NavLink>
                  <NavLink to="/cv-analysis" className={({ isActive }) =>
              `py-1 text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#828282]"
              }`
            }>
                    CV Analysis
                  </NavLink>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* Remaining Links */}
          <li>
            <NavLink to="/ai-interviews" className={({ isActive }) =>
              `text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#141414]"
              }`
            }>
              AI Interviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" className={({ isActive }) =>
              `text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                isActive ? "text-[#864EFF] transition font-medium" : "text-[#141414]"
              }`
            }>
              About Us
            </NavLink>
          </li>
          {/* <li>
            <NavLink href="#" className={({ isActive }) =>
              `text-[16px] leading-[150%] hover:text-[#864EFF] transition ${
                false ? "text-[#864EFF] transition font-medium" : "text-[#141414]"
              }`
            }>
              Blogs
            </NavLink>
          </li> */}
        </motion.ul>
      </div>
    </div>
    </header>
  );
};

export default Header;
