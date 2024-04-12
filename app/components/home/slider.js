import React, { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import firstimage from "../../assets/images/leftslideimage.png";
import secondimage from "../../assets/images/centerslideimage.png";
import thirdimage from "../../assets/images/rightslideimage.png";
import Image from "next/image";

const Example = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const updateWindowDimensions = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setSlidesToShow(1);
    } else if (width >= 768 && width < 1024) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(3);
    }
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, []);

  const buttonStyle = {
    width: "30px",
    background: "none",
    border: "0px",
  };

  const properties = {
    prevArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          width="56"
          height="39"
          viewBox="0 0 56 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="19.5"
            cy="19.8896"
            r="19"
            fill="#38B6FF"
            fillOpacity="0.16"
          />
          <path
            d="M24.7049 19.3795L31.7502 12.1426C32.0033 11.8391 32.448 11.8037 32.7436 12.0637C33.0391 12.3237 33.0735 12.7805 32.8204 13.0841C32.7968 13.1124 32.7711 13.1388 32.7436 13.163L26.903 19.1696H54.7955C55.1846 19.1696 55.5 19.4936 55.5 19.8933C55.5 20.293 55.1846 20.617 54.7955 20.617H26.903L32.7436 26.6163C33.0391 26.8763 33.0735 27.3331 32.8204 27.6367C32.5673 27.9402 32.1225 27.9756 31.827 27.7156C31.7995 27.6913 31.7737 27.665 31.7502 27.6367L24.7048 20.3998C24.4317 20.1176 24.4317 19.6618 24.7049 19.3795Z"
            fill="#232425"
          />
          <path
            d="M24.7049 19.3795L31.7502 12.1426C32.0033 11.8391 32.448 11.8037 32.7436 12.0637C33.0391 12.3237 33.0735 12.7805 32.8204 13.0841C32.7968 13.1124 32.7711 13.1388 32.7436 13.163L26.903 19.1696H54.7955C55.1846 19.1696 55.5 19.4936 55.5 19.8933C55.5 20.293 55.1846 20.617 54.7955 20.617H26.903L32.7436 26.6163C33.0391 26.8763 33.0735 27.3331 32.8204 27.6367C32.5673 27.9402 32.1225 27.9756 31.827 27.7156C31.7995 27.6913 31.7737 27.665 31.7502 27.6367L24.7048 20.3998C24.4317 20.1176 24.4317 19.6618 24.7049 19.3795Z"
            fill="#232425"
          />
          <path
            d="M24.7049 19.3795L31.7502 12.1426C32.0033 11.8391 32.448 11.8037 32.7436 12.0637C33.0391 12.3237 33.0735 12.7805 32.8204 13.0841C32.7968 13.1124 32.7711 13.1388 32.7436 13.163L26.903 19.1696H54.7955C55.1846 19.1696 55.5 19.4936 55.5 19.8933C55.5 20.293 55.1846 20.617 54.7955 20.617H26.903L32.7436 26.6163C33.0391 26.8763 33.0735 27.3331 32.8204 27.6367C32.5673 27.9402 32.1225 27.9756 31.827 27.7156C31.7995 27.6913 31.7737 27.665 31.7502 27.6367L24.7048 20.3998C24.4317 20.1176 24.4317 19.6618 24.7049 19.3795Z"
            fill="#232425"
          />
        </svg>
      </button>
    ),
    nextArrow: (
      <button style={{ ...buttonStyle }}>
        <svg
          width="56"
          height="39"
          viewBox="0 0 56 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="19"
            cy="19"
            r="19"
            transform="matrix(-1 0 0 1 55.5 0.889648)"
            fill="#38B6FF"
            fillOpacity="0.16"
          />
          <path
            d="M31.2951 19.3795L24.2498 12.1426C23.9967 11.8391 23.552 11.8037 23.2564 12.0637C22.9609 12.3237 22.9265 12.7805 23.1796 13.0841C23.2032 13.1124 23.2289 13.1388 23.2564 13.163L29.097 19.1696H1.20451C0.815444 19.1696 0.5 19.4936 0.5 19.8933C0.5 20.293 0.815444 20.617 1.20451 20.617H29.097L23.2564 26.6163C22.9609 26.8763 22.9265 27.3331 23.1796 27.6367C23.4328 27.9402 23.8775 27.9756 24.173 27.7156C24.2005 27.6913 24.2263 27.665 24.2498 27.6367L31.2952 20.3998C31.5683 20.1176 31.5683 19.6618 31.2951 19.3795Z"
            fill="#232425"
          />
          <path
            d="M31.2951 19.3795L24.2498 12.1426C23.9967 11.8391 23.552 11.8037 23.2564 12.0637C22.9609 12.3237 22.9265 12.7805 23.1796 13.0841C23.2032 13.1124 23.2289 13.1388 23.2564 13.163L29.097 19.1696H1.20451C0.815444 19.1696 0.5 19.4936 0.5 19.8933C0.5 20.293 0.815444 20.617 1.20451 20.617H29.097L23.2564 26.6163C22.9609 26.8763 22.9265 27.3331 23.1796 27.6367C23.4328 27.9402 23.8775 27.9756 24.173 27.7156C24.2005 27.6913 24.2263 27.665 24.2498 27.6367L31.2952 20.3998C31.5683 20.1176 31.5683 19.6618 31.2951 19.3795Z"
            fill="#232425"
          />
          <path
            d="M31.2951 19.3795L24.2498 12.1426C23.9967 11.8391 23.552 11.8037 23.2564 12.0637C22.9609 12.3237 22.9265 12.7805 23.1796 13.0841C23.2032 13.1124 23.2289 13.1388 23.2564 13.163L29.097 19.1696H1.20451C0.815444 19.1696 0.5 19.4936 0.5 19.8933C0.5 20.293 0.815444 20.617 1.20451 20.617H29.097L23.2564 26.6163C22.9609 26.8763 22.9265 27.3331 23.1796 27.6367C23.4328 27.9402 23.8775 27.9756 24.173 27.7156C24.2005 27.6913 24.2263 27.665 24.2498 27.6367L31.2952 20.3998C31.5683 20.1176 31.5683 19.6618 31.2951 19.3795Z"
            fill="#232425"
          />
        </svg>
      </button>
    ),
  };
  return (
    <>
      <div className="bg-[#38B6FF]/10 w-full flex flex-col justify-center">
        <div className="text-center mt-8 sm:mt-8">
          <h6 className="text-xs text-primary-color tracking-[6px]">
            Portfolio
          </h6>
          <h2 className="font-Anton font-medium text-2xl mt-4 uppercase md:text-[26px] lg:text-[34px] xl:text-[40px] text-[#232425]">
            Our Recent
            <span className="text-[#38B6FF]">&nbsp; Works</span>
          </h2>
        </div>
        <div>
          <div id="slider1">
            <Slide
              slidesToShow={slidesToShow}
              slidesToScroll={1}
              indicators={false}
              easing="ease"
              autoplay
              {...properties}
            >
              <div className="each-slide-effect">
                <div className="sliderImgDiv">
                  <Image
                    src={firstimage}
                    alt="img"
                    className="h-full sliderImg"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="each-slide-effect h-full">
                <div className="sliderImgDiv h-full">
                  <Image
                    src={secondimage}
                    alt="img"
                    className="h-full sliderImg"
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="each-slide-effect">
                <div className="sliderImgDiv">
                  <Image
                    src={thirdimage}
                    alt="img"
                    className="h-full sliderImg"
                    layout="responsive"
                  />
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
