import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/footer.jpg';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';


const Business =()=>{
  const content = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return(
    <div>
      <h1 className='font-bold text-[50px] px-2 sm:px-4 md:px-12 lg:px-28 xl:px-32 py-10'>Startup Businesses</h1>
      <div>
      <div className="h-[80vh] carousel carousel-vertical rounded-box">
          {content.map((item, index)=>(
        <div key={index} className="mx-10 py-5 carousel-item h-[500px] lg:h-[230px] overflow-hidden">
        <div className="flex flex-col md:flex-row gap-10  border-2 border-gray-300  rounded-xl">
          <Image
            src={footer}
            alt="introduction"
            width={200}
            height={200}
            className="lg:h-[305px] h-full w-[300px] md:w-[500px] lg:w-[200px] x rounded-l-xl"
          />
          <div className="flex flex-col gap-6 lg:mr-20 py-6">
            <div>
              <p className="font-bold text-[30px] pl-5 text-center py-2">
                Community Catalysts: Join Us in Making a Difference!
              </p>
              <p className="text-gray-700 font-light pop text-[16px] line-clamp-2 lg:line-clamp-3 text-center">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt accusamus corrupti, voluptatem reiciendis
                voluptate similique esse quam excepturi ea dolorem
                molestias numquam sequi est omnis, soluta, voluptatibus
                eum expedita quaerat.
              </p>
            </div>
            <div className="flex flex-end justify-end items-center gap-10">
              <p className="pr-4 sm:pr-6 md:pr-16 lg:pr-60 xl:pr-96 text-sm lg:mr-40">Dec 30</p>
              <FaArrowRight size={40} className="text-[#0041ff]" />
            </div>
          </div>
        </div>
      </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Business;