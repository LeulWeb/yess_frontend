import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/helder.png';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const Youth = () => {
  return (
    <div className="story bg-cover bg-no-repeat text-black">
      <h1 className="text-[black] text-[40px] font-bold px-2 lg:px-28 md:px-12 sm:px-8 lg:mx-12 pb-6">
        Youth Start Business
      </h1>
      <div>
        <div className="h-[80vh] carousel carousel-vertical rounded-box">
            <div
              className="mx-10 py-5 carousel-item h-[500px] lg:h-[294px] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
                <Image
                  src={footer}
                  alt="introduction"
                  width={200}
                  height={200}
                  className="lg:h-[294px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
                />
                <div className="flex flex-col gap-6 lg:mr-20 py-6">
                  <div>
                    <p className="font-bold text-[35px] text-start pl-8 lg:ml-8 py-2">
                      Helder Technologies Solution PLC
                    </p>
                    <p className="text-gray-700 font-light pop text-[16px] lg:text-[20px] line-clamp-2 lg:line-clamp-3 text-start">
                    Helder Technologies Solution PLC is a legally registered technology service provider based in Addis Ababa, Ethiopia. Our services include system software development, website and mobile app development, digital marketing, graphic design, and training. We provide innovative and effective solutions to our clients to help them achieve their goals.
                    </p>
                  </div>
                  <div className="flex flex-end text-[gray] justify-end items-center gap-10">
                    <p className="text-[16px] pop">Ethiopia. Addis Ababa</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Youth;
