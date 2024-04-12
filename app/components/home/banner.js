import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="bg-about-banner h-[100vh] min-h-[500px] lg:min-h-[600px] mt-[-66px] bg-no-repeat bg-cover text-white relative">
      <div className="absolute px-4 bottom-[60px] lg:bottom-[107px] left-1/2 right-1/2 -translate-x-1/2 w-full text-center m-auto">
        <span className="text-xs text-primary-color tracking-[6px]">
          QUADRA BYTES
        </span>
        <h1 className="mt-4 leading-[32px] text-xl md:text-2xl lg:text-4xl font-Anton mb-4 md:mb-[29px]">
          Empowering Progress, Amplifying Success
        </h1>
        <p className="text-sm lg:text-base">
          At Quadra Bytes, we lead the charge in embracing and shaping
          technological advancements.
        </p>
        <div className="mt-6  lg:mt-[30px]">
          <Link href="/contact" className="px-7 lg:px-[31px] py-3 lg:py-[14px] text-sm lg:text-base bg-primary-color rounded-[6px]">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
