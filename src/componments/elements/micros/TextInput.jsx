import React, { useState } from "react";
// import { icons } from "../../../../assets/exportImgs";

const TextInput = ({
  lable,
  name,
  placeholdertext,
  icon,
  isPassword,
  type,
  value,
  onChange,
  onBlur,
  error,
  inputStyle = "",
  labelStyle = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="w-full flex flex-col gap-2">
      <label
        className={`text-body1 flex justify-start font-poppins ${
          labelStyle ? "text-[#1B1B1B]" : "text-[#7B7B7B]"
        }`}
      >
        {lable}
      </label>
      <div className="relative flex items-center">
        <img src={icon} alt="" className="absolute left-4 " />
        <input
          type={isPassword ? (isVisible ? "text" : "password") : type}
          placeholder={placeholdertext}
          className={`${
            inputStyle
              ? inputStyle
              : "w-full border-[1px] placeholder:font-poppins placeholder:text-[#A2A2A2] placeholder:text-body1 bg-[#F8F9FE] border-[#D9D9D9] h-[52px] rounded-[10px] pl-[55px] pr-6 focus:outline-none hover:bg-white hover:shadow-2xl hover:cursor-pointer"
          }`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {/* {isPassword && (
          <img
            src={icons.form.eye_auth}
            alt=""
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setIsVisible(!isVisible)}
          />
        )} */}
      </div>
      {error && (
        <div className="text-red text-hint flex justify-start">{error}</div>
      )}
    </div>
  );
};

export default TextInput;
