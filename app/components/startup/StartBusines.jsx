
import React from 'react'
// import Image from 'next/image';




const Start = () => {
  return (
    <div className=" star w-screen h-full overflow-x-hidden bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-32 lg:mr-32 gap-10 py-20">
        <div className="md:col-span-2 flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-white tes text-center py-6 font-bold">Start Up business support</h1>
          <p className="text-white text-center py-2 text-[20px]">
          Yess Ethiopia is dedicated to fostering entrepreneurship and supporting startup businesses through diverse avenues. The organization takes a multi-faceted approach to assist budding entrepreneurs in realizing their business dreams.
          </p>
        </div>
        <div className="sm:py-24 lg:py-0  ml-2 sm:ml-6 md:ml-12 lg:ml-32">
        </div>
      </div>
    </div>
  );
};

export default Start;
