import React, { useState, useEffect, useRef } from "react";
import Card1Image from "../../../../assets/images/Card1Image.png";
import Card2Image from "../../../../assets/images/Card2Image.png";
import Card3Image from "../../../../assets/images/Card3Image.png";

const CardData = [
  {
    title: "Explore Opportunities in the Nuclear Sector",
    des: "Whether you're seeking a permanent position or project-based contract work, we connect nuclear professionals with roles that match their technical expertise, clearances, and long-term aspirations.",
    image: Card1Image,
  },
  {
    title: "Permanent Roles in Nuclear",
    des: "Securing a permanent role in the nuclear industry requires more than an online search. Many high-value opportunities are never publicly advertised. Partnering with TRX gives you direct access to roles that align with your experience, qualifications, and professional ambitions — with guidance at every step.",
    image: Card2Image,
  },
  {
    title: "Contract and Interim Opportunities",
    des: "The pace of change in the nuclear sector means contract roles often arise quickly — and demand niche expertise. We work closely with contractors to ensure you're considered early for time-sensitive opportunities that match your skillset and availability.",
    image: Card3Image,
  },
];

function MyStacks() {
  const [scrollY, setScrollY] = useState(0);
  const [componentOffset, setComponentOffset] = useState(0);
  const componentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get the component's position when it mounts
    const updateOffset = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setComponentOffset(rect.top + window.scrollY);
      }
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);
    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  const cards = 3;
  const step = 400;
  const containerHeight = cards * step + 300;

  // Calculate scroll relative to component start
  const relativeScrollY = Math.max(0, scrollY - componentOffset);

  // Check if animation is in progress
  const animationStarted = relativeScrollY > 0;
  const animationCompleted = relativeScrollY >= cards * step;

  return (
    <div ref={componentRef} className="flex flex-col relative bg-white">
      <div className="container mx-auto lg:py-[80px] py-[40px] px-6">
        <div
          className="sticky lg:top-[160px] top-[120px] flex flex-col justify-center items-center"
          style={{
            zIndex: 1,
          }}
        >
          {/* Cards Container */}
          <div className="relative w-full h-[500px]">
            <div className="absolute inset-0">
              {/* First Card - Always Visible and Fixed */}
              <div
                className="absolute w-full h-full bg-[#D7C4FF] rounded-[20px]  shadow-[0_10px_20px_rgba(0,0,0,0.15)]"
                style={{
                  zIndex: 1,
                  transform: "translateY(0%)",
                }}
              >
                <div className="flex lg:flex-row flex-col h-full lg:p-[80px] p-[20px]">
                  <div className="flex-1 flex flex-col justify-center lg:py-[55px] lg:pr-[60px]">
                    <p className="font-[500] lg:text-[20px] text-[18px] leading-[28px] tracking-[-0.8px] text-[#864EFF] mb-2">
                      Our global talent database
                    </p>
                    <h3 className="font-semibold lg:text-[36px] text-[24px] leading-[120%] text-[#2B1845] tracking-[-0.8px] lg:mb-5 mb-[10px]">
                      {CardData[0]?.title}
                    </h3>
                    <p className="font-[400] lg:text-[20px] text-[16px] leading-[150%] text-[#646868]">
                      {CardData[0]?.des}
                    </p>
                  </div>

                  <div className="flex-1 z-20">
                    <img
                      src={CardData[0]?.image}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* other animating cards */}
              {[...Array(2)].map((_, i) => {
                const cardIndex = i + 1;
                const startScroll = i * step;
                const progress = Math.min(
                  1,
                  Math.max(0, (relativeScrollY - startScroll) / step)
                );

                const translateY = 100 * (1 - progress); // from 100% to 0%
                const finalTranslateY = translateY;
                // Scale effect for more dynamic animation
                const scale = 1 + progress * 0;
                const opacity = progress > 0 ? 1 : 0;

                return (
                  <div
                    key={i}
                    className={`absolute w-full h-full ${
                      i === 0 ? "bg-[#EBE1FF]" : "bg-[#F9F6FF]"
                    } rounded-[20px] shadow-[0_10px_20px_rgba(0,0,0,0.15)] `}
                    style={{
                      zIndex: i + 2, // Start from 2 since first card is 1
                      transform: `translateY(${finalTranslateY}%) scale(${scale})`,
                      opacity: opacity,
                      transition: scrollY === 0 ? "none" : "none", // Remove transition for smooth scroll-based animation
                    }}
                  >
                    <div className="flex lg:flex-row  flex-col h-full lg:px-[80px] lg:py-[80px] px-[20px] py-[10px]">
                      <div className="flex-1 flex flex-col justify-center lg:py-[55px] lg:pr-[60px]">
                        <p className="font-[500] lg:text-[20px] text-[18px] leading-[150%] tracking-[-0.8px] text-[#864EFF] mb-2">
                          Our global talent database
                        </p>
                        <h3 className="font-semibold lg:text-[36px] text-[24px] leading-[120%] text-[#2B1845] tracking-[-0.8px] lg:mb-5 mb-[10px]">
                          {CardData[cardIndex]?.title}
                        </h3>
                        <p className="font-[400] lg:text-[20px] text-[16px] leading-[150%] text-[#646868]">
                          {CardData[cardIndex]?.des}
                        </p>
                      </div>
                      <div className="flex-1 z-20">
                        <img
                          src={CardData[i + 1]?.image}
                          alt=""
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spacer div to create scroll distance for animation */}
        <div style={{ height: `${containerHeight}px` }}></div>
      </div>
    </div>
  );
}

export default MyStacks;
