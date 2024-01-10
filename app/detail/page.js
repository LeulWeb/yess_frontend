import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMail } from 'react-icons/cg';
import footer from '../assets/yoni.png';
import helder from '../assets/helder.png';
import { LuPhone } from "react-icons/lu";
import { CiGlobe } from 'react-icons/ci';


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
            width={200}
            height={300}
          />
          <div className="px-2 sm:px-4 md:px-10 lg:px-20">
            <h1 className="text-2xl lg:text-[40px] font-bold flex flex-wrap">
              Helder Technologies Solution PLC
            </h1>
            <p className=" text-xl lg:text-[30px]">Technology company</p>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p className='text-[20px] lg:text-[32px]'>
          Helder Technologies Solution PLC stands as a reputable and legally registered technology service provider, proudly headquartered in Addis Ababa, Ethiopia. Our comprehensive range of services encompasses the development of system software, the creation of dynamic websites and mobile applications, digital marketing strategies, proficient graphic design, and impactful training initiatives. We take pride in our commitment to delivering innovative and effective solutions that empower our clients to successfully realize their objectives.
<br/><br/>
As a technology-driven company, we understand the evolving landscape of the digital realm, and our services are designed to help businesses thrive in this dynamic environment. Whether it's establishing a strong online presence, developing customized software solutions, or imparting valuable training to enhance digital skills, Helder Technologies Solution PLC is poised to be your trusted partner on the journey to success.


          </p>
        </div>
        <div className="flex justify-between items-start px-4 sm:px-8 md:px-16 lg:px-32 py-10">
          <div className="ml-2 md:ml-4 lg:ml-10 py-4 lg:py-10 flex flex-col items-center justify-start gap-3 flex-start  pop font-medium">
            <div className="flex justify-start items-start">
              <CgMail size={30}  className="font-normal"/>
              <p className="pl-5 pop lg:text-[20px]">contact@helder.com</p>
            </div>{' '}
            <div className="flex justify-start items-start lg:-ml-6">
              <LuPhone size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">+251901290000</p>
            </div>
            <div className="flex justify-start items-start">
              <CiGlobe size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">contact@helder.com</p>
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
