import React, { useEffect } from 'react';
import NavBar from '../pages/components/Navbar';
import { HeroSection } from './components/HeroSection';
import HelpResources from '../pages/components/HelpfulResources';
import HomePageController from '../pages/controllers/HomePageController';


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
