import React from 'react'
import Footer from '../../micros/Footer'
import Form from '../../micros/Form'


const SectionFive = () => {
  return (
    <>
    <div className="bg-white md:h-[647px] w-screen flex flex-col gap-12 px-2 md:px-0 ">
    <div className="md:h-230px flex flex-col gap-4 justify-center items-center">
      <h1 className="md:text-[58px] text-[33px] font-poppins font-bold">
        Why Wait?
      </h1>
      <p className="font-poppins text-[16px] text-center ">
      If you are looking to speak with a TRX consultant, get in touch below.
      </p>
    </div>
    <Form />
  </div>
  <Footer />


  </>
  )
}

export default SectionFive