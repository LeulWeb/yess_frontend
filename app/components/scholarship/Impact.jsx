import React from 'react';
import face from '../../assets/face.png';
import Image from 'next/image';

const Impact = () => {
  return (
    <div className="story text-black">
      <h1 className="text-[#0041ff] text-[40px] font-bold px-2 sm:px-6 md:px-12 lg:px-32 text-center">
        Impact Story
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 px-2 sm:px-6 md:px-12 lg:px-32 pb-20">
        <div className="lg:w-2/5">
          <div>
            <h1 className="font-bold tes py-10 text-center pt-10">
              Yess Ethiopia
            </h1>
            <p className="pop px-2 text-[25px] text-center lg:px-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              inventore deserunt itaque non quisquam, debitis aperiam dolor
              architecto voluptate assumenda tenetur ratione, labore eaque
              explicabo. Magnam natus doloremque atque quos.
            </p>
          </div>
        </div>
        <div className="col-span-1 mx-2 sm:mx-6 md:mx-12 lg:mx-24 lg:col-span-2 lg:w-3/5">
          <div className="h-screen carousel carousel-vertical rounded-box hidden sm:block">
            <div className="carousel-item ">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#0041ff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-gray-100 absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#fff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
              <div className="bg-[#fff] text-black  rounded-xl border-gray-200 border-2 min-w-60 max-w-96">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={75}
                      height={75}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p className="font-bold text-[22px] text-[#0041ff] mt-1">Artist Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2 text-[14px] pop">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, asperiores reiciendis. Cupiditate impedit saepe magni</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#0041ff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className="rounded-xl">
                  <p className="text-center py-3 font-light text-[16px] pop">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
