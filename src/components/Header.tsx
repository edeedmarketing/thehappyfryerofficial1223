import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook, Linkedin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
      
      // Delay logo appearance until after nav animation completes
      if (scrolled) {
        setTimeout(() => setShowLogo(true), 800); // Delay by 800ms
      } else {
        setShowLogo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Order Now', path: '/order-now' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-xl' : isHomePage ? 'bg-transparent' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center h-20 transition-all duration-700 ease-out ${
          !isHomePage ? 'justify-between' : (isHomePage && !isScrolled ? 'justify-start' : 'justify-between')
        }`}>
          {/* Logo */}
          <Link to="/" className={`flex-shrink-0 transition-all duration-700 ease-out ${
            isHomePage && !isScrolled ? 'opacity-0 transform scale-95 -translate-x-4' : 'opacity-100 transform scale-100 translate-x-0'
          }`}>
            <div className="flex items-center space-x-3 group">
              <img 
                src="/happy_fryer_transparent.png" 
                alt="The Happy Fryer Logo" 
                className="w-12 h-12 transform group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="hidden sm:block">
                <h1 className={`text-2xl font-bold group-hover:text-blue-600 transition-all duration-500 ease-out ${
                  !isHomePage ? 'text-gray-900' : (isHomePage && !isScrolled ? 'text-white' : 'text-gray-900')
                }`}>
                  The Happy Fryer
                </h1>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 transition-all duration-700 ease-out ${
            !isHomePage 
              ? 'mx-auto' 
              : isHomePage && !isScrolled 
                ? 'absolute left-8 transform translate-x-0' 
                : ''
          }`}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-lg font-semibold transition-all duration-500 ease-out relative group transform hover:scale-105 ${
                  location.pathname === item.path
                    ? isHomePage && !isScrolled ? 'text-blue-400' : 'text-blue-600'
                    : isHomePage && !isScrolled 
                      ? 'text-white hover:text-blue-400' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-500 ease-out group-hover:w-full ${
                  isHomePage && !isScrolled ? 'bg-blue-400' : 'bg-blue-600'
                } ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Social Icons & Order Button */}
          <div className={`hidden md:flex items-center space-x-4 ${isHomePage ? 'ml-auto absolute right-4' : 'ml-auto'}`}>
            <div className={`flex items-center space-x-4 transition-all duration-700 ease-out ${
              isHomePage && !isScrolled ? 'opacity-100 transform scale-100 translate-x-0' : 'opacity-100 transform scale-100 translate-x-0'
            }`}>
              {/* Order Now Button */}
              <a
                href="tel:+1234567890"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-500 ease-out transform hover:scale-110 hover:shadow-lg flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Order Now</span>
              </a>
              
              {/* Social Icons */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`transition-all duration-500 ease-out transform hover:scale-125 hover:rotate-12 ${
                    isHomePage && !isScrolled ? 'text-white/80 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden transition-all duration-500 ease-out transform hover:scale-110 ${
              isHomePage && !isScrolled ? 'text-white hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/95 backdrop-blur-md border-t transition-all duration-500 ease-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block text-lg font-semibold transition-all duration-300 ease-out hover:translate-x-2 ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-600 hover:text-blue-600 transition-all duration-300 ease-out transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <a
              href="tel:+1234567890"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 ease-out transform hover:scale-105 flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Order Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;