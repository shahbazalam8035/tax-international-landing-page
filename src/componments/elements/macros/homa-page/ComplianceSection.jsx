import React from 'react'
import Lottie from 'lottie-react';
import lottieAnimation from "../../../../assets/images/lotties/trx-home-hero-section.json";
import bgImage from "../../../../assets/images/compliance-bg-img.png"


const ComplianceSection = () => {
  return (
    <div className="">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="flex mx-auto lg:flex-row flex-col lg:gap-[40px] gap-[20px] ">
          <div className="lg:flex-[0.4] flex-1">
          <p className="lg:text-[56px] text-[30px] text-[#2b1845] leading-[120%] lg:hidden block lg:text-start text-center mb-[20px]">
              Compliance
            </p>
            <Lottie
              animationData={lottieAnimation}
              loop={true}
              className="lg:h-[300px] h-[250px]"
            />
          </div>
          <div className="lg:flex-[0.6] flex-1 flex flex-col justify-center relative">
            <div className="absolute lg:top-[50px]">
              <img
                src={bgImage}
                alt=""
                className=" lg:w-[600px] lg:h-[300px] object-cover "
              />
            </div>
            <p className="text-[56px] text-[#2b1845] leading-[120%] lg:block hidden ">
              Compliance
            </p>
            <p className="mt-4 max-w-[900px] text-[18px] text-[#424242] leading-[150%] lg:text-start text-center">
              Full adherence to industry regulations, certifications and work
              space standards, mitigating risk and safeguarding your operations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComplianceSection