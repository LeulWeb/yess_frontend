import React from 'react'
import YessTalent from '../components/talent/YessTalent';
import HighScore from '../components/talent/HighScore';
import Youth from '../components/talent/Youth';

const Talent = () => {
  return (
    <div className='overflow-x-hidden story'>
        <YessTalent />
        <HighScore />
        <Youth />
    </div>
  )
}

export default Talent;