import React from 'react'
import Welcome from '../components/scholarship/Welcome';
import New from '../components/scholarship/New';
import Guidance from '../components/scholarship/Guidance';
import Impact from '../components/scholarship/Impact';
import Webinar from '../components/scholarship/Webinar';
import Telegram from '../components/scholarship/Telegram';

const Scholarship = () => {
  return (
    <div className=" story overflow-x-hidden">
      <Welcome />
      <New />
      <Guidance />
      <Impact />
      <Webinar />
      <Telegram />
    </div>
  )
}

export default Scholarship;
