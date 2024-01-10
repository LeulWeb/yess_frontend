import Image from 'next/image';
import React from 'react'
import home from '../assets/yoni.png';

const page = () => {
  return (
    <div>
      <div>
        <Image src={home} alt="News One" width={500} height={600}  className='w-screen h-[87vh]'/>
        <p className="text-center font-semibold text-[30px] lg:text-[50px] pt-5">PhD study opportunity</p>
        <p className="text-end px-2 sm:px-5 md:px-12 lg:px-28 text-[#0041ff] text-[16px] py-3">Posted on January 13, 2023</p>
        <p className='text-[25px] pb-5 md:text-[30px] text-start px-2 sm:px-5 md:px-12 lg:px-28'>Greetings from YessEthiopia
<br/>
Here an opportunity for those interested to do PhD in UK
<br/><br/>
The UKFS-CDT has up to 28 studentships available for cohort 3.
Please apply by 23:59 GMT on Monday, 23rd January 2023.
The application system is now open for cohort 3.
<br/><br/>
Please ensure you have read the the guidance on this website, before you start completing your application 
forms – via the APPLICATION GUIDELINES, including ELIGIBILITY and ENGLISH LANGUAGE REQUIREMENTS (below).
<br/>
The UKFS-CDT will train up to 60 interdisciplinary doctoral researchers capable of leading the UK towards a
 resilient, healthy and inclusive food future. Cohort 3 will start in autumn of 2023.
<br/><br/>
This 4-year programme is aimed at graduates with a strong interest in multi-disciplinary research and 
interdisciplinary food systems perspectives. Understanding the complex food system challenges requires 
holistic and novel interdisciplinary thinking. We invite highly motivated individuals from a wide range of 
academic or career backgrounds including humanities, social sciences, natural sciences, and physical sciences to apply.
<br/><br/>
The UKFS-CDT brings together the NRI of the University of Greenwich (lead institution), UCL, Royal Veterinary 
College, IBERS at Aberystwyth University, Centre for Food Policy at City University, University of Sussex, and 
Brunel University London; and two leading agricultural research institutes, NIAB EMR and Rothamsted Research, 
plus over 50 food systems Academy partners from business, government and civil society.
<br/><br/>
For more information, please visit this website
https://foodsystems-cdt.ac.uk/doctoral-programme</p>
      </div>
    </div>
  )
}

export default page;