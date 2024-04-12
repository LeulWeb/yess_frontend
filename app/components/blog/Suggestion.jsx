import Image from 'next/image';
import React from 'react';
import { CiCalendarDate } from 'react-icons/ci';
import footer from '../../assets/you.jpg';
import blog2 from '../../assets/blog2.jpg';
import blog3 from '../../assets/blog3.jpg';
import Link from 'next/link';

const Suggestion = () => {
  const news = [
    {
      title: 'Arsi Robe Didea School Event',
      posted: 'August 11, 2020',
      description:
        'Former students of the Arsi Robe Didea highschool in collaboration with Youth and Education Support Service Ethiopia / YessEthiopia / organized thank you event for teacher Shewamare Bogale Our Biology teacher was known for his high dedication and work ethics while teaching biology subject at Didea Highschool He motivated many students to like the Biology subject and score very good mark in national exam I am a witness for his exemplary teaching skills',
      image: footer,
      url: '/blog1',
    },
    {
      title: 'My meeting with the devil',
      posted: 'July 25, 2020',
      description:
        'There is no a better way to explain my experiences during this past one month Its meeting with the devil Yes! I did meet with the devil I saw the devil I saw his actions I saw his intentions to ruin my days I saw the devil trying to ruin my life Yes…. the devil did walk into my life it did come all the way to make me sad the devil did walk long ways and made many attempts to make me sad Yet…. it didnt succeed Thanks to our seniors thanks to our social values',
      image: blog2,
      url: '/blog2',
    },
    {
      title: 'Inspiring story of the man without hands',
      posted: 'March 21, 2020',
      description:'My name is Kebede Awgechew Weldetsadik. I was born and raised in the beautiful rural kebele of Dode districts of Lode Hetosa Wedreda in the Arsi Zone of Oromia Regional State, Ethiopia. No alt text provided for this image Just like the above child … ',
      image: blog3,
      url: '/blog3',
    },
  ];
  return (
    <div>
      <div className="py-10">
        <div className="flex justify-between items-center">
          <p className="text-[30px] md:text-[35px] lg:text-[40px] font-bold text-start px-2 sm:px-6 md:px-12 lg:px-28">
            Suggestion Spot
          </p>
        </div>
        <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
          {news.map((items, index) => {
            return (
              <div
                key={index}
                className="carousel-item shadow-xl border-gray-50 border-2 bg-[#0041ff] w-[350px] lg:w-[420px] rounded-box flex flex-col items-center justify-center h-full pb-10"
              >
                <Image
                  src={items.image}
                  alt={items.title}
                  width={500}
                  height={300}
                  className="w-full h-[300px] rounded-xl"
                />
                <div className="py-3 px-3 flex flex-col items-center justify-start text-start">
                  <div className="  flex flex-col items-center justify-start flex-start">
                    <h1 className="text-white text-[20px] lg:text-[30px] font-bold text-start px-2 text-center line-clamp-1">
                      {items.title}
                    </h1>
                  </div>
                  <p className="text-white text-[12px] text-start pop font-light line-clamp-2 lg:line-clamp-3">
                    {items.description}
                  </p>
                  <div className="flex justify-between items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                    <div>
                      <div className="text-gray-200  text-[14px] flex gap-6 justify-start items-center flex-start">
                        <div className="flex justify-start items-center gap-2">
                          <CiCalendarDate size={20} />
                          <p className="text-sm">{items.posted}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href={items.url} className="linko">
                  <button className="w-full py-1 text-[20px] bg-white -mb-10 hover:bg-blue-200 text-[#0041ff] font-semibold rounded-xl">
                    View more
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
