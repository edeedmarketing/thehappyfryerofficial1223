import React from 'react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [
    'https://www.pexels.com/download/video/3296402/',
    'https://www.pexels.com/download/video/8880960/'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [videos.length]);

  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={video} type="video/mp4" />
          </video>
        ))}

        {/* Dark overlay for better logo visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
      </div>

      {/* Logo */}
      <div className="relative z-10 text-center">
        <div className="transform hover:scale-110 transition-transform duration-500 animate-zoom-in">
          <img
            src="/files_5754595-1762927727709-happy_fryer_transparent.png"
            alt="The Happy Fryer Logo"
            className="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;