import React from 'react'
import { Cog } from 'lucide-react';


function Skill() {
    return (
        <div className="Skillmain">
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}>
                <Cog size={50} strokeWidth={0.5} />
                <h3 style={{ fontSize: "30px", letterSpacing: "3px", fontWeight: "400" }}> Technical Skill </h3>
            </div>

            <div className="mt-[10px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-14">
                <div className="skill-card">
                    <img loading="lazy" src="../html.png" alt="HTML" />
                    <div className="stick stick-red"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../css.png" alt="CSS" />
                    <div className="stick stick-blue"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../nodejs.png" alt="Node.js" />
                    <div className="stick stick-green"></div>
                </div>

                <div className="skill-card">
                    <img loading="lazy" src="../reactjs.png" alt="React" />
                    <div className="stick stick-blue"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../javascript.png" alt="JavaScript" />
                    <div className="stick stick-yellow"></div>
                </div>

                <div className="skill-card">
                    <img loading="lazy" src="../typescript.png" alt="TypeScript" />
                    <div className="stick stick-blue"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../mongodb.png" alt="MongoDB" />
                    <div className="stick stick-green"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../next.png" alt="Next.js" />
                    <div className="stick stick-white"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../docker.png" alt="Docker" />
                    <div className="stick stick-blue"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../git.png" alt="Git" />
                    <div className="stick stick-red"></div>
                </div>
                <div className="skill-card">
                    <img loading="lazy" src="../redux.png" alt="Redux" />
                    <div className="stick stick-purple"></div>
                </div>

                <div className="skill-card">
                    <img loading="lazy" src="../aws-removebg-preview.png" alt="Redux" />
                    <div className="stick stick-orange"></div>
                </div>



            </div>
        </div>
    )
}

export default Skill
