import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

const CTASection = () => {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Enjoy Fresh Fish & Chips?
        </h2>
        <p className="text-xl mb-8 text-primary-100">
          Order now for pickup or give us a call
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/order"
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
          >
            <span>Order Online</span>
            <ArrowRight size={20} />
          </Link>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center justify-center space-x-2"
          >
            <Phone size={20} />
            <span>Call {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
