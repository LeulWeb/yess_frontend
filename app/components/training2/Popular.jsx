import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegStar } from 'react-icons/fa';

const Popular = () => {
  return (
    <div>
      <div className="py-10">
        <p className="text-[45px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">
          Popular Courses
        </p>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          <div className="carousel-item shadow-xl border-gray-50 border-4 bg-white w-[300px] rounded-box flex flex-col flex-start items-center justify-start h-full py-5">
            <FaRegStar className="w-[100px] h-[100px] rounded-full p-5 text-[#0041ff] bg-gray-100 font-light -ml-10" />
            
            <Link href="/emotion">
            <p className="text-[#0041ff]  text-[25px] text-center py-2">
              Emotional Intelligence
            </p>
            </Link>
          </div>

          {/* Second Item */}
          <div className="carousel-item shadow-xl border-gray-50 border-4 bg-white w-[300px] rounded-box flex flex-col flex-start items-center justify-start h-full py-5">
            <FaRegStar className="w-[100px] h-[100px] rounded-full p-5 text-[#0041ff] bg-gray-100 font-light -ml-10" />
            <p className="text-[#0041ff]  text-[25px] text-center py-2">
              Personal Development
            </p>
          </div>

          {/* Thread item */}
          <div className="carousel-item shadow-xl border-gray-50 border-4 bg-white  w-[300px] rounded-box flex flex-col flex-start items-center justify-start h-full py-5">
            <FaRegStar className="w-[100px] h-[100px] rounded-full p-5 text-[#0041ff] bg-gray-100 font-light -ml-10" />
            <p className="text-[#0041ff]  text-[25px] text-center py-2">
              Project Management
            </p>

          </div>

          {/* Fourth Model */}
          {/* <div className="carousel-item shadow-xl border-gray-50 border-4 bg-white  w-[300px] rounded-box flex flex-col flex-start items-center justify-start h-full py-5">
            <FaRegStar className="w-[100px] h-[100px] rounded-full p-5 text-[#0041ff] bg-gray-100 font-light -ml-10" />
            <p className="text-[#0041ff]  text-[25px] text-center py-2">
              Business Model
            </p>
    
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Popular;
