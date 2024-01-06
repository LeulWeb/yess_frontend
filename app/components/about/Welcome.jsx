import Image from 'next/image';
import React from 'react';
import you from '../../assets/aboutwel.png';

const Welcome = () => {
  return (
    <div className=" bg-[#0041ff] w-screen h-full overflow-x-hidden">
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 sm:px-6 md:px-12 lg:px-32 lg:mr-32 gap-10 py-20">
        <div className="md:col-span-2 flex flex-col px-2 md:px-4 lg:px-6">
        <h1 className="text-white tes text-center py-6 font-bold">Welcome</h1>
          <p className="text-white py-2 text-[27px] font-bold leading-10 text-center">
          Welcome to Yess Ethiopia, a non-profit charity organization committed to transforming the lives of the youth in Ethiopia. Yess Ethiopia addresses the critical issues of unemployment and lack of opportunities faced by the country's young population. 
          </p>
        </div>
        <div className="sm:py-24 lg:py-0  ml-2 sm:ml-6 md:ml-12 lg:ml-32">
        <Image
            src={you}
            alt="welcome page"
            className="w-full lg:h-[300px] rounded-xl "
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
