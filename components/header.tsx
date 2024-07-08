// components/Header.js
import { loginlinks, navlinks } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white">
      <div className="flex h-[38px] items-center justify-center bg-neutral-200 text-sm font-bold text-black">
        <p className="xs:text-sm ss:text-base text-center text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Summer Sale! Up to 50% off selected items. Limited time only.
        </p>
      </div>

      {/* Small screen layout (480px to 1060px) */}
      <div className="hidden sm:mx-2 sm:mt-6 sm:flex sm:items-center sm:justify-between sm:space-x-3 md:hidden">
        <Link href="/" className="">
          <Image
            src="/images/Andora.svg"
            alt="Andora Store Logo"
            width={125}
            height={47}
            className="h-[47px] w-[125px]"
          />
        </Link>
        <div className="flex flex-grow items-center justify-center space-x-5">
          <div className="relative flex items-center space-x-3">
            <Image
              src="/images/icon-left.png"
              alt="search icon"
              width={20}
              height={20}
              className="absolute left-3 top-0 mt-[9px] h-5 w-5"
            />
            <input
              type="text"
              placeholder="Search"
              className="h-[40px] w-full max-w-[375px] rounded-md border border-gray-300 pl-8 focus:outline-none sm:max-w-[300px] md:max-w-[250px]"
            />
          </div>
        </div>
        <div className="flex items-center space-x-5">
          <Image
            className="h-8 w-8"
            src="/images/favourite.png"
            alt="favourite"
            height={32}
            width={32}
          />
          <Image
            className="h-8 w-8"
            src="/images/shopping-cart-01.png"
            alt="cart"
            height={32}
            width={32}
          />
          <Image
            className="h-8 w-8"
            src="/images/hamburger.png"
            alt="menu"
            height={32}
            width={32}
          />
        </div>
      </div>

      {/* Mobile layout (up to 480px) */}
      <div className="xs:hidden flex flex-col items-center justify-center space-y-3">
        <div className="flex w-full items-center justify-between px-4">
          <Link href="/" className="">
            <Image
              src="/images/Andora.svg"
              alt="Andora Store Logo"
              width={100}
              height={37}
              className="h-[37px] w-[100px]"
            />
          </Link>
          <div className="flex items-center space-x-5">
            <Image
              className="h-8 w-8"
              src="/images/favourite.png"
              alt="favourite"
              height={32}
              width={32}
            />
            <Image
              className="h-8 w-8"
              src="/images/shopping-cart-01.png"
              alt="cart"
              height={32}
              width={32}
            />
            <Image
              className="h-8 w-8"
              src="/images/hamburger.png"
              alt="menu"
              height={32}
              width={32}
            />
          </div>
        </div>
        <div className="relative w-full px-4">
          <Image
            src="/images/icon-left.png"
            alt="search icon"
            width={20}
            height={20}
            className="absolute left-3 top-0 mt-[9px] h-5 w-5"
          />
          <input
            type="text"
            placeholder="Search"
            className="h-[40px] w-full rounded-md border border-gray-300 pl-10 focus:outline-none"
          />
        </div>
      </div>

      {/* Default and larger screen layout */}
      <div className="mx-10 flex items-center justify-between md:flex md:justify-between md:border-b md:border-gray-100">
        <Link href="/" className="hidden sm:hidden md:block">
          <Image
            src="/images/Andora.svg"
            alt="Andora Store Logo"
            width={125}
            height={47}
            className="h-[47px] w-[125px]"
          />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-5">
            {loginlinks.map((link) => (
              <li
                key={link.href}
                className="xs:text-sm ss:text-base text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-10 my-5 flex items-center justify-between">
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-5">
            {navlinks.map((link) => (
              <li
                key={link.href}
                className="xs:text-sm ss:text-base text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl"
              >
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center space-x-5 md:flex">
          <div className="relative flex items-center space-x-3">
            <Image
              src="/images/icon-left.png"
              alt="search icon"
              width={20}
              height={20}
              className="absolute left-3 top-0 mt-[9px] h-5 w-5 sm:hidden"
            />
            <input
              type="text"
              placeholder="Search"
              className="h-[40px] w-[375px] rounded-md border border-gray-300 pl-8 focus:outline-none"
            />
          </div>
          <Image
            className="h-8 w-8"
            src="/images/favourite.png"
            alt="favourite"
            height={32}
            width={32}
          />
          <Image
            className="h-8 w-8"
            src="/images/shopping-cart-01.png"
            alt="cart"
            height={32}
            width={32}
          />
        </div>
      </div>
    </header>
  );
}
