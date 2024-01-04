import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Recent from '../components/training2/Recent';

const Training2 = () => {
  return (
    <div className=" overflow-x-hidden story text-black">
        <Complete />
        <Popular />
        <Recent />
    </div>
  )
}

export default Training2;