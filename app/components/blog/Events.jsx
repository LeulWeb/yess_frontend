import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import footer from '../../assets/you.jpg';
import { CgEye } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa6';

const Events = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-[40px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">
            Events
          </p>
          <div className="flex justify-end items-center gap-2 hover:border-b-2 hover:border-[#0041ff] cursor-pointer duration-500 text-[#0041ff] px-2 sm:px-6 md:px-12 lg:px-28">
            <p className="text-[30px]  text-start px-2 sm:px-6 md:px-12 lg:px-28 ">
              View More
            </p>
            <FaArrowRight />
          </div>
        </div>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {news.map((items, index) => {
            return (
              <div
                key={index}
                className="carousel-item shadow-xl border-gray-50 border-2 bg-[#0041ff] w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10"
              >
                <Image
                  src={footer}
                  alt="Yess News"
                  width={500}
                  height={300}
                  className="w-full h-[300px] rounded-xl"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                  <div className="  flex flex-col items-center justify-start flex-start">
                    <h1 className="text-white text-[30px] font-bold text-start -ml-16">
                      Lorem lorem lorem lorem
                    </h1>
                  </div>
                  <p className="text-white text-[12px] text-start pop font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ratione quis esse, fuga fugiat dolorum
                    corrupti vel ab inventore facere, architecto earum omnis
                    nobis doloribus accusantium nam! Libero, omnis porro?
                  </p>
                  <div className="flex justify-between items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                    <div>
                      <div className="text-gray-200  text-[14px] flex gap-6 justify-start items-center flex-start">
                        <div className="flex justify-start items-center gap-2">
                          <CiCalendarDate size={20} />
                          <p className="text-sm">Dec 30, 2023</p>
                        </div>
                        <p className="text-sm">12:00 pm</p>
                      </div>
                    </div>
                    <div className="text-white  text-[14px] flex gap-2 justify-end flex-end items-center">
                      <CgEye size={20} />
                      <p className="text-sm">2k view </p>
                    </div>
                  </div>
                </div>
                <button className="w-full py-1 text-[20px] bg-white -mb-10 hover:bg-blue-200 text-[#0041ff] font-semibold rounded-xl">
                  View more
                </button>
              </div>
            );
          })}
        </div>
        <div className="pt-20 text-center flex flex-col items-center justify-center mb-10">
          <div aria-label="Page navigation example ">
            <ul className="flex items-center -space-x-px h-10 text-base">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  6
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="mx-2 flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border-2 rounded-lg border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-3 h-3 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
