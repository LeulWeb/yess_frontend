import React from 'react';
import { GoDotFill } from 'react-icons/go';

const Reduces = () => {
  return (
    <div>
      <div className="px-4 lg:px-10 flex flex-col lg:flex-row justify-center items-start py-5">
        <div className="py-12 px-6 shadow-xl rounded-xl border-gray-50 border-2 Md:w-1/2 lg:w-2/5">
          <p className="text-[40px] font-bold pb-2">
            EMotional Intelligence Training Benefits:
          </p>
          <div className="text-[25px] py-1 flex gap-5">
            <GoDotFill />
            <p className="text-[30px]">
              Stress Reduction: Learn effective emotion management for reduced
              stress.
            </p>
          </div>
          <div className="text-[25px] py-1 flex gap-5">
            <GoDotFill />
            <p className="text-[30px]">
              Interpersonal Skills: Better understand adn connect with others,
              fostering stronger relationships.
            </p>
          </div>
          <div className="text-[25px] py-1 flex gap-5">
            <GoDotFill />
            <p className="text-[30px]">
              Conflict Resolution: Navigate conflicts calmly and seek solutions
              beneficial to all parties.
            </p>
          </div>
          <div className="text-[25px] py-1 flex gap-5">
            <GoDotFill />
            <p className="text-[30px]">
              Decision-Making: Improve decision-making by integrating emotional
              awareness into the process.
            </p>
          </div>
          <div className="text-[25px] py-1 flex gap-5">
            <GoDotFill />
            <p className="text-[30px]">
              Job Satisfaction: Experience higher job satisfaction thought
              effective workplace navigation.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 px-10 py-10">
          <p className="text-[40px] font-bold pb-2">Reduces Stress</p>

          <div>
            <iframe
              width="869"
              height="463"
              src="https://www.youtube.com/embed/KPUUCS4z7TE"
              title="The best scholarship, job and business experience sharing forum Session 46"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded w-full h-[400px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reduces;
