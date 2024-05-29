"use client"


import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa6';
import { FaTiktok } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa6';
import { CgMail } from 'react-icons/cg';
import { FaInstagramSquare } from 'react-icons/fa';
import log from '../assets/logo.png';
import bg from '../assets/footer.jpg';
import insta from '../assets/insta.svg';
import linkedin from '../assets/linkedin.svg';
import tiktok from '../assets/tiktok.svg'
import facebook from '../assets/facebook.svg';
import { IoCall } from 'react-icons/io5';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    try {
      setIsDownloading(true);
      window.location.href = 'https://download.redshiftbusinessgroup.com/YessEthiopia.apk';
      setIsDownloading(false);
    } catch (error) {
      console.error('Error downloading file:', error);
      setIsDownloading(false);
    }
  };

  return (
    <div className="overflow-x-hidden lg:h-[400px] h-full foot bg-cover bg-no-repeat text-white ">
      <div>
        <div className="hero-overlay bg-opacity-50 bg-black/70"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-4 items-start ">
          <div className="py-5">
            <div className="items-center justify-center flex flex-col">
              <h1 className="text-[25px] pb-5 text-white">
                You can call or visit us
              </h1>
              <div className="items-center justify-start flex flex-col">
                <div className="flex gap-5 text-white py-2">
                  <IoCall size={20} />
                  <p className="font-light">+251 901299902</p>
                </div>
                <div className="flex gap-5 text-white">
                  <FaMapMarkerAlt size={20} />
                  <p className="font-light">Address Link</p>
                </div>
              </div>
            </div>
            <Image
              src={log}
              alt="Yess Logo"
              width={200}
              height={300}
              className="mt-6"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[25px] py-5 text-white">
              Subscribe to our news
            </h1>
            <form>
              <div className="flex flex-col items-start justify-start pb-2">
                <label className="text-white text-[20px] py-3">Email</label>
                <input type="email" className="rounded-lg text-[#0041ff] bg-gray-100 w-72" />
              </div>
              <div className="flex flex-col items-start justify-start pb-2">
                <label className="text-white text-[20px] py-3">Full Name</label>
                <input type="text" className="rounded-lg text-[#0041ff] bg-gray-100 w-72" />
              </div>
              <div className="py-3 flex justify-center items-center">
                <button
                  type="submit"
                  className="bg-white text-[#0041ff] px-8 py-2 rounded-xl text-[20px]"
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[25px] py-5 text-white">Download our app</h1>
            <div className="py-3 flex justify-center items-center">
              <button
              onClick={handleDownload} disabled={isDownloading}
                // type="submit"
                className="bg-white text-[#0041ff] px-8 py-2 rounded-xl text-[20px]"
              >
                {isDownloading ? 'Downloading...' : 'Download APK'}
              </button>
            </div>
            <h1 className="text-[25px] text-white py-10">Quick Link</h1>
            <div className="flex justify-center items-center gap-6 pt-4">
              <div className="py-3 flex justify-center items-center">
                <Link href="/about">
                <button
                  type="submit"
                  className="bg-white text-[#0041ff] px-8 py-2 rounded-xl text-[20px]"
                >
                  About us
                </button>
                </Link>
              </div>
              <div className="py-3 flex justify-center items-center">
                <Link href="/donate">
                <button
                  type="submit"
                  className="bg-white text-[#0041ff] px-8 py-2 rounded-xl text-[20px]"
                >
                  Donate
                </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[25px] text-white py-5 pb-5">Connect With Us</h1>
            <div className='flex flex-row gap-4'>
              {/* <FaLinkedin size={20} className='text-[#2867B2]'/> */}
              <Image src={linkedin} alt="tiktok logo" height={30} width={30} />
              {/* <FaTiktok size={20} className='text-black'/> */}
              <Image src={tiktok} alt="tiktok logo" height={30} width={30} />
              <FaFacebookF size={30} className='text-white'/>
              {/* <Image src={facebook} alt="tiktok logo" height={30} width={30} /> */}
              <CgMail size={30} className='text-white'/>
              {/* <FaInstagramSquare size={20} className='text-[#833fb4]'/> */}
              <Image src={insta} alt="tiktok logo" height={30} width={30} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
