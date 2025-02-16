import React from 'react'
import { MessageSquare, Download, Linkedin,Github,X,Facebook, Instagram } from 'lucide-react';
import Snake from './snake/Snake';

function HeroSection() {
  return (
    <div className='heroSection'>
        <div className='heroSectionContainer'>
          <h1 style={{textAlign:"center", fontSize:"45px", letterSpacing:"3px"}}> 👋 Hi, I' M  <br /> Arman Shekh</h1>
          <div className='socialmain'>
            <div className='socialContainer'>
              <div id="socialIcons" style={{display:"flex", gap:"30px"}}>
                <div className='themeToggleButton'>    <a href="https://www.linkedin.com/in/arman-shekh12/"><Linkedin strokeWidth={1} /></a> </div>
                <div className='themeToggleButton'>   <a href="https://github.com/ArmanA12"> <Github strokeWidth={1} /></a> </div>
                <div className='themeToggleButton'>    <a href="https://x.com/shekh_md72383"><X strokeWidth={1} /></a> </div>
                <div className='themeToggleButton'>    <a href="https://www.facebook.com/mdarman.shekh.5201"><Facebook strokeWidth={1} /></a> </div>
                <div className='themeToggleButton'>    <a href="https://www.instagram.com/arman_aishakar/"><Instagram strokeWidth={1} /></a> </div>




              </div>
            </div>
          </div>
          <h1 className='sde' >Software Developer Engineer</h1>
          <Snake />

          <div className='resumetalsk'>
            <div className='buttonConatiner'>
                <a href="tel:+917091554628">Let's Talk</a>
                <MessageSquare enableBackground={"#0000"} size={18} strokeWidth={1} />
            </div>
            <div className='buttonConatiner'>
                <a href="https://www.linkedin.com/in/arman-shekh12/overlay/1732166497363/single-media-viewer/?profileId=ACoAADPoSNUBMZXlAu2wHkkU4RVaonPbJbwe-Dc">Download Resume</a>
                <Download enableBackground={"#0000"} size={18} strokeWidth={1} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection