"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/images/logo.png";
import Navbarmenu from "../assets/images/navbarmenu";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="text-white relative z-[99] transition-all duration-300 ">
      <nav className="relative after:absolute after:h-[1px] after:w-full after:-bottom-[40px] after:content[''] after:bg-[#515151]">
        <div className="mx-auto container max-w-[1140px] px-4">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-white focus:outline-none mt-[50px]"
                aria-controls="mobile-menu"
                aria-expanded={open}
                onClick={toggleMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className={`block h-6 w-6 ${open ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                
                <svg
                  className={`block h-4 w-4 ${open ? "block" : "hidden"}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex flex-1 justify-between items-center pt-[50px]">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/">
                  <Image src={logo} className="w-full" alt="img"></Image>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center space-x-8">
                  <Link
                    onClick={closeMenu}
                    href="/"
                    className={`${
                      pathname == "/"
                        ? "rounded text-white hover:text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                        : "text-white hover:text-primary-color"
                    }  px-3 py-2 `}
                  >
                    Home
                  </Link>
                  <Link
                    onClick={closeMenu}
                    href="/about"
                    className={`${
                      pathname == "/about"
                        ? "rounded text-white hover:text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                        : "text-white hover:text-primary-color"
                    }  px-3 py-2 `}
                  >
                    About
                  </Link>
                  <Link
                    className={`${
                      pathname == "/service"
                        ? "rounded text-white hover:text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                        : "text-white hover:text-primary-color"
                    }  px-3 py-2 `}
                    onClick={closeMenu}
                    href="/service"
                  >
                    Service
                  </Link>
                  <Link
                    className={`${
                      pathname == "/contact"
                        ? "rounded text-white hover:text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                        : "text-white hover:text-primary-color"
                    }  px-3 py-2 `}
                    onClick={closeMenu}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`sm:hidden ${
            open ? "absolute w-full bg-white mt-[26px]" : "hidden"
          }`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-1 px-2 pb-3 pt-2">
            <Link
              onClick={closeMenu}
              href="/"
              className={`${
                pathname == "/"
                  ? "text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                  : "text-primary-color"
              }  px-3 py-2 hover:text-primary-color`}
            >
              Home
            </Link>
            <Link
              onClick={closeMenu}
              href="/about"
              className={`${
                pathname == "/about"
                  ? "text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                  : "text-primary-color"
              }  px-3 py-2 hover:text-primary-color`}
            >
              About
            </Link>
            <Link
              onClick={closeMenu}
              href="/service"
              className={`${
                pathname == "/service"
                  ? "text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                  : "text-primary-color"
              }  px-3 py-2 hover:text-primary-color`}
            >
              Service
            </Link>
            <Link
              onClick={closeMenu}
              href="/contact"
              className={`${
                pathname == "/contact"
                  ? "text-white bg-primary-color text-base 2xl:text-lg font-light transition duration-300 ease-in-out"
                  : "text-primary-color"
              }  px-3 py-2 hover:text-primary-color`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
