import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import footer from '../../assets/you.jpg';
import { CgEye } from 'react-icons/cg';
import { FaArrowRight } from "react-icons/fa";


const News=()=>{

    // const news = [1, 2, 3, 4, 5, 6, 7, 8, 9 ,0];
    const news=[
      {
        "title":"PhD study opportunity",
        "posted":"January 13, 2023",
        "description":"The UKFS-CDT will train up to 60 interdisciplinary doctoral researchers capable of leading the UK towards a resilient, healthy and inclusive food future. Cohort 3 will start in autumn of 2023."
      },
      {
        "title":"Business in USA",
        "posted":" December 27, 2022",
        "description":"To rank America’s Top States for Business in 2022, CNBC scored all 50 states on 88 metrics in 10 broad categories of competitiveness. Each category is weighted based on how frequently states use them as a selling point in economic development marketing materials."
      },
      {
        "title":"Tongue Twisters",
        "posted":"November 16, 2022",
        "description":"Tongue twisters are a great way to practice and improve pronunciation and fluency. They can also help to improve accents by using alliteration, which is the repetition of one sound."
      },
    ]
    return(
        <div>
            <div>
                <div className="flex justify-between items-center">
                <p className="text-[40px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">News</p>
                <div className="flex justify-end items-center gap-2 hover:border-b-2 hover:border-[#0041ff] cursor-pointer duration-500 text-[#0041ff] px-2 sm:px-6 md:px-12 lg:px-28">
                <p className="text-[30px]  text-start px-2 sm:px-6 md:px-12 lg:px-28 ">View More</p>
                <FaArrowRight />
                </div>
                </div>
                <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
           {news.map((items, index)=>{
            return(
                <div key={index} className="carousel-item shadow-xl border-gray-50 border-2 bg-[#0041ff] w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10">
                <Image
                  src={footer}
                  alt="Yess News"
                  width={500} height={300}
                  className="w-full h-[300px] rounded-xl"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                <div className="  flex flex-col items-center justify-start flex-start">
                  <h1 className="text-white text-[30px] font-bold text-start -ml-16">{items.title}</h1>
                </div>
                <p className="text-white text-[12px] text-start pop font-light">
                  {items.description} 
                </p>
                <div className="flex justify-between items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                 <div>
                 <div className="text-gray-200  text-[14px] flex gap-6 justify-start items-center flex-start">
                <div className='flex justify-start items-center gap-2'>
                <CiCalendarDate size={20}/>
                 <p className="text-sm">{items.posted}</p>
                </div>
                 </div>
                 </div>
                </div>
                </div>
                <button className="w-full py-1 text-[20px] bg-white -mb-10 hover:bg-blue-200 text-[#0041ff] font-semibold rounded-xl">View more</button>
              </div>
            )
           })}
            </div>
            </div>
        </div>
    )
}

export default News;