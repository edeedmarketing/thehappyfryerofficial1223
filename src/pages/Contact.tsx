import React, { useState, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react';

const AdvancedMap = lazy(() => import('../components/ui/interactive-map').then(module => ({ default: module.AdvancedMap })));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`${formData.inquiryType} - ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:thehappyfryer@outlook.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - The Happy Fryer | 6/5 Cupania St, Daisy Hill QLD | (07) 3152 7545</title>
        <meta name="description" content="Visit The Happy Fryer at 6/5 Cupania St, Daisy Hill QLD 4127. Call (07) 3152 7545 or email thehappyfryer@outlook.com. Open Tu-Su 11AM-8PM. Get directions, send us a message, or find us on social media!" />
        <meta name="keywords" content="contact The Happy Fryer, Daisy Hill address, Logan fish and chips location, phone number, opening hours, email, directions, 6/5 Cupania St" />
        <link rel="canonical" href="https://thehappyfryer.com/contact" />

        <meta property="og:title" content="Contact Us - The Happy Fryer | Daisy Hill Location" />
        <meta property="og:description" content="Visit The Happy Fryer at 6/5 Cupania St, Daisy Hill QLD 4127. Call (07) 3152 7545 or email us. Open Tu-Su 11AM-8PM." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehappyfryer.com/contact" />
        <meta property="og:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
        <meta property="og:locale" content="en_AU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - The Happy Fryer | Daisy Hill Location" />
        <meta name="twitter:description" content="Visit The Happy Fryer at 6/5 Cupania St, Daisy Hill QLD 4127. Call (07) 3152 7545 or email us." />
        <meta name="twitter:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "The Happy Fryer",
            "image": "https://thehappyfryer.com/happy_fryer_transparent.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6/5 Cupania St",
              "addressLocality": "Daisy Hill",
              "addressRegion": "QLD",
              "postalCode": "4127",
              "addressCountry": "AU"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -27.643308667400547,
              "longitude": 153.15409451140613
            },
            "telephone": "+61731527545",
            "email": "thehappyfryer@outlook.com",
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "11:00",
              "closes": "20:00"
            },
            "url": "https://thehappyfryer.com"
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-sky-100 py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-30 animate-bubble-float bg-gradient-radial from-blue-200 via-blue-300 to-transparent shadow-lg shadow-blue-400/50"></div>
        <div className="absolute top-40 left-1/4 w-16 h-16 rounded-full opacity-35 animate-bubble bg-gradient-radial from-blue-100 via-blue-200 to-transparent shadow-lg shadow-blue-300/50" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-32 right-20 w-32 h-32 rounded-full opacity-25 animate-bubble-drift bg-gradient-radial from-blue-300 via-blue-400 to-transparent shadow-lg shadow-blue-500/50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full opacity-30 animate-bubble bg-gradient-radial from-sky-200 via-sky-300 to-transparent shadow-lg shadow-sky-400/50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 rounded-full opacity-30 animate-bubble-float bg-gradient-radial from-blue-200 via-blue-300 to-transparent shadow-lg shadow-blue-400/50" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/3 left-16 w-24 h-24 rounded-full opacity-35 animate-bubble-drift bg-gradient-radial from-blue-100 via-blue-200 to-transparent shadow-lg shadow-blue-300/50" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-40 right-32 w-20 h-20 rounded-full opacity-30 animate-bubble bg-gradient-radial from-sky-100 via-sky-200 to-transparent shadow-lg shadow-sky-300/50" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-18 h-18 rounded-full opacity-25 animate-bubble-float bg-gradient-radial from-blue-200 via-blue-300 to-transparent shadow-lg shadow-blue-400/50" style={{ animationDelay: '1.8s' }}></div>
        <div className="absolute top-2/3 right-10 w-24 h-24 rounded-full opacity-30 animate-bubble bg-gradient-radial from-blue-300 via-blue-400 to-transparent shadow-lg shadow-blue-500/50" style={{ animationDelay: '2.2s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-26 h-26 rounded-full opacity-35 animate-bubble-drift bg-gradient-radial from-sky-200 via-sky-300 to-transparent shadow-lg shadow-sky-400/50" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute top-10 right-1/3 w-20 h-20 rounded-full opacity-30 animate-bubble bg-gradient-radial from-blue-100 via-blue-200 to-transparent shadow-lg shadow-blue-300/50" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute bottom-10 right-20 w-22 h-22 rounded-full opacity-30 animate-bubble-float bg-gradient-radial from-sky-100 via-sky-200 to-transparent shadow-lg shadow-sky-300/50" style={{ animationDelay: '2.8s' }}></div>

        <img
          src="/fish 4.png"
          alt=""
          className="absolute top-1/2 right-40 w-8 h-8 opacity-35 animate-swim-medium"
          style={{ animationDelay: '1.5s' }}
        />
        <img
          src="/fish 4.png"
          alt=""
          className="absolute top-1/4 right-1/3 w-6 h-6 opacity-30 animate-swim-slow"
          style={{ animationDelay: '0.5s' }}
        />
        <img
          src="/fish 4.png"
          alt=""
          className="absolute bottom-1/3 right-20 w-7 h-7 opacity-35 animate-swim-fast"
          style={{ animationDelay: '2s' }}
        />
        <img
          src="/fish 4.png"
          alt=""
          className="absolute top-2/3 left-1/3 w-6 h-6 opacity-30 animate-swim-medium"
          style={{ animationDelay: '1.2s', transform: 'scaleX(-1)' }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Shop</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    6/5 Cupania St<br />
                    Daisy Hill QLD 4127
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+61731527545" className="text-blue-600 hover:text-blue-700">
                    (07) 3152 7545
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:thehappyfryer@outlook.com" className="text-blue-600 hover:text-blue-700">
                    thehappyfryer@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 text-white p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-700">
                    Monday - Sunday<br />
                    11:00 AM - 8:30 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl overflow-hidden shadow-md">
              <Suspense fallback={
                <div className="h-[300px] flex items-center justify-center bg-gray-100">
                  <div className="text-gray-500">Loading map...</div>
                </div>
              }>
                <AdvancedMap
                  center={[-27.643308667400547, 153.15409451140613]}
                  zoom={16}
                  markers={[
                    {
                      id: 1,
                      position: [-27.643308667400547, 153.15409451140613],
                      color: 'blue',
                      size: 'large',
                      popup: {
                        title: 'The Happy Fryer',
                        content: '6/5 Cupania St, Daisy Hill QLD 4127'
                      }
                    }
                  ]}
                  enableClustering={false}
                  enableSearch={false}
                  enableControls={true}
                  style={{ height: '300px', width: '100%', borderRadius: '0.75rem' }}
                />
              </Suspense>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-xl border border-blue-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option>General Inquiry</option>
                  <option>Order Question</option>
                  <option>Catering</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">Connect With Us</h3>
              <p className="text-gray-600 text-sm text-center mb-4">Follow us on social media for updates</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
