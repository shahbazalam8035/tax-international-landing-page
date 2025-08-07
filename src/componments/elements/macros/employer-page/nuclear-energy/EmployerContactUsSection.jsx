import React, {useState} from 'react'
import ContactForm from '../../ContactForm';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const EmployerContactUsSection = () => {
  const [isOpenModel, setIsOpenModel] = useState(false);

  const openContactModel = () => {
    setIsOpenModel(true);
  };

  return (
    <div className="bg-[#F5F7FF]">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
        <div className="bg-[#ffffff] lg:p-[40px] p-[20px] rounded-xl flex justify-between lg:flex-row flex-col gap-[20px]">
          <div>
            <h4 className="text-[#000000] lg:text-[42px] text-[30px] leading-[120%] font-semibold">
              Looking to hire?
            </h4>
            <p className="text-[#5C6370] lg:text-[28px] text-[18px] leading-[120%]">
              Connect with our team
            </p>
          </div>
          <div className=''>
            <button
            onClick={openContactModel}
            className="rounded-full lg:w-[500px] w-full  bg-gradient-to-r from-[#6B3BAB] to-[#2B1845] text-[#FFFFFF] flex items-center justify-between gap-[10px] py-[16px] px-[20px] transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
              <span className="text-[#FFFFFF] text-[20px] leading-[150%] font-semibold">Contact us</span>{" "}
              <BsArrowUpRightCircleFill size={25} />
            </button>
          </div>
        </div>
      </div>

      {isOpenModel && (
        <ContactForm
          setIsOpenModel={setIsOpenModel}
          isOpenModel={isOpenModel}
        />
      )}
    </div>
  );
}

export default EmployerContactUsSection