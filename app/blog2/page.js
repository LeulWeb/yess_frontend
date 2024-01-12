import Image from 'next/image';
import React from 'react'
import blog1 from '../assets/you.jpg';
import blog3 from '../assets/blog3.jpg';
import home from '../assets/blog2.jpg';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">My meeting with the devil</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on July 25, 20203</p>
        <p className='text-[20px] pb-5  text-start px-2 sm:px-5 md:px-12 lg:px-28'>
        


There is no a better way to explain my experiences during this past one month

Its meeting with the devil

Yes! I did meet with the devil

I saw the devil

I saw his actions

I saw his intentions to ruin my days

I saw the devil trying to ruin my life

Yes…. the devil did walk into my life

it did come all the way to make me sad

the devil did walk long ways and made many attempts to make me sad

Yet…. it didnt succeed

Thanks to our seniors

thanks to our social values


even if the pains were huge … i did also win the devil

he might come again

but I know his image

i know how it feels when the devil is around

it starts by creating huge obstacles around my life

it starts by turning things against my genuine actions

it starts by making ways to make me feel sad

the devil comes with sad stories

the devil comes with insults

the devil comes with feelings of anger

the devil comes by taking bad actions against my loved ones

yet… it will be defeated just like I defeated it this time

Thanks to God .. Thanks to Hope

Thanks to the seniors and nice people around me

the devil will be defeated

please dont fail for the devil

the devil comes with feelings and emotions of bad intentions

when even you feel sad … or when ever people around you feel so bad, or when ever you feel unreasonable anger about your life and about the people around you, Note that there is the devil

Yes, I am the witness

The devil made many attempts … it made up stories … it made false allegations against me .. yet, it failed … because, I was calm … i didnt panic … I did take the time to think .. I didnt make fast decisions … I did allow my anger to cool … i did let my friends and loved once to reach the point where they can reason … I did take the time to discuss … I did take the time to negotiate … I did answer calm for insults … I didnt trust my anger

Trust me … this words are real …..

I wish I tell all the details but I dont want to disclose private stories …. the key point is that, the devil can be defeated …

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
              <h2 className="card-title">Business in USA</h2>
              <p className="line-clamp-2">To rank America&apos;s Top States for Business in 2022, CNBC scored all 50 states on 88 metrics in 10 broad categories of competitiveness.</p>
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