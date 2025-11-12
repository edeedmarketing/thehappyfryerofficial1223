import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    {
      src: '/happy-fryer-3.jpg',
      alt: 'The Happy Fryer restaurant interior'
    },
    {
      src: '/happy-fryer-2.jpg',
      alt: 'The Happy Fryer restaurant exterior'
    },
    {
      src: '/happy-fryer-front-of-store.jpg',
      alt: 'The Happy Fryer front of store view'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      {/* Fish Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Fish */}
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-20 left-10 transform w-32 h-32 opacity-10 rotate-45 animate-pulse"
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-1/3 right-20 transform scale-x-[-1] w-48 h-48 opacity-5 rotate-12 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute bottom-20 left-1/4 transform w-40 h-40 opacity-8 -rotate-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        />
        
        {/* Animated Waves */}
        <svg
          className="absolute top-0 left-0 w-full h-40 opacity-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg
          className="absolute bottom-0 right-0 w-full h-32 opacity-15 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#3730A3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#312E81" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating Bubbles with Different Sizes and Animations */}
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/5 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.2s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-7 h-7 bg-cyan-400 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-blue-200 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>
        <div className="absolute bottom-1/3 left-2/5 w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.8s' }}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/6 left-1/5 w-16 h-16 bg-blue-500 rounded-full opacity-5 blur-xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-cyan-400 rounded-full opacity-8 blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-600 rounded-full opacity-3 blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '7s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Story Content - Left Side */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-2xl p-8 md:p-12 shadow-xl relative z-10 border border-blue-100/50 backdrop-blur-sm">
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                After years of running a café in Jindalee, we decided it was time for a change, moving closer to home to focus on what we love most – serving the tastiest fish and chips in Logan.
              </p>
              
              <p className="mb-4">
                At The Happy Fryer, we make our pasta, coleslaw, gravy, and tartare sauce in-house, giving our fish, chips, and calamari that extra flavour everyone loves, whether it's a midweek treat or weekend indulgence.
              </p>
              
              <p className="mb-4">
                Our menu has something for everyone, from fresh fish and golden calamari to juicy burgers, crisp salads, and our famous hot chips with chicken salt.
              </p>
              
              <p className="mb-4">
                Located on the corner of Daisy Hill Road, we welcome locals and passersby alike. Enjoy your meal in our shop or take it home to share.
              </p>
              
              <p className="mb-4">
                We're proud to be part of the Daisy Hill and Shailer Park community, and we'll never forget the incredible support we received after a break-in earlier this year. Thanks to our loyal customers, we were back up and running within a week, with lines out the door on reopening day.
              </p>
              
              <p className="text-lg font-semibold text-blue-600">
                At The Happy Fryer, it's more than just fish and chips – it's community, comfort, and a little taste of home.
              </p>
            </div>
          </div>
        </div>
        
        {/* Image Slideshow Section */}
        <div className="mt-12 text-center relative z-10">
          <div className="relative mx-auto max-w-4xl">
            {/* Slideshow Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-blue-100/50">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full h-auto transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                />
              ))}
            </div>
            
            {/* Slideshow Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-blue-600 scale-110'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View image ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={() => setCurrentImageIndex((prevIndex) => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
              )}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setCurrentImageIndex((prevIndex) => 
                (prevIndex + 1) % images.length
              )}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;