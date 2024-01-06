import React from 'react'
import you from '../../assets/you.jpg';
import Image from 'next/image';


const Why = ()=>{
    return(
        <div className="blue">
            <div className=' flex justify-center items-center flex-col lg:flex-row py-10 gap-10 px-10 min-h-[80vh]'>
                <div  className="lg:w-3/5 px-4">
                    <h1 className='text-white tes font-bold text-center'>Why Yes Ethiopia Provide <br/>
                    Training for youth?</h1>
                    <p className='text-white text-[28px] text-center font-[700px] py-4'>At Yess Ethiopia, our mission is to empower young individuals through carefully crafted training program, equipping hem with the skills, knowledge, adn confidence needed to navigate today's challenges and make positive impact on their communities and beyond.</p>
                </div>
                <div className='rounded-full mx-2 lg:ml-28 lg:w-2/5'>
                    <Image src={you} alt="why Yess" width={200} height={200}  className='w-[400px] h-[400px] rounded-full border-blue-800 border-[16px]'/>
                </div>
            </div>
        </div>
    )
}

export default Why;