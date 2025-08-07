import React from 'react';
import uploadCvImage from "../../../../assets/images/uploadCvIcon.svg"

const UploadCvSection = () => {
  return (
    <div className="container px-6 lg:py-[80px] py-[40px] mx-auto">
      <div>
        <div className="text-center">
          <h3 className="lg:text-[55px] text-[30px] leading-[150%] text-[#2b1845] font-bold mb-[10px]">
            Find out your CV score for free!
          </h3>
          <p className="md:block hidden md:text-[18px] text-[16px] md:text-[#6A2CBE] text-[#424242] leading-[120%] md:font-semibold">
            Powered by our expert partners for personalized resume insights.
          </p>
        </div>
        <div className="flex lg:flex-row flex-col gap-6 justify-center mt-10 max-w-[1040px] w-full mx-auto">
          <div className="flex-[0.35] space-y-6">
            <p className="text-[#864EFF] text-[20px] leading-[120%] font-medium pl-[20px] border-l-2 border-[#864EFF]">
              Upload Your CV
            </p>
            <p className="text-[#7B7B7B] text-[20px] leading-[120%] font-medium pl-[20px] border-l-2 border-[#7B7B7B]">
              Select a Job Role <span>(Optional)</span>
            </p>
            <p className="text-[#7B7B7B] text-[20px] leading-[120%] font-medium pl-[20px] border-l-2 border-[#7B7B7B]">
              Get Your Personalized Analysis
            </p>
          </div>
          <div className="flex-[0.65] h-[312px] bg-[#D2D5FF33] rounded-[20px] flex justify-center items-center p-[20px]">
            <div className=" flex justify-center items-center flex-col space-y-[10px] lg:py-0 py-[20px]">
              <img src={uploadCvImage} alt="" />
              <p className='text-[23px] text-[#2b1845] leading-[120%] font-semibold'>CVs</p>
              <a
              href='https://avua.online/applicant/resume-builder?scrollTo=cv-upload' target='blank'
                id="cv-upload-analysis" // id added for Google Tag Manager Click button detection
                className={`bg-gradient-to-r from-[#864EFF] to-[#502F99] text-white  hover:bg-gradient-to-r hover:from-[#864EFF] hover:to-[#502F99] hover:text-transparent hover:bg-clip-text px-[20px] py-[10px] rounded-[50px] cursor-pointer border border-[#864EFF] font-[500] text-[16px] "`}
              >
                Upload resume
              </a>
              <p className="text-[14px] text-[#A2A2A2] text-center">
                Supported formats: doc, docx, rtf, pdf, up to 2MB
              </p>
            </div>
          </div>
        </div>
        <div>
        <p className="md:hidden  block  text-[16px]  text-[#7b7b7b] leading-[120%] text-center my-[20px]">
            Powered by our expert partners for personalized resume insights.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UploadCvSection