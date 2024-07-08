import { collectionsfilter, products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Collection() {
  return (
    <section className="mx-10 my-10">
      <div>
        <h2 className="text-center text-lg font-bold">
          Discover Our Exclusive Collections
        </h2>
        <p className="text-center text-xs">
          Shop the latest trends and your perfect match
        </p>
      </div>
      <nav>
        <ul className="my-8 flex items-center justify-center space-x-2 sm:space-x-4">
          {collectionsfilter.map((collection, index) => {
            return (
              <li
                key={collection.href}
                className={`text-[10px] sm:text-sm ${index === 0 ? "font-bold" : ""}`}
              >
                <Link href={collection.href}>{collection.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex flex-col space-y-12 text-sm">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={297.5}
                height={314}
                className="mb-4 h-[314px] w-[297.5px] rounded-[8px]"
              />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Image
                src="/images/stars.png"
                alt="rating stars"
                width={140}
                height={24}
                className="h-[24px] w-[140px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
