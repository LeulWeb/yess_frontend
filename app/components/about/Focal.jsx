import React from 'react';
import face from '../../assets/face.png';
import Image from 'next/image';

const Focal = () => {
  return (
    <div className="story text-black">
      <h1 className="text-[#0041ff] text-[60px] font-bold px-2 sm:px-6 md:px-12 lg:px-32 ">
        Focal of Yess Ethiopia
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 px-2 sm:px-6 md:px-12 lg:px-32 pb-20">
        <div className="lg:w-2/5">
          <div>
            <h1 className="font-bold text-[50px] py-10 text-center pt-10">
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
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#0041ff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row-reverse gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-gray-100 absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row-reverse gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#fff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item ">
              <div className="flex flex-row-reverse gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
                    Lorem ipsum dolor sit amet what adipisicing elit.
                  </p>
                </div>
              </div>{' '}
            </div>
            <div className="carousel-item">
              <div className="flex gap-5 md:gap-10 lg:gap-16 py-8 justify-start items-center ">
                <div className="bg-[#0041ff] text-white  rounded-xl ">
                  <div className="flex justify-start items-start gap-5 w-[300px]">
                    <Image
                      src={face}
                      alt=""
                      width={50}
                      height={50}
                      className="-mt-4 rounded-full ml-1"
                    />
                    <p>Abebe Balcha</p>
                  </div>
                  <p className="font-light ml-3 mt-2">Education</p>
                  <p className="font-light ml-3">Focal Location</p>
                  <p className="font-light ml-3">Phone Number</p>
                </div>
                <div className="h-60 -mt-3 relative bg-gray-700 text-gray-700 border-gray-700 border-2 z-20">
                  <div className="rounded-full h-10 w-10 bg-[#0041ff] absolute z-50 -ml-5 mt-24 border-2 border-gray-700"></div>
                </div>
                <div className=" border-gray-100 border-2 rounded-xl">
                  <p className="text-center py-3">
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

export default Focal;
