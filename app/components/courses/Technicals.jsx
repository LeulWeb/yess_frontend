import React from 'react';
import per from '../../assets/personal.png';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const Technicals = () => {
  return (
    <div>
      <div>
        <p className="text-[45px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">
          Recent Training
        </p>
        <div>
          <div className="h-[80vh] carousel carousel-vertical rounded-box">
            <div className="mx-10 my-5 carousel-item lg:h-[278px] overflow-hidden">
              <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300 shadow-xl shadow-transparent rounded-xl">
                <Image
                  src={per}
                  alt="introduction"
                  width={200}
                  height={200}
                  className="h-[278px] w-[426px]  p-2"
                />
                <div className="flex flex-col gap-6 lg:mr-20 lg:py-6">
                  <div>
                    <p className="font-bold text-[30px] text-black text-start md:py-2">
                      Project Management
                    </p>
                    <p className="text-gray-700 font-medium text-[20px]  line-clamp-2 lg:line-clamp-3 text-start">
                      We are excited to share with you the training videos our
                      team produced for on personal development training that
                      YessEthiopia record for youth.
                    </p>
                  </div>
                  <div className="flex flex-end flex-row justify-end items-center">
                    <Link href="/project">
                      <button className=" md:py-2 text-[18px] flex justify-center items-center px-6 text-gray-600 rounded-xl mb-2 mr-3">
                        Video{' '}
                        <FaArrowRight className="ml-2 mt-1 text-[#0041ff]" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technicals;
