import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Technicals from '../components/courses/Technicals';

const Employee = () => {
  return (
    <div className=" overflow-x-hidden story text-black">
        <Complete />
        <Popular />
        <Technicals />
    </div>
  )
}

export default Employee;
