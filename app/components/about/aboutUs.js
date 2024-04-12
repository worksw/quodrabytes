import React from "react";
import Image from "next/image";
import about from "../../assets/images/banneraboutsection.png";

export default function AboutUsSection() {
  return (
    <div className="bg-white py-[50px]">
      <div className="container max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-evenly items-center">
          <div className="w-full md:w-1/2">
            <div>
              <Image src={about} className="w-[300px] m-auto" alt="img"></Image>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <span className="text-xs text-primary-color uppercase tracking-[6px]">
              About Us
            </span>
            <h2 className="font-Anton mt-4 mb-5 font-medium text-2xl uppercase md:text-[26px] lg:text-[38px] xl:text-[40px] text-[#232425]">
              Welcome to <span className="text-[#38B6FF]">Quadra Bytes</span>
            </h2>
            <p className="text-grey-color font-semibold">
              In a world driven by constant change, we thrive on adaptability
              and continuously push the boundaries of what is possible.
            </p>
            <p className="text-sm mt-3">
              At Quadra Bytes, we're not just adapting to change — we're driving
              it. In a world where technology evolves at lightning speed, we
              thrive on pushing the boundaries of what's possible. Welcome to
              the forefront of innovation, where your digital aspirations meet
              reality.
            </p>
            <button className="px-5 mt-8 py-2 shadow-2xl bg-primary-color text-sm text-white rounded-[6px]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
