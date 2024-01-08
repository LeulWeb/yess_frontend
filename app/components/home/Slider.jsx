'use client';

import React, { useState } from 'react';
import child from '../../assets/child.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Create a separate CSS file for styling
import Image from 'next/image';

const MySlider = () => {
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const settings = {
    dots: true,
    dotsClass: 'slick-dots custom-dots partners',
    infinite: true,
    speed: 1000,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: isAutoScrolling,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleSlideClick = () => {
    setIsAutoScrolling(!isAutoScrolling);
  };

  return (
    <div className="ml-4 sm:ml-8 md:ml-12 lg:ml-20 mr-4 lg:mr-10">
      <Slider {...settings} className=" h-full">
        <div className="slider-item " onClick={handleSlideClick}>
          <div className="max-w-sm bg-[#0041ff] border border-gray-200 rounded-lg  dark:border-gray-700 mx-3">
            <Image
              width={300}
              height={300}
              className="rounded-t-lg w-full"
              src={child}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-item" onClick={handleSlideClick}>
          <div className="max-w-sm bg-[#0041ff] border border-gray-200 rounded-lg  dark:border-gray-700 mx-3">
            <Image
              width={300}
              height={300}
              className="rounded-t-lg w-full"
              src={child}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-item" onClick={handleSlideClick}>
          <div className="max-w-sm bg-[#0041ff] border border-gray-200 rounded-lg  dark:border-gray-700 mx-3">
            <Image
              width={300}
              height={300}
              className="rounded-t-lg w-full"
              src={child}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <div className="slider-item" onClick={handleSlideClick}>
          <div className="max-w-sm bg-[#0041ff] border border-gray-200 rounded-lg  dark:border-gray-700 mx-3">
            <Image
              width={300}
              height={300}
              className="rounded-t-lg w-full"
              src={child}
              alt=""
            />

            <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                Noteworthy technology acquisitions 2021
              </h5>

              <p className="mb-3 font-normal text-white">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default MySlider;
