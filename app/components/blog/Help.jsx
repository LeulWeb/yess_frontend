import React from 'react';
import { IoFilter } from 'react-icons/io5';
import footer from '../../assets/footer.jpg';
import Image from 'next/image';
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaArrowRight } from 'react-icons/fa6';


const Help = ()=>{
    return(
        <div>
                    <div className='py-10'>
          <h1 className='text-[30px] lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36 font-bold'>Help Community and help yourself with Yess Ethiopia</h1>
          <p className='lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36 pop text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Molestias neque commodi inventore laudantium obcaecati ex dolorum? 
             Doloribus vero voluptatem, eius veritatis quibusdam corrupti beatae velit 
             quam reprehenderit, alias, mollitia aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
                 Tenetur facere expedita iure in atque possimus itaque 
                 veniam non? Qui.</p>
        <div className='lg:mx-16 mx-2 sm:mx-6 md:mx-12 lg:px-36'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 px-2 sm:px-6 md:px-12 lg:px-44 xl:px-60">
        <form className="lg:col-span-2">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
        <div className="flex gap-1 rounded-3xl bg-gray-200 text-gray-800 w-20  mt-3 lg:ml-20 md:ml-10 ml-5 px-4">
          <p className="text-sm pt-2">Filter</p>
          <IoFilter className="mt-2.5" />
        </div>
      </div>
        </div>
        <div className='py-10 sm:px-10 px-4'>
        <div>
        

        <div id="default-carousel" class="relative w-full" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-56 overflow-hidden rounded-lg md:h-80">
                 {/* <!-- Item 1 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={footer} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={400} width={1024} alt="..." />
                </div>
                {/* <!-- Item 2 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
               <Image src={footer} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={400} width={1024} alt="..." />
        
                </div>
                {/* <!-- Item 3 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={footer} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={400} width={1024} alt="..." />
        
                </div>
                {/* <!-- Item 4 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={footer} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={400} width={1024} alt="..." />
        
                </div>
                {/* <!-- Item 5 --> */}
                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                    <Image src={footer} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" height={400} width={1024} alt="..." />
        
                </div>
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
        
            </div>
        </div>
        </div>
        </div>
    )
}

export default Help;