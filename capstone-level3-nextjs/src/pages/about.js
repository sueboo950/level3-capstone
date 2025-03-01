import React from 'react';
import NavBar from '../components/Navbar';
import AboutImage from '../components/AboutImage';
import AboutContent from '../components/AboutContent';
import HelpResources from '../components/HelpfulResources';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => (
    <div style={{ backgroundColor: 'violet', height: '100vh' }}>
        <NavBar />
        <div className="container" style={{ paddingTop: '5%' }}>
            <h1>About the Designer</h1>
            <div className="row">
                <AboutImage />
                <AboutContent />
                <HelpResources />
            </div>
        </div>
    </div>
);

export default About;
