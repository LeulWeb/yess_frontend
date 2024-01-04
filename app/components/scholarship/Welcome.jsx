import React from 'react';
import you from '../../assets/you.jpg';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div>
      <div className="bg-[#0041ff] flex justify-center items-center flex-col md:flex-row py-10 gap-10 lg:gap-40">
        <div className="md:w-3/5 px-4">
          <h1 className="text-white font-bold text-[50px] text-center">
            Welcome to Our Scholarship <br />
            Hub!
          </h1>
          <p className="text-white text-[30px] text-center font-semibold py-4">
            At Yess Ethiopia, wea re dedicated to providing valuable information
            about new scholarship opportunities adn offering guidance to
            students seeking financial support for their education. Our
            Scholarship Hub is your go-to resource for the latest updates and
            insights on available scholarships
          </p>
        </div>
        <div className="rounded-full md:w-2/5 mx-2 ">
          <Image
            src={you}
            alt="why Yess"
            width={400}
            height={400}
            className="w-[400px] h-[400px] rounded-full border-8 border-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
