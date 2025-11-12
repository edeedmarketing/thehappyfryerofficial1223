import React from 'react';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import SeafoodMore from '../components/home/SeafoodMore';
import ReviewsSection from '../components/home/ReviewsSection';
import SocialFeed from '../components/home/SocialFeed';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <SeafoodMore />
      <ReviewsSection />
      <SocialFeed />
      <ContactSection />
    </div>
  );
};

export default Home;