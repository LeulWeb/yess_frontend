import Image from 'next/image';
import React from 'react';
import you from '../../assets/you.jpg';
import { CiCalendarDate } from 'react-icons/ci';
import on from '../../assets/on.png';
import self from '../../assets/self.png';
import intel from '../../assets/intel.png';


const Comming = () => {

  return (
    <div className="story">
      <div>
        <h1 className="text-[#0041ff] text-[60px] font-bold">
          Coming Soon Training
        </h1>
        <div className="py-10">
          <div className="carousel carousel-center  max-w-full p-4 space-x-10 rounded-box h-full ">
            
            {/* Item 1 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[494px] lg:h-[682px]  rounded-box flex flex-col items-center justify-center">
              <Image
                src={on}
                width={400}
                height={500}
                className="lg:w-[493px] h-[470px] rounded-t-xl"
              />
              <p className="text-[18px] text-center text-black pop py-3 px-3">
                Personal development is a lifelong journey of self improvement and growth, focusing on enhancing  various aspects of one's life, including skills, knowledge, and attitudes.
              </p>
              <div className="flex justify-end pop items-center text-end -mr-28 gap-3 flex-end text-xs font-light pt-5 pb-2">
                <CiCalendarDate size={20} className="text-[10px] font-light" />
                <p className="text-[10px] font-light">Dec 13</p>
                <p className="text-[10px] font-light">2:00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[494px] lg:h-[682px]  rounded-box flex flex-col items-center justify-center">
              <Image
                src={intel}
                width={400}
                height={500}
                className="lg:w-[493px] h-[470px] rounded-t-xl"
              />
              <p className="text-[18px] text-center text-black pop py-3 px-3">
                Emotional intelligence training is a process that enhances an individual's ability to recognize, understand, manage adn effectively use emotions both one's own and others&apos;.
              </p>
              <div className="flex justify-end pop items-center text-end -mr-28 gap-3 flex-end text-xs font-light pt-5 pb-2">
                <CiCalendarDate size={20} className="text-[10px] font-light" />
                <p className="text-[10px] font-light">Dec 30</p>
                <p className="text-[10px] font-light">2:00</p>
              </div>
            </div>


            {/* Item 3 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[494px] lg:h-[682px]  rounded-box flex flex-col items-center justify-center">
              <Image
                src={self}
                width={400}
                height={500}
                className="lg:w-[493px] h-[470px] rounded-t-xl"
              />
              <p className="text-[18px] text-center text-black pop py-3 px-3">
                Self-leadership training is a structured approach to developing the skills and mindset necessary for individuals to take charge of their own lives. it encompasses goal setting, time management, resilience, and the ability to influence oneself positively.
              </p>
              <div className="flex justify-end pop items-center text-end -mr-28 gap-3 flex-end text-xs font-light pt-5 pb-2">
                <CiCalendarDate size={20} className="text-[10px] font-light" />
                <p className="text-[10px] font-light">April 30</p>
                <p className="text-[10px] font-light">2:00</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comming;
