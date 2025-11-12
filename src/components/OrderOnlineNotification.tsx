import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingCart } from 'lucide-react';

const OrderOnlineNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show the notification every 45 seconds
    const showNotification = () => {
      setIsVisible(true);
      setIsAnimating(true);
    };

    // Initial show after 45 seconds
    const initialTimer = setTimeout(showNotification, 45000);

    // Then show every 45 seconds if not visible
    const intervalTimer = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, 45000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalTimer);
    };
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed right-6 bottom-6 z-50 transition-all duration-300 ${
        isAnimating ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-100 p-6 max-w-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-orange-50 rounded-full transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-100 rounded-full transform -translate-x-6 translate-y-6"></div>
        
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors duration-200 z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">Order Online!</h3>
              <p className="text-sm text-gray-700">Quick & convenient delivery</p>
            </div>
          </div>

          {/* Logos */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="w-16 h-12 bg-white rounded-lg shadow-md border border-orange-100 flex items-center justify-center p-1">
              <img 
                src="/223-2234004_uber-eats-new-logo.png" 
                alt="Uber Eats" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-16 h-12 bg-white rounded-lg shadow-md border border-orange-100 flex items-center justify-center p-1">
              <img 
                src="/ML_Logo_Stacked_RGB.svg.png" 
                alt="Menulog" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-gray-800 mb-4 text-sm leading-relaxed text-center">
            Get your favorite fish & chips delivered straight to your door via Uber Eats or Menulog!
          </p>

          <Link
            to="/order-now"
            onClick={handleClose}
            className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 text-sm w-full justify-center shadow-lg"
          >
            <span>Order Now</span>
            <ShoppingCart className="w-4 h-4" />
          </Link>
        </div>

        {/* Animated decoration */}
        <div className="absolute top-2 left-2 opacity-10">
          <ShoppingCart className="w-8 h-8 text-orange-600 transform -rotate-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default OrderOnlineNotification;