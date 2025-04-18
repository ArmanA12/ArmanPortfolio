import React from 'react';
import { SendHorizontal } from 'lucide-react';

function BlurBG() {
  return (
    <div className="bgContainer">
      <div className="bgMain">
        <div style={{ position: "relative" }}>
          <div style={{ textAlign: "center" }}>
            <img  loading="lazy" className="bgImage" src="../3.png" alt="" />
          </div>
          <div className="prjectSections">
            <div className="projectContainer">
              <div className="projectContainerSecond">
                <div className="project-card">
                  <div>
                    <img  loading="lazy" src="../bee2bee-PGPgDu0B.png" alt="" />
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
                <div style={{ marginTop: "30px" }} className="project-card">
                  <div>
                    <img loading="lazy" src="../intex-4d-8QAtr.png" alt="" />
                  </div>
                  <div>
                    <h3 className='text-xl font-bold py-3'>Intex South Asia</h3>
                    <p>
                      Created <strong>3 websites for Intex South Asia</strong> sub-domains using the <strong>latest technology</strong> in just <strong>16 days</strong>. Optimized <strong>10+ REST APIs</strong> and decreased their response time from <strong>14 seconds to 6 seconds</strong>. Overall performance <strong>increased by 21%</strong>.
                    </p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }} className='mt-3'>
                      <div className="techStack">React</div>
                      <div className="techStack">Next</div>
                      <div className="techStack">Redux</div>
                      <div className="techStack">Javascript</div>
                      <div className="techStack">Tailwind</div>
                    </div>
                    <div className="giveLiveButton">
                      <a href="https://www.intexsouthasia.com/">Live Website</a>
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