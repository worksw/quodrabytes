import React from "react";
import footerlogo from "../assets/images/footerlogo.png";
import FacebookIcon from "../assets/images/facebook.js";
import InstagramIcon from "../assets/images/instagram.js";
import TwitterIcon from "../assets/images/twitter.js";
import LinkdinIcon from "../assets/images/linkdin.js";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-secondary-color">
      <div>
        <div className="container max-w-[1140px] mx-auto px-4 py-8 text-white">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/3 flex gap-5 sm:gap-10 md:gap-0 flex-col justify-around border-white px-5">
              <Image
                src={footerlogo}
                className="md:mx-auto w-[60px] sm:w-[110px]"
                alt="img"
              ></Image>
              <ul className="flex gap-4 md:justify-center">
                <li className="p-[14px] h-[35px] md:h-[45px] w-[35px] md:w-[45px] border bg-[#D9D9D9]/20 border-grey-color flex items-center justify-center rounded-full">
                  <div>
                    <a href="" className="[&>svg>path]:fill-white">
                      <FacebookIcon className="w-[20px]" />
                    </a>
                  </div>
                </li>
                <li className="p-[14px] h-[35px] md:h-[45px] w-[35px] md:w-[45px] border bg-[#D9D9D9]/20 border-grey-color flex items-center justify-center rounded-full">
                  <div>
                    <a href="" className="[&>svg>path]:fill-white">
                      <InstagramIcon />
                    </a>
                  </div>
                </li>
                <li className="p-[14px] h-[35px] md:h-[45px] w-[35px] md:w-[45px] border bg-[#D9D9D9]/20 border-grey-color flex items-center justify-center rounded-full">
                  <div>
                    <a href="" className="[&>svg>path]:fill-white">
                      <TwitterIcon />
                    </a>
                  </div>
                </li>
                <li className="p-[14px] h-[35px] md:h-[45px] w-[35px] md:w-[45px] border bg-[#D9D9D9]/20 border-grey-color flex items-center justify-center rounded-full">
                  <div>
                    <a href="" className="[&>svg>path]:fill-white">
                      <LinkdinIcon />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pl-5 w-1/2 sm:w-1/3 flex mt-10 sm:mt-0 sm:items-center flex-col">
              <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-4">
                Quick Links
              </h2>
              <ul className="list-none space-y-2 min-w-[100px]">
                <li>
                  <Link href="/" className="text-text-color text-xs md:text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-text-color text-xs md:text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/service"
                    className="text-text-color text-xs md:text-sm"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-text-color text-xs md:text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/3 flex mt-10 sm:mt-0 md:items-center flex-col">
              <h2 className="text-sm sm:text-base sm:w-[200px] md:text-lg lg:text-xl font-semibold mb-4">
                Contact Us
              </h2>
              <div className="flex flex-col space-y-4 text-xs md:text-sm sm:min-w-[200px]">
                <div className="flex flex-col text-text-color gap-1">
                  <span className="text-[#D6D6D6]">Phone:</span>
                  <span className="">+91 99092-31588</span>
                </div>
                <div className="flex flex-col text-text-color gap-1">
                  <span className="text-[#D6D6D6]">Email:</span>
                  <span className="">sales@quadrabytes.com</span>
                </div>
                <div className="flex flex-col text-text-color gap-1">
                  <span className="text-[#D6D6D6]">Address:</span>
                  <span className="">Ahmedabad, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white py-[14px]">
          <div className="text-center text-white text-xs">
            Copyright©2024. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
