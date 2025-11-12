import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 group mb-4">
              <img 
                src="/happy_fryer_circle_only.png" 
                alt="The Happy Fryer Logo" 
                className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-300"
              />
              <h2 className="text-2xl font-bold group-hover:text-blue-400 transition-colors duration-300">
                The Happy Fryer
              </h2>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Serving the tastiest fish and chips in Logan with fresh ingredients and house-made sauces. 
              Part of the Daisy Hill and Shailer Park community.
            </p>
            <a
              href="tel:+1234567890"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={handleLinkClick}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Corner of Daisy Hill Road</p>
                  <p className="text-gray-400">Daisy Hill, Logan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Mon-Sun: 11:00 AM - 8:30 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            <p className="text-gray-400">
              © 2025 The Happy Fryer. All rights reserved. Made with ❤️ for the community.
            </p>
            <a
              href="https://edeed.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors duration-300 group"
            >
              <span className="text-sm">Website by</span>
              <span className="text-sm font-semibold">EDEED</span>
              <img
                src="/ED No Background (NEW) copy copy.png"
                alt="EDEED Logo"
                className="h-5 w-auto transform group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;