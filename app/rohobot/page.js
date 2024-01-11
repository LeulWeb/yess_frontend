import Image from 'next/image';
import React from 'react';
import { CgMail, CgTime } from 'react-icons/cg';
import footer from '../assets/rohobot.png';
import { FaMapMarkerAlt } from "react-icons/fa";


const Rohobot = () => {
  return (
    <div className="story">
      <div className="text-black">
        <Image
          src={footer}
          alt="startup one"
          className="w-full max-h-[80vh]"
          width={800}
          height={500}
        />
        <div className="flex justify-start items-center pt-10 px-2 sm:px-4 md:px-10 lg:px-20 gap-6 flex-wrap pb-10">
          <div className="px-2 sm:px-4 md:px-10 lg:px-20">
            <h1 className="tes font-bold flex flex-wrap">
            Volunteering at Rohobot Orphanage
            </h1>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p className='text-[20px] lg:text-[32px]'>
          The YessEthiopia Hawasa team has taken up a noble cause by volunteering at Rohobot Orphanage, which is situated in Hawasa. This orphanage serves as a haven for children who have been abandoned and found on the streets at a very young age, often just a few days old. These vulnerable infants are in dire need of care and support, and the orphanage plays a crucial role in providing them with a safe and nurturing environment to grow and thrive.
<br/>
Rohobot Orphanage is a beacon of hope for these abandoned children, offering them a second chance at life. Many of these infants have experienced unimaginable hardships and have been deprived of basic necessities and parental care. The YessEthiopia Hawasa team recognized the need to support and uplift these children, and they selflessly dedicated their time and efforts to make a positive impact on their lives.
<br/>
The volunteers of the YessEthiopia Hawasa team carry out various tasks at the orphanage to ensure the well-being and development of the children. They assist in feeding and bathing the infants, changing diapers, and providing them with a clean and comfortable living environment. The team members engage in playtime activities, storytelling, and singing to create a joyful atmosphere and stimulate the children's cognitive and emotional growth.
<br/>
Beyond meeting the immediate physical needs of the children, the YessEthiopia Hawasa team also focuses on their education and skill development. They organize educational sessions, teach basic literacy and numeracy skills, and engage the children in creative activities such as drawing and crafts. These activities not only provide the children with a structured learning environment but also help them explore their talents and discover their potential.
<br/>
Moreover, the team members offer emotional support and companionship to the children. They provide a nurturing presence, offering comfort and reassurance to the infants who have experienced abandonment and trauma. The volunteers build strong bonds with the children, showing them love, care, and affection, which are essential for their emotional well-being and growth.
<br/>
In addition to their daily interactions with the children, the YessEthiopia Hawasa team actively collaborates with the staff at Rohobot Orphanage. They exchange ideas, share their expertise, and offer assistance in areas such as fundraising, capacity building, and improving the overall operations of the orphanage. By working in tandem with the orphanage staff, the team aims to contribute to the long-term sustainability and success of the organization.
<br/>
The efforts of the YessEthiopia Hawasa team at Rohobot Orphanage go beyond their immediate volunteer work. They also raise awareness about the challenges faced by abandoned children in the community. Through awareness campaigns, they strive to foster a sense of responsibility and encourage individuals and organizations to support and protect the rights of these vulnerable children.
<br/>
The YessEthiopia Hawasa team's dedication to volunteering at Rohobot Orphanage demonstrates their compassion and commitment to making a difference in the lives of those who need it the most. By providing care, education, and emotional support, they are giving these abandoned children a chance for a brighter future. Their selfless acts of kindness will undoubtedly have a lasting impact on the lives of the children and inspire others to join in the mission of creating a better world for all.


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
              <p className="pl-5 pop lg:text-[20px]">Rohobot, <br/>
Hawasa, Ethiopia</p>
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

export default Rohobot;
