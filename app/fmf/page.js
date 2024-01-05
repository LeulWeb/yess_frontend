import React from 'react'
import gopa from '../assets/fmf.png';
import Image from 'next/image';

const Gopa = () => {
  return (
    <div>
        <div className='flex flex-start items-center justify-start gap-2'>
            <Image src={gopa} alt="FMF" width={196} height={201} />
            <div className="ml-4">
                <p className='text-2xl font-semibold leading-13 text-left'>FMF food processing plc</p>
                <p className='text-2xl font-normal leading-13 text-left text-[#260000]'>Food company</p>
            </div>
        </div>
        <div>
        <p className='pop text-2xl font-light text-center px-4 sm:px-8 md:px-12 lg:mx-28 mb-10'>
        Temporary job opportunities for full 13 days
Helder Technologies solution provide a website development, Digital marketing and brand building service for FMF food processing plc. On behave of that we would like to offer a job opportunities for our families for the bazaars and expo held at millenium hall for 13 days started from tomorrow. 
 
                </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center '>
            <p className="text-2xl font-normal leading-13 text-left">Position: </p>
            <p className="text-2xl font-normal leading-13 text-left">selling FM foods products at teh bazaars</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">On site</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">For 13 day</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Deadline:</p>
            <p className="text-2xl font-normal leading-13 text-left">Oct 23, 2023</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Salary/Compensation</p>
            <p className="font-inter text-xl font-normal leading-11 text-left">50ETB/ 1kg</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Vacancies</p>
            <p className="text-2xl font-bold leading-13 text-left">2</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Applicant Needed:</p>
            <p className="text-2xl font-normal leading-13 text-left">Female/Male</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Work Location</p>
            <p className="text-2xl font-normal leading-13 text-left">Addis Ababa, Ethiopia</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Email</p>
            <p className="text-2xl font-normal leading-13 text-left">info@helder.com</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Phone</p>
            <p className="text-2xl font-normal leading-13 text-left">+25190888984</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Website</p>
            <p className="text-2xl font-normal leading-13 text-left">www.helder.com</p>
        </div>
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-5 '>
            <p className="text-2xl font-normal leading-13 text-left px-10 py-2 text-white bg-[#0041ff] rounded-md">Seek for job</p>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Gopa;