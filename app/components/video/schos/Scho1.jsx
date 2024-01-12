import React from 'react';
import you from '../../../assets/gra.png';
import Image from 'next/image';
import { GoGoal } from 'react-icons/go';
import { IoMdTime } from 'react-icons/io';

const Scho1 = () => {
  return (
    <div>
      <div className="bg-[#0041ff] flex justify-center items-center flex-col lg:flex-row py-10 gap-10 ">
        <div className="lg:w-3/5">
          <p className="text-white text-[30px] text-center font-semibold py-4">
            {' '}
            Scholarships open doors to education. They alleviate financial barriers, empowering individuals to pursue academic goals. Scholarship recipients gain access to opportunities, fostering personal growth and contributing to a brighter future.
          </p>
          <div className="flex justify-between items-center text-white px-20 pt-5">
            <div className="flex justify-center items-center gap-5">
              <GoGoal size={40} />
              <p className="text-[20px]">5 Lessons</p>
            </div>
            <div className="flex justify-center items-center gap-5">
              <IoMdTime size={40} />
              <p className="text-[20px]">2hr 30min</p>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5">
          <Image
            src={you}
            alt="why Yess"
            width={200}
            height={200}
            className="w-[400px] h-[400px] rounded-full border-8 border-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Scho1;
