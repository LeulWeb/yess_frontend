import React from 'react'
import Welcome from '../components/about/Welcome'
import Story from '../components/about/Story'
import Board from '../components/about/Board'
import Focal from '../components/about/Focal'
import Feature from '../components/about/Feature'

const About = () => {
  return (
    <div className='overflow-x-hidden'>
        <Welcome />
        <Story />
        <Board />
        <Focal />
        <Feature />
    </div>
  )
}

export default About