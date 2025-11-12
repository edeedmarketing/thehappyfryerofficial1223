import React from 'react';
import { Instagram, Facebook, Heart, MessageCircle } from 'lucide-react';

const SocialFeed = () => {
  const photos = [
    '/487206855_1143864000869639_7595755672422184158_n.jpg',
    '/491263575_1159282979327741_3962291007238170738_n.jpg',
    '/494080776_1167569405165765_5182882215927176391_n.jpg',
    '/482028153_1125931322662907_8155993806392257466_n.jpg',
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Follow Our Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Stay connected with our latest updates and delicious creations</p>
        </div>

        <div className="text-center mb-12 relative z-10">
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Instagram size={20} />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Facebook size={20} />
              <span>Follow on Facebook</span>
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden mb-12 z-10">
          <div className="flex animate-scroll-left">
            {/* First set of photos */}
            {photos.map((photo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/10"
              >
                <img
                  src={photo}
                  alt={`The Happy Fryer photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {photos.map((photo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-48 mx-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-white/10"
              >
                <img
                  src={photo}
                  alt={`The Happy Fryer photo ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;