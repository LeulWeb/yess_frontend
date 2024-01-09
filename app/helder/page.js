import React from 'react'
import gopa from '../assets/helder.png';
import Image from 'next/image';
import Link from 'next/link';


const Helder = () => {
  return (
    <div>
        <div className='flex flex-start items-center justify-start gap-2'>
            <Image src={gopa} alt="FMF" width={196} height={201} />
            <div className="ml-4">
                <p className='text-2xl font-semibold leading-13 text-left'>Helder Technologies Solution</p>
                <p className='text-2xl font-normal leading-13 text-left text-[#260000]'>IT company</p>
            </div>
        </div>
        <div>
        <p className='pop text-2xl font-light text-center px-4 sm:px-8 md:px-12 lg:mx-28 mb-10'>
        Helder Technologies Solution PLC is actively seeking a talented Mobile App Developer to join our team. If you are passionate about contributing to a dynamic startup environment and have the skills to excel in mobile app development, we invite you to consider a rewarding career with Helder Technologies Solution. Your expertise will play a crucial role in shaping innovative solutions and driving the success of our projects. Join us in creating cutting-edge mobile applications that make a significant impact. Welcome to Helder Technologies Solution – where your skills meet opportunity.

 </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center '>
            <p className="text-2xl font-normal leading-13 text-left">Position: </p>
            <p className="text-2xl font-normal leading-13 text-left">Internship</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">On site</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">Full Time</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Deadline:</p>
            <p className="text-2xl font-normal leading-13 text-left">Aug 1, 2023</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Salary/Compensation</p>
            <p className="font-inter text-xl font-normal leading-11 text-left">Negotation</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Vacancies</p>
            <p className="text-2xl font-bold leading-13 text-left">1</p>
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
            <p className="text-2xl font-normal leading-13 text-left">0901004202</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Website</p>
            <p className="text-2xl font-normal leading-13 text-left">https://heldertechnologies.com/</p>
        </div>
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-5 '>
            <Link href="#">
            <p className="text-2xl font-normal leading-13 text-left px-10 py-2 text-white bg-[#0041ff] rounded-md">Seek for job</p>
            </Link>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Helder;
