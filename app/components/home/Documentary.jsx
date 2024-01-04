import Image from 'next/image';
import React from 'react';
import yes from '../../assets/you.jpg';

const Documentary = () => {
  return (
    <div className="bg-[#0041ff] h-full text-white justify-center items-center flex flex-col lg:px-10 pb-10">
      <h1 className="text-[60px] font-bold text-center lg:-ml-10">
        Documentary
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h1 className="text-[40px] font-bold text-center lg:-ml-10">
            Empowering Dreams
          </h1>
          <p className="pop px-2 text-[25px] text-center mt-5">
            Embark on a visual journey that unfolds the narratives of young
            individuals whose lives have been touched by Yess Ethiopia. From
            overcoming challenges to achieving dreams, this documentary captures
            the essence of our commitment to youth empowerment.
          </p>
        </div>
        <div className="md:col-span-1 lg:col-span-2">
          <Image
            src={yes}
            alt="Youtube Video"
            className="w-full mt-6 h-[350px] rounded-2xl"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Documentary;
