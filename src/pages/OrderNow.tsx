import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, ExternalLink, Fish } from 'lucide-react';

const OrderNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
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
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
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
      
      // Calculate next opening time
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
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen]);

  const formatTime = (hour: number) => {
    if (hour === 0) return '12 am';
    if (hour < 12) return `${hour} am`;
    if (hour === 12) return '12 pm';
    return `${hour - 12} pm`;
  };

  const getTimeUntilOpen = () => {
    if (!nextOpenTime) return '';
    
    const now = new Date();
    const diff = nextOpenTime.getTime() - now.getTime();
    
    if (diff <= 0) return '';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    if (hours > 24) {
      const days = Math.floor(hours / 24);
      const remainingHours = hours % 24;
      return `${days}d ${remainingHours}h ${minutes}m ${seconds}s`;
    }
    
    return `${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Order Now
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Order online for delivery through our trusted partners
          </p>
        </div>

        {/* Store Info */}
        <div className="bg-blue-600 text-white rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>(07) 3152 7545</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-6 h-6" />
              <div>
                <p className="font-semibold">Status</p>
                <p className={`font-bold ${isOpen ? 'text-green-300' : 'text-red-300'}`}>
                  {isOpen ? 'OPEN NOW' : 'CLOSED'}
                </p>
                {!isOpen && nextOpenTime && (
                  <p className="text-sm text-blue-100">
                    Opens in: {getTimeUntilOpen()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6" />
              <div>
                <p className="font-semibold">Location</p>
                <p>Shop 9, 3-5 Cupania Street</p>
                <p>Daisy Hill, QLD, Australia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Opening Hours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {openingHours.map((day, index) => {
              const today = new Date().getDay();
              const dayIndex = today === 0 ? 6 : today - 1;
              const isToday = index === dayIndex;
              const isTodayAndOpen = isToday && !day.closed && isOpen;
              
              return (
                <div
                  key={day.day}
                  className={`p-4 rounded-lg text-center relative overflow-hidden ${
                    isToday 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-50 text-gray-900'
                  }`}
                >
                  {/* Fish icon and bubbles for current day when open */}
                  {isTodayAndOpen && (
                    <>
                      {/* Fish icon */}
                      <Fish className="absolute top-2 right-2 w-4 h-4 text-blue-200 animate-pulse" />
                      
                      {/* Floating bubbles */}
                      <div className="absolute top-1 left-2 w-2 h-2 bg-blue-200 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
                      <div className="absolute top-3 left-4 w-1.5 h-1.5 bg-blue-300 rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
                      <div className="absolute top-2 left-6 w-1 h-1 bg-blue-100 rounded-full opacity-80 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
                      <div className="absolute bottom-2 left-1 w-1.5 h-1.5 bg-blue-200 rounded-full opacity-50 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2.2s' }}></div>
                      <div className="absolute bottom-1 left-3 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '2.8s' }}></div>
                    </>
                  )}
                  
                  <p className="font-semibold mb-1">{day.day}</p>
                  <p className={`text-sm ${isToday ? 'text-blue-100' : 'text-gray-600'}`}>
                    {day.closed 
                      ? 'Closed' 
                      : `${formatTime(day.open!)}–${formatTime(day.close!)}`
                    }
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Delivery Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Uber Eats */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center p-2">
                <img 
                  src="/223-2234004_uber-eats-new-logo.png" 
                  alt="Uber Eats Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uber Eats</h3>
              <p className="text-gray-600 mb-6">
                Get your favorite fish and chips delivered straight to your door
              </p>
              <a
                href="https://www.ubereats.com/au/store/the-happy-fryer/oDfQuSRiWk2PsV_W4rzZ_g?srsltid=AfmBOopDv15Lhb-4VEpiA2wPCzlfl4juqqKK7TEKGQd6tF2d4jTaVWTu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Order on Uber Eats</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Menulog */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="text-center">
              <div className="w-28 h-28 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center p-2">
                <img 
                  src="/ML_Logo_Stacked_RGB.svg.png" 
                  alt="Menulog Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Menulog</h3>
              <p className="text-gray-600 mb-6">
                Browse our full menu and order for delivery or pickup
              </p>
              <a
                href="https://www.menulog.com.au/restaurants-the-happy-fryer/menu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
              >
                <span>Order on Menulog</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-gray-900 text-white rounded-2xl p-12">
          <h3 className="text-3xl font-bold mb-4">Prefer to Call?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Call us directly for pickup orders or any questions
          </p>
          <a
            href="tel:+61731527545"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: (07) 3152 7545</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderNow;