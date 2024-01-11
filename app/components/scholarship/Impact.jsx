import React from 'react';
import face from '../../assets/impact.png';
import Image from 'next/image';

const Impact = () => {
  return (
    <div className="story text-black">
      <h1 className="text-[#0041ff] text-[40px] font-bold px-2 sm:px-6 md:px-12 lg:px-32 text-center py-10">
        Impact Story
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 px-2 sm:px-6 md:px-12 lg:px-32 pb-20">
        <div className="lg:w-2/5">
          <div>
            <h1 className="font-bold tes py-10 text-center pt-10 ">
              Yess Ethiopia
            </h1>
            <p className="pop px-2 text-[25px] lg:text-[32px] text-center lg:px-10">
            The Yess Ethiopia scholarship program stands as a beacon of hope and opportunity, leaving a lasting impact on the lives of countless young individuals. Through the generosity of our supporters and the dedication of our team, we have witnessed transformative changes in the educational landscape of Ethiopia.
            </p>
          </div>
        </div>
        <div className="col-span-1 mx-2 sm:mx-6 md:mx-12 lg:mx-24 lg:col-span-2 lg:w-3/5">
          <div className="h-screen carousel carousel-vertical hidden sm:block">
            <div className="carousel-item">
                  <div className="flex justify-start items-start gap-5 w-full">
                    <Image
                      src={face}
                      alt=""
                      width={500}
                      height={1000}
                      className="-mt-4 ml-1 w-full"
                    />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
