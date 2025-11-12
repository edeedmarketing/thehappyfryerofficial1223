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
            <div className="bg-blue-500 p-4 rounded-full mb-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <MapPin size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-4">Find Us</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Corner of Daisy Hill Road<br />
              and Cupania St
            </p>
            <p className="text-gray-700 text-base leading-relaxed mt-3">
              6/5 Cupania St<br />
              Daisy Hill QLD 4127
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Clock size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-4">Opening Hours</h3>
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 ${
              open
                ? 'bg-green-100 text-green-700'
                : 'bg-red-100 text-red-700'
            }`}>
              ● {open ? 'OPEN NOW' : 'CLOSED'}
            </div>
            <p className="text-gray-700 text-base">Tuesday - Sunday</p>
            <p className="text-gray-700 text-base">11:00 AM - 8:00 PM</p>
            <p className="text-red-600 text-base font-semibold mt-3">Closed Mondays</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-blue-500 p-4 rounded-full mb-4 transition-transform duration-300 hover:scale-110 hover:shadow-lg">
              <Phone size={28} className="text-white" />
            </div>
            <h3 className="font-bold text-xl mb-4">Call Us</h3>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-blue-600 hover:text-blue-700 font-semibold text-xl mb-2"
            >
              {BUSINESS_INFO.phoneDisplay}
            </a>
            <p className="text-gray-700 text-base">Ready to take your order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
