import Image from 'next/image';
import React from 'react';
import yes from '../../assets/you.jpg';

const Documentary = () => {
  return (
    <div className="doc bg-cover bg-no-repeat h-full text-white justify-center items-center flex flex-col lg:px-10 pb-10">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-2/5 flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-bold text-center lg:-ml-10">
            Empowering Dreams
          </h1>
          <p className="pop px-2 font-light emb mt-5">
            This single documentary encapsulates the heart and soul of our organization, inspiring hope and positive change
          </p>
        </div>
        <div className="md:col-span-1 lg:col-span-2 md:w-1/2 lg:w-3/5">
          <iframe
            width="853"
            height="480"
            src="https://www.youtube.com/embed/V-Pg-DEFM9o"
            title="Sample YessEthiopia activities"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="mt-6 lg:h-[473px] rounded-2xl md:ml-6 w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Documentary;
