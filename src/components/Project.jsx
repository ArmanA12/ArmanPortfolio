import React from 'react';
import { SendHorizontal, Github, FolderGit2 } from 'lucide-react'; // Import GitHub icon

export default function Project() {
    return (
        <div className='personalProject'>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                <FolderGit2 size={50} strokeWidth={0.5} />
                <h3 style={{ fontSize: "30px", letterSpacing: "3px", fontWeight: "400" }}> Personal Projects </h3>
            </div>

            <div className='personalProjectContainer'>
                <div className='personalProjectCard'>
                    <div className='number'>01</div>
                    <img className='projectImage' src="../chatterNet-qF4rgeeM.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
                <div className='personalProjectCard'>
                    <div className='number'>02</div>
                    <img className='projectImage' src="../Committee-Sw_qR4QJ.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
                <div className='personalProjectCard'>
                    <div className='number'>03</div>
                    <img className='projectImage' src="../insta-pOsT8H1v.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
                <div className='personalProjectCard'>
                    <div className='number'>03</div>
                    <img className='projectImage' src="../insta-pOsT8H1v.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
                <div className='personalProjectCard'>
                    <div className='number'>03</div>
                    <img className='projectImage' src="../insta-pOsT8H1v.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
                <div className='personalProjectCard'>
                    <div className='number'>03</div>
                    <img className='projectImage' src="../insta-pOsT8H1v.png" alt="ChatterNet App" />
                    <div>ChatterNet Mobile App : Full Stack Social Media App</div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Live Website</a>
                            <SendHorizontal size={18} strokeWidth={1} />
                        </div>
                        <div id='projectsButton' className='buttonConatiner'>
                            <a href="">Github</a>
                            <Github size={18} strokeWidth={1} /> {/* Use GitHub Icon */}
                        </div>
                    </div>
                    <div className='projectBgContainer'>
                        <img className='projectBackground1' src="../3.png" alt="Background" />
                        <img className='projectBackground' src="../green.png" alt="Background" />
                    </div>
                </div>
            </div>
        </div>
    );
}
