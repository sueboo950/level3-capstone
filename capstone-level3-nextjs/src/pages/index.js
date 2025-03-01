import React, { useEffect } from 'react';
import NavBar from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import HelpResources from './components/HelpfulResources';
import HomePageController from './controllers/HomePageController';


const IndexPage = () => {
  useEffect(() => {
    HomePageController.handlePageLoad();
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
