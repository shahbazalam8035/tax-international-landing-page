import React, { useState, useEffect, useRef } from 'react'
import globalImage from "../../../../assets/images/globe-image.png"

const GlobePresenceSections = () => {
  const [countriesCount, setCountriesCount] = useState(0);
  const [professionalsCount, setProfessionalsCount] = useState(0);
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animateValue = (setter, startValue, endValue, duration) => {
      const startTime = performance.now();
      const valueDifference = endValue - startValue;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Use easeOutCubic for smooth deceleration
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(startValue + valueDifference * easedProgress);

        setter(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Start animations with slight delays for staggered effect
            setTimeout(() => animateValue(setCountriesCount, 0, 40, 2000), 100);
            setTimeout(() => animateValue(setProfessionalsCount, 0, 1500, 2000), 300);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element is fully visible
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div className="w-full bg-[#F8F9FE]">
      <div className="bg-[#F5F2FF] mx-6 lg:mx-0 p-6 relative overflow-hidden">
        <img
          src={globalImage}
          alt=""
          className="lg:hidden absolute left-0 top-[320px] w-[696px] h-[414px] object-cover"
        />
        <div className="container lg:py-[80px] max-w-[1000px] m-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:gap-0">
            <div className="max-w-[380px] w-full">
              <p className="text-[24px] lg:text-[36px] leading-[150%] text-[#141515]">
                Strategically Placed,
              </p>
              <p className="text-[36px] lg:text-[52px] text-[#141515] font-semibold">
                Global Presence
              </p>
            </div>
            <div className="max-w-[370px] w-full text-[#646868] text-[14px]">
              We bring unmatched industry expertise by focusing exclusively on
              the nuclear sector. Our consultants operate in vertical markets,
              each dedicated to specific disciplines. This ensures precise
              talent sourcing and the continuous development of a specialized
              candidate database.
            </div>
          </div>
          <div className="mb-[-40px] hidden lg:block">
            <img src={globalImage} alt="globe image" />
          </div>

          {/* cards */}
          <div
            ref={statsRef}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[20px] mt-[120px] lg:mt-0"
          >
            {/* card 1 */}
            <div className="p-5 lg:p-[32px] rounded-[20px] bg-[#ffffff] z-10">
              <p className="test-[#141515] text-[22px] lg:text-[40px] leading-[150%] font-medium mb-[10px]">
                {countriesCount}+ Countries
              </p>
              <p className="text-[#8c9292] text-[16px] leading-[24px] font-medium">
                We have a strong global presence, with active operations and
                talent networks across Europe, North America, and the Middle
                East.
              </p>
            </div>

            {/* card 2 */}
            <div className="p-[32px] rounded-[20px] bg-[#ffffff] font-medium z-10">
              <p className="test-[#141515] text-[22px] lg:text-[40px] leading-[150%] font-medium mb-[10px]">
                {professionalsCount}+ Professionals
              </p>
              <p className="text-[#8c9292] text-[16px] leading-[150%]">
                Our current database includes a wide network of nuclear
                professionals, with our teams continuously sourcing talent for
                the projects we support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobePresenceSections