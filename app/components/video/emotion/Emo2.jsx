import React from 'react';
import { IoFilter } from 'react-icons/io5';
import eq from '../../../assets/eq.png';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { BsPlayCircle } from 'react-icons/bs';
import Link from 'next/link';

const Emo2 = () => {
  return (
    <div>
      <h1 className="font-bold px-2 tes sm:px-4 md:px-12 lg:px-28 xl:px-32 py-10">
        Emotional Intelligence
      </h1>
      <p className="text-[30px] font-bold text-start pl-4">Part</p>
      <div className="pb-10">
        <div className="h-full flex flex-col gap-10 justify-center items-center rounded-box">
          {/* Item 1 */}
          <div className="mx-10 py-5 h-[500px] lg:h-[294px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
              <Image
                src={eq}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[290px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 1
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Emotional intelligence, vital for personal growth, involves
                    developing emotional awareness, empathy, and interpersonal
                    skills....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <Link href="/videmo1">
                    <button>
                      <BsPlayCircle
                        size={50}
                        className="text-gray-400 font-light hover:text-[#0041ff]"
                      />{' '}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="mx-10 py-5 h-[500px] lg:h-[294px] overflow-hidden">
            <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl ">
              <Image
                src={eq}
                alt="introduction"
                width={200}
                height={200}
                className="imo lg:h-[290px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
              />
              <div className="flex justify-between items-center gap-6 lg:mr-20 py-6 pod">
                <div>
                  <p className="font-bold text-[30px] pl-5 text-start py-2">
                    Part 2
                  </p>
                  <p className="pl-5 text-start hidden md:flex">
                    Emotional intelligence, vital for personal growth, involves
                    developing emotional awareness, empathy, and interpersonal
                    skills....
                  </p>
                </div>
                <div className="flex flex-end justify-end items-center gap-10 ml-4">
                  <Link href="/videmo2">
                    <buttons>
                      <BsPlayCircle
                        size={50}
                        className="text-gray-400 font-light hover:text-[#0041ff]"
                      />{' '}
                    </buttons>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emo2;
