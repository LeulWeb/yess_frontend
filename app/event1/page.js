import Image from 'next/image';
import React from 'react'
import blog1 from '../assets/you.jpg';
import home from '../assets/event1.jpg';
import blog2 from '../assets/event2.png';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">Free Series live training on Employability, life skill adn business Startups</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on October 29, 2022</p>
        <p className='text-[20px] pb-5  text-start px-2 sm:px-5 md:px-12 lg:px-28'>
        YESSETHIOPIA, in collaboration with Kuraz Consulting, Tedy Gossa Consulting, and Mind Lead Consultancy, extends a cordial invitation to you for an enriching series of live training sessions. These sessions, conducted by experienced and certified trainers, will be broadcasted on the YESSETHIOPIA Telegram channel, aiming to empower participants with a diverse range of skills and knowledge.
<br/>
Training Sessions Overview:
- Advanced Employability Training
- Life Skills Development
- Intentional Growth Strategies
- Inspirational Sessions
- Capacity Building Workshops
- Job Search Skills Enhancement
- Digital Skills Training
- Entrepreneurial Mindset Cultivation
- Scholarship Guidance
<br/>
Benefits of Participation:
<br/>
1. Mentor Recommendation for Your CV:
   Receive a valuable mentor recommendation to enhance your CV and career prospects. Our experienced mentors will provide insights and guidance tailored to your professional goals.
<br/>
2. Network with Potential Field Mentors:
   Seize the opportunity to expand your network by connecting with potential field mentors, both locally and internationally. Networking is a key aspect of personal and professional growth, and this platform provides a conducive environment for meaningful connections.
<br/>
3. Funding for International Toastmasters Membership:
   We are committed to investing in your communication and leadership skills. Six participants will have the chance to have their international Toastmasters membership costs funded, allowing them to hone their public speaking and leadership abilities on a global stage.
<br/>
4. Supportive Advice for Startups:
   If you have innovative business ideas, our training sessions offer supportive advice on business plans, pitching strategies, and mentorship opportunities. Turn your entrepreneurial dreams into reality with the guidance of seasoned professionals.
<br/>
5. Opportunity for Mastermind Class:
   Participants will have the exclusive chance to join a mastermind class facilitated by an Internationally Certified John Maxwell Consultant. This class will provide insights into leadership, personal development, and success strategies that can propel you to new heights.
<br/>
Participate in these training sessions to acquire valuable skills, gain mentorship, and position yourself for success. YESSETHIOPIA, along with our esteemed collaborators, is dedicated to empowering individuals and fostering a community of growth and innovation.
<br/>
To register and secure your spot, visit our website or join the YESSETHIOPIA Telegram channel. Don't miss out on this opportunity to invest in your personal and professional development.
<br/>
We look forward to welcoming you to these transformative training sessions.
<br/>
Best regards,
<br/>
Yess Ethiopia
</p>
      </div>

      
      <div className="hidden:lg:w-1/5 pt-20">
        <div className="flex w-full justify-start items-start flex-col gap-10">
          <div className="card w-96 glass">
            <figure>
              <Image
                src={blog1}
                alt="blog2!"
                width={300}
                height={200}
                className="h-[200px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Arsi Robe Didea School Event</h2>
              <p className="line-clamp-2">Former students of the Arsi Robe Didea highschool in collaboration with Youth and Education Support Service</p>
              <div className="card-actions justify-end">
              <Link href="/blog1">
              <button className="btn bg-[#0041ff] text-white hover:text-black font-light hover:font-semibold pop">Read More</button>               
               </Link>             
                </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <Image
                src={blog2}
                alt="blog2!"
                width={300}
                height={200}
                className="h-[200px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">YessEthiopia LinkedIn Live Networking Event</h2>
              <p className="line-clamp-2"> We are thrilled to announce the grand celebration of the 1st Anniversary Week 52 for the YessEthiopia LinkedIn Live Networking Event! Join us on December 30, 2023, from 5 pm to 11 pm (Ethiopia Time) for an evening filled with reflection, gratitude, and forward-looking aspirations.</p>
              <div className="card-actions justify-end">
              <Link href="/event2">
              <button className="btn bg-[#0041ff] text-white hover:text-black font-light hover:font-semibold pop">Read More</button>               
               </Link>             
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default page;