import React from 'react';
import { IoFilter, IoFilterSharp } from 'react-icons/io5';
import footer from '../../assets/life.jpg';
import gopa from '../../assets/gopa.jpg';
import helder from '../../assets/helder.png';
import fewis from '../../assets/fewis.jpg';
import fmf from '../../assets/fmf.png';
import Image from 'next/image';
import { GoQuestion } from 'react-icons/go';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const Seeking = () => {
  const content = [
    {
      image: gopa,
      title: ' Public Administration, Land Administration, Political Science',
      description:
        "GOPA Worldwide Consultants is a German company that advises on and implements economic, social, and environmental development projects. International and national donors fund these projects. GOPA's Rural Development and Environment department implements dozens of rural, local, and environmental development and natural resource management projects on several continents.",
      time: 'Full Time, contract',
      deadline: '02.01.2024 – 28.02.2026',
      url: '/gopa',
    },
    {
      image: fmf,
      title: 'FMF food processing plc',
      description:
        'we would like to offer a job opportunities for our families for the bazaars and expo held at millenium hall for 13 days started from tomorrow.',
      time: 'Full Time',
      deadline: 'Nov 13, 2023',
      url: '/fmf',
    },
    {
      image: footer,
      title: 'Secretary',
      description:
        'We are looking for a highly organized and efficient secretary to join our team. In this role, you will be responsible for providing administrative support to the E-Learning staff. You will be a key point of contact for students, and staff, and you will play a vital role in ensuring the smooth operation of the department.',
      time: 'Full Time',
      deadline: null,
      url: '/secretary',
    },
    {
      image: fewis,
      title: 'Internship',
      description:
        'Helder Technologies Solution PLC want to hire a Mobile app developer. if you are interested to work on a startup company Welcome to Helder Technologies Solution',
      time: 'Full Time',
      deadline: 'Oct 05, 2023',
      url: '/fewis',
    },
    {
      image: helder,
      title: 'Mobile app developer',
      description:
        'Helder Technologies Solution PLC want to hire a Mobile app developer. if you are interested to work on a startup company Welcome to Helder Technologies Solution',
      time: 'Full Time',
      deadline: 'Oct 05, 2023',
      url: '/helder',
    },
  ];
  return (
    <div className="story bg-cover bg-no-repeat text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-2 sm:px-6 md:px-12 lg:px-44 xl:px-60">
        <form className="lg:col-span-2">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="lg:col-span-2 lg:mr-10 flex justify-start flex-start items-center">
          <div className="lg:ml-10 flex justify-start items-center flex-start">
            <button className="flex gap-3 justify-center items-start bg-gray-400 w-32 rounded py-2.5 pt-1 px-3 text-gray-800">
              5 month <IoFilterSharp size={20} />
            </button>
          </div>

          <div className="lg:ml-10 flex justify-start items-center flex-start">
            <button className="flex gap-3 justify-center items-start bg-gray-400 w-32 rounded py-2.5 pt-1 px-3 text-gray-800">
              Software <IoFilterSharp size={20} />
            </button>
          </div>

          <div className="lg:ml-10 flex justify-start items-center flex-start">
            <button className="flex gap-3 justify-center items-start bg-gray-400 w-32 rounded py-2.5 pt-1 px-3 text-gray-800">
              Remote <IoFilterSharp size={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0041ff] mx-[4px] lg:mx-20 rounded-xl lg:py-10 text-white">
        <div className="flex gap-4 justify-start lg:mr-12 mr-4 pb-3 pl-[5px] lg:pl-10 items-center">
          <GoQuestion size={70} />
          <p className="pop text-[30px]">Seeking for a job</p>
        </div>
        <p className="pop text-[30px] lg:text-[42px] font-light text-center mx-[6px] lg:mx-10 px-[10px] sm:px-[30px] md:px-[50px] lg:px-[70px] text-gray-50">
          Explore your scholarship journey with our guidance app. Let us guide
          through the process!
        </p>
      </div>
      <div>
        <div className="h-full rounded-box">
          {content.map((item, index) => (
            <div
              key={index}
              className="mx-10 py-5 carousel-item h-[500px] lg:h-[294px] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
                <Image
                  src={item.image}
                  alt="introduction"
                  width={278}
                  height={285}
                  className="w-278 h-285 top-904 left-37 rounded-l-xl"
                />
                <div className="flex flex-col gap-6 lg:mr-20 py-6">
                  <div>
                    <p className="text-2xl font-semibold leading-13 pl-5 pb-5 text-center py-2">
                      {item.title}
                    </p>
                    <p className="text-gray-700 pop text-lg font-normal leading-9 line-clamp-2 lg:line-clamp-3 text-start">
                      {item.description}
                    </p>
                    <div className="text-2xl font-semibold leading-10 text-center flex justify-start items-center gap-10">
                      <p className="text-[20px] font-bold">{item.time}</p>
                      <p className="text-[20px] font-bold">{item.deadline}</p>
                    </div>
                  </div>
                  <div className="flex flex-end justify-end items-start gap-2">
                    <p className="pr-4 sm:pr-6 md:pr-16 lg:pr-60 xl:pr-96 text-sm lg:mr-40">
                      Addis Ababa, Ethiopia
                    </p>
                    <Link href={item.url}>
                      <FaArrowRight size={40} className="text-[#0041ff]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seeking;
