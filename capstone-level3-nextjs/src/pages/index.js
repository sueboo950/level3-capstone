import React, { useEffect } from 'react';
import NavBar from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import HelpResources from '../components/HelpfulResources';

const IndexPage = () => {
  useEffect(() => {
    console.log("HomePage loaded successfully.");
  }, []);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <HelpResources />
    </div>
  );
};

export default IndexPage;
