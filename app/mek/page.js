import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CgMail, CgTime } from 'react-icons/cg';
import footer from '../assets/mek.png';
import { FaMapMarkerAlt } from "react-icons/fa";


const Mek = () => {
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
             Visited Mekedonia at Jimma
            </h1>
          </div>
        </div>
        <div className="px-2 sm:px-4 md:px-10 lg:px-20">
          <p className='text-[20px] lg:text-[32px]'>
          Yess Ethiopia's visit to Mekedonia in Jimma proved to be a remarkable and transformative experience for both organizations involved. The purpose of this collaborative effort was to foster stronger connections, exchange valuable knowledge and resources, and provide support to the local community. Mekedonia, renowned for its commitment to community development, perfectly complemented Yess Ethiopia's mission of empowering and uplifting individuals.
<br/>
The visit began with a warm welcome extended by the members of Mekedonia to the representatives of Yess Ethiopia. The atmosphere was charged with enthusiasm and anticipation as both organizations recognized the immense potential for mutual growth and collaboration. The visit was carefully structured to ensure maximum interaction and knowledge sharing between the two groups.
<br/>
During the visit, Yess Ethiopia had the opportunity to witness firsthand the impactful work being carried out by Mekedonia in Jimma. The organization was impressed by Mekedonia's comprehensive approach to community development, which encompassed various sectors such as education, healthcare, and sustainable livelihoods. Yess Ethiopia recognized the value of Mekedonia's holistic approach and sought to learn from their experiences and successes.
<br/>
Conversely, Yess Ethiopia was able to share its own expertise and knowledge with the members of Mekedonia. Having worked extensively in empowering individuals through education, skills training, and entrepreneurship, Yess Ethiopia had valuable insights to offer. The exchange of ideas and perspectives between the two organizations created a dynamic learning environment, fostering innovation and growth.
<br/>
One of the key outcomes of the visit was the identification of areas where Yess Ethiopia and Mekedonia could collaborate and amplify their impact. Both organizations recognized the importance of leveraging their resources and expertise to address pressing challenges faced by the local community. This resulted in the formulation of joint initiatives aimed at providing educational opportunities, skills training, and support for sustainable income generation.
<br/>
Furthermore, the visit allowed for a deeper understanding of the local context and the needs of the community. Yess Ethiopia gained invaluable insights into the specific challenges faced by the people in Jimma, enabling them to tailor their programs and interventions accordingly. This localized approach ensured that the efforts of Yess Ethiopia would be more effective and sustainable in the long run.
<br/>
The visit also served to strengthen the bond between Yess Ethiopia and Mekedonia. The shared experience of witnessing the positive impact of their collaborative efforts fostered a sense of camaraderie and mutual respect. The two organizations recognized the potential for future collaborations and pledged to continue working together to uplift and empower individuals in Jimma and beyond.
<br/>
In conclusion, Yess Ethiopia's visit to Mekedonia in Jimma was a significant and enriching experience for both organizations. The collaborative effort allowed for the exchange of knowledge, resources, and ideas, leading to the identification of joint initiatives aimed at empowering the local community. The visit deepened the bond between Yess Ethiopia and Mekedonia and paved the way for future collaborations. Ultimately, this endeavor highlighted the power of partnership in creating meaningful and sustainable change.


          </p>
        </div>
        <div className="flex justify-between items-start px-4 sm:px-8 md:px-16 lg:px-32 py-10">
          <div className="ml-2 md:ml-4 lg:ml-10 py-4 lg:py-10 flex flex-col items-center justify-start gap-3 flex-start  pop font-medium lg:w-1/5">
            <div className="flex justify-start items-start lg:-ml-6 text-start">
              <CgMail size={30}  className="font-normal"/>
              <p className="pl-5 pop lg:text-[20px]">Elders above 65</p>
            </div>{' '}
            <div className="flex justify-start items-start lg:-ml-8 text-start">
              <FaMapMarkerAlt size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">Mekedonia<br/>
Jimma, Ethiopia</p>
            </div>
            <div className="flex justify-start items-start lg:-ml-36 test-start">
              <CgTime size={30} className='font-normal'/>
              <p className="pl-5 pop lg:text-[20px]">3hr</p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-1/5"></div>
          <div className="lg:w-2/5 px-2 sm:px-6 md:px-12 lg:px-32">    
            <form>
              <div>
                <label className="pop font-medium text-gray-700 py-3 text-lg lg:text-[30px] border-gray-700 mb-3">Full Name</label>
                <input type="text" placeholder='John Doe' className="px-8 w-full py-3 rounded placeholder:text-sm pop"/>
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
                {/* <button type="submit">Volunteer Now</button> */}
                <button type="submit"
              className='bg-[#0041ff] pop hover:bg-blue-800 hover:py-3 hover:px-10 hover:text-[20px] lg:hover:px-8 lg:hover:py-2  py-2 px-8 text-[16px] lg:text-[20px] rounded text-white'
            >
              Volunteer Now
            </button>
            </div>
            </form>
            
          </div>
          <div className="hidden lg:block lg:w-1/5"></div>
        </div>
      </div>
    </div>
  );
};

export default Mek;
