import Image from 'next/image';
import React from 'react'
import blog1 from '../assets/event1.jpg';
import home from '../assets/event3.png';
import blog2 from '../assets/event2.png';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">
            Yess Ethiopia is hosting an international conference
        </p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">hosted on January 19-20, 2024</p>
        <p className='text-[20px] pb-5  text-start px-2 sm:px-5 md:px-12 lg:px-28'>

        Yess Ethiopia is proud to announce the hosting of an impactful international conference centered around the theme of "Youth Experience Sharing and Collaboration." This groundbreaking event aims to provide a platform for young minds from across the globe to share their experiences, ideas, and collaborate on solutions that will shape the future.
<br/>
Conference Overview:
<br/>
Theme: Youth Experience Sharing and Collaboration
<br/>
In a world where the voices of the youth are more critical than ever, Yess Ethiopia is taking the lead in fostering a dynamic space for collaboration and dialogue. The conference will revolve around the experiences of young individuals, offering a unique opportunity to share insights, challenges, and successes that will inspire and empower others.
<br/>
Agenda:
<br/>
The conference agenda is meticulously crafted to maximize engagement, learning, and collaboration:
<br/>
1. Keynote Addresses:
   Renowned thought leaders, experts, and influencers will deliver keynote addresses, setting the tone for discussions on youth empowerment, innovation, and collaboration.
<br/>
2. Panel Discussions:
   Dynamic panel discussions will feature a diverse group of speakers, sharing their experiences and expertise on topics such as entrepreneurship, education, technology, social impact, and more.
<br/>
3. Interactive Workshops:
   Engaging workshops will provide practical insights and tools for personal and professional development. Attendees will have the opportunity to participate actively, exchange ideas, and learn from one another.
<br/>
4. Networking Sessions:
   Facilitated networking sessions, both online and in-person, will enable participants to connect with like-minded individuals, potential collaborators, and mentors. Building a global network is a key focus of the conference.
<br/>
5. Youth Showcase:
   A platform for young talents to showcase their projects, initiatives, and innovations. This session will celebrate the diversity of youth contributions globally.
<br/>
Venue: Online and In-Person:
<br/>
Recognizing the importance of accessibility, the conference will be hosted both online and in-person. Attendees can choose the mode that suits them best, ensuring a truly inclusive and global participation.
<br/>
- Online Access:
  Virtual attendees will have the opportunity to join the conference from the comfort of their homes or offices. The online platform will feature live streaming of keynote addresses, panel discussions, and interactive sessions.
<br/>
- In-Person Venue:
  For those who prefer a more immersive experience, the in-person venue will provide a vibrant atmosphere for networking, collaboration, and direct engagement with speakers and fellow participants. The physical venue will adhere to all necessary health and safety protocols.
<br/>
Yess Ethiopia is dedicated to creating an empowering and inclusive space where the voices of the youth are heard, celebrated, and amplified. By fostering collaboration and sharing experiences, we aim to ignite positive change and contribute to a brighter future for the global community.
<br/>
Join us for this transformative conference as we embark on a journey of exploration, collaboration, and inspiration. Together, let's shape a world where the youth are empowered to lead and create lasting impact.
<br/>
We look forward to your active participation in this momentous event.
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
              <h2 className="card-title line-clamp-1">Free Series live training on Employability, life skill adn business Startups</h2>
              <p className="line-clamp-2">YESSETHIOPIA, in collaboration with Kuraz Consulting, Tedy Gossa Consulting, and Mind Lead Consultancy, extends a cordial invitation to you for an enriching series of live training sessions.</p>
              <div className="card-actions justify-end">
              <Link href="/event1">
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