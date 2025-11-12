import React from 'react';
import HeroSection from '../components/home/HeroSection';
import LocationHours from '../components/home/LocationHours';
import AboutSection from '../components/home/AboutSection';
import SeafoodMore from '../components/home/SeafoodMore';
import ReviewsSection from '../components/home/ReviewsSection';
import SocialFeed from '../components/home/SocialFeed';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <LocationHours />
      <AboutSection />
      <SeafoodMore />
      <ReviewsSection />
      <SocialFeed />
      <ContactSection />
    </div>
  );
};

export default Home;