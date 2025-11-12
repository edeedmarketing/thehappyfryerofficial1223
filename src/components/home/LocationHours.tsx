import React from 'react';
import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const LocationHours = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenTime, setNextOpenTime] = useState<Date | null>(null);

  // Opening hours (24-hour format)
  const openingHours = [
    { day: 'Monday', open: null, close: null, closed: true },
    { day: 'Tuesday', open: 11, close: 20, closed: false },
    { day: 'Wednesday', open: 11, close: 20, closed: false },
    { day: 'Thursday', open: 11, close: 20, closed: false },
    { day: 'Friday', open: 11, close: 20, closed: false },
    { day: 'Saturday', open: 11, close: 20, closed: false },
    { day: 'Sunday', open: 11, close: 20, closed: false },
  ];

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();
      const currentTimeInMinutes = currentHour * 60 + currentMinute;
      
      // Adjust day index to match our array (Monday = 0)
      const dayIndex = currentDay === 0 ? 6 : currentDay - 1;
      const todayHours = openingHours[dayIndex];
      
      // Check if currently open
      if (todayHours.closed) {
        setIsOpen(false);
      } else {
        const openTime = todayHours.open! * 60; // Convert to minutes
        const closeTime = todayHours.close! * 60; // Convert to minutes
        setIsOpen(currentTimeInMinutes >= openTime && currentTimeInMinutes < closeTime);
      }
      
      // Calculate next opening time if closed
      if (!isOpen) {
        let nextOpen = null;
        
        // Check if we can open today
        if (!todayHours.closed) {
          const openTime = todayHours.open! * 60;
          if (currentTimeInMinutes < openTime) {
            nextOpen = new Date(now);
            nextOpen.setHours(todayHours.open!, 0, 0, 0);
          }
        }
        
        // If not opening today, find next opening day
        if (!nextOpen) {
          for (let i = 1; i <= 7; i++) {
            const nextDayIndex = (dayIndex + i) % 7;
            const nextDayHours = openingHours[nextDayIndex];
            
            if (!nextDayHours.closed) {
              nextOpen = new Date(now);
              nextOpen.setDate(now.getDate() + i);
              nextOpen.setHours(nextDayHours.open!, 0, 0, 0);
              break;
            }
          }
        }
        
        setNextOpenTime(nextOpen);
      } else {
        setNextOpenTime(null);
      }
    };

    // Check status immediately
    checkOpenStatus();
    
    // Update every minute
    const interval = setInterval(checkOpenStatus, 60000);
    
    return () => clearInterval(interval);
  }, [isOpen]);

  const formatTime = (hour: number) => {
    if (hour === 0) return '12 am';
    if (hour < 12) return `${hour} am`;
    if (hour === 12) return '12 pm';
    return `${hour - 12} pm`;
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Location */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us</h3>
            <p className="text-gray-600">Corner of Daisy Hill Road</p>
            <p className="text-gray-600">Daisy Hill, Logan</p>
            <p className="text-gray-600 mt-2 font-medium">6/5 Cupania St</p>
            <p className="text-gray-600">Daisy Hill QLD 4127</p>
          </div>

          {/* Hours */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Opening Hours</h3>
            
            {/* Open/Closed Status */}
            <div className="mb-3">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                isOpen 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                <span className={`w-2 h-2 rounded-full mr-2 ${
                  isOpen ? 'bg-green-500' : 'bg-red-500'
                }`}></span>
                {isOpen ? 'OPEN NOW' : 'CLOSED'}
              </span>
              {!isOpen && nextOpenTime && (
                <p className="text-xs text-gray-500 mt-1">
                  Opens {nextOpenTime.toLocaleDateString() === new Date().toLocaleDateString() 
                    ? 'today' 
                    : nextOpenTime.toLocaleDateString('en-US', { weekday: 'long' })
                  } at {formatTime(nextOpenTime.getHours())}
                </p>
              )}
            </div>
            
            <p className="text-gray-600">Monday - Sunday</p>
            <p className="text-gray-600">11:00 AM - 8:00 PM</p>
            <p className="text-xs text-gray-500 mt-1">(Closed Mondays)</p>
          </div>

          {/* Phone */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
            <a
              href="tel:+1234567890"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300 font-medium"
            >
              (07) 1234 5678
            </a>
            <p className="text-gray-600">Ready to take your order</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationHours;