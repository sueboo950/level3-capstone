import React from 'react';
import { TriviaHeroSection } from '../components/HeroSection'
import NavBar from '../components/Navbar';
import HelpResources from '../components/HelpfulResources';


const BibleTrivia = () => {
    return (
        <div>
            <NavBar />
            <TriviaHeroSection />
            <HelpResources />
        </div>
    );
};

export default BibleTrivia;
