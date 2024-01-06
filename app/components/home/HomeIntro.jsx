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
          <h1 className="font-bold text-center mt-10 lg:pt-10 tes">
            Welcome Yess Ethiopia
          </h1>
          <h1 className="text-[30px] lg:text-[40px] text-center font-bold py-5">
            We empower the youth community <br /> through various means
          </h1>
          <p className="text-[20px] lg:text-[25px] text-center pb-5">
            Our performance empowers the youth ,fostering <br /> success and
            strength. Join us to contribute to <br />
            community empowerment
          </p>
          <li type="button" class="w-44 text-[30px] mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2">Join Us</li>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
