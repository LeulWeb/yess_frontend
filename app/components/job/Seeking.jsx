import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/footer.jpg';
import Image from 'next/image';
import { GoQuestion } from 'react-icons/go';
import { FaArrowRight } from 'react-icons/fa6';

const Seeking = () => {
  const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
          <div className="flex gap-1 rounded-3xl bg-gray-200 text-gray-800 w-60 py-1 mt-3 lg:ml-28 md:ml-10 ml-5 px-4">
            <p className="text-sm">5 month</p>
            <IoFilter className="mt-2.5" />
          </div>
          <div className="flex gap-1 rounded-3xl bg-gray-200 text-gray-800 w-44  mt-3 py-1 lg:ml-28 md:ml-10 ml-5 px-4">
            <p className="text-sm">Software</p>
            <IoFilter className="mt-2.5" />
          </div>
          <div className="flex gap-1 rounded-3xl bg-gray-200 text-gray-800 w-44 py-1  mt-3 lg:ml-28 md:ml-10 ml-5 px-4">
            <p className="text-sm">Remote</p>
            <IoFilter className="mt-2.5" />
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
        <div className="h-[80vh] carousel carousel-vertical rounded-box">
          {content.map((item, index) => (
            <div
              key={index}
              className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden"
            >
              <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
                <Image
                  src={footer}
                  alt="introduction"
                  width={200}
                  height={200}
                  className="lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
                />
                <div className="flex flex-col gap-6 lg:mr-20 py-6">
                  <div>
                    <p className="font-bold text-[35px] pl-5 pb-5 text-center py-2">
                      Digital Marketing and Content Creator
                    </p>
                    <p className="text-gray-700 font-light pop text-[16px] line-clamp-2 lg:line-clamp-3 text-center">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Incidunt accusamus corrupti, voluptatem reiciendis
                      voluptate similique esse quam excepturi ea dolorem
                      molestias numquam sequi est omnis, soluta, voluptatibus
                      eum expedita quaerat.
                    </p>
                  </div>
                  <div className="flex flex-end justify-end items-center gap-10">
                    <p className="pr-4 sm:pr-6 md:pr-16 lg:pr-60 xl:pr-96 text-sm lg:mr-40">
                      Dec 30
                    </p>
                    <FaArrowRight size={40} className="text-[#0041ff]" />
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
