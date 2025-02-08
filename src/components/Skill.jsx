import React from 'react'
import { Cog } from 'lucide-react';


function Skill() {
  return (
    <div className='Skillmain'>
        <div style={{display:"flex",justifyContent:"center", alignItems:"center", gap:"15px"}}>
        <Cog size={50} strokeWidth={0.5} />
        <h3 style={{fontSize:"30px", letterSpacing:"3px",fontWeight:"400"}}> Technical Skill </h3>    
        </div>

        <div className='skillContainer'>
            <div className='skill-card'>
                <img src="../html.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../css.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../reactjs.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../javascript.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../typescript.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../tailwind.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../nodejs.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../mongodb.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../docker.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../next.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../git.png" alt="img" />
                <div className='stick'></div>

            </div>
            <div className='skill-card'>
                <img src="../redux.png" alt="img" />
                <div className='stick'></div>
            </div>

        </div>
    </div>
  )
}

export default Skill