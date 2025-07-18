import React from 'react';
import { SendHorizontal } from 'lucide-react';

function BlurBG() {
  return (
    <div className="bgContainer">
      <div className="seprator">

      </div>

      <div className="bgMain">
        <div style={{ position: "relative" }}>
          <div className='orangebg'>

          </div>
          <div className='greenbg'>

          </div>

          {/* <div style={{ textAlign: "center" }}>
            <img loading="lazy" className="bgImage" src="../dotbgimage.png" alt="" />
          </div> */}
          <div className="prjectSections">
            <div className="projectContainer">
              <div className="projectContainerSecond">
                <div className="project-card">
                  <div>
                    <img loading="lazy" src="../bee2bee-PGPgDu0B.png" alt="" />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold py-3'>Bee2Bee Asia</h3>
                    <p>
                      Independently <strong>designed</strong>, <strong>developed</strong>, and <strong>deployed</strong> a <strong>B2B full-stack web application</strong> to handle large-scale exhibitions, including the <strong>website, Exhibitor, Buyer, and Admin Dashboards</strong>. The project involved <strong>configuration</strong>, <strong>deployment</strong>, integration of a <strong>payment gateway</strong>, and successful <strong>hosting on AWS</strong>.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} className='mt-3'>
                      <div className="techStack">React</div>
                      <div className="techStack">Next</div>
                      <div className="techStack">Javascript</div>
                      <div className="techStack">Typescript</div>
                      <div className="techStack">Prisma</div>
                      <div className="techStack">Supabase</div>
                      <div className="techStack">AWS</div>
                      <div className="techStack">Cloud Watch</div>
                      <div className="techStack">Tailwind</div>
                    </div>
                    <div className="giveLiveButton">
                      <a href="https://www.bee2bee.asia/">Live Website</a>
                      <SendHorizontal size={18} strokeWidth={1} />
                    </div>
                  </div>
                </div>
                <div className="project-card" style={{ marginTop: "30px" }}>
                  <div>
                    <img loading="lazy" src="../aiftpnewlogo.png" alt="" />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold py-3'>AIFTP Online</h3>
                    <p>
                      Migrated a legacy WordPress + PHP website (with 70% manual operations) to a modern <strong>Next.js + Prisma</strong> full-stack app with <strong>MySQL</strong> and <strong>AWS Lightsail</strong>. 
                      Integrated <strong>PayU payment gateway</strong> and implemented <strong>CI/CD pipeline</strong> for dedicated hosting deployment. 
                      Automated 60% of workflows including subscriptions, journal/publication orders, and added 20+ new user-centric features. 
                      Resulted in a <strong>40% increase in user retention</strong>; handled complete <strong>design, development, and deployment</strong> independently.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} className='mt-3'>
                      <div className="techStack">React</div>
                      <div className="techStack">Next</div>
                      <div className="techStack">Javascript</div>
                      <div className="techStack">Typescript</div>
                      <div className="techStack">Prisma</div>
                      <div className="techStack">Framer Motion</div>
                      <div className="techStack">AWS</div>
                      <div className="techStack">S3</div>

                      <div className="techStack">Bravo</div>
                      <div className="techStack">Tailwind</div>
                      <div className="techStack">PAYU</div>

                    </div>
                    <div className="giveLiveButton">
                      <a href="https://www.aiftpoinline.org">Live Website</a>
                      <SendHorizontal size={18} strokeWidth={1} />
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: "30px" }} className="project-card">
                  <div>
                    <img loading="lazy" src="../wofx-TNMddv5_.png" alt="" />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold py-3'>World Furniture Expo</h3>
                    <p>
                      In <strong>four days</strong>, converted the entire website from a <strong>WordPress theme</strong> to <strong>Next.js</strong> and <strong>Tailwind CSS</strong>, achieving <strong>performance, accessibility, and SEO scores above 88%</strong>. Reduced load time from <strong>13 seconds to 3 seconds</strong>, including <strong>15+ forms</strong> with validation using <strong>React Hook Form</strong>.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} className='mt-3'>
                      <div className="techStack">Next</div>
                      <div className="techStack">Redux</div>
                      <div className="techStack">Tailwind</div>
                      <div className="techStack">React Hook Form</div>
                    </div>
                    <div className="giveLiveButton">
                      <a href="https://www.wofxworldexpo.com/">Live Website</a>
                      <SendHorizontal size={18} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlurBG;