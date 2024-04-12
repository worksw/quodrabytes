import React from "react";
import Image from "next/image";
import webimage1 from "../../assets/images/webimage.png";
import webimage2 from "../../assets/images/webimage2.png";
import webimage3 from "../../assets/images/webimage3.png";
import webimage4 from "../../assets/images/wordpressimg.png";
import webimage5 from "../../assets/images/odoimage.png";
import webimage6 from "../../assets/images/webimage7.png";
import webimage7 from "../../assets/images/webimage8.png";
import webimage8 from "../../assets/images/webimage9.png";
import webimage9 from "../../assets/images/webimage10.png";

export default function Ourservice() {
  const data = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Web development refers to the process of creating and maintaining websites or web applications.",
      image: webimage1,
    },
    {
      id: 2,
      title: "App Development",
      description:
        "Process of creating software applications that run on various devices such as smartphones, tablets, computers, or other electronic devices.",
      image: webimage2,
    },
    {
      id: 3,
      title: "Shopify",
      description:
        "Shopify is an e-commerce platform. It provides a comprehensive set of tools and services to help entrepreneurs and businesses set up an online presence, sell products or services.",
      image: webimage3,
    },
    {
      id: 4,
      title: "Wordpress",
      description:
        "It's open-source, flexible, and widely used for various types of websites, ranging from blogs and small business sites to large e-commerce platforms.",
      image: webimage4,
    },
    {
      id: 5,
      title: "Odoo",
      description:
        "Odoo is a suite of fully integrated open. source business apps that offers simplicity in everyday use. It is very intuitive. It is the all-in-one ERP that allows you to manage all aspects of a company in a single software.",
      image: webimage5,
    },
    {
      id: 6,
      title: "Ecommerce",
      description:
        "E-commerce software is a stand-alone program or software suite that enables. you to sell your products and services online. It allows you to streamline all of your processes from inventory to sales through the backend and makes it easy for a customer to buy from the front end, which is your website.",
      image: webimage6,
    },
    {
      id: 7,
      title: "UX and Design",
      description:
        "UX/UI Design, Create beautiful, user-friendly designs for websites, mobile apps, and other human-machine Interfaces. Platform and. Infrastructure.",
      image: webimage7,
    },
    {
      id: 8,
      title: "Artificial Intelligence (AI)",
      description:
        "EArtificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of Al Include expert systems, natural language processing, speech recognition and machine vision.",
      image: webimage8,
    },
    {
      id: 9,
      title: "Digital Marketing",
      description:
        "Digital marketing provides businesses with the ability to target specific demographics, measure campaign performance in real-time, and adjust strategies dynamically.",
      image: webimage9,
    },
  ];
  return (
    <div className="pt-5 sm:py-10">
      <div className="max-w-[1140px] mx-auto px-8 sm:px-4">
        <div className="text-center mb-[30px] md:mb-[50px]">
          <span className="text-xs text-primary-color tracking-[6px]">
            SERVICES
          </span>
          <h2 className="font-Anton mt-4 font-medium text-2xl uppercase md:text-[26px] lg:text-[38px] xl:text-[40px] text-[#232425] mb-4">
            OUR <span className="text-[#38B6FF]">SERVICES</span>
          </h2>
          <p className="text-gray-color text-sm md:text-base">
            At Quadra Bytes we are providing all of these services
          </p>
        </div>
        <div>
          {data.map((item) => (
            <div className="max-w-[600px] md:max-w-[740px] lg:max-w-[940px] mx-auto [&:last-child>.cardservice]:border-b-0">
              <div
                className="cardservice mb-9 pb-[30px] sm:pb-10 border-b border-primary-color"
                key={item.id}
              >
                <div className="flex flex-col sm:flex-row items-center gap-5 md:gap-[40px] lg:gap-[60px]">
                  <div className="w-full md:w-[40%]">
                    <div className="serviceimage m-auto">
                      <Image
                        className="w-full"
                        src={item.image}
                        alt={item.title}
                      ></Image>
                    </div>
                  </div>
                  <div className="w-full md:w-[60%] text-center sm:text-left">
                    <div>
                      <div className="flex text-[1.275rem] sm:text-[1.075rem] md:text-base lg:text-[22px] sm:justify-start justify-center md:items-start items-center gap-4 flex-row md:flex-col">
                        <span className="font-Anton text-primary-color/50">{`0${item.id}.`}</span>
                        <h4 className="font-Anton">{item.title}</h4>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-base mt-[18px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
