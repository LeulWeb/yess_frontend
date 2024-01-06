import Image from 'next/image';
import React from 'react';
import you from '../../assets/comesoon1.png';
import you2 from '../../assets/comesoon2.png';
import { CiCalendarDate } from 'react-icons/ci';
import on from '../../assets/on.png';
import self from '../../assets/self.png';
import intel from '../../assets/intel.png';


const Comming = () => {

  return (
    <div className="story">
      <div>
        <h1 className="text-[#0041ff] text-[40px] font-bold px-4 lg:px-10">
          Coming Soon Training
        </h1>
        <div className="pb-10">
          <div className="carousel carousel-center  max-w-full p-4 space-x-10 rounded-box h-full ">
            
            {/* Item 1 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[400px] flex flex-col items-center justify-center">
              <Image
                src={you}
                width={400}
                height={450}
                className="lg:w-[400px] h-[450px] rounded-t-xl"
              />
            </div>

            {/* Item 2 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[400px] flex flex-col items-center justify-center">
              <Image
                src={you2}
                width={400}
                height={450}
                className="lg:w-[400px] h-[450px] rounded-t-xl"
              />
            </div>


            {/* Item 3 */}
            <div className="carousel-item rounded-xl shadow-xl border-2 border-gray h-full w-[400px] flex flex-col items-center justify-center">
              <Image
                src={self}
                width={400}
                height={450}
                className="lg:w-[400px] h-[450px] rounded-t-xl"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Comming;
