import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import nit from '../../assets/nit.png';
import tad from '../../assets/tad.png';
import min from '../../assets/min.png';
import { CgEye } from 'react-icons/cg';
import { FaGraduationCap } from 'react-icons/fa6';

const HighScore = () => {
  const news = [
    {
      name: 'Nitsuh Mengst',
      degree: 'Bachelor Degree Veterinary medicine',
      filed:
        'Veterinary Science PhD, proudly honored with Gold Medal from esteemed Woldia University, exemplifying excellence in academic achievement.',
      image: nit,
    },
    {
      name: 'Tadele Mekonnen',
      degree: 'Bachelor of Arts Degree BA, Economics',
      filed:
        "I completed my bachelor's degree in Economics with Cumulative Grade Point Average of 3.96/4.00 and ranked first among all my classmates.",
      image: tad,
    },
    {
      name: 'Mintesinot Nigussie',
      degree: 'Bachelor Degree Agricultural Economics',
      filed:
        'Result driven Agricultural Economist with a strong academic foundation from the University of Gondar, achieving a CGPA of 3.76.',
      image: min,
    },
  ];
  return (
    <div className="py-10">
      <div>
        <h1 className="text-[black] text-[40px] font-bold px-2 lg:px-28 md:px-12 sm:px-8 lg:mx-12 pb-6">
          Students get high score
        </h1>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {news.map((item, index) => {
            return (
              <div
                key={index}
                className="carousel-item mt-32 bg-white shadow-2xl border-gray-50 border-2 text-black  w-[350px] lg:w-[420px] rounded-3xl flex flex-col items-center justify-center h-full pb-2"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="w-[200] h-[200px] rounded-full -mt-32"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                  <h1 className="text-[#0041ff] font-bold text-[30px]">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-start flex-start py-3">
                    <FaGraduationCap
                      size={50}
                      className="text-[#0041ff] mr-3"
                    />
                    <h1 className="text-[#0041ff] text-[18px] lg:text-[24px] pop text-start">
                      {item.degree}
                    </h1>
                  </div>
                  <p className="text-black text-[20px] text-start pop font-light py-2">
                    {item.filed}
                  </p>
                  <div className="flex justify-between items-center gap-10 py-1 mt-4 w-full text-gray-800">
                    <div className="  text-[14px] flex gap-2 justify-end flex-end items-center"></div>
                    <div>
                      <div className="text-gray-700  flex gap-6 justify-end items-center flex-end mr-4">
                        <div className="flex justify-start items-center gap-2">
                          <CiCalendarDate size={20} />
                          <p className="text-lg font-light text-[gray]">
                            Dec 30, 2023
                          </p>
                        </div>
                        <p className="text-lg font-light text-[gray]">
                          12:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HighScore;
