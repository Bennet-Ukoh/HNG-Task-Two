// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="xs:h-[400px] relative h-[300px] w-full bg-cover bg-center sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px]"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-8">
        <h1 className="xs:max-w-[400px] xs:text-xl max-w-[311px] text-lg font-bold leading-tight sm:max-w-full sm:text-2xl md:max-w-[600px] md:text-4xl lg:max-w-[700px] lg:text-5xl xl:text-6xl">
          Unleash Your Inner Style Icon
        </h1>
        <p className="xs:max-w-[400px] xs:text-base mt-4 max-w-[311px] text-sm leading-relaxed sm:max-w-full sm:text-lg md:max-w-[600px] md:text-xl lg:max-w-[700px] lg:text-2xl xl:text-3xl">
          Discover the latest trends in men’s fashion, tailored for every
          occasion.
        </p>
        <button className="xs:px-6 xs:py-3 mt-8 rounded bg-[#FA9C11] px-4 py-2 font-semibold text-white hover:bg-[rgb(228,157,50)] sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 xl:px-14 xl:py-7">
          View Our Collections
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
