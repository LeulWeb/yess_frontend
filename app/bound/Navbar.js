"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Navbar.css';
import emo from '../assets/logo2.png';
import { FaTimes, FaBars } from 'react-icons/fa';


function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0 || window.innerWidth < 768;
      console.log('is scrolled,', isScrolled);
      console.log("window inner length", window.innerWidth);
      setScrolled(isScrolled);
    };

    const handleResize = () => {
      // Your resize handling logic goes here
      handleScroll(); // Update scroll state on resize
    };

    // Subscribe to the scroll and resize events when the component mounts on the client side
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);

      // Unsubscribe from the events when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);


  return (
    <div className={`sticky top-0 py-2 z-50 bg-white dark:bg-white ${scrolled ? 'lg:bg-white' : 'dark:bg-white lg:bg-transparent dark:lg:bg-white bg-opacity-20 backdrop-blur-sm'}`}>
      <nav className={`navbar py-2  lg:px-5`}>
        <Link href='/' className='flex items-center justify-start py-2' onClick={closeMobileMenu}>
          <Image src={emo} alt="Yess Ethiopia" width={150} height={150} />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars /> }
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item '>
            <Link href='/' className={`${
                    scrolled
                      ? ' py-2 px-3 md:p-0 text-[#FF9700] lg:text-black  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent '
                      : ' py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center   lg:text-2xl rounded md:bg-transparent '
                  }`} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="py-2 nav-item">
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className={`${
                    scrolled
                      ? ' py-2 px-3 md:p-0 text-[16px] text-[#FF9700] lg:text-black  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent '
                      : ' py-2 px-3 md:p-0 text-[16px] text-[#FF9700] flex justify-center items-center   lg:text-2xl rounded md:bg-transparent '
                  }`}
                  type="button"
                >
                  Our Offers
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200 flex flex-col"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <Link href="/training" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link href="/volunteer" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Volunteerism
                      </Link>
                    </li>
                    <li>
                      <Link href="/scholarship" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Scholarship hub
                      </Link>
                    </li>
                    <li>
                      <Link href="/job" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Career support
                      </Link>
                    </li>
                    <li>
                      <Link href="/startup" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Startup boost
                      </Link>
                    </li>
                    <li>
                      <Link href="/talent" onClick={closeMobileMenu} className="block px-4 py-2 hover:text-blue-700">
                        Yess Talent
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
          <li
            className='nav-item'
          >
            <Link
              href='/about'
              className={`${
                scrolled
                  ? ' py-2 px-3 md:p-0 text-[#FF9700] lg:text-black  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent '
                  : ' py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center   lg:text-2xl rounded md:bg-transparent '
              }`}
              onClick={closeMobileMenu}
            >
              About 
            </Link>
          </li>
          
          <li className='nav-item'>
            <Link
              href='/blog'
              className={`${
                scrolled
                  ? ' py-2 px-3 md:p-0 text-[#FF9700] lg:text-black  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent '
                  : ' py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center   lg:text-2xl rounded md:bg-transparent '
              }`}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/contact'
              className={`${
                scrolled
                  ? ' py-2 px-3 md:p-0 text-[#FF9700] lg:text-black  flex justify-center items-center offer lg:text-2xl rounded md:bg-transparent '
                  : ' py-2 px-3 md:p-0 text-[#FF9700] flex justify-center items-center   lg:text-2xl rounded md:bg-transparent '
              }`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/#'
              className=' bg-[#0041ff] hover:bg-blue-800 hover:py-3 hover:px-10 hover:text-[20px] lg:hover:px-8 lg:hover:py-2  py-2 px-8 text-[16px] lg:text-[20px] rounded text-white'
              onClick={closeMobileMenu}
            >
              Join us
            </Link>
          </li>
          <li className='nav-item -mt-6 lg:mt-0'>
            <Link
              href='/donate'
              className=' bg-[#0041ff] hover:bg-blue-800 hover:py-3 hover:px-10 hover:text-[20px] lg:hover:px-8 lg:hover:py-2  py-2 px-8 text-[16px] lg:text-[20px] rounded text-white'
              onClick={closeMobileMenu}
            >
              Donate
            </Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
