import { Clock, MapPin, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../../lib/constants';

const InfoSection = () => {
  const isOpen = () => {
    const now = new Date();
    const day = now.getDay();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    if (day === 1) return false;

    return currentTime >= 11 && currentTime < 20;
  };

  const open = isOpen();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Find Us</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Corner of Daisy Hill Road<br />
              and Cupania St
            </p>
            <p className="text-gray-700 text-sm leading-relaxed mt-2">
              6/5 Cupania St<br />
              Daisy Hill QLD 4127
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <Clock size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Opening Hours</h3>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
              open
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              ● {open ? 'OPEN NOW' : 'CLOSED'}
            </div>
            <p className="text-gray-700 text-sm">Tuesday - Sunday</p>
            <p className="text-gray-700 text-sm">11:00 AM - 8:00 PM</p>
            <p className="text-red-600 text-sm font-semibold mt-2">Closed Mondays</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-lg mb-3">Call Us</h3>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-blue-600 hover:text-blue-700 font-semibold text-lg mb-2"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <p className="text-gray-700 text-sm">Ready to take your order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
