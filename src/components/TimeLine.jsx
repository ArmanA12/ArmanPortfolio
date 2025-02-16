import React, { useState, useEffect } from 'react'
import { ArrowRight, GraduationCap, PartyPopper, Goal, MessageSquare } from 'lucide-react';
import { ToastContainer, toast, Bounce } from 'react-toastify';


function TimeLine() {

    const [theme, setTheme] = useState("light"); // Default theme
    const [email, setEmail] = useState('');

    const whatsappLink = "https://wa.me/917091554628?text=Hi%20Arman%2C%20I%20want%20to%20discuss%20a%20project.";


    const handlesubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (!email) {
            alert("Please enter your email address.");
            return;
        }

        try {
            const response = await fetch("https://committee-mobile-app-backend.vercel.app/api/v1/auth/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            if (response.ok) {
                toast(`🦄 ${result.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            } else {
                toast(`🦄 ${result.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            }
        } catch (error) {
            console.log(error)
            toast(`🦄 Error While Sending Email`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
                });
    }
    };


    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setTheme(storedTheme);
        }
    }, []);




    return (
        <div className='timeLineMain'>
                        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

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
                                <a href="https://leetcode.com/u/Arman_shekh123/">    <ArrowRight strokeWidth={1} />
                                </a>
                            </div>
                        </div>
                        <div className='contentdivinsight'>
                            <p><span className='achievement' >Achievment ✅</span> <br />
                                Expert Coder at CodeStudio</p>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
                                <img style={{ width: "40px", objectFit: "contain" }} src="../codestudio.png" alt="" />
                                <a href="https://www.naukri.com/code360/profile/9f067365-76ca-4834-9b17-9bdae2b3219b">    <ArrowRight strokeWidth={1} />
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
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row" }}>
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
                                <span id='frelanceheading' style={{ marginTop: "12px", marginLeft: "10px", marginBottom: "12px", background: "#4FCE5D", width: "200px", border: "2px solid #4FCE5D", textAlign: "center", borderRadius: "2px", paddingTop: "6px", paddingBottom: "6px" }}>
                                    
                                    <a id='a' href={whatsappLink}>
                                    Chat on WhatsApp

                                    </a>

                                </span>
                                <div id='frelanceheading' style={{ fontWeight: "400" }}>Drop in your email ID and I will get back to you.</div>
                                <form onSubmit={handlesubmit}>
                                    <input style={{width:"95%", padding:"10px"}}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        placeholder='arman@gmail.com'
                                        value={email} // Controlled input
                                        required 
                                    />
                                    <button style={{width:"100%"}} type="submit"  className='buttonConatiner'>
                                        <span> Let's Talk</span>
                                        <MessageSquare className='message' enableBackground={"#0000"} size={18} strokeWidth={1} />
                                    </button>
                                </form>

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