'use client';

import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/personal.png';
import Image from 'next/image';
import { BsPlayCircle } from 'react-icons/bs';

const Development = () => {
  return (
    <div>
      <h1 className="font-bold text-[50px] px-2 sm:px-4 md:px-12 lg:px-28 xl:px-32 py-10">
        Personal Development Training
      </h1>
      <p className="text-[30px] font-bold text-start pl-4">Part</p>
      <div>
        <div className="h-[80vh] carousel carousel-vertical rounded-box">

          {/* Item 1 */}
          <div className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
              <Image
                src={footer}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 1
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Personal development training is a transformation process
                    aimed at enhancing various aspects of an individual's life,
                    fostering growth, and unlocking their full potential.....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <button
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    <BsPlayCircle
                      size={50}
                      className="text-gray-400 font-light hover:text-[#0041ff]"
                    />{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
              <Image
                src={footer}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 1
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Personal development training is a transformation process
                    aimed at enhancing various aspects of an individual's life,
                    fostering growth, and unlocking their full potential.....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <button
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    <BsPlayCircle
                      size={50}
                      className="text-gray-400 font-light hover:text-[#0041ff]"
                    />{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>

                    {/* Item 3 */}
                    <div className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
              <Image
                src={footer}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 1
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Personal development training is a transformation process
                    aimed at enhancing various aspects of an individual's life,
                    fostering growth, and unlocking their full potential.....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <button
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    <BsPlayCircle
                      size={50}
                      className="text-gray-400 font-light hover:text-[#0041ff]"
                    />{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>


          {/* Item 4 */}
          <div className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
              <Image
                src={footer}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 1
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Personal development training is a transformation process
                    aimed at enhancing various aspects of an individual's life,
                    fostering growth, and unlocking their full potential.....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <button
                    onClick={() =>
                      document.getElementById('my_modal_1').showModal()
                    }
                  >
                    <BsPlayCircle
                      size={50}
                      className="text-gray-400 font-light hover:text-[#0041ff]"
                    />{' '}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
