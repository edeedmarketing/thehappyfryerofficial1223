import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">The Happy Fryer</h3>
            <p className="text-gray-400">
              Fresh fish and chips in Daisy Hill, Logan. Family-owned since 2010.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-gray-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/order" className="text-gray-400 hover:text-white transition-colors">
                  Order Now
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.suburb}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-gray-400 hover:text-white transition-colors">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="flex-shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Monday:</span>
                <span>{BUSINESS_INFO.hours.monday}</span>
              </li>
              <li className="flex justify-between">
                <span>Tue-Sun:</span>
                <span>11:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} The Happy Fryer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
