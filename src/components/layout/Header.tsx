import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/order', label: 'Order Now' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
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
    : 'bg-white shadow-md';

  const textClasses = shouldBeTransparent ? 'text-white' : 'text-gray-700';
  const logoClasses = shouldBeTransparent ? 'text-white' : 'text-primary-600';
  const activeClasses = shouldBeTransparent ? 'text-white font-bold' : 'text-primary-600';
  const mobileMenuClasses = shouldBeTransparent ? 'bg-white/95 backdrop-blur-sm' : 'bg-white';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className={`text-2xl font-bold transition-colors duration-500 ${logoClasses}`}>
              The Happy Fryer
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-500 ${
                  isActive(link.path)
                    ? activeClasses
                    : `${textClasses} hover:text-primary-600`
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone size={18} />
              <span>{BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </nav>

          <button
            className={`md:hidden p-2 transition-colors duration-500 ${textClasses}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t ${mobileMenuClasses}`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-primary-600'
                      : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 btn-primary justify-center"
              >
                <Phone size={18} />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
