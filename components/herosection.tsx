// components/HeroSection.js
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative h-[400px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white sm:px-8">
        <h1 className="max-w-[311px] text-xl font-bold leading-tight sm:max-w-full sm:text-2xl md:max-w-[439px] md:text-4xl lg:text-6xl">
          Unleash Your Inner Style Icon
        </h1>
        <p className="mt-4 max-w-[311px] text-base leading-relaxed sm:max-w-full sm:text-lg md:max-w-[439px] md:text-xl lg:text-2xl">
          Discover the latest trends in men&rsquo;s fashion, tailored for every
          occasion.
        </p>
        <button className="mt-8 rounded bg-[#FA9C11] px-4 py-2 font-semibold text-white hover:bg-[rgb(228,157,50)] sm:px-6 sm:py-3">
          View Our Collections
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
