import Image from 'next/image';
import React from 'react';
import you from '../../assets/gra.png';
import tech from '../../assets/tech.png';
import busi from '../../assets/busi.png';
import emp from '../../assets/emp.png';
import imp from '../../assets/imp.png';
import Link from 'next/link';

const View = () => {
  return (
    <div className="story">
      <div className=" carousel carousel-center bg-white max-w-full p-4 space-x-10 rounded-box h-full">
        <div className="carousel-item bg-[#0041ff] flex flex-col justify-center items-center w-[300px] h-full mx-3 rounded-xl">
          <div className="py-2 flex flex-col items-center justify-center">
            <Image
              src={imp}
              alt="Burger"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-white px-2 text-[30px] font-bold py-2 text-center">
              Impersonal Skill
            </p>
            <p className="text-white px-4 text-center">
              Training of behaviors, tactics, and strategies a person uses to
              interact.{' '}
            </p>
            <Link href="/imperson">
              <p className="text-[#0041ff] bg-white rounded-xl hover:bg-blue-200 cursor-pointer my-2 py-1 px-8 justify-center items-center flex text-center text-[23px]">
                View More
              </p>
            </Link>
          </div>
        </div>

        {/* Second item */}
        <div className="carousel-item bg-[#0041ff] flex flex-col justify-center items-center w-[300px] h-full mx-3 rounded-xl">
          <div className="py-2 flex flex-col items-center justify-center">
            <Image
              src={you}
              alt="Burger"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-white px-2 text-[30px] font-bold py-2 text-center">
              Scholarship
            </p>
            <p className="text-white px-4 text-center">
              Join our scholarship programs to gain the info needed to explore
              in the world of education
            </p>

            <Link href="/scholar">
              <p className="text-[#0041ff] bg-white rounded-xl hover:bg-blue-200 cursor-pointer my-2 py-1 px-8 justify-center items-center flex text-center text-[23px]">
                View More
              </p>
            </Link>
          </div>
        </div>

        {/* Theard Item */}
        <div className="carousel-item bg-[#0041ff] flex flex-col justify-center items-center w-[300px] h-full mx-3 rounded-xl">
          <div className="py-2 flex flex-col items-center justify-center">
            <Image
              src={emp}
              alt="Burger"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-white px-2 text-[30px] font-bold py-2 text-center">
              Employability
            </p>
            <p className="text-white px-4 text-center">
              Prepare yourself for the job market with our Employability Skills
              training.
            </p>
            <Link href="/employee">
              <p className="text-[#0041ff] bg-white rounded-xl hover:bg-blue-200 cursor-pointer my-2 py-1 px-8 justify-center items-center flex text-center text-[23px]">
                View More
              </p>
            </Link>
          </div>
        </div>

        {/* fourth Skill */}
        <div className="carousel-item bg-[#0041ff] flex flex-col justify-center items-center w-[300px] h-full mx-3 rounded-xl">
          <div className="py-2 flex flex-col items-center justify-center">
            <Image
              src={tech}
              alt="Burger"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-white px-2 text-[30px] font-bold py-2 text-center">
              Technical skill
            </p>
            <p className="text-white px-4 text-center">
              Stay ahead in the ever-evolving tech industry with our technical
              skills training.
            </p>

            <Link href="/technical">
              <p className="text-[#0041ff] bg-white rounded-xl hover:bg-blue-200 cursor-pointer my-2 py-1 px-8 justify-center items-center flex text-center text-[23px]">
                View More
              </p>
            </Link>
          </div>
        </div>

        {/* Business Skill */}
        <div className="carousel-item bg-[#0041ff] flex flex-col justify-center items-center w-[300px] h-full mx-3 rounded-xl">
          <div className="py-2 flex flex-col items-center justify-center">
            <Image
              src={busi}
              alt="Burger"
              width={150}
              height={150}
              className="w-[150px] h-[150px] rounded-full"
            />
            <p className="text-white px-2 text-[30px] font-bold py-2 text-center">
              Business
            </p>
            <p className="text-white px-4 text-center">
              Join our programs to gain the skils needed to thrive in the
              dynamic world of business
            </p>

            <Link href="/business">
              <p className="text-[#0041ff] bg-white rounded-xl hover:bg-blue-200 cursor-pointer my-2 py-1 px-8 justify-center items-center flex text-center text-[23px]">
                View More
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
