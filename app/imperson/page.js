import React from 'react'
import Complete from '../components/training2/Complete';
import Popular from '../components/training2/Popular';
import Recent from '../components/training2/Recent';

const Imperson = () => {
  return (
    <div className=" overflow-hidden story text-black">
        <Complete />
        <Popular />
        <Recent />
    </div>
  )
}

export default Imperson;