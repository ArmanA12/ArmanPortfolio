import './App.css';
import UrlPreviewer from './UrlPreviewer'
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BlurBG from './components/BlurBG';
import Skill from './components/Skill';
import Project from './components/Project';
import TimeLine from './components/TimeLine';
import {GraduationCap} from 'lucide-react';


function App() {

  return (
    <div style={{ position: 'relative' }}>
      <UrlPreviewer />
      <Header />
      <HeroSection />
      <BlurBG />
      <Skill />
      <Project />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px", marginTop:"50px" }}>
        <GraduationCap size={50} strokeWidth={0.5} />
        <h3 style={{ fontSize: "30px", letterSpacing: "3px", fontWeight: "400" }}>Changelog and Updates
        </h3>
      </div>

      <TimeLine />

    </div>
  );
}

export default App;
