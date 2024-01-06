import React from 'react';
import { CgTwitter } from 'react-icons/cg';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa6';
import board1 from '../../assets/board1.png';
import board2 from '../../assets/board2.png';
import board3 from '../../assets/board3.png';
import board4 from '../../assets/board4.png';
import board5 from '../../assets/board5.png';
import board6 from '../../assets/board6.png';
import Image from 'next/image';

const Board = () => {
  return (
    <div className="story bg-cover bg-no-repeat">
      <div className="px-2 sm:px-4 md:px-6">
        <h1 className="text-[#0041ff] tes font-bold">
          Board member of Yess Ethiopia
        </h1>
        <p className="text-black text-[28px] py-4">
        The Yess Ethiopia board is the guiding force behind the organization's strategic vision and mission. Comprising experienced and dedicated individuals, the board provides leadership, direction, and oversight to ensure effective implementation of Yess Ethiopia's programs.
        </p>
        <div>
          <div className="carousel carousel-center max-w-full p-4 space-x-10 rounded-box h-full ">
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board1}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board2}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board3}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board4}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board5}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
            <div className="carousel-item px-3 rounded-box flex flex-col items-center justify-center h-full py-10">
              <div className="carousel-item">
                <Image
                  width={400}
                  height={500}
                  src={board6}
                  alt=""
                  className="mx-2"
                />
              </div>
              {/* <div className="flex justify-center items-center gap-10 border-t-2 py-4 mt-4 border-white w-full text-white">
                <FaFacebook size={20} />
                <FaLinkedin size={20} />
                <FaTwitter size={20} />
                <FaTelegram size={20} />
                <FaInstagram size={20} />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
