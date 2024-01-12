import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Business from '../components/courses/Business';


const Employee = () => {
  return (
    <div className=" overflow-x-hidden story text-black">
        <Complete />
        <Popular />
        <Business />
    </div>
  )
}

export default Employee;
