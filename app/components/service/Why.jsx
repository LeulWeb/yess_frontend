import React from 'react'
import you from '../../assets/you.jpg';
import Image from 'next/image';


const Why = ()=>{
    return(
        <div>
            <div className='blue flex justify-center items-center flex-col lg:flex-row py-10 gap-10 lg:gap-40'>
                <div  className="lg:w-3/5 px-4">
                    <h1 className='text-white font-bold text-[50px] text-center'>Why Yes Ethiopia Provide <br/>
                    Training for youth?</h1>
                    <p className='text-white text-[30px] text-center font-semibold py-4'>At Yess Ethiopia, our mission is to empower young individuals through carefully crafted training program, equipping hem with the skills, knowledge, adn confidence needed to navigate today's challenges and make positive impact on their communities and beyond.</p>
                </div>
                <div className='rounded-full mx-2 lg:ml-28 lg:w-2/5'>
                    <Image src={you} alt="why Yess" width={200} height={200}  className='w-[400px] h-[400px] rounded-full border-8 border-blue-600'/>
                </div>
            </div>
        </div>
    )
}

export default Why;