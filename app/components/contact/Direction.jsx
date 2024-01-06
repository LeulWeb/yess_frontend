import React from 'react';


const Direction = () => {
  return (
    <div className=" h-[550px]">
      <div className="grid grid-cols-1 lg:grid-cols-4 ml-5">
        <div className="px-4 col-span-1 rounded-2xl border-gray-100 border-2 shadow-lg shadow-gray-100">
          <h1 className="tes py-3">Yess Ethiopia</h1>
          <p>non-profit charity organization</p>
          <div className="flex justify-center gap-6 items-center py-4">
            <button className="rounded-full border-2 border-gray-500 px-3">Direction</button>
            <button className="rounded-full border-2 border-gray-500 px-3">Save</button>
          </div>
          <p>Address:- 2Q7P+VF, 1000 Addis Ababa, Ethiopia </p>
        </div>
        <div className="lg:col-span-3">
          <iframe
            className="w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5368850223854!2d38.783599174454274!3d9.014689789213962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b851f9a08bb2d%3A0xf12744684b788cb1!2sHelder%20Technologies%20Solution!5e0!3m2!1sen!2set!4v1699964081328!5m2!1sen!2set"
            width="600"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Direction;
