import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import footer from '../../assets/conf.png';
import { CgEye } from 'react-icons/cg';
import { FaArrowRight } from 'react-icons/fa6';

const Conference = () => {
  const news = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <div>
      <div className="py-10">
        <p className="text-[45px] font-bold text-center px-2 sm:px-6 md:px-12 lg:px-28">
          {' '}
          Conference
        </p>
        <p className="px-4 sm:px-[6%] md:px-[8%] pop lg:mx-6 text-[30px] py-4 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          blanditiis fugiat autem, nisi tenetur exercitationem.
        </p>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {news.map((items, index) => {
            return (
              <div
                key={index}
                className="carousel-item shadow-xl border-gray-50 border-2 bg-[#0041ff] w-[300px] rounded-box flex flex-col items-center justify-center h-full pb-10"
              >
                <Image
                  src={footer}
                  alt="Yess News"
                  width={500}
                  height={200}
                  className="w-full h-[200px] rounded-t-xl"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                  <p className="text-white text-[14px] py-2 text-center pop font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit ratione quis esse, fuga fugiat dolorum
                    corrupti.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Conference;
