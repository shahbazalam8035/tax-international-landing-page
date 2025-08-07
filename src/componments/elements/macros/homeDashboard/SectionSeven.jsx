import React from "react";
import Form from "../../micros/Form";
import Footer from "../../micros/Footer";

const SectionSeven = () => {
  return (
    <>
      <div className="bg-white lg:h-[647px] w-screen flex flex-col gap-[50px] ">
        <div className="h-230px flex flex-col gap-6 justify-center items-center  px-8">
          <h1 className="md:text-[58px] text-[33px] font-poppins font-bold text-center">
            Transform Your Productivity
          </h1>
          <p className="font-poppins text-[16px] text-center">
            Want to know more about how we do what we do? Contact us.
          </p>
        </div>

        <Form />
      </div>
      <Footer />
    </>
  );
};

export default SectionSeven;
