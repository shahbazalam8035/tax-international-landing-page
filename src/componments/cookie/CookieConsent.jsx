import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
const settingContent = [
  {
    title: "Necessary",
    desc: "Necessary cookies are essential for the website's basic functionalities.",
    category: "necessary",
    alwaysActive: true,
  },
  {
    title: "Functional",
    desc: "Functional cookies help to perform certain functionalities like sharing the content of the website on social media platforms, collect feedbacks, and other third-party features.",
    category: "functional",
  },
  {
    title: "Performance",
    desc: "Performance cookies help improve the performance and user experience of the website.",
    category: "performance",
  },
  {
    title: "Analytics",
    desc: [
      {
        cookie: "_gat#",
        duration: "1 minute",
        description:
          "Enables Google Analytics regulate the rate of requesting. It is a HTTP cookie type that lasts for a session.",
      },
      {
        cookie: "#collect",
        duration: "Per session",
        description:
          "Sends data such as visitor’s behavior and device to Google Analytics. It is able to keep track of the visitor across marketing channels and devices. It is a pixel tracker type cookie whose activity lasts within the browsing session.",
      },
      {
        cookie: "#clarity",
        duration: "Per session",
        description:
          "We improve our products and advertising by using Microsoft Clarity to see how you use our website. By using our site, you agree that we and Microsoft can collect and use this data. Our privacy statement has more details.",
      },
    ],
    category: "analytics",
  },
  {
    title: "Advertisement",
    desc: "Advertisement cookies are used to provide visitors with relevant ads and marketing campaigns.",
    category: "advertisement",
  },
];

