import React from 'react';
import { IoFilter, IoFilterSharp } from 'react-icons/io5';
import footer from '../../assets/footer.jpg';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';

const Help = () => {
  return (
    <div>
      <div className="py-10">
        <h1 className="text-[30px] lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36 font-bold">
          Help Community and help yourself with Yess Ethiopia
        </h1>
        <p className="lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36 pop text-[16px] py-2 font-medium">
          At Yess Ethiopia, we are dedicated to addressing significant
          challenges within our communities, working towards transformative
          solutions for the betterment of our nation. We firmly believe that
          empowering the youth is synonymous with strengthening the very core of
          our country. By focusing on the pivotal issues that affect our
          communities, we strive to make a lasting impact and contribute to the
          development of a thriving and empowered society. Join us on our
          journey to tackle substantial problems, where supporting the youth
          translates into supporting the heart and future of our nation.
        </p>
        <div className="lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-2 sm:px-6 md:px-12 lg:px-44 xl:px-60">
            <form className="lg:col-span-2">
              <label
                htmlFor="default-search"
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
                  placeholder="Search Jobs"
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
            <div className="lg:ml-10 flex justify-start items-center flex-start">
              <button className="flex gap-3 justify-center items-start bg-gray-400 w-32 rounded py-2.5 pt-1 px-3 text-gray-800">
                Filter <IoFilterSharp size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="py-10 sm:px-10 px-4">
          <div>
            <div
              id="default-carousel"
              className="relative w-full"
              data-carousel="slide"
            >
              {/* <!-- Carousel wrapper --> */}
              <div className="relative h-56 overflow-hidden rounded-lg md:h-80">
                {/* <!-- Item 1 --> */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src={footer}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={400}
                    width={1024}
                    alt="..."
                  />
                </div>
                {/* <!-- Item 2 --> */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src={footer}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={400}
                    width={1024}
                    alt="..."
                  />
                </div>
                {/* <!-- Item 3 --> */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src={footer}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={400}
                    width={1024}
                    alt="..."
                  />
                </div>
                {/* <!-- Item 4 --> */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src={footer}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={400}
                    width={1024}
                    alt="..."
                  />
                </div>
                {/* <!-- Item 5 --> */}
                <div
                  className="hidden duration-700 ease-in-out"
                  data-carousel-item
                >
                  <Image
                    src={footer}
                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    height={400}
                    width={1024}
                    alt="..."
                  />
                </div>
              </div>
              {/* <!-- Slider indicators --> */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="true"
                  aria-label="Slide 1"
                  data-carousel-slide-to="0"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 2"
                  data-carousel-slide-to="1"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 3"
                  data-carousel-slide-to="2"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 4"
                  data-carousel-slide-to="3"
                ></button>
                <button
                  type="button"
                  className="w-3 h-3 rounded-full"
                  aria-current="false"
                  aria-label="Slide 5"
                  data-carousel-slide-to="4"
                ></button>
              </div>
              {/* <!-- Slider controls --> */}
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
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
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
