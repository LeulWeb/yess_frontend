import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import footer from '../../assets/you.jpg';
import { CgEye } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa';
import './scholar.css';
import mms from '../../assets/mmk.png';
import tokyo from '../../assets/tokyo.png';
import icp from '../../assets/icp.png';

const New = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="pop">
      <div>
        <p className="text-[40px] text-[#0041ff] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-36">
          New Scholarship
        </p>

        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {/* First Item */}
          <div className="carousel-item shadow-xl border-gray-50 border-2 bg-white w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10">
            <Image
              src={mms}
              alt="Yess News"
              width={500}
              height={300}
              className="w-full h-[300px] rounded-xl"
            />
            <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
              <div className="flex justify-between items-center gap-10 py-2 w-full text-gray-800">
                <div>
                  <div className="text-gray-800  text-[12px] flex gap-6 justify-start items-center flex-start">
                    <div className="flex justify-start items-center gap-2">
                      <CiCalendarDate size={20} />
                      <p className="text-sm">Dec 30, 2023</p>
                    </div>
                    <p className="text-sm">12:00 pm</p>
                  </div>
                </div>
                <div className="text-gray-800  text-[12px] flex gap-2 justify-end flex-end items-center">
                  <CgEye size={20} />
                  <p className="text-sm">2k view </p>
                </div>
              </div>
              <p className="text-black text-[12px] text-start pop font-light mmk">
                The Department of Materials and Environmental Chemistry (MMK)
                is, with about 160 employees, one of the largest departments at
                the Faculty of Natural sciences at Stockholm University.
              </p>
              <div className="flex justify-start items-center gap-3 pop py-1 pt-5">
                <p className="text-gray-700 text-[12px] pop">Field of Study </p>
                <p className="text-black text-[12px] pop">
                  Dep of Materials and Environmental Chemistry{' '}
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Program </p>
                <p className="text-black text-[12px] pop">
                  PhD student in Inorganic Chemistry{' '}
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]"> Program Duration </p>
                <p className="text-black text-[12px] pop">2 years</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Funding amount</p>
                <p className="text-black text-[12px] pop">Fully Funded</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">
                  University/Institution
                </p>
                <p className="text-black text-[12px] pop">
                  Stockholm University
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Deadline </p>
                <p className="text-black text-[12px] pop">25/01/2024</p>
              </div>
            </div>
            <button className="px-8 py-2 text-[12px] bg-[#0041ff] -mb-5  text-[#fff] font-normal rounded-xl">
              Apply Scholarship
            </button>
          </div>

          {/* Item 2 */}
          <div className="carousel-item shadow-xl border-gray-50 border-2 bg-white w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10">
            <Image
              src={tokyo}
              alt="Yess News"
              width={500}
              height={300}
              className="w-full h-[300px] rounded-xl"
            />
            <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
              <div className="flex justify-between items-center gap-10 py-2 w-full text-gray-800">
                <div>
                  <div className="text-gray-800  text-[12px] flex gap-6 justify-start items-center flex-start">
                    <div className="flex justify-start items-center gap-2">
                      <CiCalendarDate size={20} />
                      <p className="text-sm">Dec 30, 2023</p>
                    </div>
                    <p className="text-sm">12:00 pm</p>
                  </div>
                </div>
                <div className="text-gray-800  text-[12px] flex gap-2 justify-end flex-end items-center">
                  <CgEye size={20} />
                  <p className="text-sm">2k view </p>
                </div>
              </div>
              <p className="text-black text-[12px] text-start pop font-light mmk">
                The University of Tokyo aims to be a world-class platform for
                research and education, contributing to human knowledge in
                partnership with other leading global universities.
              </p>
              <div className="flex justify-start items-center gap-3 pop py-1 pt-5">
                <p className="text-gray-700 text-[12px] pop">Field of Study </p>
                <p className="text-black text-[12px] pop">
                  Graduates School of Engineering.
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Program </p>
                <p className="text-black text-[12px] pop">
                  Summer Internship
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]"> Program Duration </p>
                <p className="text-black text-[12px] pop">2 Months</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Funding amount</p>
                <p className="text-black text-[12px] pop">Fully Funded</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">
                  University/Institution
                </p>
                <p className="text-black text-[12px] pop">
                  Universtift of tokyo
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Deadline </p>
                <p className="text-black text-[12px] pop">01/02/2024</p>
              </div>
            </div>
            <button className="px-8 py-2 text-[12px] bg-[#0041ff] -mb-5  text-[#fff] font-normal rounded-xl">
              Apply Scholarship
            </button>
          </div>

          {/* item 3 */}
          <div className="carousel-item shadow-xl border-gray-50 border-2 bg-white w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10">
            <Image
              src={icp}
              alt="Yess News"
              width={500}
              height={300}
              className="w-full h-[300px] rounded-xl"
            />
            <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
              <div className="flex justify-between items-center gap-10 py-2 w-full text-gray-800">
                <div>
                  <div className="text-gray-800  text-[12px] flex gap-6 justify-start items-center flex-start">
                    <div className="flex justify-start items-center gap-2">
                      <CiCalendarDate size={20} />
                      <p className="text-sm">Dec 30, 2023</p>
                    </div>
                    <p className="text-sm">12:00 pm</p>
                  </div>
                </div>
                <div className="text-gray-800  text-[12px] flex gap-2 justify-end flex-end items-center">
                  <CgEye size={20} />
                  <p className="text-sm">2k view </p>
                </div>
              </div>
              <p className="text-black text-[12px] text-start pop font-light mmk">
              To apply for an ICP scholarships several steps need to be done. Please make sure that you start on time with your application to avoid that your dossier cannot be completed before the deadline.
              </p>
              <div className="flex justify-start items-center gap-3 pop py-1 pt-5">
                <p className="text-gray-700 text-[12px] pop">Field of Study </p>
                <p className="text-black text-[12px] pop">
                 Graduate School of engineering.
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Program </p>
                <p className="text-black text-[12px] pop">
                  Master of Statistics and Data Science
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]"> Program Duration </p>
                <p className="text-black text-[12px] pop">2 years</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Funding amount</p>
                <p className="text-black text-[12px] pop">Fully Funded</p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">
                  University/Institution
                </p>
                <p className="text-black text-[12px] pop">
                  Hawasa University
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 pop py-1">
                <p className="text-gray-700 text-[12px]">Deadline </p>
                <p className="text-black text-[12px] pop">23/04/2024</p>
              </div>
            </div>
            <button className="px-8 py-2 text-[12px] bg-[#0041ff] -mb-5  text-[#fff] font-normal rounded-xl">
              Apply Scholarship
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
