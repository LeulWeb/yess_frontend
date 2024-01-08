import React from 'react'
import StartBusines from '../components/startup/StartBusines'
import Business from '../components/startup/Business'
import Startups from '../components/startup/detail/Startups'
import Busy from '../components/startup/Busy'

const Startup = () => {
  return (
    <div>
      <StartBusines />
      {/* <Business /> */}
      {/* <Startups /> */}
      <Busy />
    </div>
  )
}

export default Startup