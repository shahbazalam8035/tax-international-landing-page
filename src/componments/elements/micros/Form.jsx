import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { messageRequest } from "../../../api/services";
import { FaLinkSlash } from "react-icons/fa6";
import { countryCodes } from "../../../utils/countryPhoneCodes";
import PhoneNumberInput from "./PhoneNumberInput";

const Form = () => {
  const [phoneNumberlength, setphoneNumberlength] = useState(10);
  const [countryCode, setCountryCode] = useState("GB"); // Default country code
  const [Countryid, setCountryid] = useState("+44");
  const [phoneNumber, setphoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [error, setError] = useState("");
  const [succesMessage, setSuccessMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      enquiry: "",
      subject: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("name is required"),
      email: Yup.string()
        .required(" email is required")
        .email("please enter valid email"),
      enquiry: Yup.string().required("Message is required"),
      subject: Yup.string().required("Subject is required"),
    }),

    onSubmit: handleSubmit,
  });

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

  async function handleSubmit() {
    console.log("Reached here ");
    let hasErrors = false;

    if (!phoneNumber) {
      setPhoneNumberError("Phone number is required");
      hasErrors = true;
    } else if (!/^\d+$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must be numeric");
      hasErrors = true;
    } else if (phoneNumber.length < 10) {
      setPhoneNumberError("Phone number must be at least 10 digits");
      hasErrors = true;
    }

    if (hasErrors) {
      console.log("Returning ");
      return;
    }
    const formData = new FormData();
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
        enquiry: formik.values.enquiry,
        subject: formik.values.subject,
      })
    );

  

    try {
      const userRes = await messageRequest(formData);
      console.log(userRes?.msg);

      if (userRes?.msg === "success") {
        console.log("Sent successfully");
        setSuccessMessage(true);
      } else {
        setError("Message  failed.");
      }
    } catch (error) {
      setError("An error occurred during signup.");
    }
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="w-full flex flex-col lg:gap-[18px] gap-[20px] lg:px-16 px-7">
        <div className="flex lg:flex-row flex-col lg:gap-[73px] gap-[20px]">
          <div className="relative lg:w-1/2 w-full ">
            <div className="relative flex flex-col gap-[5px] ">
              <h1 className="font-poppins  text-[16px]  ml-1">Name</h1>
              <input
                type="text"
                placeholder="Your name"
                name={"firstName"}
                className="font-poppins w-full h-[43px]  border-[1px] border-[#8A3DEF]  rounded-l-full rounded-r-full pl-5"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
              {formik.errors.firstName && formik.touched.firstName && (
                <p className=" text-red-500 text-poppins">
                  {formik.errors.firstName}
                </p>
              )}
            </div>
          </div>
          <div className="relative lg:w-1/2 w-full">
            <div className="relative flex flex-col gap-[5px] ">
              <h1 className="font-poppins  text-[16px]  ml-1">E-mail</h1>
              <input
                type="email"
                placeholder="Your E-mail"
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                className="font-poppins w-full h-[43px]  border-[1px] border-[#8A3DEF]  rounded-l-full rounded-r-full pl-5"
              />
              {formik.errors.email && formik.touched.email && (
                <p className=" text-poppins text-red-400">
                  {formik.errors.email}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:gap-[73px] gap-[20px]">
          {/* <div className="relative lg:w-1/2 w-full">
            <div className="relative flex flex-col gap-[5px] ">
              <h1 className="font-poppins  text-[16px]  ml-1">Phone Number</h1>
              <input
                type="number"
                placeholder="Your Phone Number"
                className="font-poppins w-full h-[43px]  border-[1px] border-[#8A3DEF] py-2 rounded-l-full rounded-r-full pl-5"
                required
              />
            </div>
          </div> */}
          <div className=" lg:w-1/2 w-full">
            <div className="relative flex flex-col gap-[5px] ">
              <h1 className="font-poppins  text-[16px]  ml-1">Phone Number</h1>

              <PhoneNumberInput
                countryCodes={countryCodes}
                selectedCountryCode={countryCode}
                phoneNumber={phoneNumber}
                onCountryCodeChange={handleCountryCodeChange}
                onPhoneNumberChange={handlePhoneNumberChange}
              />
              {phoneNumberError && (
                <p className=" text-red-500 text-poppins">{phoneNumberError}</p>
              )}
            </div>
          </div>

          <div className="relative lg:w-1/2 w-full">
            <div className="relative flex flex-col gap-[5px] ">
              <h1 className="font-poppins  text-[16px]  ml-1">Subject</h1>
              <input
                type="text"
                placeholder="Subject"
                name={"subject"}
                value={formik.values.subject}
                onChange={formik.handleChange}
                className="font-poppins w-full   border-[1px] border-[#8A3DEF] py-2 rounded-l-full rounded-r-full pl-4"
              />
              {formik.errors.subject && formik.touched.subject && (
                <p className=" text-red-500 text-poppins">
                  {formik.errors.subject}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className=" flex flex-col gap-[5px]">
          <h1 className="font-poppins  text-[16px]  ml-1">Your Message</h1>

          <textarea
            className="w-full h-[130px] pl-5 font-poppins  border-[1px] border-[#8A3DEF] rounded-lg py-2"
            placeholder="Enter a text"
            name={"enquiry"}
            value={formik.values.enquiry}
            onChange={formik.handleChange}
          ></textarea>
          {formik.errors.enquiry && formik.touched.enquiry && (
            <p className=" text-red-500 text-poppins">
              {formik.errors.enquiry}
            </p>
          )}
        </div>

        <div className="flex justify-center items-center mt-8">
          <button
            type="submit"
            className="text-poppins text-white text-[14px]  bg-[#6B3BAB] lg:w-[155px] w-[127px] h-[42px] rounded-l-full rounded-r-full "
          >
            SEND MESSAGE
          </button>
        </div>
        {succesMessage && (
          <div className="flex justify-center items-center">
            <div className="w-2/5 bg-[#00FF571F] flex items-center justify-center p-4">
              <h1 className="font-poppins text-[#00FF57]">
                Thank you! Your submission has been recieved!{" "}
              </h1>
            </div>
          </div>
        )}
        {error !== "" && (
          <div className="flex justify-center items-center">
            <div className="w-2/5 bg-[#FF00001F] flex items-center justify-center p-4">
              <h1 className="font-poppins text-[#FF0000]">
              Sorry! Your submission could not be processed.{" "}
              </h1>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
