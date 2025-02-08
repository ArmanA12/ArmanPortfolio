import React from 'react'
import { MessageSquare, Download, Linkedin,Github,X,Facebook, Instagram } from 'lucide-react';
import Snake from './snake/Snake';

function HeroSection() {
  return (
    <div className='heroSection'>
        <div className='heroSectionContainer'>
          <h1 style={{textAlign:"center", fontSize:"45px", letterSpacing:"3px"}}> 👋 Hi, I' M  <br /> Peter Parker</h1>
          <div className='socialmain'>
            <div className='socialContainer'>
              <div id="socialIcons" style={{display:"flex", gap:"30px"}}>
                <div className='themeToggleButton'>    <Linkedin strokeWidth={1} /> </div>
                <div className='themeToggleButton'>    <Github strokeWidth={1} /> </div>
                <div className='themeToggleButton'>    <X strokeWidth={1} /> </div>
                <div className='themeToggleButton'>    <Facebook strokeWidth={1} /> </div>
                <div className='themeToggleButton'>    <Instagram strokeWidth={1} /> </div>




              </div>
            </div>
          </div>
          <h1 className='sde' >Software Developer Engineer</h1>
          <Snake />

          <div className='resumetalsk'>
            <div className='buttonConatiner'>
                <a href="">Let's Talk</a>
                <MessageSquare enableBackground={"#0000"} size={18} strokeWidth={1} />
            </div>
            <div className='buttonConatiner'>
                <a href="">Download Resume</a>
                <Download enableBackground={"#0000"} size={18} strokeWidth={1} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection