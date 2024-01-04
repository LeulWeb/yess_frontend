import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import footer from '../../assets/you.jpg';
import { CgEye } from 'react-icons/cg';
import { FaGraduationCap } from 'react-icons/fa6';

const HighScore = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div className="py-10">
      <div>
        <h1 className="text-[black] text-[40px] font-bold px-2 lg:px-28 md:px-12 sm:px-8 lg:mx-12 pb-6">
        Students get high score
      </h1>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {news.map((items, index) => {
            return (
              <div
                key={index}
                className="carousel-item mt-32 bg-white shadow-2xl border-gray-50 border-2 text-black  w-[350px] lg:w-[420px] rounded-3xl flex flex-col items-center justify-center h-full pb-2"
              >
                <Image
                  src={footer}
                  alt="Yess News"
                  width={200}
                  height={200}
                  className="w-[200] h-[200px] rounded-full -mt-32"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                  <h1 className="text-[#0041ff] font-bold text-[30px]">Ruth Kebede</h1>
                  <div className="  flex items-center -ml-16 justify-start flex-start py-3">
                    <FaGraduationCap
                      size={50}
                      className="text-[#0041ff] mr-3"
                    />
                    <h1 className="text-[#0041ff] text-[18px] pop text-start">
                      Bachelor Degree <br /> Computer Engineering
                    </h1>
                  </div>
                  <p className="text-black text-[20px] text-start pop font-light py-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ratione quis esse, fuga fugiat dolorum
                    corrupti vel ab inventore.
                  </p>
                  <div className="flex justify-between items-center gap-10 py-1 mt-4 w-full text-gray-800">
                  <div className="  text-[14px] flex gap-2 justify-end flex-end items-center">
                    </div>
                    <div>
                      <div className="text-gray-700  flex gap-6 justify-end items-center flex-end mr-4">
                        <div className="flex justify-start items-center gap-2">
                          <CiCalendarDate size={20} />
                          <p className="text-lg font-light text-[gray]">Dec 30, 2023</p>
                        </div>
                        <p className="text-lg font-light text-[gray]">12:00 pm</p>
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
