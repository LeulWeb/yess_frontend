import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMail, CgTime } from 'react-icons/cg';
import footer from '../assets/tesfa.png';
import { FaMapMarkerAlt } from "react-icons/fa";


const Tesfa = () => {
  return (
    <div className="story">
      <div className="text-black">
        <Image
          src={footer}
          alt="startup one"
          className="w-full h-[80vh]"
          width={800}
          height={500}
        />
        <div className="flex justify-start items-center pt-10 px-2 sm:px-4 md:px-10 lg:px-20 gap-6 flex-wrap pb-10">
          <div className="px-2 sm:px-4 md:px-10 lg:px-20">
            <h1 className="tes font-bold flex flex-wrap">
            Visited Tesfa Adis Parents Childhood Cancer Center organization
            </h1>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p className='text-[20px] lg:text-[32px]'>
          The members of YESS Ethiopia Jimma team recently organized and conducted a Free Health Check-Up Service for the Elderly in the community of Mekedonia. This initiative aimed to provide vital healthcare support to the elderly population and raise awareness about their healthcare needs. Additionally, the team visited the Tesfa Adis Parents Childhood Cancer Center Organization with the intention of establishing a collaborative relationship for future endeavors.

The Free Health Check-Up Service for the Elderly was an essential project undertaken by the YESS Ethiopia Jimma team. Recognizing the unique healthcare challenges faced by the elderly, the team decided to organize a health check-up event to address their specific needs. The event was designed to offer comprehensive health assessments, including blood pressure measurement, blood sugar tests, vision and hearing screenings, and general physical examinations. By providing these services free of charge, the team aimed to reach a larger number of elderly individuals who may have limited access to healthcare resources.

The event took place in Mekedonia, a community known for its significant elderly population. The team collaborated with local healthcare professionals, including doctors, nurses, and technicians, to ensure the smooth execution of the health check-ups. They also enlisted the support of volunteers who assisted with registration, data collection, and organizing the event logistics.
<br/>
During the health check-ups, the team not only focused on individual assessments but also took the opportunity to educate the elderly about common health issues and preventive measures. They provided information on maintaining a healthy lifestyle, proper nutrition, regular exercise, and the importance of adhering to prescribed medications. By emphasizing preventive care, the team aimed to empower the elderly to take control of their own health and well-being.
<br/>
In addition to the Free Health Check-Up Service, the YESS Ethiopia Jimma team made a visit to the Tesfa Adis Parents Childhood Cancer Center Organization. This organization is dedicated to supporting children diagnosed with cancer and their families. The team recognized the importance of collaborating with organizations working in related fields to amplify their impact and extend support to a wider range of individuals in need.
<br/>
During the visit, the YESS Ethiopia Jimma team had the opportunity to learn more about the services provided by the Tesfa Adis Parents Childhood Cancer Center Organization. They observed the organization's facilities, met with staff members, and engaged in discussions about potential areas of collaboration. The team expressed their interest in contributing to the organization's efforts by providing volunteers, raising awareness, and supporting fundraising initiatives.
<br/>
The visit to the Tesfa Adis Parents Childhood Cancer Center Organization was an important step towards establishing a long-term partnership. By joining forces, both organizations can leverage their respective expertise and resources to improve the lives of children and families affected by cancer. The collaboration can lead to enhanced support services, increased access to treatment, and the development of innovative programs to address the unique challenges faced by childhood cancer patients.
<br/>
In conclusion, the members of YESS Ethiopia Jimma team conducted a Free Health Check-Up Service for the Elderly in Mekedonia, providing essential healthcare services to the elderly population. They also visited the Tesfa Adis Parents Childhood Cancer Center Organization, exploring possibilities for collaboration to support children with cancer. These initiatives demonstrate the team's commitment to improving the well-being of vulnerable populations and their dedication to fostering partnerships for a brighter future.


          </p>
        </div>
        <div className="flex justify-between items-start px-4 sm:px-8 md:px-16 lg:px-32 py-10">
          <div className="ml-2 md:ml-4 lg:ml-10 py-4 lg:py-10 flex flex-col items-center justify-start gap-3 flex-start  pop font-medium lg:w-1/5">
            <div className="flex justify-start items-start lg:-ml-6 text-start">
              <CgMail size={30}  className="font-normal"/>
              <p className="pl-5 pop lg:text-[20px]">Elders above 65</p>
            </div>{' '}
            <div className="flex justify-start items-start lg:-ml-6 text-start">
              <FaMapMarkerAlt size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">Jimma,  <br/>
Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex justify-start items-start lg:-ml-36 test-start">
              <CgTime size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">3hr</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/5"></div>
          <div className="lg:w-2/5 px-2 sm:px-6 md:px-12 lg:px-32">    
            <form></form>
            <div>
                <label className="pop font-medium text-gray-700 py-3 text-lg lg:text-[30px] border-gray-700 mb-3">Full Name</label>
                <input type="text" placeholder='John Doe' className="px-8 w-full py-3 rounded placeholder:text-sm"/>
            </div>
            <div className="pt-6">
                <label className="pop font-medium text-gray-700 py-3 mb-3 text-lg lg:text-[30px] border-gray-700 ">Phone Number</label>
                <input type="number" placeholder='09********' className="px-8 pop w-full py-3 rounded placeholder:text-sm"/>
            </div>
            <div className="pt-6">
                <label className="pop font-medium text-gray-700 py-3 mb-3 text-lg lg:text-[30px] border-gray-700 ">Why are you interested</label>
                <textarea cols={30} rows={3}  className="px-8 pop w-full py-3 rounded placeholder:text-sm"/>
            </div>
            <div className="pt-6 flex justify-center items-center">
                <p
              className='bg-[#0041ff] pop hover:bg-blue-800 hover:py-3 hover:px-10 hover:text-[20px] lg:hover:px-8 lg:hover:py-2  py-2 px-8 pop text-[16px] lg:text-[20px] rounded text-white'
            >
              Volunteer Now
            </p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Tesfa;
