import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Clock, MapPin, CheckCircle, ExternalLink, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderNow = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 3 ? 1 : prev + 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasShownPopup(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, [hasShownPopup]);

  const closePopup = () => {
    setShowPopup(false);
  };
  const deliveryPlatforms = [
    {
      name: 'Uber Eats',
      logo: '/uber eats.png',
      logoType: 'image',
      color: 'from-green-600 to-green-700',
      url: 'https://www.ubereats.com/au/store/the-happy-fryer/oDfQuSRiWk2PsV_W4rzZ_g?srsltid=AfmBOoq9EjIpCJRZe4GpMg0EeUgc4b2lP8ahU5soIlZ8HtgrDjIclaC8',
      description: 'Fast delivery to your door'
    },
    {
      name: 'Menulog',
      logo: '/menu log logo.png',
      logoType: 'image',
      color: 'from-orange-600 to-orange-700',
      url: 'https://www.menulog.com.au/restaurants-the-happy-fryer/menu',
      description: 'Easy online ordering'
    },
    {
      name: 'DoorDash',
      logo: '/doordash.png',
      logoType: 'image',
      color: 'from-red-600 to-red-700',
      url: 'https://www.doordash.com/en-AU/store/the-happy-fryer-daisy-hill-24767212/?srsltid=AfmBOorMRjj1-K96dn2EI8oX43gLudPLSVqM3gJ37gYUpKglRRLz2Awx',
      description: 'Delivered fresh and hot'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Order Now - The Happy Fryer | Pickup & Delivery via Uber Eats, Menulog, DoorDash</title>
        <meta name="description" content="Order fresh fish and chips for pickup or delivery in Daisy Hill, Logan. Call (07) 3152 7545 or order online through Uber Eats, Menulog, or DoorDash. Open Tu-Su 11AM-8PM. Quick service guaranteed!" />
        <meta name="keywords" content="order fish and chips, delivery Daisy Hill, Uber Eats Logan, Menulog, DoorDash, pickup fish and chips, order online, call ahead, quick service" />
        <link rel="canonical" href="https://thehappyfryer.com/order-now" />

        <meta property="og:title" content="Order Now - The Happy Fryer | Pickup & Delivery" />
        <meta property="og:description" content="Order fresh fish and chips for pickup or delivery in Daisy Hill, Logan. Call (07) 3152 7545 or order online through Uber Eats, Menulog, or DoorDash." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehappyfryer.com/order-now" />
        <meta property="og:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
        <meta property="og:locale" content="en_AU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Order Now - The Happy Fryer | Pickup & Delivery" />
        <meta name="twitter:description" content="Order fresh fish and chips for pickup or delivery in Daisy Hill, Logan. Call (07) 3152 7545 or order online." />
        <meta name="twitter:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Order Now</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fresh, delicious fish and chips ready for pickup. Call us to place your order!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-10 text-white shadow-2xl">
              <Phone className="w-16 h-16 mb-6 mx-auto" />
              <h2 className="text-3xl font-bold mb-4 text-center">Call Us to Order</h2>
              <p className="text-xl text-blue-100 mb-8 text-center">
                Speak directly with our team for the fastest service
              </p>
              <a
                href="tel:+61731527545"
                className="block w-full bg-white text-blue-600 text-center px-8 py-5 rounded-full text-2xl font-bold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                07 3152 7545
              </a>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Quick Service</p>
                  <p className="text-sm text-blue-100">Freshly prepared</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Fresh Daily</p>
                  <p className="text-sm text-blue-100">Highest quality</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                  <p className="font-semibold">Easy Pickup</p>
                  <p className="text-sm text-blue-100">At your convenience</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg border-2 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Order Online</h2>
              <p className="text-gray-600 text-center mb-8">Get your favorite fish and chips delivered straight to your door</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deliveryPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/60 backdrop-blur-md rounded-xl p-6 border-2 border-blue-300/50 hover:bg-white/80 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                  >
                    <div className="text-center">
                      {platform.logoType === 'emoji' ? (
                        <div className="text-5xl mb-4">{platform.logo}</div>
                      ) : (
                        <div className="flex justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                          <img src={platform.logo} alt={platform.name} className="w-32 h-32 object-contain drop-shadow-lg" />
                        </div>
                      )}
                      <div className="flex items-center justify-center space-x-2 text-blue-600 font-bold text-lg group-hover:text-blue-700">
                        <span>Order Now</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/menu"
                  className="inline-block text-blue-600 hover:text-blue-700 font-semibold text-lg"
                >
                  View Full Menu →
                </Link>
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Order</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className={`bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 transition-all duration-500 ${activeStep === 1 ? 'shadow-[0_0_20px_rgba(37,99,235,0.8)] scale-110' : ''}`}>
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us</h4>
                    <p className="text-gray-600">Phone 07 3152 7545 and tell us what you'd like</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className={`bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 transition-all duration-500 ${activeStep === 2 ? 'shadow-[0_0_20px_rgba(37,99,235,0.8)] scale-110' : ''}`}>
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">We Prepare</h4>
                    <p className="text-gray-600">Our team will freshly prepare your order</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className={`bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 transition-all duration-500 ${activeStep === 3 ? 'shadow-[0_0_20px_rgba(37,99,235,0.8)] scale-110' : ''}`}>
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Pick Up</h4>
                    <p className="text-gray-600">Come to our store and enjoy your delicious meal!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Store Information</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Opening Hours</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <p>Tuesday - Sunday: 11:00 AM - 8:00 PM</p>
                      <p className="text-red-600 font-semibold">Monday: CLOSED</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Location</h4>
                    <p className="text-sm text-gray-600">
                      6/5 Cupania St<br />
                      Daisy Hill QLD 4127<br />
                      Queensland, Australia
                    </p>
                    <a
                      href="https://maps.google.com/?q=6/5+Cupania+St+Daisy+Hill+QLD+4127"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone</h4>
                    <a
                      href="tel:+61731527545"
                      className="text-blue-600 hover:text-blue-700 font-medium text-lg"
                    >
                      07 3152 7545
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Pickup only. Cash and card accepted.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-10 text-white text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Need Help with Your Order?</h3>
          <p className="text-xl text-gray-300 mb-8">
            Our friendly team is here to assist you with menu recommendations, dietary requirements, or any questions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+61731527545"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Call: 07 3152 7545
            </a>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-4 duration-500">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl p-6 max-w-sm border-2 border-blue-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="pr-6 relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">Order Online Now!</h3>
              <p className="text-blue-100 mb-4">
                Get your favorite fish and chips delivered to your door
              </p>
              <div className="space-y-2">
                {deliveryPlatforms.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white text-gray-900 px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
                  >
                    <div className="flex items-center space-x-3">
                      <img src={platform.logo} alt={platform.name} className="w-8 h-8 object-contain" />
                      <span>{platform.name}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-blue-600" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
};

export default OrderNow;
