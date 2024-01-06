import React from 'react';
import bgImage from '../../assets/homeback.png';

const HomeIntro = () => {
  return (
    <div className='overflow-x-hidden top-0'>
      <div
        className=" relative  hero min-h-full lg:h-screen lg:overflow-y-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-col items-center justify-center mt-20 lg:mt-10 text-[#000] py-10 lg:py-5  lg:mb-10">

          <h1 className="text-[30px] lg:text-[40px] text-center font-bold py-5">
            We empower the youth community <br /> through various means
          </h1>
          <p className="text-[20px] lg:text-[25px] text-center pb-5">
            Our performance empowers the youth ,fostering <br /> success and
            strength. Join us to contribute to <br />
            community empowerment
          </p>

        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
