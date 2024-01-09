import React from 'react';
import face from '../../assets/focal.png';
import Image from 'next/image';

const Focal = () => {
  return (
    <div className="story text-black">
      <h1 className="text-[#0041ff] tes font-bold px-2 sm:px-6 md:px-12 lg:px-32 ">
        Focal of Yess Ethiopia
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 px-2 sm:px-6 md:px-12 lg:px-32 pb-20">
        <div className="lg:w-2/5">
          <div>
            <h1 className="font-bold tes py-10 text-center pt-10">
              Yess Ethiopia
            </h1>
            <p className="pop px-2 text-[25px] text-lg font-light leading-9 text-center lg:px-10">
              Yess Ethiopia operates with dedicated focal points strategically
              placed in different cities and universities, both within Ethiopia
              and internationally. These focal points serve as vital connections
              between Yess Ethiopia and the communities it aims to support.
            </p>
          </div>
        </div>
        <div className=" mx-2 sm:mx-6 md:mx-12 lg:mx-24 lg:col-span-2 lg:w-3/5">
          <div className="h-screen carousel carousel-vertical hidden sm:block">
            <div className="carousel-item ">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="text-white">
                  <div className="flex justify-start items-start gap-5 h-full w-full">
                    <Image
                      src={face}
                      alt=""
                      width={1000}
                      height={1000}
                      className="-mt-4 ml-1 h-full w-"
                    />
                    <p>Abebe Balcha</p>
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

export default Focal;
