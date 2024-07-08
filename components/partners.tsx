import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <section className="my-10">
      <h2 className="mb-8 text-center text-lg font-bold text-black">
        Trusted by over 100+ companies
      </h2>
      <div className="grid grid-cols-2 items-center justify-center gap-4 sm:grid-cols-3 md:grid-cols-4">
        <div className="flex justify-center">
          <Image
            src="/images/chanel.png"
            width={200}
            height={70}
            alt="chanel logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/adidas.png"
            width={200}
            height={70}
            alt="adidas logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/hermes.png"
            width={200}
            height={70}
            alt="hermes logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/gucci.png"
            width={200}
            height={70}
            alt="gucci logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/vans.png"
            width={200}
            height={70}
            alt="vans logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/prada.png"
            width={200}
            height={70}
            alt="prada logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/northface.png"
            width={200}
            height={70}
            alt="northface logo"
            className="h-[70px] w-[200px]"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/versace.png"
            width={200}
            height={70}
            alt="versace logo"
            className="h-[70px] w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}
