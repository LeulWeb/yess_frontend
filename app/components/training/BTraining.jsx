import Image from 'next/image';
import React from 'react';
import you from '../../assets/imp.png';
// import imp from '../../assets/imp.png';


const BTraining =()=>{
    return(
        <div>
            <div className='flex flex-col md:flex-row justify-center items-start py-10 px-2 gap-10 sm:px-4 md:px-12 lg:px-24'>
                <div className=' md:w-2/5'>
                    <div className=' rounded-full border-8 border-[#0041ff]'>
                    <Image src={you} width={500} height={500} className='w-[500px] h-[500px] rounded-full border-8 border-[#0041ff]' />
                    </div>
                </div>
                <div className='md:w-3/5'>
                <h1 className='text-[#0041ff] font-bold tes text-center'>Impersonal Skill</h1>
                <p className='text-[30px] text-black py-4 text-center'>Impersonal skill training, often referred to as interpersonal skills training. focuses on enhancing an individual ability to interact effectively with others. This type of training is crucial for personal adn professional development, as it encompasses a  range of skills that contribute to successful communication and relationship building.</p>
                </div>
            </div>
        </div>
    )
}

export default BTraining;