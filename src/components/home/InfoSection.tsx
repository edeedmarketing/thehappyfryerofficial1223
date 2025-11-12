import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

const InfoSection = () => {
  return (
    <section className="py-12 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start space-x-4">
            <div className="bg-primary-600 p-3 rounded-lg">
              <Clock size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Opening Hours</h3>
              <p className="text-gray-600">Tuesday - Sunday</p>
              <p className="text-gray-600">11:00 AM - 8:00 PM</p>
              <p className="text-gray-600 mt-1">Closed Mondays</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-600 p-3 rounded-lg">
              <MapPin size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Location</h3>
              <p className="text-gray-600">{BUSINESS_INFO.address.street}</p>
              <p className="text-gray-600">
                {BUSINESS_INFO.address.suburb}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.postcode}
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-primary-600 p-3 rounded-lg">
              <Phone size={24} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call Us</h3>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="text-primary-600 hover:text-primary-700 font-semibold text-lg"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <p className="text-gray-600">Call for takeaway orders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
