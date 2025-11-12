import { Heart, Award, Waves } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const AboutSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isLineVisible, setIsLineVisible] = useState(false);
  const lineRef = useRef<HTMLDivElement>(null);
  const images = [
    '/IMG_5894.jpeg',
    '/IMG_5895 (1).jpeg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLineVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="fish-float absolute top-20 left-10 text-blue-400 opacity-30">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
            <path d="M35 20c0-3-2-5-5-5-1 0-2 .5-3 1-1-4-4-7-8-7s-7 3-8 7c-1-.5-2-1-3-1-3 0-5 2-5 5s2 5 5 5c1 0 2-.5 3-1 1 4 4 7 8 7s7-3 8-7c1 .5 2 1 3 1 3 0 5-2 5-5zm-16 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
          </svg>
        </div>
        <div className="fish-float-reverse absolute top-40 right-20 text-blue-300 opacity-20" style={{ animationDelay: '2s' }}>
          <svg width="50" height="50" viewBox="0 0 40 40" fill="currentColor">
            <path d="M35 20c0-3-2-5-5-5-1 0-2 .5-3 1-1-4-4-7-8-7s-7 3-8 7c-1-.5-2-1-3-1-3 0-5 2-5 5s2 5 5 5c1 0 2-.5 3-1 1 4 4 7 8 7s7-3 8-7c1 .5 2 1 3 1 3 0 5-2 5-5zm-16 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
          </svg>
        </div>
        <div className="fish-float absolute bottom-32 left-1/4 text-blue-500 opacity-25" style={{ animationDelay: '4s' }}>
          <svg width="35" height="35" viewBox="0 0 40 40" fill="currentColor">
            <path d="M35 20c0-3-2-5-5-5-1 0-2 .5-3 1-1-4-4-7-8-7s-7 3-8 7c-1-.5-2-1-3-1-3 0-5 2-5 5s2 5 5 5c1 0 2-.5 3-1 1 4 4 7 8 7s7-3 8-7c1 .5 2 1 3 1 3 0 5-2 5-5zm-16 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/>
          </svg>
        </div>
        <div className="bubble-float absolute top-32 left-1/3 w-3 h-3 bg-blue-200 rounded-full opacity-40"></div>
        <div className="bubble-float absolute top-60 right-1/4 w-4 h-4 bg-blue-300 rounded-full opacity-30" style={{ animationDelay: '1s' }}></div>
        <div className="bubble-float absolute bottom-20 left-1/2 w-2 h-2 bg-blue-200 rounded-full opacity-50" style={{ animationDelay: '3s' }}></div>
        <div className="bubble-float absolute top-96 right-1/3 w-3 h-3 bg-blue-300 rounded-full opacity-35" style={{ animationDelay: '2.5s' }}></div>
        <div className="bubble-float absolute bottom-40 right-10 w-4 h-4 bg-blue-200 rounded-full opacity-40" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Story
          <div
            ref={lineRef}
            className={`h-1 bg-blue-500 mx-auto mt-3 transition-all duration-1000 ease-out ${
              isLineVisible ? 'w-16' : 'w-0'
            }`}
          ></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-blue-50 rounded-3xl shadow-lg p-8 space-y-4 text-gray-700 leading-relaxed">
            <p>
              After years of running a café in Jindalee as well as running a 200 seater bistro, we decided it was time for a change, moving closer to home to focus on what we love most – serving some of the tastiest fish and chips in Logan.
            </p>
            <p>
              At The Happy Fryer, we make all our dressing, sauces and salads in house, giving our fish, chips, and calamari that extra flavour everyone loves, whether it's a midweek treat or weekend indulgence.
            </p>
            <p>
              Our menu has something for everyone, from fresh fish and golden calamari to juicy burgers, crisp salads, and our famous hot chips with chicken salt.
            </p>
            <p>
              We're particularly proud of our extensive gluten-free menu, featuring a dedicated fryer and separate preparation area to ensure safe dining for customers with dietary requirements. From gluten-free fish and chips to calamari and potato scallops, we believe everyone should be able to enjoy great food without compromise.
            </p>
            <p>
              Located on the corner of Daisy Hill Road and Cupania Street, we welcome locals and passersby alike. Enjoy your meal in our shop or take it home to share.
            </p>
            <p>
              We're proud to be part of the Daisy Hill and Shailer Park community, and we'll never forget the incredible support we received after a break-in earlier this year. Thanks to our loyal customers, we were back up and running within a week, with lines out the door on reopening day.
            </p>
            <p className="text-blue-600 font-semibold text-lg pt-2">
              At The Happy Fryer, it's more than just fish and chips. It's community, comfort, and a little taste of home.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[400px]">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`The Happy Fryer storefront ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImage ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="relative">
                    <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                      <Waves size={28} className="text-blue-600" strokeWidth={2} />
                    </div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 border-2 border-blue-300 rounded-full bg-white"></div>
                    <div className="absolute top-1 -left-2 w-1.5 h-1.5 border-2 border-blue-300 rounded-full bg-white"></div>
                    <div className="absolute -bottom-1 left-2 w-1.5 h-1.5 border-2 border-blue-300 rounded-full bg-white"></div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">Fresh Daily</h3>
                <p className="text-sm text-gray-600">Locally sourced</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Heart size={28} className="text-blue-600" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">Made with Love</h3>
                <p className="text-sm text-gray-600">Traditional recipes</p>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                    <Award size={28} className="text-blue-600" strokeWidth={2} />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 text-base">Local Favorite</h3>
                <p className="text-sm text-gray-600">Community trusted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
