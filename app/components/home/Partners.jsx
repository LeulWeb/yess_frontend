import React from 'react';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';
import logo9 from '../../assets/logo9.png';
import logo10 from '../../assets/logo10.png';
import logo11 from '../../assets/logo11.png';
import logo12 from '../../assets/logo12.png';
import logo13 from '../../assets/logo13.png';
import logo14 from '../../assets/logo14.png';
import logo15 from '../../assets/logo15.png';
import logo16 from '../../assets/logo16.png';
import logo17 from '../../assets/logo17.png';
import logo18 from '../../assets/logo18.png';
import logo19 from '../../assets/logo19.png';
import logo20 from '../../assets/logo20.png';
import logo21 from '../../assets/logo21.png';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className='story'>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="text-center flex items-center justify-center flex-col">
          <h1 className="text-[#0041ff] tes">
            Be our partner and contribute <br />
            Your share to the community.
          </h1>
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  px-10 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-2 my-10 text-[30px] mt-10"
          >
            Address
          </button>
        </div>
        <div>
          <h1 className="text-[#0041ff] py-3 text-center">
            Our Partners
          </h1>
          <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-white rounded-box">
            <div className="carousel-item">
              <Image width={200} height={200} src={logo4} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo5} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo6} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo7} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo8} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo9} className="rounded-box  p-4w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo10} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo11} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo12} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo13} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo14} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo15} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo16} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo17} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo18} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo19} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo20} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
            <div className="carousel-item">
              <Image width={200} height={200} src={logo21} className="rounded-box p-4 w-[200px] h-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
