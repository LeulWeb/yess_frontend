import React from 'react';

const HomeIntro = () => {
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
        <div className="flex flex-col items-center justify-center text-white mb-32">
          <h1 className="font-bold text-[60px] mt-32 text-center py-10">
            Startup Business Support.
          </h1>

          <p className="text-[30px] text-center pb-10">
            Yess Ethiopia actively engages in community service by <br/>
            mobilizing volunteers to work with youth. The organization <br/>
            embraces a sprit of volunteerism, encouraging individuals <br/>
            to contribute their time and efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;