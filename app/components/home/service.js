import React from "react";
import Image from "next/image";
import web from "../../assets/images/web.png";
import app from "../../assets/images/app.png";
import shopify from "../../assets/images/shopify.png";
import wordpress from "../../assets/images/wordpress.png";
import odoo from "../../assets/images/odoo.png";
import ecommerce from "../../assets/images/ecommerce.png";
import uiuxtool from "../../assets/images/uiux.png";
import aitool from "../../assets/images/aitool.png";
import digital from "../../assets/images/digital.png";
import hoverwebpage from "../../assets/images/hoverwebpage.jpg";
import hoversppicon from "../../assets/images/hoversppicon.png";
import shopifyiconhover from "../../assets/images/shopifyiconhover.png";
import hoverwordpress from "../../assets/images/hoverwordpress.png";
import odohovericon from "../../assets/images/odohovericon.png";
import ecommerceiconhover from "../../assets/images/ecommerceiconhover.png";
import uiuxhovericon from "../../assets/images/uiuxhovericon.png";
import artificinthovericon from "../../assets/images/artificinthovericon.png";
import digitaliconhover from "../../assets/images/digitaliconhover.png";

export default function Service() {
  return (
    <>
      <div className="bg-white py-[50px]">
        <div className="text-center mb-11">
          <h6 className="text-xs text-primary-color tracking-[6px]">
            QUADRA BYTES
          </h6>
          <h2 className="font-Anton font-medium text-2xl my-4 uppercase md:text-[26px] lg:text-[34px] xl:text-[40px] text-[#232425]">
            <span className="text-[#38B6FF]">Service</span> We provide
          </h2>
        </div>
        <div className="container max-w-[1140px] m-auto px-4">
          <div className="max-w-[800px] m-auto overflow-hidden">
            <div className="text-center">
              <div className="servicecard">
                <div className="border-greycolor border-right border-responsive">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={web}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={hoverwebpage}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base">
                        Web Development
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-greycolor border-mobile border-right-mobile border-right">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={app}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={hoversppicon}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        App Development
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-greycolor border-mobile">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="h-[50px] w-[80px] object-cover  m-auto imageold"
                        src={shopify}
                      ></Image>
                      <Image
                        alt=""
                        className="h-[50px] w-[80px] object-cover  m-auto blueimg"
                        src={shopifyiconhover}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        Shopify
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-greycolor border-mobile border-right border-right-mobile">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={wordpress}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={hoverwordpress}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        Wordpress
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-greycolor border-mobile border-right ">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12 h-full">
                    <a
                      href="/service"
                      className="greyimg flex items-center justify-between w-full flex-col"
                    >
                      <Image
                        alt=""
                        className="h-[50px] w-[80px] object-cover m-auto imageold"
                        src={odoo}
                      ></Image>
                      <Image
                        alt=""
                        className="h-[50px] w-[80px] object-cover  m-auto blueimg"
                        src={odohovericon}
                      ></Image>
                      <h4 className="mt-3 text-xs md:text-sm lg:text-base ">
                        Odoo
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-greycolor border-mobile border-right-mobile">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={ecommerce}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={ecommerceiconhover}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        E-commerce
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-bootom border-right">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={uiuxtool}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={uiuxhovericon}
                      ></Image>
                      <h4 className="mt-3 text-xs md:text-sm lg:text-base ">
                        UX and Design
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-bootom border-mobile border-right border-right-mobile">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={aitool}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={artificinthovericon}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        Artificial Intelligence (AI)
                      </h4>
                    </a>
                  </div>
                </div>
                <div className="border-mobile border-bottom-mobile">
                  <div className="font-Anton py-5 px-3 sm:px-5 md:px-12">
                    <a href="/service" className="greyimg">
                      <Image
                        alt=""
                        className="w-[50px] m-auto imageold"
                        src={digital}
                      ></Image>
                      <Image
                        alt=""
                        className="w-[50px] m-auto blueimg"
                        src={digitaliconhover}
                      ></Image>
                      <h4 className="mt-3  text-xs md:text-sm lg:text-base ">
                        Digital Marketing
                      </h4>
                    </a>
                  </div>
                </div>
              </div>

              <div className="servicecard"></div>

              <div className="servicecard"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
