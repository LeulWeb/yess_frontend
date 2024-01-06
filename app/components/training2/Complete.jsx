import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import Image from 'next/image';
import con from '../../assets/conn.jpg'

const Complete = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 py-5 px-5">
        {/* <div>
          <form> */}
            {/* <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label> */}
            {/* <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div> */}
          {/* </form>
        </div> */}
        {/* <div className="lg:ml-10 flex justify-start items-center flex-start">
          <button className="flex gap-3 justify-center items-start bg-gray-400 w-32 rounded py-2.5 pt-1 px-3 text-gray-800">
            Sort <IoFilterSharp size={20} />
          </button>
        </div> */}
      </div>
      <div className=" py-10 bg-[#004dff] ">
        {/* <div className="bg-[#004dff] py-5">
          <div className="lg:px-28">
            <div className="bg-[#0411ff] mx-4 lg:mx-[20px] rounded flex  justify-between items-center">
              <p className="lg:text-[50px] text-[20px] sm:text-[30px] md:text-[40px] px-2 md:pl-12 lg:mx-28 text-white">
                Business Start up
              </p>
              <p className="lg:w-[220px] text-[#0041ff] bg-white rounded h-full text-center text-[20px] sm:text-[30px] md:text-[40px] py-3 lg:px-6 px-2">
                Continue
              </p>
            </div>
          </div>
        </div> */}
        <div className="flex md:flex-row flex-col justify-between items-center lg:px-20">
          <div className="mx-4  flex flex-col sm:flex-row justify-start items-center py-10">
            <div className="rounded-full bg-white text-blue p-5 w-[200px] h-[200px] flex justify-center items-center">
              <CiTrophy size={120} className="text-[#0041ff] text-[50px] lg:text-[120px]  font-light" />
            </div>
            <div className="text-white sm:pl-8 text-center flex flex-col items-center lg:ml-20 ">
              <p className="text-[50px] font-semibold pb-6 text-center">20</p>
              <p className="text-[50px] font-semibold text-center">Completed</p>
            </div>
          </div>
          <div>
            <div className="mx-4  flex flex-col sm:flex-row justify-start items-center py-10">
              <div className="rounded-full bg-white text-blue p-5 w-[200px] h-[200px] flex justify-center items-center">
                <Image src={con} alt='' width={150} height={150} />
              </div>
              <div className="text-white sm:pl-8 text-center flex flex-col items-center lg:ml-20 ">
                <p className="text-[50px] font-semibold pb-6 text-center">1</p>
                <p className="text-[50px] font-semibold text-center">
                  Coming Soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
