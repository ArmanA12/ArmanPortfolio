import './App.css';
import UrlPreviewer from './UrlPreviewer'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlurBG from './components/BlurBG';
import Skill from './components/Skill';
import Project from './components/Project';
import TimeLine from './components/TimeLine';
import { GraduationCap } from 'lucide-react';
import SimpleForm from './components/Talk';
import { MessageSquare } from 'lucide-react';
import { useState } from 'react';



function App() {

  const [show, setShow] = useState(false)

  return (
    <div style={{ position: 'relative' }}>
      {/* <UrlPreviewer /> */}
      <Header />
      <HeroSection />
      <BlurBG />
      <Skill />
      <Project />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop: "50px" }}>
        <GraduationCap size={50} strokeWidth={0.5} />
        <h3 style={{ fontSize: "30px", letterSpacing: "3px", fontWeight: "400" }}>Life and Updates
        </h3>
      </div>

      <TimeLine />
      {
        show && <SimpleForm />

      }

      <div className="fixedbutton">     
         <button onClick={() => setShow(!show)} className='messageopner'> <MessageSquare className='talkmessage' size={30} strokeWidth={1} /></button>
      </div>
    </div>
  );
}

export default App;
