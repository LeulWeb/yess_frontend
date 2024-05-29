import React from 'react';
import bgImage from '../../assets/homi.jpg';

const HomeIntro = () => {
  return (
    <div className="overflow-x-hidden top-0">
      <div
        className=" relative  hero bg-cover bg-no-repeat min-h-screen lg:overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute bg-black/30  bg-cover bg-no-repeat min-h-full lg:h-screen lg:overflow-y-hidden w-screen overflow-x-hidden">
          <div className="flex flex-col items-center justify-center mt-28 lg:mt-36 text-white py-10 lg:py-5  lg:mb-10">
            <h1 className="text-[30px] lg:text-[40px] mt-28 text-center font-bold py-5">
              We empower the youth community <br /> through various means
            </h1>
            <p className="text-[18px] sm:text-[20px] lg:text-[25px] text-center pb-5">
              Our performance empowers the youth ,fostering <br /> success and
              strength. Join us to contribute to <br />
              community empowerment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
