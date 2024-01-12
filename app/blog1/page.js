import Image from 'next/image';
import React from 'react'
import home from '../assets/you.jpg';
import blog3 from '../assets/blog3.jpg';
import blog2 from '../assets/blog2.jpg';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">Arsi Robe Didea School Event</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on August 11, 2020</p>
        <p className='text-[20px] pb-5  text-start px-2 sm:px-5 md:px-12 lg:px-28'> YessEthiopia
        <br/>
Former students of the Arsi Robe Didea highschool in collaboration with Youth and Education Support Service Ethiopia / YessEthiopia / organized thank you event for teacher Shewamare Bogale
<br/>
Our Biology teacher was known for his high dedication and work ethics while teaching biology subject at Didea Highschool
<br/>
He motivated many students to like the #Biology subject and score very good mark in national exam

I am a witness for his exemplary teaching skills

this note and the attached video is kept to remember teacher Shewamare and Arsi Robe Didea High-school in Ethiopia
</p>
      </div>

      
      <div className="hidden:lg:w-1/5 pt-20">
        <div className="flex w-full justify-start items-start flex-col gap-10">
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
              <h2 className="card-title">My meeting with the devil</h2>
              <p className="line-clamp-2">There is no a better way to explain my experiences during this past one month Its meeting with the devil Yes! I did me</p>
              <div className="card-actions justify-end">
              <Link href="/blog2">
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
              <h2 className="card-title">Inspiring story of the man without hands</h2>
              <p className="line-clamp-2">My name is Kebede Awgechew Weldetsadik. I was born and raised in the beautiful rural kebele of Dode districts of</p>
              <div className="card-actions justify-end">
                <Link href="/blog3">
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