const CookieConsent = () => {
  const navigate = useNavigate();
  const [acceptedCookies, setAcceptedCookies] = useState(
    Cookies.get("cookieConsent")
  );
  const [showSettingsPopup, setShowSettingsPopup] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [preferences, setPreferences] = useState(
    settingContent.reduce((prefs, setting) => {
      prefs[setting.category] =
        setting.alwaysActive || Cookies.get(setting.category) === "true";
      return prefs;
    }, {})
  );

  useEffect(() => {
    if (acceptedCookies === "true") {
      settingContent.forEach((setting) => {
        if (!setting.alwaysActive) {
          Cookies.set(setting.category, preferences[setting.category], {
            expires: 365,
          });
        }
      });
    }
  }, [acceptedCookies, preferences]);

  const togglePath = (path) => {
    navigate(path);
  };

  const acceptCookies = () => {
    console.log("clicked");
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setAcceptedCookies("true");
    settingContent.forEach((setting) => {
      if (!setting.alwaysActive) {
        Cookies.set(setting.category, preferences[setting.category], {
          expires: 365,
        });
      }
    });
  };

  // const declineCookies = () => {
  //     Cookies.set("cookieConsent", "false", { expires: 365 });
  //     setAcceptedCookies("false");
  //     settingContent.forEach((setting) => {
  //       if (!setting.alwaysActive) {
  //         Cookies.remove(setting.category);
  //       }
  //     });
  //   };

  const openSettingsPopup = () => {
    setShowSettingsPopup(true);
  };

  const closeSettingsPopup = () => {
    setShowSettingsPopup(false);
  };

  const handleToggle = (index) => {
    const category = settingContent[index].category;
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    acceptCookies();
    closeSettingsPopup();
  };

  if (acceptedCookies === "true") {
    return null; // If cookies are accepted, don't show the consent banner
  }

  const CookieSetting = ({ item, index }) => {
    return (
      <div
        key={index}
        className={`w-full bg-[#F8F9FE] max-w-[951px] flex flex-col my-4 gap-2 border rounded-[10px] hover:shadow-lg ${
          expandedIndex === index ? "border-[#2B1845]" : "border-[#D9D9D9]"
        } p-3 transition duration-[1s]`}
      >
        <div className="w-full md:max-w-[833px] flex items-center justify-between">
          <div
            className="flex items-center w-full cursor-pointer"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            <span className="text-[25px]">
              {expandedIndex === index ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </span>
            <p className="text-[23px] leading-[27px] text-[#424242] font-normal font-poppins">
              {item.title}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="py-1 font-normal text-[16px] leading-6 text-[#A2A2A2] whitespace-nowrap">
              {item.alwaysActive
                ? "Always Active"
                : preferences[item.category]
                ? "Enabled"
                : "Disabled"}
            </span>
            {!item.alwaysActive && (
              <div
                className={`flex w-[76px] h-auto p-1 rounded-full cursor-pointer ${
                  preferences[item.category] ? "bg-[#28B162]" : "bg-[#d9d9d9]"
                }`}
                onClick={() => handleToggle(index)}
              >
                <span
                  className={`h-[29px] w-[29px] bg-white rounded-full transition-all duration-300 ease-in-out ${
                    preferences[item.category] ? "ml-[37px]" : "ml-[0px]"
                  }`}
                ></span>
              </div>
            )}
          </div>
        </div>
        {expandedIndex === index && (
          <div className="w-full flex flex-col space-y-2 mt-2">
            <div className="w-full border border-[#D9D9D9]" />
            {item.category === "analytics" && (
              <p className="text-[#424242] font-poppins text-[18px] leading-[27px]">
                Analytics cookies help understand how visitors interact with the
                website.
              </p>
            )}
            {Array.isArray(item.desc) ? (
              item.desc.map((descItem, descIndex) => (
                <div
                  key={descIndex}
                  className="flex flex-col space-y-2 mt-2 border-b-[1px] border-[#D9D9D9] p-4"
                >
                  <p className="text-[#424242] font-poppins text-[18px] leading-[27px]">
                    <strong>Cookie:</strong> {descItem.cookie}
                  </p>
                  <p className="text-[#424242] font-poppins text-[18px] leading-[27px]">
                    <strong>Duration:</strong> {descItem.duration}
                  </p>
                  <p className="text-[#424242] font-poppins text-[18px] leading-[27px]">
                    <strong>Description:</strong> {descItem.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-[#424242] font-poppins text-[18px] leading-[27px]">
                {item.desc}
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 md:mx-[140px] md:my-[15px] my-[10px] shadow-lg z-[999]">
        <div className="md:w-full w-[300px]  bg-white text-black border border-[#D9D9D9] md:px-[20px] md:py-[10px] py-[3px] md:rounded-xl rounded-[50px] mx-auto flex md:gap-10 items-center justify-between flex-row">
          <p className="hidden md:block text-[14px] leading-4 font-normal font-poppins">
            We use cookies to make your experience on this website better. By
            continuing to browse this site, you agree to the use of cookies. For
            more information, please read our &nbsp;
            <a
              href=""
              className="text-[#864EFF]"
              onClick={() => togglePath("/privacy-policy")}
            >
              Privacy Policy.&nbsp;
            </a>
          </p>
          <p className="block md:hidden text-[10.8px] leading-2 font-normal font-poppins whitespace-nowrap px-1 ">
            by using avua.com, you accept our &nbsp;
            <a
              href=""
              className="text-[#864EFF]"
              onClick={() => togglePath("/privacy-policy")}
            >
              Privacy Policy.
            </a>
          </p>
          <div className="inline-flex gap-5">
            <button
              className=" md:block hidden border border-[#D9D9D9] shadow px-[30px] py-[6px] rounded-[50px] text-[12px] leading-5 font-[500] text-[#7B7B7B] whitespace-nowrap md:text-[14px]"
              onClick={openSettingsPopup}
            >
              Cookie Settings
            </button>
            <button
              className="bg-gradient-to-r from-[#864EFF] to-[#502F99] shadow md:px-[30px] px-[10px] md:py-[6px] py-[1px] rounded-[50px] md:text-[14px] text-[10px] md:leading-5 leading-1 font-[500] text-[#ffffff]"
              onClick={acceptCookies}
            >
              Accept
            </button>
            <button
              className="md:block hidden absolute top-0 right-0 text-red m-1 bg-[#f8f9fe] p-[2px] rounded-full "
              onClick={acceptCookies}
            >
              <RxCross2 />
            </button>
          </div>
        </div>
        {showSettingsPopup && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: "0%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 inset-0 z-40 overflow-y-auto bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: "-50%" }}
              animate={{ opacity: 1, y: "0%" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg max-w-[60%] w-full mx-4 sm:mx-auto overflow-y-auto mt-36 mb-10"
            >
              <div className="flex justify-end px-4 py-2">
                <button
                  className="text-gray-600 hover:text-gray-800 h-10 w-10 flex justify-center items-center rounded-full bg-[#F8F9FE] border border-black"
                  onClick={closeSettingsPopup}
                >
                  <RxCross1 />
                </button>
              </div>
              <div className="pb-4 px-10 rounded-3xl font-poppins">
                <div>
                  <p className="text-[28px] leading-8 font-[500] text-[#424242] mb-2 ">
                    Overview
                  </p>
                  <p className="text-[18px] leading-[27px] text-[#424242] ">
                    This website uses cookies to improve your experience while
                    you navigate through the website. Out of these, the cookies
                    that are categorized
                  </p>
                </div>
                {settingContent.map((item, index) => (
                  <CookieSetting key={index} item={item} index={index} />
                ))}
                <div className="mt-4 text-right">
                  <button
                    className="bg-gradient-to-r from-[#864EFF] to-[#502F99] shadow py-[15px] px-[30px] rounded-[50px] text-[#ffffff] text-[16px] leading-[19px] font-[500]"
                    onClick={handleSavePreferences}
                  >
                    Save & Accept
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default CookieConsent;
