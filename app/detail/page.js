import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMail } from 'react-icons/cg';
import footer from '../assets/yoni.png';
import helder from '../assets/helder.png';
// import footer from '../../../assets/yoni.png';
// import helder from '../../../assets/helder.png';

const Startups = () => {
  return (
    <div className="story">
      <div className="bg-white text-black">
        <Image
          src={footer}
          alt="startup one"
          className="w-full"
          width={800}
          height={500}
        />
        <div className="flex justify-center items-center pt-10 px-2 sm:px-4 md:px-10 lg:px-20 gap-6 flex-wrap pb-10">
          <Image
            src={helder}
            alt="startup one"
            className="h-24 w-32"
            width={100}
            height={300}
          />
          <div className="px-2 sm:px-4 md:px-10 lg:px-20">
            <h1 className="text-2xl lg:text-[40px] font-bold">
              Helder Technologies Solution PLC
            </h1>
            <p className=" text-xl lg:text-[30px]">Technology company</p>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            illum repudiandae repellendus error quas tempore vero doloribus
            earum a, iure provident sint iusto! Quia, aspernatur facilis a
            inventore velit voluptates! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas magni sapiente vitae pariatur, at quia libero
            deleniti, necessitatibus dolor quae sed aut quisquam impedit unde
            accusamus! Beatae sequi nobis asperiores.
          </p>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            illum repudiandae repellendus error quas tempore vero doloribus
            earum a, iure provident sint iusto! Quia, aspernatur facilis a
            inventore velit voluptates! Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas magni sapiente vitae pariatur, at quia libero
            deleniti, necessitatibus dolor quae sed aut quisquam impedit unde
            accusamus! Beatae sequi nobis asperiores.
          </p>
        </div>
        <div className="flex justify-between items-start px-4 sm:px-8 md:px-16 lg:px-32">
          <div className="ml-2 md:ml-4 lg:ml-10 py-4 lg:py-10">
            <div className="flex justify-center items-start">
              <CgMail size={20} />
              <p className="pl-5">contact@helder.com</p>
            </div>{' '}
            <div className="flex justify-center items-start">
              <CgMail size={20} />
              <p className="pl-5">contact@helder.com</p>
            </div>
            <div className="flex justify-center items-start">
              <CgMail size={20} />
              <p className="pl-5">contact@helder.com</p>
            </div>
          </div>
          <div>
            <Link href="#" className='text-[#0014ff] text-[25px] lg:pr-24'>Watch on Youtube</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startups;
