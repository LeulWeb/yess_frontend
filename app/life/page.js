import React from 'react'
import gopa from '../assets/life.jpg';
import Image from 'next/image';
import Link from 'next/link';

const Life = () => {
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
        LifeMap Higher Learning Institute is one of the best online education institutions accredited by ETA (Education and Training Authority of FDRE) to provide Online Higher Education in Ethiopia.
        <br/><br/>

About the Role
<br/>

We are looking for a highly organized and efficient secretary to join our team. In this role, you will be responsible for providing administrative support to the E-Learning staff. You will be a key point of contact for students, and staff, and you will play a vital role in ensuring the smooth operation of the department.
<br/><br/>
Responsibilities
<br/>
Schedule and coordinate meetings and appointments
Manage calendars and deadlines
Prepare and proofread documents, including letters, reports, and presentations
Answer phones and emails
Order office supplies
Other duties as assigned.
<br/><br/>
Qualifications
<br/>
Excellent organizational and time management skills
Strong communication and interpersonal skills
Proficient in Microsoft Office Suite (Word, Excel, PowerPoint)
Experience with E-Learning a plus
Bachelor's degree in a related field preferred.
<br/><br/>
Benefits
<br/>
Competitive salary and benefits package
Opportunity to work in a dynamic and supportive environment
Make a difference in the lives of students.

 </p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center '>
            <p className="text-2xl font-normal leading-13 text-left">Position: </p>
            <p className="text-2xl font-normal leading-13 text-left">Secretary</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">On site</p>
            <p className="text-2xl font-semibold leading-13 text-left text-[#085AE4]">Full Time</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Deadline:</p>
            <p className="text-2xl font-normal leading-13 text-left">jan 2, 2024</p>
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
            <p className="text-2xl font-normal leading-13 text-left">info@lifemap.com</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Phone</p>
            <p className="text-2xl font-normal leading-13 text-left">0115570455</p>
        </div>
        <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-2 '>
            <p className="text-2xl font-normal leading-13 text-left">Website</p>
            <p className="text-2xl font-normal leading-13 text-left">https://lifemap.edu.et/</p>
        </div>
        <div>
            <div>
                <div className='flex flex-col md:flex-row gap-10  justify-center items-center py-5 '>
            <Link href="https://forms.gle/wE14xNwnxcu9j5gN8">
            <p className="text-2xl font-normal leading-13 text-left px-10 py-2 text-white bg-[#0041ff] rounded-md">Seek for job</p>
            </Link>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Life;