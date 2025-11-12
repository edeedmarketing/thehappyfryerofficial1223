import React from 'react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const gifs = [
    '/918520d9-8ec3-4703-8229-17b6d15b06c9.mp4 (1).gif',
    '/57772d72-53fb-4f2b-9f43-e20fea6b0c90.mp4 (1).gif'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 5000); // Change GIF every 5 seconds

    return () => clearInterval(interval);
  }, [gifs.length]);

  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* GIF Background */}
      <div className="absolute inset-0 z-0">
        {gifs.map((gif, index) => (
          <img
            key={index}
            src={gif}
            alt={`The Happy Fryer Background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-3000 ${
              index === currentGifIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
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
            src="/happy_fryer_transparent.png" 
            alt="The Happy Fryer Logo" 
            className="w-32 h-32 md:w-48 md:h-48 mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;