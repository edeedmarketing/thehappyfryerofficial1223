import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Fish } from 'lucide-react';

const BlogNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Show the notification every 30 seconds
    const showNotification = () => {
      setIsVisible(true);
      setIsAnimating(true);
    };

    // Initial show after 30 seconds
    const initialTimer = setTimeout(showNotification, 30000);

    // Then show every 30 seconds if not visible
    const intervalTimer = setInterval(() => {
      if (!isVisible) {
        showNotification();
      }
    }, 30000);

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
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-blue-100 p-6 max-w-sm relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full transform translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-100 rounded-full transform -translate-x-6 translate-y-6"></div>
        
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
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center transform rotate-12">
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">New Blog Post!</h3>
              <p className="text-sm text-gray-600">Fresh from our kitchen</p>
            </div>
          </div>

          <p className="text-gray-700 mb-4 text-sm leading-relaxed">
            Discover the secrets behind our perfect fish & chips and read our latest stories from The Happy Fryer.
          </p>

          <Link
            to="/blog"
            onClick={handleClose}
            className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 text-sm w-full justify-center"
          >
            <span>View Our Latest Blog Post</span>
            <Fish className="w-4 h-4" />
          </Link>
        </div>

        {/* Animated fish decoration */}
        <div className="absolute top-2 left-2 opacity-10">
          <Fish className="w-8 h-8 text-blue-600 transform -rotate-12 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default BlogNotification;