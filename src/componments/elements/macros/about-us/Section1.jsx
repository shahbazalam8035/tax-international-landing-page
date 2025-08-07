import React from "react";
import AboutUsThumb1 from "../../../../assets/images/about-thumb-1.jpg";
import AboutUsThumb2 from "../../../../assets/images/about-thumb-2.jpg";

function Section1() {
  return (
    <div className="container mx-auto px-6 mt-[-80px] flex justify-center lg:pt-[170px] pt-[140px] lg:pb-[80px] pb-[40px]">
      <div className="flex flex-col lg:gap-[120px] gap-[30px] items-center justify-center">
        {/* top section */}
        <div className="flex lg:gap-[60px] gap-5 lg:flex-row flex-col">
          {/* left section */}
          <div className="flex-[0.5]">
            <p className="flex items-center font-semibold lg:text-[34px] text-[28px] leading-[120%] tracking-[-1.6px] text-[#2B1845] mb-6  lg:text-start text-center">
              Established in 2019, TRX is a specialist talent
              solutions provider dedicated exclusively to the global nuclear
              sector.
            </p>
            <p className=" lg:hidden block font-normal lg:text-[18px] text-[16px] leading-[120%] text-[#4C4C4C] mb-5 text-center">
            Our mission is rooted in the belief that nuclear power is not only
            essential to achieving net-zero carbon goals but also vital to
            ensuring long-term global energy security. We exist to support this
            critical mission by connecting the world’s most skilled
            professionals with the companies, institutions, and governments
            leading the charge.
            </p>
            <div className="flex gap-5">
              <div>
              <img
                src={AboutUsThumb1}
                alt=""
                className="lg:w-[230px] lg:h-auto w-auto h-[230px] object-cover rounded-[20px]"
              />
              </div>
              <div>
              <img
                src={AboutUsThumb2}
                alt=""
                className="lg:w-[230px] lg:h-auto  w-auto h-[230px] object-cover rounded-[20px]"
              />
              </div>
            </div>

          </div>

          {/* right section */}
          <div className="flex-[0.5] font-normal lg:text-[18px] text-[16px] leading-[24px] text-[#4C4C4C] flex flex-col gap-5 lg:text-start text-center">
            <p className="lg:block hidden">
            Our mission is rooted in the belief that nuclear power is not only
            essential to achieving net-zero carbon goals but also vital to
            ensuring long-term global energy security. We exist to support this
            critical mission by connecting the world’s most skilled
            professionals with the companies, institutions, and governments
            leading the charge.
            </p>
            <p>
            We partner with stakeholders across the entire nuclear
            lifecycle—from research and development through to new build,
            operations, life extension, and safe decommissioning. Whether
            supporting next-generation technologies like small modular reactors
            (SMRs) and advanced reactors, or maintaining legacy infrastructure,
            TRX provides the talent solutions necessary to deliver safe,
            efficient, and innovative nuclear projects.
            </p>
            <p>
            Our deep market knowledge, niche focus, and commitment to industry
            best practices—including alignment with ISO 9001 Quality Management
            standards—enable us to offer tailored, compliant, and future-ready
            workforce solutions that meet the highest standards of the nuclear
            industry.
            </p>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex sm:gap-[60px] gap-6  flex-col sm:flex-row ">
          <div className="flex-[0.5] space-y-5 rounded-[20px] lg:p-10 p-5 bg-gradient-to-r from-[#6B3BAB] to-[#2B1845]">
            <h2 className="font-semibold lg:text-[34px] text-[28px] leading-[120%] tracking-[-1.6px] text-[#FFFFFF]">
              Our Purpose
            </h2>
            <p className="font-normal lg:text-[18px] text-[16px] leading-[150%] text-[#EEEEEE]">
              To accelerate the global nuclear renaissance by connecting
              critical infrastructure projects with world-class talent—ensuring
              safety, reliability, and innovation at every step of the energy
              transition.
            </p>
          </div>
          <div className="flex-[0.5] space-y-5 rounded-[20px] lg:p-10 p-5 bg-gradient-to-r from-[#6B3BAB] to-[#2B1845]">
            <h2 className="font-semibold lg:text-[34px] text-[28px] leading-[120%] tracking-[-1.6px] text-[#FFFFFF]">
              Our Vision
            </h2>
            <p className="font-normal lg:text-[18px] text-[16px] leading-[150%] text-[#EEEEEE]">
              To be the most trusted and specialised recruitment partner in
              nuclear energy, recognised for our ability to connect technical
              excellence with global opportunity—enabling the sector to deliver
              on its promise of a cleaner, safer, and more resilient energy
              future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
