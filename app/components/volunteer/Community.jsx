import React from 'react';
import { IoFilter } from 'react-icons/io5';
import bego from '../../assets/bego.png';
import tesfa from '../../assets/tesfa.png';
import mek from '../../assets/mek.png';
import rohobot from '../../assets/rohobot.png';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const Community = () => {
  const community = [
    {
      name: 'Fikir charity for children and mothers',
      description:
        "Yess Ethiopia's visit to Fikir Children and Mothers Charity marked a heartwarming and impactful occasion, leaving a positive impression on both organizations. The collaboration aimed to extend support and bring joy to the lives of children and mothers in need. Yess Ethiopia, with its commitment to community development, recognizes the importance of collective efforts in creating positive change.",
      image: bego,
      url: '/fikir',
      date: 'Dec 13, 23 ',
    },
    {
      name: 'Visited mekedonia at Jimma',
      description:
        "Yess Ethiopia's visit to Mekedonia in Jimma was a significant and enriching experience for both organizations. This collaborative effort aimed to strengthen ties, share insights, and extend support to the community. Mekedonia, with its dedication to community development, aligns with Yess Ethiopia's mission to empower and uplift individuals.",
      image: mek,
      url: '/mek',
      date: 'Dec 30, 23  ',
    },
    {
      name: 'Visited Tesfa Adis Parents Childhood Cancer Center organization',
      description:
        'The members of YESS Ethiopia Jimma team conducted Free Health Check-Up Service for the Elderly at Mecdonia and visited Tesfa Adis Parents Childhood Cancer Center Organization for Future Collaboration.',
      image: tesfa,
      url: '/tesfa',
      date: 'Jan 1, 24  ',
    },
    {
      name: 'Volunteering at Rohobot Orphanage',
      description:
        'YessEthiopia hawasa team is volunteering at Rohobot Orphanage, located in Hawasa, Rohobot is a home for children who have been abandoned and found on the streets at just a few days old. These vulnerable infants are in desperate need of care and support, and the orphanage provides a safe and nurturing environment for them to thrive.',
      image: rohobot,
      url: '/rohobot',
      date: 'Jan 10, 24  ',
    },
  ];
  return (
    <div className="story bg-cover bg-no-repeat text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-2 sm:px-6 md:px-12 lg:px-44 xl:px-60">
        <form className="lg:col-span-2">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative lg:ml-8">
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
              placeholder="Search Volunteers ..."
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
        <div className="flex gap-1 rounded-3xl bg-gray-200 text-gray-800 w-32  mt-3 lg:ml-28 md:ml-10 ml-5 px-4">
          <p className="text-sm pt-2">Community</p>
          <IoFilter className="mt-2.5" />
        </div>
      </div>
      <div>
        <div className="h-full flex flex-col items-center gap-5 pb-20 justify-center rounded-box">
          {community.map((item, index) => (
            <div
              key={index}
              className="mx-10 py-5 h-full lmd:h-[500px] lg:h-[298px] overflow-hidden "
            >
              <div className="flex flex-col md:flex-row gap-10  border-2 border-b-4 border-gray-300  rounded-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={200}
                  className="lg:h-[294px] w-300 lg:w-[400px] rounded-l-xl"
                />
                <div className="flex flex-col gap-6 lg:mr-20 py-6">
                  <div>
                    <p className="font-bold text-[30px] pl-5 text-center py-2">
                      {item.name}!
                    </p>
                    <p className="text-gray-700 font-light pop text-[16px] lg:text-[20px] line-clamp-2 lg:line-clamp-4 text-start">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex flex-end justify-end items-center gap-10">
                    <p className="pr-4 sm:pr-6 md:pr-16 lg:pr-60 xl:pr-96 text-base pop lg:mr-40 text-gray-700 font-semibold">
                      {item.date}
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

export default Community;
