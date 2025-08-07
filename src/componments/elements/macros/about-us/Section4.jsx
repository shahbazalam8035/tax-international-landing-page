import React from "react";
import AE from "../../../../assets/images/AE.png";
import GB from "../../../../assets/images/GB.png";
import IN from "../../../../assets/images/IN.png";

function Section4() {
  return (
    <div className="bg-gradient-to-b from-[#DFDEF800] to-[#DFDEF8]">
      <div className="container mx-auto px-6 lg:py-[80px] py-[40px]">
      <div className="relative flex flex-col items-center lg:h-[250px] mb-[20px] lg:mb-0">
        {/* bgimage */}
        <div
          className="absolute lg:block hidden left-1/2 top-0 translate-x-[-50%] w-[792px] h-[396px] border-t-[28px] border-x-[28px] border-b-0 border-[#e1d8ff] rounded-t-full"
          style={{ zIndex: 10 }}
        >
          <div className="w-full h-full border-t-[4px] border-x-[4px] border-b-0 border-[#8a54ff] rounded-t-full"></div>
        </div>

        <div className="relative lg:top-[80px]">
          <h2 className="font-medium lg:text-[44px] text-[28px] leading-[120%] tracking-[-0.44px] text-[#864EFF] text-center mb-[10px]">
            Global Offices
          </h2>
          <p className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242] text-center">
            TRX International operates through a strategic network of offices,
            <span className="lg:block">
              enabling us to deliver local expertise on a global scale and
              provide seamless
            </span>
            support across time zones and regulatory environments.
          </p>
        </div>
      </div>
        <div className="flex lg:gap-11 gap-5 lg:flex-row flex-col">
          {/* card 1 */}
          <div
            className="p-8 rounded-[16px] z-20 hover:scale-105 transition-all duration-300"
            style={{
              backgroundImage:
                "radial-gradient(circle at top center, #BBBDFF, #FFFFFF)",
            }}
          >
            <div className="flex gap-6 items-center">
              <img src={GB} alt="" className="w-[24px] h-[28px]" />
              <div>
                <h3 className="font-medium lg:text-[24px] text-[20px] leading-[150%] tracking-[-0.48px] text-[#3A3A3A]">
                  Head Office
                </h3>
                <p className="font-medium text-[18px] leading-[28px] tracking-[-0.48px] text-[#3A3A3A]">
                  United Kingdom
                </p>
              </div>
            </div>
            <p className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242]">
              Located in the UK, our headquarters manages operations across
              Europe and North America, supporting established nuclear markets
              and major infrastructure projects, including SMRs,
              decommissioning, and new build programs.
            </p>
          </div>

          {/* card 2 */}
          <div
            className="p-8 rounded-[16px] z-20 hover:scale-105 transition-all duration-300"
            style={{
              backgroundImage:
                "radial-gradient(circle at top center, #BBBDFF, #FFFFFF)",
            }}
          >
            <div className="flex gap-6 items-center">
              <img src={AE} alt="" className="w-[24px] h-[28px]" />
              <div className="">
                <h3 className="font-medium lg:text-[24px] text-[20px] leading-[150%]  tracking-[-0.48px] text-[#3A3A3A]">
                  Middle East Hub
                </h3>
                <p className="font-medium text-[18px] leading-[28px] tracking-[-0.48px] text-[#3A3A3A]">
                  Dubai
                </p>
              </div>
            </div>
            <p className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242]">
              Our Dubai office oversees recruitment and client delivery across
              the Middle East and North Africa (MENA) region, with a focus on
              civil nuclear programs, energy diversification strategies, and
              regional innovation initiatives.
            </p>
          </div>

          {/* card 3 */}
          <div
            className="p-8 rounded-[16px] z-20 hover:scale-105 transition-all duration-300"
            style={{
              backgroundImage:
                "radial-gradient(circle at top center, #BBBDFF, #FFFFFF)",
            }}
          >
            <div className="flex gap-6 items-center">
              <img src={IN} alt="" className="w-[24px] h-[28px]" />
              <div>
                <h3 className="font-medium lg:text-[24px] text-[20px] leading-[150%] tracking-[-0.48px] text-[#3A3A3A]">
                  Asia Delivery Centre
                </h3>
                <p className="font-medium text-[18px] leading-[28px] tracking-[-0.48px] text-[#3A3A3A]">
                  India
                </p>
              </div>
            </div>
            <p className="font-normal text-[16px] leading-[25.6px] tracking-[-0.32px] text-[#424242]">
              Serving as our Asia-Pacific operations hub, the India office
              supports project resourcing, technical recruitment, and
              international mobilisation for nuclear projects across Asia,
              including emerging and high-growth markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
