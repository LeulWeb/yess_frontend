import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import footer from '../../assets/you.jpg';
import blog2 from '../../assets/event1.jpg';
import blog3 from '../../assets/event2.png';
import Link from 'next/link';


const Events=()=>{

    const news=[
      {
        "title":"Free Series live training on Employability, life skill adn business Startups",
        "posted":"October 29, 2022",
        "description":"YESSETHIOPIA in collaboration with Kuraz Consulting, Tedy Gossa Consulting, and Mind Lead Consultancy cordially invite you to a series of training sessions with experienced and certified trainers that will be broadcast live on the YESSETHIOPIA Telegram channel",
        "image":blog2,
        "url":"/event1",
      },
      {
        "title":"YessEthiopia LinkedIn Live Networking Event",
        "posted":"December 30, 2023",
        "description":"We are thrilled to announce the grand celebration of the 1st Anniversary Week 52 for the YessEthiopia LinkedIn Live Networking Event! Join us on December 30, 2023, from 5 pm to 11 pm (Ethiopia Time) for an evening filled with reflection, gratitude, and forward-looking aspirations.",
        "image":blog3,
        "url":"/event2",
      },
      {
        "title":"Yess Ethiopia is hosting an international conference",
        "posted":"January 19-20, 2024",
        "description":"Yess Ethiopia is proud to announce the hosting of an impactful international conference centered around the theme of Youth Experience Sharing and Collaboration. This groundbreaking event aims to provide a platform for young minds from across the globe to share their experiences, ideas, and collaborate on solutions that will shape the future.",
        "image":footer,
        "url":"/event3",
      },
    ]
    return(
        <div>
            <div>
                <div className="flex justify-between items-center">
                <p className="text-[40px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">Events</p>
                {/* <div className="flex justify-end items-center gap-2 hover:border-b-2 hover:border-[#0041ff] cursor-pointer duration-500 text-[#0041ff] px-2 sm:px-6 md:px-12 lg:px-28">
                <p className="text-[30px]  text-start px-2 sm:px-6 md:px-12 lg:px-28 ">View More</p>
                <FaArrowRight />
                </div> */}
                </div>
                <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
           {news.map((items, index)=>{
            return(
                <div key={index} className="carousel-item shadow-xl border-gray-50 border-2 bg-[#0041ff] w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10">
                <Image
                  src={items.image}
                  alt={items.title}
                  width={500} height={300}
                  className="w-full h-[300px] rounded-xl"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                <div className="  flex flex-col items-center justify-start flex-start">
                  <h1 className="text-white text-[20px] lg:text-[30px] font-bold text-start px-2  line-clamp-1">{items.title}</h1>
                </div>
                <p className="text-white text-[12px] text-start pop font-light line-clamp-2 lg:line-clamp-3">
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
                <Link href={items.url} className="linko">
                  <button className="w-full py-1 text-[20px] bg-white -mb-10 hover:bg-blue-200 text-[#0041ff] font-semibold rounded-xl">View more</button>
                </Link>
              </div>
            )
           })}
            </div>
            </div>
        </div>
    )
}

export default Events;