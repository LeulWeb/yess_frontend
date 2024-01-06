import React from 'react';
import you from '../../assets/you.jpg';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className="blue">
            <div className=' flex justify-center items-center flex-col lg:flex-row py-10 gap-10 px-10 min-h-[80vh]'>
                <div  className="lg:w-3/5 px-4">
                    <h1 className='text-white font-bold text-[50px] text-center'>Welcome to Our Scholarship</h1>
                    <p className='text-white text-[28px] text-center font-[700px] py-4'>At Yess Ethiopia, wea re dedicated to providing valuable information
            about new scholarship opportunities and offering guidance to
            students seeking financial support for their education. Our
            Scholarship Hub is your go-to resource for the latest updates and
            insights on available scholarships</p>
                </div>
                <div className='rounded-full mx-2 lg:ml-28 lg:w-2/5'>
                    <Image src={you} alt="why Yess" width={200} height={200}  className='w-[400px] h-[400px] rounded-full border-blue-800 border-[16px]'/>
                </div>
            </div>
        </div>
  );
};

export default Welcome;
