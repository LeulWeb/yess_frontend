import React from 'react'
import gopa from '../assets/gopa.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Gopa = () => {
  return (
    <div>
        <div className='flex flex-start items-center justify-start gap-2'>
            <Image src={gopa} alt="FMF" width={196} height={201} />
            <div className="ml-4">
                <p className='text-2xl font-semibold leading-13 text-left'>GOPA Worldwide Consultants</p>
                <p className='text-2xl font-normal leading-13 text-left text-[#260000]'>Consultants company</p>
            </div>
        </div>
        <div>
        <p className='pop text-2xl font-light text-center px-4 sm:px-8 md:px-12 lg:mx-28 mb-10'>
        GOPA Worldwide Consultants is a German company that advises on and implements 
economic, social, and environmental development projects. International and national 
donors fund these projects. GOPA&apos;s Rural Development and Environment department 
implements dozens of rural, local, and environmental development and natural resource 
management projects on several continents. For more information, visit the company's 
website (www.gopa.de).

GOPA, in a Consortium with FCG, hereinafter referred to as "GOPA-FCG", has entered 
into a contract with GIZ, providing consultancy services for the Program "LaGo II", 
hereinafter referred to as the "Project". This project objective is "Land consolidation is 
established as a key instrument for sustainable land governance” and is integral to GIZ's 
technical cooperation program in Ethiopia.

The project's most essential counterpart is the Ministry of Agriculture (MoA), as a political 
partner. RLAUD is responsible for the facilitation of issuing and administration of land use 
certificates in rural areas and for the roll-out of the NRLAIS. The module also works 
directly with the LAUD in Sidama, and newly established regions of the former SNNPR. 

 
                </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center '>
            <p className="text-2xl font-normal leading-13 text-left">Position: </p>
            <p className="text-2xl font-normal leading-13 text-left"> Public Administration, Land Administration, Political Science</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">On site</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">Full Time</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Deadline:</p>
            <p className="text-2xl font-normal leading-13 text-left">02.01.2024 – 28.02.2026.</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Salary/Compensation</p>
            <p className="font-inter text-xl font-normal leading-11 text-left">Negotiable</p>
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
            <p className="text-2xl font-normal leading-13 text-left">Hawassa, Ethiopia</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Email</p>
            <p className="text-2xl font-normal leading-13 text-left">info@gopa.com</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Phone</p>
            <p className="text-2xl font-normal leading-13 text-left">+25190888984</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Website</p>
            <p className="text-2xl font-normal leading-13 text-left">https://www.gopa.de</p>
        </div>
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-5 '>  
            <Link href="https://www.ethiojobs.net/display-job/513475/Organizational-Development-Expert.html?page=1">
            <p className="text-2xl font-normal leading-13 text-left px-10 py-2 text-white bg-[#0041ff] rounded-md">Seek for job</p>
            </Link>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Gopa;