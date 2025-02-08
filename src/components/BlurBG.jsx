import React from 'react'
import { SendHorizontal } from 'lucide-react';

function BlurBG() {
    return (
        <div className='bgContainer'>
            <div className='bgMain'>
                <div style={{position:"relative"}}>
                    <center >
                        <img className='bgImage' src="../3.png " alt="" />
                    </center>
                    <div className='prjectSections'>
                        <div className='projectContainer'>
                         <div className='projectContainerSecond'>
                         <div className='project-card'>
                            <div>
                            <img src="../bee2bee-PGPgDu0B.png" alt="" />
                            </div>
                            <div>
                                <h3>Project Name 1 [Heading]</h3>
                                <p>Project Description [Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima nulla necessitatibus officiis voluptatibus amet nam consectetur quisquam temporibus. Corrupti eos inventore ad debitis delectus rem distinctio quam, dolorum facilis!]</p>
                                <span className='techStack'>React</span> &nbsp;
                                <span className='techStack'>Next</span> &nbsp;
                                <span className='techStack'>Javascript</span> &nbsp;
                                <span className='techStack'>Typescript</span> &nbsp;
                                <span className='techStack'>Tailwind</span> &nbsp;
                                <div className='giveLiveButton'>
                                    <a href="">Live Website</a>
                                    <SendHorizontal  size={18} strokeWidth={1} />
                                </div>
                            </div>
                          </div>
                          <div style={{marginTop:"30px"}} className='project-card'>
                            <div>
                            <img src="../intex-4d-8QAtr.png" alt="" />
                            </div>
                            <div>
                                <h3>Project Name 2  [Heading]</h3>
                                <p>Project Description [Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima nulla necessitatibus officiis voluptatibus amet nam consectetur quisquam temporibus. Corrupti eos inventore ad debitis delectus rem distinctio quam, dolorum facilis!]</p>
                                <span className='techStack'>React</span> &nbsp;
                                <span className='techStack'>Next</span> &nbsp;
                                <span className='techStack'>Javascript</span> &nbsp;
                                <span className='techStack'>Typescript</span> &nbsp;
                                <span className='techStack'>Tailwind</span> &nbsp;
                                <div className='giveLiveButton'>
                                    <a href="">Live Website</a>
                                    <SendHorizontal  size={18} strokeWidth={1} />
                                </div>
                            </div>
                          </div>
                          <div style={{marginTop:"30px"}} className='project-card'>
                            <div>
                            <img src="../wofx-TNMddv5_.png" alt="" />
                            </div>
                            <div>
                                <h3>Project Name 3 [Heading]</h3>
                                <p>Project Description [Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque minima nulla necessitatibus officiis voluptatibus amet nam consectetur quisquam temporibus. Corrupti eos inventore ad debitis delectus rem distinctio quam, dolorum facilis!]</p>
                                <span className='techStack'>React</span> &nbsp;
                                <span className='techStack'>Next</span> &nbsp;
                                <span className='techStack'>Javascript</span> &nbsp;
                                <span className='techStack'>Typescript</span> &nbsp;
                                <span className='techStack'>Tailwind</span> &nbsp;
                                <div className='giveLiveButton'>
                                    <a href="">Live Website</a>
                                    <SendHorizontal  size={18} strokeWidth={1} />
                                </div>
                            </div>
                          </div>
                         </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlurBG