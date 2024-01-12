import Image from 'next/image';
import React from 'react'
import blog1 from '../assets/event1.jpg';
import home from '../assets/event2.png';
import blog2 from '../assets/event3.png';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">Yess Ethiopia LinkedIn Live Networking Event</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on December 30, 2023</p>
        <p className='text-[20px] pb-5  text-start px-2 sm:px-5 md:px-12 lg:px-28'>

        We are thrilled to announce the grand celebration of the 1st Anniversary Week 52 for the YessEthiopia LinkedIn Live Networking Event! Join us on December 30, 2023, from 5 pm to 11 pm (Ethiopia Time) for an evening filled with reflection, gratitude, and forward-looking aspirations.
<br/>
As we mark this significant milestone, we invite each participant to share their valuable experiences in the comment box below. Your insights will not only contribute to the joyous occasion but also help us understand the impact of our efforts over the past year.
<br/>
Take a moment to recount your personal journey with YessEthiopia LinkedIn Live Networking Event. Whether it's a memorable conversation, a valuable connection made, or an insightful takeaway, we want to hear it all. Your stories are the heartbeat of our community, and they inspire us to continue fostering meaningful connections.
<br/>
In the spirit of gratitude, let us collectively express our appreciation to the scholars who have played a pivotal role in shaping the success of the YessEthiopia LinkedIn Live Networking Event. Kindly share the names of those scholars who have left a lasting impression on you, and let's take this opportunity to extend our heartfelt thanks to them. Their dedication and wisdom have undoubtedly enriched our collective experience.
<br/>
Furthermore, we welcome additional comments and suggestions to enhance the future editions of the event. Your input is invaluable, and we are committed to creating an even more engaging and enriching platform for our community. Whether you have ideas for diverse topics, innovative formats, or ways to broaden our reach, your suggestions will shape the evolution of YessEthiopia LinkedIn Live Networking Event.
<br/>
Remember, this celebration is not just about looking back; it's also about looking forward with enthusiasm. As we embark on the second year of this incredible journey, we invite you to share your aspirations and expectations for the future of YessEthiopia LinkedIn Live Networking Event. Your vision will guide us in shaping a dynamic and inclusive community that continues to thrive.
<br/>
Most importantly, we extend a warm invitation to each and every one of you. This celebration is a collective achievement, and your presence will make it even more special. Join us on December 30, 2023, as we come together to celebrate, connect, and chart the course for the future.
<br/>
Thank you for being an integral part of the YessEthiopia LinkedIn Live Networking Event. Let the 1st Anniversary Week 52 celebration be a testament to the strength of our community and the limitless potential that lies ahead.
<br/>
See you at the event!
<br/>
Warm regards,
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
              <h2 className="card-title line-clamp-1">Yess Ethiopia is hosting an international conference</h2>
              <p className="line-clamp-2">Yess Ethiopia is proud to announce the hosting of an impactful international conference centered around the theme of "Youth Experience Sharing and Collaboration." This groundbreaking event aims to provide a platform for young minds from across the globe to share their experiences, ideas, and collaborate on solutions that will shape the future</p>
              <div className="card-actions justify-end">
              <Link href="/event3">
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