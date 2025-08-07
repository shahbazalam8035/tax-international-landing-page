import React, { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { MdKeyboardArrowDown } from "react-icons/md";

const PhoneInputNew = ({
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
  isLoading,
  isRounded = false,
}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    selectedCountryCode
      ? countryCodes.find((country) => country.code === selectedCountryCode)
      : countryCodes[0]
  );
  const [numberLimit, setNumberLimit] = useState(
    selectedCountry.phoneLength || 10
  );
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredCountryCode, setFilteredCountryCode] = useState(countryCodes);

  const [search, setSearch] = useState("");
  const countryDropdownRef = useRef();

  useEffect(() => {
    const selected = countryCodes.find(
      (country) => country.code === selectedCountryCode
    );
    if (selected) {
      setSelectedCountry(selected);
      setNumberLimit(selected.phoneLength || 10);
    }
  }, [selectedCountryCode, countryCodes]);

  const handleCountryChange = (countryCode) => {
    const selected = countryCodes.find(
      (country) => country.code === countryCode
    );
    setSelectedCountry(selected);
    setNumberLimit(selected.phoneLength || 10);
    onCountryCodeChange(countryCode);
    setSearch("");
    setFilteredCountryCode(countryCodes);
    setShowDropdown(false); // Close the dropdown after selection
  };

  const handlePhoneNumberChange = (e) => {
    const number = e.target.value.replace(/[^0-9]/g, ""); // Remove non-numeric characters
    onPhoneNumberChange(number);
  };

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
    // if (!showDropdown) {
    //   setSelectedCountry(countryCodes[0]); // Reset to the first country when opening the dropdown
    // }
  };
  const handleChangeFilterCountry = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearch(searchValue);

    const filteredCountryCode = countryCodes.filter(
      (country) =>
        country.label.toLowerCase().includes(searchValue) ||
        country.phone.includes(searchValue)
    );
    setFilteredCountryCode(filteredCountryCode);
  };
  useEffect(() => {
    let handler = (e) => {
      if (!countryDropdownRef?.current?.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
  });
  return (
    <div
      className="w-full flex flex-col justify-start items-start"
      ref={countryDropdownRef}
    >
      <label
        htmlFor={name}
        className={`pb-2 ${
          isRounded
            ? "lg:text-[20px] text-[16px] leading-[150%] text-[#686868] font-medium"
            : "text-[16px] leading-[24px] text-[#1B1B1B] font-normal font-poppins"
        }`}
      >
        {label}
      </label>

      <div
        className={`relative flex items-center w-full h-[52px] font-poppins font-normal  px-2 
          focus:outline-none focus:border-textPrimary placeholder:text-body-1   
          text-textPrimary hover:bg-white hover:cursor-pointer ${
            isRounded
              ? "rounded-[27px] bg-white"
              : "rounded-[10px] bg-[#F8F9FE] hover:shadow-2xl border border-[#D9D9D9]"
          }`}
      >
        {isLoading ? (
          <></>
        ) : (
          <>
            <div className="">
              <div
                className={`flex items-center cursor-pointer ${
                  isRounded ? "pl-5" : ""
                }`}
                onClick={toggleDropdown}
              >
                <ReactCountryFlag
                  countryCode={selectedCountry.code}
                  aria-label={selectedCountry.label}
                  svg
                  className="mr-2"
                />
                <span
                  className={`whitespace-nowrap w-fit py-2 mr-5px text-black`}
                >
                  {selectedCountry.phone}
                </span>
                <MdKeyboardArrowDown className="h-10 w-10 text-black" />
              </div>
              {showDropdown && (
                <>
                  <div className={`absolute top-12 right-0 left-0 pb-10 z-10 `}>
                    <div className="bg-white mb-20 border border-gray-300 rounded-md mt-2 shadow-lg w-full ">
                      <input
                        type="text"
                        className="p-2 text-black w-full rounded-md border focus:outline-none focus:border-textPrimary"
                        placeholder="Search by country name or code..."
                        value={search}
                        onChange={handleChangeFilterCountry}
                      />
                      <div className="p-2 overflow-auto max-h-60">
                        {filteredCountryCode.map((country) => (
                          <div
                            key={country.code}
                            onClick={() => handleCountryChange(country.code)}
                            className="flex items-center p-2 hover:bg-[#f8f9fe] cursor-pointer"
                          >
                            <ReactCountryFlag
                              countryCode={country.code}
                              aria-label={country.label}
                              svg
                              className="mr-2"
                            />
                            <span>
                              {country.label} ({country.phone})
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <input
              className={`border-none rounded-[10px] focus:outline-none p-2 bg-[#F8F9FE]  w-full  ${
                isRounded
                  ? "bg-white lg:text-[20px] text-[16px] leading-[150%] text-[#7b7b7b] font-normal"
                  : "bg-[#F8F9FE] text-black"
              }`}
              type="tel"
              maxLength={numberLimit}
              name={name}
              placeholder={placeholder || "Mobile No."}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </>
        )}
      </div>
      {error && (
        <p
          className={`${
            isRounded ? "text-red-400 mt-[12px]" : "text-[#e55451] text-[12px]"
          }`}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default PhoneInputNew;
