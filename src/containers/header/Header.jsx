import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='wum__header section__padding' id='about'>
      <div className='wum__header-content'>
        <h1 className='gradient__text'>What is this Website? And why?</h1>
        <p>This website was created in the course of a project for the web and media programming module of the Anhalt University of Applied Sciences. </p>
        <p>It was our goal to create a web service especially designed for people to watch films with interactive features.</p>
        <p>We created several functionalities to explore for our users. One of which is the depiction of all clips available in our library section, followed by the video player itself and the choice buttons appering near the end of a clip, so the user always has the option to pick and choose which clip to see and how the story continues.</p>
      </div>
    </div>
  )
}

export default Header
