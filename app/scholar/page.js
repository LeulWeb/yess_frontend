import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Scholars from '../components/courses/Scholars';

const Scholar = () => {
  return (
    <div className=" overflow-x-hidden story text-black">
        <Complete />
        <Popular />
        <Scholars />
    </div>
  )
}

export default Scholar;
