import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";

const PhoneNumberInput = ({
  countryCodes,
  selectedCountryCode,
  phoneNumber,
  onCountryCodeChange,
  onPhoneNumberChange,
  name,
  label,
  error,
  placeholder,
  disabled,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    selectedCountryCode
      ? countryCodes.find((country) => country.code === selectedCountryCode)
      : countryCodes[0]
  );
  const [numberLimit, setNumberLimit] = useState(
    selectedCountry.phoneLength || 10
  );

  useEffect(() => {
    const selected = countryCodes.find(
      (country) => country.code === selectedCountryCode
    );
    if (selected) {
      setSelectedCountry(selected);
      setNumberLimit(selected.phoneLength || 10);
    }
  }, [selectedCountryCode, countryCodes]);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    const selected = countryCodes.find(
      (country) => country.code === countryCode
    );
    setSelectedCountry(selected);
    setNumberLimit(selected.phoneLength || 10);
    onCountryCodeChange(countryCode);
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value;
    onPhoneNumberChange(number);
  };

  return (
    <div className="w-full flex items-center justify-center">
      <div
        className="flex items-center w-full   h-[50px] rounded-l-full rounded-r-full font-outfit font-normal  
    focus:outline-none focus:border-textPrimary placeholder:text-body-1 border-[1px] border-[#8A3DEF]   
    text-textPrimary  px-3"
      >
        <div className="mr-2">
          <ReactCountryFlag
            countryCode={selectedCountry.code}
            aria-label={selectedCountry.label}
            svg
          />
        </div>
        <select
          disabled={disabled}
          name="countryCode"
          value={selectedCountry?.code}
          onChange={handleCountryChange}
          className={`border-none w-[50px] mr-2  w-[${
            selectedCountry?.code.length * 10
          }px] focus:outline-none`}
        >
          {countryCodes.map((country) => (
            <option key={country.code} value={country.code}>
              {country.phone}
            </option>
          ))}
        </select>
        <input
          className="border-none rounded-full focus:outline-none pl-2 font-poppins "
          type="number"
          maxLength={numberLimit}
          name={name}
          placeholder={placeholder || "Your Phone"}
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      {error && <p className="text-red text-caption">{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
