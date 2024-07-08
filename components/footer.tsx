import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full items-start bg-neutral-100 py-10 text-sm sm:items-start">
      <div className="mx-4 flex flex-col items-center justify-between sm:mx-10 md:flex-row">
        <div className="mb-4 flex flex-col items-start sm:items-start md:mb-0">
          <Link href="/">
            <Image
              src="/images/Andora.svg"
              alt="Andora Store Logo"
              width={125}
              height={47}
              className="h-[47px] w-[125px]"
            />
          </Link>
          <nav>
            <ul className="items-left flex flex-col space-x-4 text-xs sm:flex-row md:text-sm">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li className="text-orange-800">We&rsquo;re hiring!</li>
              <li>Shippings & Returns</li>
              <li>Press</li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col items-start sm:items-start md:flex-col">
          <p className="mb-2 md:mb-2">Download the app</p>
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image
                src="/images/Store-badge-google.png"
                alt="Google Play Store Badge"
                width={135}
                height={45}
                className="h-[45px] w-[135px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/Store-badge.png"
                alt="App Store Badge"
                width={135}
                height={45}
                className="h-[45px] w-[135px]"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-10 mt-8 flex flex-col items-center justify-between border-t border-gray-200 md:flex-row">
        <nav>
          <ul className="mt-4 flex items-center space-x-2 sm:flex-row">
            <Link href="/">
              <Image
                src="/images/facebook.png"
                alt="Facebook Logo"
                width={20}
                height={20}
                className="h-[20px] w-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/twitter.png"
                alt="Twitter Logo"
                width={20}
                height={20}
                className="h-[20px] w-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/insta.png"
                alt="Instagram Logo"
                width={20}
                height={20}
                className="h-[20px] w-[20px]"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/Group-linkin.png"
                alt="LinkedIn Logo"
                width={20}
                height={20}
                className="h-[20px] w-[20px]"
              />
            </Link>
          </ul>
        </nav>
        <div>
          <nav className="hidden sm:block">
            <ul className="mt-4 flex items-center space-x-4 text-xs md:text-sm">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
