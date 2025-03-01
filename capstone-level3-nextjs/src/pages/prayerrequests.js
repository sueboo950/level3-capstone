import React from 'react';
import { PrayerHeroSection } from './components/HeroSection';
import HelpResources from './components/HelpfulResources';
import NavBar from './components/Navbar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <PrayerHeroSection />
            <HelpResources />
        </div>
    );
};

export default HomePage;
