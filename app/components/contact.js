import Image from "next/image";
import contact from "../assets/images/contact.png";
import email from "../assets/images/email.js";
import location from "../assets/images/location.js";
import FacebookIcon from "../assets/images/facebook.js";
import InstagramIcon from "../assets/images/instagram.js";
import TwitterIcon from "../assets/images/twitter.js";
import LinkdinIcon from "../assets/images/linkdin.js";
import CallIcon from "../assets/images/call";
import EmailIcon from "../assets/images/email.js";
import LocationIcon from "../assets/images/location.js";

export default function Contact() {
  return (
    <div className="bg-white py-[50px]">
      <div className="container max-w-[1140px] mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-10 md:gap-0 justify-evenly items-center">
          <div className="">
            <h2 className="font-Anton font-medium text-2xl uppercase md:text-[26px] lg:text-[38px] xl:text-[40px] text-[#232425] mb-4">
              <span className="text-[#38B6FF]">Contact</span> Information
            </h2>
            <p className="text-gray-color">
              Say something to start a live chat!
            </p>
            <div className="my-5 lg:my-8 flex flex-col gap-3">
              <div className="flex gap-6">
                <span className="text-gray-600 [&>svg]:w-[22px] md:[&>svg]:w-full">
                  <CallIcon />
                </span>
                <span className="text-gray-800 text-sm lg:text-base">
                  +91 99092-31588
                </span>
              </div>
              <div className="flex gap-6">
                <span className="text-gray-600 [&>svg]:w-[22px] md:[&>svg]:w-full">
                  <EmailIcon />
                </span>
                <span className="text-gray-800 text-sm lg:text-base">
                  sales@quadrabytes.com
                </span>
              </div>
              <div className="flex gap-6">
                <span className="text-gray-600 [&>svg]:w-[22px] md:[&>svg]:w-full">
                  <LocationIcon />
                </span>
                <span className="text-gray-800 text-sm lg:text-base">
                  Ahmedabad, India
                </span>
              </div>
            </div>
            <div>
              <ul className="flex gap-4">
                <li className="h-[45px] w-[45px] border border-grey-color flex items-center justify-center rounded-full">
                  <a href="">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="h-[45px] w-[45px] border border-grey-color flex items-center justify-center rounded-full">
                  <a href="">
                    <InstagramIcon />
                  </a>
                </li>
                <li className="h-[45px] w-[45px] border border-grey-color flex items-center justify-center rounded-full">
                  <a href="">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="h-[45px] w-[45px] border border-grey-color flex items-center justify-center rounded-full">
                  <a href="">
                    <LinkdinIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div>
              <Image src={contact} className="w-[260px] sm:w-[300px] m-auto" alt=""></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
