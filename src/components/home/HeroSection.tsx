import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-96 md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/380516884?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{ width: '100vw', height: '100vh', border: 'none' }}
          allow="autoplay; fullscreen"
        ></iframe>

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