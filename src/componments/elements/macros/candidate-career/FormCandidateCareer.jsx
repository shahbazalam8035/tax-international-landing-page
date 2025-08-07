import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { messageRequest } from "../../../../api/services";
import { FaLinkSlash } from "react-icons/fa6";
import { countryCodes } from "../../../../utils/countryPhoneCodes";
import PhoneNumberInput from "../../micros/PhoneNumberInput";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import CanidateFormLeftImage from "../../../../assets/images/candidate-form-left-image.png";
import { FiUpload } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import PhoneInputNew from "../../micros/PhoneInputNew";

const FormCandidateCareer = () => {
  const [phoneNumberlength, setphoneNumberlength] = useState(10);
  const [countryCode, setCountryCode] = useState("GB"); // Default country code
  const [Countryid, setCountryid] = useState("+44");
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [resume, setResume] = useState(null); // State for storing the selected file
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required"),
      email: Yup.string()
        .required(" Email is required")
        .email("Please enter valid email"),
    }),

    onSubmit: handleSubmit,
  });

  // Handle modal auto-close and body scroll lock
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";

      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showModal]);

  const handleCountryCodeChange = (value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === value
    );
    setphoneNumberlength(selectedCountry.phoneLength);
    setCountryCode(value);
    setCountryid(selectedCountry.phone);
  };

  const handlePhoneNumberChange = (number) => {
    setphoneNumber(number);
    setPhoneNumberError("");
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setResume(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  async function handleSubmit() {
    console.log("Reached here ");
    let hasErrors = false;

    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required");
      hasErrors = true;
    } else if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must be numeric");
      hasErrors = true;
    } else if (phoneNumber.length !== phoneNumberlength) {
      setPhoneNumberError(
        `Phone number must be atleast ${phoneNumberlength} digits`
      );
      hasErrors = true;
    }

    if (hasErrors) {
      console.log("Returning ");
      return;
    }
    const formData = new FormData();
    formData.append("file", resume);
    formData.append(
      "data",
      JSON.stringify({
        first_name: formik.values.firstName,
        email: formik.values.email,
        phone: {
          cid: Countryid,
          phone_number: phoneNumber,
          country_code: countryCode,
        },
      })
    );

    try {
      const userRes = await messageRequest(formData);
      console.log(userRes?.msg);

      if (userRes?.msg === "success") {
        setShowModal(true);
      } else {
        setError("Message failed.");
        setShowModal(false);
      }
    } catch (error) {
      setError("An error occurred during signup.");
    }
  }

  return (
    <>
      <div className="bg-[#f6f7ff]">
        <div className="container mx-auto px-6 lg:py-[80px] py-[40px] lg:space-y-[30px] space-y-[15px]">
          <div>
            <h3 className="lg:text-[40px] text-[24px] lg:text-start text-center leading-[100%] text-[#2B1845] font-semibold mb-[20px]">
              Join Our Talent Network
            </h3>
            <p className="lg:text-[20px] text-[16px] lg:text-start text-center leading-[120%] text-[#686868]">
              {" "}
              We’re always looking to connect with skilled professionals and
              help place the right people in the right roles. Share your CV with
              us today and let’s explore how we can support your career journey.
            </p>
          </div>
          <div className="flex ">
            <form
              onSubmit={formik.handleSubmit}
              className="md:flex-[0.5] flex-[1]"
            >
              <div className="w-full flex flex-col md:gap-[20px] gap-[15px]">
                <div className="flex flex-col gap-[8px] ">
                  <h1 className="lg:text-[20px] text-[16px] leading-[150%] text-[#686868] font-semibold ">
                    Name{" "}
                  </h1>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name={"firstName"}
                    className="lg:text-[20px] text-[16px] leading-[150%] text-[#7b7b7b] font-medium py-[12px] px-[20px] rounded-full "
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.firstName && formik.touched.firstName && (
                    <p className=" text-red-500   ">
                      {formik.errors.firstName}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-[8px] ">
                  <h1 className="  lg:text-[20px] text-[16px] leading-[150%] text-[#686868] font-medium ">
                    E-mail
                  </h1>
                  <input
                    type="email"
                    placeholder="Your E-mail"
                    name={"email"}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="lg:text-[20px] text-[16px] leading-[150%] text-[#7b7b7b] font-medium py-[12px] px-[20px] rounded-full "
                  />
                  {formik.errors.email && formik.touched.email && (
                    <p className=" text-red-400">{formik.errors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-[8px] ">
                  {/* <h1 className="lg:text-[20px] text-[16px] leading-[150%] text-[#686868] font-semibold ">
                    Phone Number
                  </h1>

                  <PhoneNumberInput
                    countryCodes={countryCodes}
                    selectedCountryCode={countryCode}
                    phoneNumber={phoneNumber}
                    onCountryCodeChange={handleCountryCodeChange}
                    onPhoneNumberChange={handlePhoneNumberChange}
                  />
                  {phoneNumberError && (
                    <p className=" text-red-500   ">{phoneNumberError}</p>
                  )} */}

                  <PhoneInputNew
                    name="phoneNumber"
                    label="Phone Number"
                    countryCodes={countryCodes}
                    selectedCountryCode={countryCode}
                    phoneNumber={phoneNumber}
                    onCountryCodeChange={handleCountryCodeChange}
                    onPhoneNumberChange={handlePhoneNumberChange}
                    error={phoneNumberError}
                    placeholder="Contact Number"
                    isRounded={true}
                  />
                </div>

                {/* upload resume section starts here  */}
                <div className="flex flex-col gap-[8px]">
                  <h1 className="lg:text-[20px] text-[16px] leading-[150%] text-[#686868] font-medium ">
                    Upload Your Resume
                  </h1>
                  <div
                    className="border-dashed border-2 border-[#d9d9d9] rounded-[12px] px-[20px] py-[12px]"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                  >
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      id="resumeInput"
                      name={"resume"}
                      onChange={handleFileChange}
                    />
                    <label
                      htmlFor="resumeInput"
                      className="cursor-pointer lg:text-[20px] text-[16px] leading-[150%] text-[#7b7b7b] font-medium flex justify-between items-center "
                    >
                      <span>
                        {resume ? (
                          resume.name
                        ) : (
                          <p>
                            <span>
                              Click or drag your file to upload (PDF, DOC, DOCX)
                            </span>
                          </p>
                        )}
                      </span>
                      <FiUpload size={25} className="text-[#d9d9d9]" />
                    </label>
                  </div>
                  {formik.errors.resume && formik.touched.resume && (
                    <p className=" text-red-500   ">{formik.errors.resume}</p>
                  )}
                </div>
                {/* upload resume section ends here  */}

                <div className="flex w-full justify-center items-center md:mt-8 mt-4">
                  <button
                    type="submit"
                    className="rounded-full w-full bg-gradient-to-r from-[#6B3BAB] to-[#2B1845] text-[#FFFFFF] flex items-center justify-between gap-[10px] py-[16px] px-[20px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                  >
                    <span className="text-[#FFFFFF] lg:text-[20px] text-[16px] leading-[150%] font-semibold">
                      Join the Network
                    </span>{" "}
                    <BsArrowUpRightCircleFill size={25} />
                  </button>
                </div>

                {error !== "" && (
                  <div className="flex justify-center items-center">
                    <div className="w-2/5 bg-[#FF00001F] flex items-center justify-center p-4">
                      <h1 className=" text-[#FF0000]">
                        Sorry! Your submission could not be processed.
                      </h1>
                    </div>
                  </div>
                )}
              </div>
            </form>
            <div className="flex-[0.5] justify-end items-center md:flex hidden">
              <img
                src={CanidateFormLeftImage}
                className="h-[528px]"
                alt="left images form"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-[20px] p-[40px] max-w-md mx-4 text-center animate-fadeIn">
            <div className="flex flex-col items-center gap-[20px]">
              <div className="w-[60px] h-[60px] rounded-full bg-[#28B162] flex items-center justify-center">
                <FaCheck color="white" size={24} />
              </div>
              <div>
                <h2 className="text-[24px] font-semibold text-[#2B1845] mb-[10px]">
                  Thank You!
                </h2>
                <p className="text-[16px] text-[#686868] leading-[150%]">
                  Your submission has been received successfully. A member of
                  our team will be in touch soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default FormCandidateCareer;
