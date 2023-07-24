import React from 'react'
import Card from './Card'

const About = () => {
  return (
    <div className='abt-container'>
      <h1>About Us</h1>
      <h3>We are a food delivery app getting to you the tastiest meals around you within no time.</h3>
      <Card name={"Atharv"} location={"Mumbai"} />
     
    </div>
  )
}

export default About
