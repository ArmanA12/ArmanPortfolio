import React, { useState, useEffect } from 'react'
import { ArrowRight, GraduationCap, PartyPopper, Goal, MessageSquare } from 'lucide-react';


function TimeLine() {

    const [theme, setTheme] = useState("light"); // Default theme

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);


    return (
        <div className='timeLineMain'>
            <div className='timelineCOntainer'>
                <div className='layout'>
                    <center>
                        <div className='bgwhite'>
                        </div>
                    </center>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div id='last'></div>
                </div>
                <div className='timelimeContent'>
                    <div className='contentdiv'>
                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                3 Start Coder at LeetCode</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <img style={{ width: "30px", objectFit: "contain" }} src="../leetcode.png" alt="" />
                                <a href="">    <ArrowRight strokeWidth={1} />
                                </a>
                            </div>
                        </div>
                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                Expert Coder at CodeStudio</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <img style={{ width: "40px", objectFit: "contain" }} src="../codestudio.png" alt="" />
                                <a href="">    <ArrowRight strokeWidth={1} />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='contentdiv'>
                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                Completed Degree in 2022</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <GraduationCap strokeWidth={1} size={30} />

                                <a href="">    <PartyPopper size={20} strokeWidth={1} />
                                </a>
                            </div>
                        </div>

                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                Goat my first job aug 2022</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <Goal strokeWidth={1} />

                                <a href="">    <PartyPopper size={20} strokeWidth={1} />
                                </a>
                            </div>
                        </div>

                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                Handling 4 People Teams</p>
                            <div style={{  display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <span >🌟</span>
                                <a href="">🚀
                                </a>
                            </div>
                        </div>



                    </div>
                    <div className='contentdiv'>
                        <div className='freelancer'>
                            <div className='freelancerinsight'>
                                <h3 id='frelanceheading'>Want to hire me as a freelancer? Let's discuss.</h3>
                                <span id='frelanceheading'>Drop your message and let's discuss about your project.</span>
                                <span id='frelanceheading' style={{ marginTop: "12px", marginLeft:"10px", marginBottom: "12px", background: "#4FCE5D", width: "200px", border: "2px solid #4FCE5D", textAlign: "center", borderRadius: "2px", paddingTop: "6px", paddingBottom: "6px" }}>
                                    Chat on WhatsApp
                                </span>
                                <div id='frelanceheading' style={{ fontWeight: "400" }}>Drop in your email ID and I will get back to you.</div>
                                <input  type="text" placeholder='arman@gmail.com' />
                                <button  className='buttonConatiner'>
                                    <a href="">Let's Talk</a>
                                    <MessageSquare className='message' enableBackground={"#0000"} size={18} strokeWidth={1} />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='contentdiv'></div>

                </div>
            </div>
        </div>
    )
}

export default TimeLine