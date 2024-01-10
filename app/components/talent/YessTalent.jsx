import Image from 'next/image';
import React from 'react';


const YessTalent = () => {
  return (
    <div className=" win w-screen h-full overflow-x-hidden bg-cover bg-no-repeat">
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-32 lg:mr-32 gap-10 py-20">
        <div className="md:col-span-2 flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-white tes text-center py-6 font-bold">Yess Talent</h1>
          <p className="text-white text-center py-2 text-[20px]">
          Yess Ethiopia passionately encourages students, providing unwavering support to help them achieve their goals. The organization not only uplifts and empowers students but also recognizes and rewards excellence.
          </p>
        </div>
        <div className="sm:py-24 lg:py-0  ml-2 sm:ml-6 md:ml-12 lg:ml-32">
        </div>
      </div>
    </div>
  );
};

export default YessTalent;
