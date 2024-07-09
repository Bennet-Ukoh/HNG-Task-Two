import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="mx-auto my-10 max-w-screen-xl">
      <h2 className="mx-4 mb-8 text-center text-xl font-bold text-black md:text-3xl lg:text-4xl xl:text-5xl">
        Trusted by over 100+ companies
      </h2>
      <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8">
        {[
          "chanel",
          "adidas",
          "hermes",
          "gucci",
          "vans",
          "prada",
          "northface",
          "versace",
        ].map((brand) => (
          <div key={brand} className="flex justify-center">
            <Image
              src={`/images/${brand}.png`}
              width={200}
              height={70}
              alt={`${brand} logo`}
              className="h-[70px] w-[200px] sm:h-[90px] sm:w-[240px] md:h-[100px] md:w-[260px] lg:h-[110px] lg:w-[280px] xl:h-[120px] xl:w-[300px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
