import React from 'react'
import gopa from '../assets/fewis.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Fewis = () => {
  return (
    <div>
        <div className='flex flex-start items-center justify-start gap-2'>
            <Image src={gopa} alt="FMF" width={196} height={201} />
            <div className="ml-4">
                <p className='text-2xl font-semibold leading-13 text-left'>Life Map Higher Learning Institute</p>
                <p className='text-2xl font-normal leading-13 text-left text-[#260000]'>online education institutions</p>
            </div>
        </div>
        <div>
        <p className='pop text-2xl font-light text-center px-4 sm:px-8 md:px-12 lg:mx-28 mb-10'>
        Fewis Digital Medical Solutions offers an internship for those interested in a medical profession. Apply below for a chance to gain valuable experience in our dynamic and innovative medical environment. Work with cutting-edge technologies, learn from seasoned professionals, and contribute to digital solutions in the medical sector. This internship is tailored for students or recent graduates seeking practical exposure and a meaningful educational experience. To apply, use the form below, including your resume, a cover letter expressing your interest, and relevant references. Take the first step towards a rewarding internship with Fewis Digital Medical Solutions.

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
            <p className="text-2xl font-normal leading-13 text-left">Dec 30, 2024</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Salary/Compensation</p>
            <p className="font-inter text-xl font-normal leading-11 text-left">Negotation</p>
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
            <p className="text-2xl font-normal leading-13 text-left">0901004202</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Website</p>
            <p className="text-2xl font-normal leading-13 text-left">https://heldertechnologies.com/</p>
        </div>
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-5 '>
            <Link href="">
            <p className="text-2xl font-normal leading-13 text-left px-10 py-2 text-white bg-[#0041ff] rounded-md">Seek for job</p>
            </Link>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Fewis;
