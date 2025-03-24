// HeroSection2.jsx
import React from 'react';
import { MessageSquare, Download, Linkedin, Github, X, Facebook, Instagram } from 'lucide-react';

function HeroSection2() {
  return (
    <div className="hero-intro">
      {/* Top Left Circle */}
      <svg 
        aria-hidden="true" 
        className="hero-grid-circle" 
        data-side="top-left" 
        fill="none" 
        height="75" 
        viewBox="0 0 75 75" 
        width="75"
      >
        <path 
          d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
          opacity="var(--line-opacity)"
          stroke="url(#paint0_angular)"
          strokeDasharray="2 2"
        />
        <defs>
          <radialGradient 
            id="paint0_angular" 
            cx="0" 
            cy="0" 
            r="1" 
            gradientUnits="userSpaceOnUse" 
            gradientTransform="translate(37.5 37.5) rotate(90) scale(36.5)"
          >
            <stop stopColor="#000" />
            <stop offset="0.5" stopColor="#000" stopOpacity="0.34" />
            <stop offset="1" stopColor="#000" />
          </radialGradient>
        </defs>
      </svg>

      {/* Left Line */}
      <div 
        aria-hidden="true" 
        className="hero-grid-line" 
        data-fade="true" 
        data-offset="true" 
        data-side="left"
      />

      {/* Main Content */}
      <div className="hero-content">
        <h1 className="hero-title gradient-text">
         Hi, I'm  Arman Shekh
          <svg 
            aria-hidden="true" 
            className="hero-grid-circle" 
            data-side="bottom-right" 
            fill="none" 
            height="75" 
            viewBox="0 0 75 75" 
            width="75"
          >
            <path 
              d="M74 37.5C74 30.281 71.8593 23.2241 67.8486 17.2217C63.838 11.2193 58.1375 6.541 51.4679 3.7784C44.7984 1.0158 37.4595 0.292977 30.3792 1.70134C23.2989 3.1097 16.7952 6.58599 11.6906 11.6906C6.58599 16.7952 3.1097 23.2989 1.70134 30.3792C0.292977 37.4595 1.0158 44.7984 3.7784 51.4679C6.541 58.1375 11.2193 63.838 17.2217 67.8486C23.2241 71.8593 30.281 74 37.5 74"
              opacity="var(--line-opacity)"
              stroke="url(#paint0_angular)"
              strokeDasharray="2 2"
            />
          </svg>
        </h1>

        <div className="hero-subtitle">
          <p>
            Software Developer Engineer creating <strong> high-quality web applications</strong> 
             &nbsp; with React and modern technologies.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="hero-three-columns">
          <div className="hero-column-empty hero-column-left"></div>
          <div className="hero-column-main">
            <div className="hero-social-buttons">
                    <div className='socialmain'>
                      <div className='socialContainer'>
                        <div id="socialIcons" style={{ display: "flex", gap: "30px" }}>
                          <div className='themeToggleButton'>    <a href="https://www.linkedin.com/in/arman-shekh12/"><Linkedin strokeWidth={1} /></a> </div>
                          <div className='themeToggleButton'>   <a href="https://github.com/ArmanA12"> <Github strokeWidth={1} /></a> </div>
                          <div className='themeToggleButton'>    <a href="https://x.com/shekh_md72383"><X strokeWidth={1} /></a> </div>
                          <div className='themeToggleButton'>    <a href="https://www.facebook.com/mdarman.shekh.5201"><Facebook strokeWidth={1} /></a> </div>
                          <div className='themeToggleButton'>    <a href="https://www.instagram.com/arman_aishakar/"><Instagram strokeWidth={1} /></a> </div>
            
            
            
            
                        </div>
                      </div>
                    </div>
            
              <div className="hero-buttons">
                <a href="tel:+917091554628" className="hero-button hero-button-primary">
                  <span>Let's Talk</span>
                  <MessageSquare size={16} strokeWidth={1} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/arman-shekh12/overlay/1732166497363/single-media-viewer/?profileId=ACoAADPoSNUBMZXlAu2wHkkU4RVaonPbJbwe-Dc" 
                  className="hero-button hero-button-secondary"
                >
                  <span>Download Resume</span>
                  <Download size={16} strokeWidth={1} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-column-empty hero-column-right"></div>
        </div>
      </div>

      {/* Right Line */}
      <div 
        aria-hidden="true" 
        className="hero-grid-line" 
        data-fade="true" 
        data-offset="true" 
        data-side="right"
      />
    </div>
  );
}

export default HeroSection2;