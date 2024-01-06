import React from 'react';

const Culture = () => {
  return (
    <div className='overflow-x-hidden text-white'>
      <div
        className=" relative hero min-h-screen h-full"
        style={{
          backgroundImage:
            'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)',
        }}
      >
        <div className="hero-overlay bg-opacity-50 bg-black/70"></div>
        <div className="flex items-start justify-center text-white mb-32 mt-10">
          <h1 className="font-bold cul text-center pop -mt-32">
            C U L T U R E
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Culture;
