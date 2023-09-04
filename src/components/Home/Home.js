import React from 'react'
import Navbar from './Toolsbar/Navbar/Navbar'
import Toolsbar from './Toolsbar/Toolsbar';
import './Home.css'
import Slider from './Slider/Slider';
import Features from './Features/Features';
import About from './About/About';
import Services from './Services/Services';
import SkillSet from './SkillSet/SkillSet';
import Team from './Team/Team';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Blogs from './Blogs/Blogs';
import ProjectSummary from './ProjectSummary/ProjectSummary';
import Projects from './Projects/Projects';

function Home() {
    return (
        <div>
            <div className="nav-header">
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
        <Services></Services>
        <About></About>
        
        
        <ProjectSummary></ProjectSummary>
        
        <Team></Team>
        <Contact></Contact>
     
        
        </div>
    )
}

export default Home
