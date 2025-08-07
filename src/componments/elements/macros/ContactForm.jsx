import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { RxCross1 } from "react-icons/rx";
import TextInput from "../micros/TextInput";
import PhoneInputNew from "../micros/PhoneInputNew";
import { countryCodes } from "../../../utils/countryPhoneCodes";
import useGeoLocation from "../../../utils/useGeoLocation";
import { FaCheck } from "react-icons/fa";
import peoples from "../../../assets/images/peoples.svg";
import { motion, AnimatePresence } from "framer-motion";
import { messageRequest } from "../../../api/services";

function ContactForm({ setIsOpenModel, isOpenModel }) {
  const [phoneNumberlength, setphoneNumberlength] = useState(10);
  const [countryCode, setCountryCode] = useState("IN");
  const [Countryid, setCountryid] = useState("+91");
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { geoResponse, isLoading } = useGeoLocation();

  useEffect(() => {
    if (geoResponse && geoResponse?.country)
      handleCountryCodeChange(geoResponse?.country);
  }, [geoResponse, isLoading]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      position: "",
    },

    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format")
        .required("Email is required"),
      companyName: Yup.string().required("Company name is required"),
      position: Yup.string().required("Position is required"),
    }),

    onSubmit: handleSubmit,
  });

  const handleCountryCodeChange = (value) => {
    const selectedCountry = countryCodes.find(
      (country) => country.code === value
    );
    if (selectedCountry) {
      setphoneNumberlength(selectedCountry.phoneLength);
      setCountryCode(value);
      setCountryid(selectedCountry.phone);
    }
  };

  const handlePhoneNumberChange = (number) => {
    setphoneNumber(number);
    setPhoneNumberError("");
  };

  const validateEmailDomain = (email) => {
    const NotallowedDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "aol.com",
      "icloud.com",
      "live.com",
      "mail.com",
      "protonmail.com",
      "zoho.com",
      "yandex.com",
      "outlook.co.uk",
      "gmx.com",
      "fastmail.com",
      "me.com",
      "inbox.com",
      "tutanota.com",
      "hushmail.com",
      "startmail.com",
      "lavabit.com",
      "mailinator.com",
      "tutamail.com",
      "cock.li",
      "tutamail.com",
      "runbox.com",
      "disroot.org",
      "safe-mail.net",
      "riseup.net",
      "eclipso.eu",
      "rediffmail.com",
      "indiatimes.com",
      "mail.ru",
      "ymail.com",
      "gmx.us",
      "gmx.net",
      "10minutemail.com",
      "guerrillamail.com",
      "temp-mail.org",
      "trash-mail.com",
      "sharklasers.com",
    ];

    const domain = email.split("@")[1]?.toLowerCase();
    if (NotallowedDomains.includes(domain)) {
      throw new Error("Enter work email only");
    }
  };

  async function handleSubmit() {
    let hasErrors = false;

    try {
      validateEmailDomain(formik.values.email);
    } catch (error) {
      setError(error.message);
      hasErrors = true;
    }

    // First validate the Formik form
    const formErrors = await formik.validateForm();
    const hasFormErrors = Object.keys(formErrors).length > 0;

    // If there are form errors, touch all fields to show errors and return
    if (hasFormErrors) {
      formik.setTouched({
        firstName: true,
        lastName: true,
        email: true,
        companyName: true,
        position: true,
      });
      return;
    }

    // Then validate phone number
    let hasPhoneErrors = false;

    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required");
      hasPhoneErrors = true;
    } else if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must be numeric");
      hasPhoneErrors = true;
    } else if (phoneNumber.length < phoneNumberlength) {
      setPhoneNumberError(
        `Phone number must be atleast ${phoneNumberlength} digits`
      );
      hasPhoneErrors = true;
    }

    if (hasPhoneErrors) {
      return;
    }

    if (hasErrors) {
      return;
    }

    setIsSubmitting(true);
    setError("");

    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        first_name: formik.values.firstName,
        last_name: formik.values.lastName,
        email: formik.values.email,
        phone: {
          cid: Countryid,
          phone_number: phoneNumber,
          country_code: countryCode,
        },
        company_name: formik.values.companyName,
        position: formik.values.position,
      })
    );

    try {
      const userRes = await messageRequest(formData);
      console.log("userData is *********", userRes.msg);

      if (userRes.msg === "success") {
        setShowSuccess(true);
        console.log("Form submitted successfully");

        setTimeout(() => {
          if (setIsOpenModel) setIsOpenModel(false);
        }, 2000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setError("An error occurred during submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleClose = () => {
    if (setIsOpenModel) {
      setIsOpenModel(false);
    }
  };

  // Handle click outside modal to close
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  React.useEffect(() => {
    if (isOpenModel) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpenModel]);

  return (
    <AnimatePresence mode="wait">
      {isOpenModel && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={handleOverlayClick}
          style={{ margin: 0, padding: 0 }}
        >
          <motion.div
            key="modal-content"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative bg-white rounded-[10px] shadow-2xl max-w-[1127px] w-[90%] max-h-[90vh] overflow-y-auto m-4"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 md:top-4 right-2 md:right-4 z-10 h-[36px] w-[36px] rounded-full border border-[#000000] flex justify-center items-center bg-white hover:bg-gray-100 transition-colors"
            >
              <RxCross1 />
            </button>

            <div className="flex flex-col lg:flex-row gap-[60px] lg:p-[60px]">
              {/* Left Side - Card */}
              <div className="hidden flex-1 md:flex flex-col gap-[40px] justify-center items-center">
                <div className="flex flex-col gap-[30px]">
                  <h2 className="    font-[600] text-[32px] lg:text-[55px] leading-[120%] text-[#191B1F] text-center">
                    Ready to Hire Smarter with AI?
                  </h2>
                  <p className="    font-[400] text-[16px] lg:text-[21px] leading-[29px] text-[#41474E] text-center">
                    Get a personalized demo of how avua® helps you automate
                    interviews, reduce bias, and hire top talent 70% faster.
                  </p>
                </div>
                <div className="">
                  <img src={peoples} alt="People illustration" />
                </div>
              </div>

              {/* Right Side - Form */}
              <div
                className="flex-1 p-[20px] lg:p-[23px] rounded-[10px]"
                style={{ boxShadow: "0px 7px 30px 0px rgba(0, 0, 0, 0.13)" }}
              >
                <AnimatePresence mode="wait">
                  {showSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="h-full flex justify-center items-center"
                    >
                      <div className="flex flex-col justify-center items-center gap-[15px] p-[20px] bg-[#28B1621A] rounded-[10px]">
                        <div className="relative z-3 w-[30px] h-[30px] rounded-full flex items-center justify-center transition-colors duration-300 bg-[#28B162]">
                          <FaCheck
                            color={"white"}
                            style={{ width: "13px", height: "13px" }}
                          />
                        </div>
                        <p className="    font-[400] text-[16px] leading-[150%] text-center">
                          Thank you, a member of our team will be in touch soon.
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col gap-[23px]"
                    >
                      <div className="flex flex-col gap-[14px]">
                        <h1 className="    font-[500] text-[24px] lg:text-[31px] leading-[120%] text-[#2B1845] text-center">
                          Request a demo
                        </h1>
                        <p className="    font-[400] text-[16px] lg:text-[18px] leading-[150%] text-[#41474E] text-center">
                          Connect with our team to explore how avua® supports
                          hiring at scale.
                        </p>
                      </div>

                      <form
                        onSubmit={formik.handleSubmit}
                        className="flex flex-col gap-[24px]"
                      >
                        <div className="flex flex-col lg:flex-row gap-[25px]">
                          <div className="w-full">
                            <TextInput
                              type={"text"}
                              name={"firstName"}
                              lable={"First Name*"}
                              placeholdertext={"Enter First Name"}
                              value={formik.values.firstName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              labelStyle={true}
                              inputStyle="w-full border-[1px] placeholder:    placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-4 pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
                            />
                            {formik.errors.firstName &&
                              formik.touched.firstName && (
                                <p className="text-[#e55451] text-[12px]">
                                  {formik.errors.firstName}
                                </p>
                              )}
                          </div>
                          <div className="w-full">
                            <TextInput
                              type={"text"}
                              name={"lastName"}
                              lable={"Last Name*"}
                              placeholdertext={"Enter Last Name"}
                              value={formik.values.lastName}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              labelStyle={true}
                              inputStyle="w-full border-[1px] placeholder:    placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-4 pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
                            />
                            {formik.errors.lastName &&
                              formik.touched.lastName && (
                                <p className="text-[#e55451] text-[12px]">
                                  {formik.errors.lastName}
                                </p>
                              )}
                          </div>
                        </div>

                        <div className="w-full">
                          <TextInput
                            type={"text"}
                            name={"companyName"}
                            lable={"Company Name*"}
                            placeholdertext={"Enter Company Name"}
                            value={formik.values.companyName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            labelStyle={true}
                            inputStyle="w-full border-[1px] placeholder:    placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-4 pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
                          />
                          {formik.errors.companyName &&
                            formik.touched.companyName && (
                              <p className="text-[#e55451] text-[12px]">
                                {formik.errors.companyName}
                              </p>
                            )}
                        </div>

                        <div className="w-full">
                          <TextInput
                            type={"text"}
                            name={"position"}
                            lable={"Position*"}
                            placeholdertext={"Enter Your Position"}
                            value={formik.values.position}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            labelStyle={true}
                            inputStyle="w-full border-[1px] placeholder:    placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-4 pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
                          />
                          {formik.errors.position &&
                            formik.touched.position && (
                              <p className="text-[#e55451] text-[12px]">
                                {formik.errors.position}
                              </p>
                            )}
                        </div>

                        <div>
                          <TextInput
                            type={"email"}
                            name={"email"}
                            lable={"Business Email*"}
                            placeholdertext={"Enter Business Email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            labelStyle={true}
                            inputStyle="w-full border-[1px] placeholder:    placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-4 pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
                          />
                          {formik.errors.email && formik.touched.email && (
                            <p className="text-[#e55451] text-[12px]">
                              {formik.errors.email}
                            </p>
                          )}
                        </div>

                        <PhoneInputNew
                          name="phoneNumber"
                          label="Phone Number*"
                          countryCodes={countryCodes}
                          selectedCountryCode={countryCode}
                          phoneNumber={phoneNumber}
                          onCountryCodeChange={handleCountryCodeChange}
                          onPhoneNumberChange={handlePhoneNumberChange}
                          error={phoneNumberError}
                          placeholder="Phone Number"
                          isLoading={isLoading}
                        />

                        {error && (
                          <p className="text-[#e55451] text-[12px]">{error}</p>
                        )}

                        <div className="flex flex-col gap-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full     font-[600] text-[16px] leading-[120%] text-[#FFFFFF] bg-gradient-to-r from-[#6B3BAB] to-[#2B1845] rounded-[4px] text-center px-[40px] py-[16px] disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg transition-shadow"
                          >
                            {isSubmitting
                              ? "Submitting..."
                              : "Book A Free Demo"}
                          </button>
                          {/* <p className="    font-[400] text-[12px] leading-[150%] text-[#A2A2A2]">
                            Discover how{" "}
                            <span className="font-[600]">
                              avua's AI matches top talent in seconds
                            </span>
                            , transforming your hiring process effortlessly.
                          </p> */}
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ContactForm;
