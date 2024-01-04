import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Employees from '../components/courses/Employees';

const Employee = () => {
  return (
    <div className=" overflow-x-hidden story text-black">
        <Complete />
        <Popular />
        <Employees />
    </div>
  )
}

export default Employee;
