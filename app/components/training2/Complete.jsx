import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { CiTrophy } from 'react-icons/ci';
import Image from 'next/image';
import con from '../../assets/conn.jpg'

const Complete = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 py-5 px-5">
      </div>
      <div className=" py-10 bg-[#004dff] ">
        <div className="flex md:flex-row flex-col justify-between items-center lg:px-20 gap-10">
          <div className="mx-4  flex flex-col sm:flex-row justify-start items-center py-10">
            <div className="rounded-full bg-white text-blue p-5 w-[200px] h-[200px] flex justify-center items-center">
              <CiTrophy size={120} className="text-[#0041ff] text-[50px] lg:text-[120px]  font-light" />
            </div>
            <div className="text-white sm:pl-8 text-center flex flex-col items-center lg:ml-5 ">
              <p className="text-[50px] font-semibold pb-6 text-center">20</p>
              <p className="text-[50px] font-semibold text-center">Completed</p>
            </div>
          </div>
          <div>
            <div className="mx-4  flex flex-col sm:flex-row justify-start items-center py-10 md:ml-10 lg:ml-20">
              <div className="rounded-full bg-white text-blue p-5 w-[200px] h-[200px] flex justify-center items-center">
                <Image src={con} alt='' width={150} height={150} />
              </div>
              <div className="text-white sm:pl-8 text-center flex flex-col items-center lg:ml-5 ">
                <p className="text-[50px] font-semibold pb-6 text-center">4</p>
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
