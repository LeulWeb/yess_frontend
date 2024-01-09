import React from 'react'
import you from '../../assets/yess.png';
import Image from 'next/image';


const Why = ()=>{
    return(
        <div className="blue">
            <div className=' flex justify-center items-center flex-col lg:flex-row py-10 gap-10 lg:px-10 min-h-[80vh]'>
                <div  className="lg:w-3/5 px-4">
                    <h1 className='text-white tes font-bold text-center'>Why Yess Ethiopia Provide <br/>
                    Training for youth?</h1>
                    <p className='text-white text-[28px] text-center font-[700px] py-4'>  At Yess Ethiopia, our mission is to empower young individuals through carefully crafted training programs, equipping them with the skills, knowledge, and confidence needed to navigate today's challenges and make a positive impact on their communities and beyond. </p>
                </div>
                <div className='mx-2 lg:ml-28 lg:w-2/5'>
                    <Image src={you} alt="Why Yess" width={200} height={200}  className='w-[400px] h-[400px]'/>
                </div>
            </div>
        </div>
    )
}

export default Why;