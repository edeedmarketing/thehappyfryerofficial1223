import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Instagram, Facebook } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/order', label: 'Order Now' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shouldBeTransparent = isHomePage && !isScrolled;

  const headerClasses = shouldBeTransparent
    ? 'bg-transparent shadow-none'
    : 'bg-gray-50 shadow-sm border-b border-gray-200';

  const textClasses = shouldBeTransparent ? 'text-white' : 'text-gray-600';
  const activeClasses = shouldBeTransparent ? 'text-white font-semibold underline underline-offset-4' : 'text-blue-600 font-semibold';
  const buttonClasses = shouldBeTransparent ? 'bg-blue-600' : 'bg-blue-600';
  const mobileMenuClasses = shouldBeTransparent ? 'bg-white/95 backdrop-blur-sm' : 'bg-gray-50';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {!shouldBeTransparent && (
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/happy_fryer_80.png"
                alt="The Happy Fryer"
                className="w-12 h-12 transition-all duration-500"
              />
            </Link>
          )}

          <nav className={`hidden lg:flex items-center space-x-8 ${shouldBeTransparent ? '' : 'flex-1 ml-8'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-500 ${
                  isActive(link.path)
                    ? activeClasses
                    : `${textClasses} hover:text-blue-600`
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors duration-500 ${textClasses} ${shouldBeTransparent ? 'hover:text-white/80' : 'hover:text-blue-600'}`}
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 transition-colors duration-500 ${textClasses} ${shouldBeTransparent ? 'hover:text-white/80' : 'hover:text-blue-600'}`}
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <Link
              to="/order"
              className={`flex items-center space-x-2 ${buttonClasses} text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors`}
            >
              <ShoppingBag size={16} />
              <span>Order Now</span>
            </Link>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors duration-500 ${textClasses}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden py-4 border-t border-gray-200 ${mobileMenuClasses}`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/order"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                <ShoppingBag size={16} />
                <span>Order Now</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
