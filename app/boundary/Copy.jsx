import Link from 'next/link'
import React from 'react'

const Copy = () => {
  return (
    <div className='text-[#0041ff] text-[12px] py-1 px-4 bg-white flex gap-6 flex-wrap justify-center lg:justify-between items-center'>
      <p className='text-[14px]'>Copyright 2023 - All rights reserved. Youth and Education Support Service</p>
      <p className='text-[14px]'>yessinternational.org</p>
      <Link href="https://heldertechnologies.com">
      <p className='text-[14px]'>Powered by Helder Technologies Solution PLC</p>

      </Link>
    </div>
  )
}

export default Copy
