import Image from 'next/image';
import React from 'react'
import home from '../assets/blog3.jpg';
import blog2 from '../assets/blog2.jpg';
import blog1 from '../assets/you.jpg';

import Link from 'next/link';

const page = () => {
  return (
<div>
<div className="flex flex-col lg:flex-row justify-start items-start gap-3">
      <div className="lg:w-4/5">
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">Social Media experience by a Girl</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on September 22, 2020</p>
        <p className='text-[20px] pb-5 text-start px-2 sm:px-5 md:px-12 lg:px-28'>Dear all
The following note was sent to me during the #YessEthiopia Online Youth training
The trainees were asked to write their social media experiences
Here is what I received from one of the girls attending the training
<br/><br/>
It is been almost ten years since I have started using social media. I used Facebook, telegram, Gmail, LinkedIn, WhatsApp, IMO …
<br/>
Social Media experience of a college student
<br/>
The first social media I used was Facebook when I was a grade 9 student. I used it 
for reading different kind of quotes, have a chat with family members and classmates. 
I was a friend to very close and known persons. So I didn&apos;t get a chance to see the other side effect of social media.
<br/>
When I got into grade ten, I quit using fb, no reason at that time. And started using palm chat, 
which had a better platform to chat and got to know another person. 
Through palm chat I got to know a university student who thought me how should I be at that time.
 And their advice was so helpful. Sometimes I think I was so lucky to have those helpful peoples when there were so many un-mannered people out there. 
Their advice made me to be myself and work hard. Finally, I decided to delete all my social media. 
I have never used any social media when I was grade 11 throughout the year. Then I started using it sometimes like in a week, 
to have updated info on entrance exam when I was in grade 12. The only thing which can be taken as a waste of time may be the quotes,
 but still they have positive meaning to me till now. I can know the unspoken world through quotes. I don&apos;t regret using those media at high school level.
<br/>
But when I joined a university the social media become so different. Every one used it to find their soulmate, no other reasons.
 Every person you come across with thinks everything is flirting. Even asking for any info like books, schedules, 
they would reply assuming there is something you have to pay them back in any means, or it may seem to them you 
are attached and moving a step forward to relationship thing. However, it doesn&apos;t mean there are no good people. 
I got my friends who are still my besties when I was fresh. They were so helpful and guide me a lot. 
And also I don&apos;t think those flirting and playing with others feeling are a bad persons. 
Because I got a chance to ask some of them and the reason that changed them to this mind-set is their thinking 
that campus is a place for relationship so they didn&apos;t want to waste a time without putting an effort on it.
 I can understand them a little bit and when I see someone who lost themselves due to those chats, I start assaulting and complaining.
<br/><br/>
Thanks to my nature behavior that I can forget something easily I can survive this hurdle.
 I chatted with so many guys but when something fails, I don&apos;t get bothered. I was focusing on my education. 
Sometimes I thank GOD for giving me that kind of heart which can resist any breaking. 
I am sure I was not addicted to any social media because when I changed my thinking about it I can stop it immediately. 
For example when I was a 3 rd year I didn&apos;t chat for a whole year. But when I thought I miss some info I got back to it. 
And unknowingly I found myself addicted to it when I was 4 th year. I tried a lot of ways to be free from this addiction but nothing works. 
Once, I sat with myself and asked what is my goal, I knew in every chat there was nothing which is going to last forever, 
I knew the people I spoke didn&apos;t have a positive effect on myself, I knew I got nothing talking with them, I knew I wasted my time, 
I knew my thinking started to twist, and I knew I had to do something. So I decided to quit. 
It was around a final exam time so my decision helped me to score a lot. I even rewarded myself.
<br/>
But in the second semester of 4 th year, everyone left the campus due to internship program but I had to be there to take some courses that I had to have.
 I was the only female left there. I had no one on the floor we were living. I got frighten, depressed and bored.
 Which made me to be addicted to social media again. Since I didn&apos;t talk with any person I got really attached to it.
 I was so busy about so many thing which made me not to have a time to talk to myself. That is a point where I made a big mistake.
 I had to find a time for myself and I had to think other means of relaxing. Anyways the addiction lasts almost a year. 
Through this year I lost my focus, I got so bored easily and I wasn&apos;t interested in anything. 
I didn&apos;t go to hospitals and checked it but I am sure in that period I was depressed critically.
<br/>
Many of my friend tried a lot to help me. But the time they realized I was depressed, the depression was so deep.
 They trial didn&apos;t work. I appreciate their help, but the main thing I understood is every solution is in our hand.
 You have to figure out what is the best. To do that, left everything for a short time to have a free mind and to think thoroughly. 
You can definitely come up with the solution.
<br/><br/>
Don&apos;t complain about the problem you faced and the time you encounter a problem. Everything is for the best of you. If it wouldn&apos;t happen at that time,
 I won&apos;t change myself till now.
<br/>
When quarantine starts I had a time that I wished I had. I used the time effectively. Because I really wanted to have a break and analyzing time.
 I am free from my addiction now. Besides if there is a resource around you have to figure out how you should be benefited from it.
 So I find a new way to use this social media for good things. I started to avoid random chat and work on professional conversations only.
 I got a chance to do some freelance which is my first doing any job and get paid.
 That was astonishing moment for me because at the time I started to see the positive side I did it in my first trial.
 I leave unnecessary channels, chats, pages…
<br/>
but also since I sat for a long time, I get a chance to spend a time on YouTube. I subscribed and watched unnecessary things. 
I was worried about my actions. When I watch a movie called &apos;the social dilemma&apos; it really changed my thinking. I know now why I get so addicted.
 It is because the companies want us to be online as much as possible. So they create different platforms to do that. And I fell to their platform. 
So after watching the film my thinking changed a lot.</p>
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
                src={blog2}
                alt="blog2!"
                width={300}
                height={200}
                className="h-[200px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Business in USA</h2>
              <p className="line-clamp-e">To rank America&apos;s Top States for Business in 2022, CNBC scored all 50 states on 88 metrics in 10 broad categories of competitiveness.</p>
              <div className="card-actions justify-end">
              <Link href="/news2">
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