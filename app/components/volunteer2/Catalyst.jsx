import React from 'react';
import { SlClock } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { PiPhoneThin } from 'react-icons/pi';

const Catalyst = () => {
  return (
    <div>
      <div>
        <p className="text-[35px] font-semibold py-3 text-center">
          Community Catalysts: Join Us in Marketing a Difference!
        </p>
        <p className="pop text-[30px] font-light px-4 lg:mx-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
          distinctio? Repellat qui dolorem magni est sapiente commodi adipisci,
          iure illum necessitatibus suscipit assumenda reprehenderit, cumque
          magnam eveniet ratione nihil cum.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
          tenetur corporis pariatur iusto deserunt quis totam, dignissimos sequi
          aspernatur, accusamus saepe corrupti asperiores sunt natus animi
          placeat iure ut est.
        </p>
      </div>
      <div className="px-4 lg:mx-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 lg:w-2/5 py-4">
          <div className="flex gap-6 font-semibold py-2">
            <CiMail size={40} />
            <p className="text-[20px] pop">Elder Above 65</p>
          </div>
          <div className="flex gap-6 font-semibold py-2">
            <PiPhoneThin size={40} />
            <p className="text-[20px] pop">
              Mekodonya, 22 <br /> Addis Ababa, Ethiopia
            </p>
          </div>
          <div className="flex gap-6 font-semibold py-2">
            <SlClock size={40} />
            <p className="text-[20px] pop">3hrs</p>
          </div>
        </div>
        <div className="md:w-1/2 lg:w-3/5 pt-3 text-gray-600">
          <form>
            <div className=" py-2">
              <label className="pop text-[30px] pb-6">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-4 py-3 px-3 rounded-lg border-gray-400 border-4 placeholder:pl-3 placeholder:text-gray-600 pop"
              />
            </div>
            <div className=" py-5">
              <label className="pop text-[30px] pb-6">Phone Number</label>
              <input
                type="number"
                placeholder="*************"
                className="w-full mt-4 py-3 px-3 rounded-lg border-gray-400 border-4 placeholder:pl-3 placeholder:text-gray-600 pop"
              />
            </div>
            <div className=" py-2">
              <label className="pop text-[30px] pb-6">
                Why You are interested?{' '}
              </label>
              <textarea
                cols={30}
                rows={8}
                className="w-full mt-4 py-3 px-3 rounded-lg placeholder:pl-3 placeholder:text-gray-600 pop"
              />
            </div>
            <div className="flex justify-center items-center my-6">
              <button
                type="submit"
                className="border-[#0041ff] border-4 hover:text-white hover:bg-[#0041ff] text-[#0041ff] py-2 px-8 text-[25px] pop rounded-xl"
              >
                Volunteer Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Catalyst;
