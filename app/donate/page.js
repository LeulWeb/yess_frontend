import React from "react";
import Don from "../components/donate/Don";
import pay from '../assets/pay.jpg';
import Link from "next/link";
import Image from "next/image";

const Donate = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-wrap bg-blue-600 text-white gap-10 lg:gap-32 justify-center items-center px-2 sm:px-4 md:px-8 lg:px-16 py-4">
        <div className="flex gap-4 font-bold text-xl">
          <p>For Ethiopia</p> <p>- 1000 60 18 97 605 CBE</p>
        </div>
        <div className="flex gap-4 font-bold text-xl items-center ">
          <p>For Outside Ethiopia</p>
         <div>
         <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
            <Image
              src={pay}
              alt=""
              width={50}
              height={50}
              className="rounded hover:opacity-80 transition-opacity duration-300"
              title="Click Here"
            />
          </Link>
          <Link href="https://www.paypal.com/donate/?hosted_button_id=QPXMVXM8C3SKS">
          <p className="text-sm font-light lg:hidden">click here</p>
          </Link>
         </div>
        </div>
      </div>
      <Don />
    </div>
  );
};

export default Donate;