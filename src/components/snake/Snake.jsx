import React from 'react'
import Marquee from "react-fast-marquee";

function Snake() {
    return (
        <div>
            <div>
                <Marquee
                 pauseOnHover={true}
                 gradient={true}
                 gradientColor='rgba(0,0,0,0.02)'
                className='snake'>
                    Hi, I m Arman Shekh having 2.5-year experienced React developer dedicated to crafting seamless and user-friendly web experiences. Seeking collaborative opportunities to excel in front-end development.
                </Marquee>
            </div>

        </div>
    )
}

export default Snake