import Image from 'next/image';
import React from 'react'
import home from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.jpg';
import blog1 from '../assets/you.jpg';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">Business in USA</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on December 27, 2022</p>
        <p className='text-[25px] pb-5 md:text-[30px] text-start px-2 sm:px-5 md:px-12 lg:px-28'>America&apos;s Top States for Business 2022: The full rankings
PUBLISHED WED, JUL 13 20228:09 AM EDTUPDATED WED, JUL 13 20228:39 AM EDT

CNBC.com staff@CNBC
<br/><br/>

To rank America&apos;s Top States for Business in 2022, CNBC scored all 50 states on 88 metrics in 10 broad categories of competitiveness.
 Each category is weighted based on how frequently states use them as a selling point in economic development marketing materials. 
That way, our study ranks the states based on the attributes they use to sell themselves.
We developed our criteria and metrics in consultation with a diverse array of business and policy experts, and the states. <br/>
Our study is not an opinion survey. We use data from a variety of sources to measure the states&apos; performance.
Under our methodology, states can earn a maximum of 2,500 points. The states with the most are America&apos;s Top States for Business.
</p>
      </div>
      <div className="hidden:lg:w-1/5 pt-20">
        <div className="flex w-full justify-start items-start flex-col gap-10">
         
          <div className="card w-96 glass">
            <figure>
              <Image
                src={blog1}
                alt="blog3!"
                width={300}
                height={200}
                className="h-[200px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">PhD study opportunity</h2>
              <p className="line-clamp-3">
This 4-year programme is aimed at graduates with a strong interest in multi-disciplinary research and 
interdisciplinary food systems perspectives.</p>
              <div className="card-actions justify-end">
                <Link href="/news1">
                <button className="btn bg-[#0041ff] text-white hover:text-black font-light hover:font-semibold pop">Read More</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="card w-96 glass">
            <figure>
              <Image
                src={blog3}
                alt="blog3!"
                width={300}
                height={200}
                className="h-[200px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Social Media experience by a Girl</h2>
              <p className="line-clamp-3">It is been almost ten years since I have started using social media. I used Facebook, telegram, Gmail, LinkedIn, WhatsApp, IMO …</p>
              <div className="card-actions justify-end">
                <Link href="/news3">
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