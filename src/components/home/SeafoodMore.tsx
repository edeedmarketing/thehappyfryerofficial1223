import React from 'react';
import { Link } from 'react-router-dom';
import { Fish, Utensils, ArrowRight, ShoppingCart, Clock, Phone } from 'lucide-react';

const SeafoodMore = () => {
  return (
    <section className="py-20 bg-blue-50 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-3 h-3 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-blue-100 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-blue-200 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.2s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-5 bg-blue-300 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-3 h-3 bg-blue-100 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>
        <div className="absolute bottom-1/3 left-2/5 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.8s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Seafood & More
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh catches and comfort classics, all made with love and served with a smile
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {/* Seafood Category */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 h-96">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"
              style={{
                backgroundImage: 'url(/istockphoto-1156859194-612x612.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 text-white text-center h-full flex flex-col justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                <Fish className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Fresh Seafood</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Premium fish, golden calamari, and ocean-fresh catches prepared daily
              </p>
              <Link
                to="/menu#seafood"
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 inline-flex items-center space-x-2 mx-auto group-hover:shadow-lg"
              >
                <span>View Seafood Menu</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* More Category */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 h-96">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900"
              style={{
                backgroundImage: 'url(/istockphoto-860251286-612x612.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 text-white text-center h-full flex flex-col justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">More Delights</h3>
              <p className="text-gray-100 mb-6 text-lg">
                Juicy burgers, crisp salads, famous chips, and comfort food favorites
              </p>
              <Link
                to="/menu#more"
                className="bg-white text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-2 mx-auto group-hover:shadow-lg"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Online Ordering Category */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-500 h-96">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800"
              style={{
                backgroundImage: 'url(/istockphoto-1370577660-640x640.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative p-8 text-white text-center h-full flex flex-col justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                <ShoppingCart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Order Online</h3>
              <p className="text-green-100 mb-6 text-lg">
                Get your favorites delivered straight to your door
              </p>
              <Link
                to="/menu"
                className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 inline-flex items-center space-x-2 mx-auto group-hover:shadow-lg"
              >
                <span>View Menu & Order</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeafoodMore;