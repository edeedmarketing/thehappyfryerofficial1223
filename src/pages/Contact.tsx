import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { AdvancedMap } from '../components/ui/interactive-map';
import { SocialConnect } from '../components/ui/connect-with-us';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'general',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', inquiryType: 'general', message: '' });
  };

  // The Happy Fryer location coordinates (Daisy Hill, QLD)
  const restaurantLocation: [number, number] = [-27.6275, 153.1280];
  
  const mapMarkers = [
    {
      id: 'happy-fryer',
      position: restaurantLocation,
      color: 'blue',
      size: 'large' as const,
      popup: {
        title: 'The Happy Fryer',
        content: '6/5 Cupania St, Daisy Hill QLD 4127'
      }
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Bubbles */}
        <div className="absolute top-1/4 left-1/6 w-4 h-4 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-blue-100 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '4s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/5 right-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '6.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '3s', animationDuration: '5.5s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-4 h-4 bg-blue-200 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '5s', animationDuration: '6.8s' }}></div>
        
        {/* Subtle Wave Pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-32 opacity-5"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1150,40 1200,60 L1200,0 L0,0 Z"
            fill="url(#contact-wave-gradient)"
          />
          <defs>
            <linearGradient id="contact-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/6 left-1/5 w-20 h-20 bg-blue-400 rounded-full opacity-3 blur-2xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-4 blur-3xl animate-pulse" style={{ animationDelay: '4s', animationDuration: '10s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-500 rounded-full opacity-2 blur-xl animate-pulse" style={{ animationDelay: '2s', animationDuration: '9s' }}></div>
        
        {/* Subtle Fish Icons */}
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-20 right-10 transform w-24 h-24 opacity-5 rotate-12 animate-pulse"
          style={{ animationDelay: '1s', animationDuration: '8s' }}
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute bottom-32 left-16 transform scale-x-[-1] w-20 h-20 opacity-4 -rotate-12 animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '7s' }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          {/* Contact Information */}
          <div>
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg mb-8 border border-white/20">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Shop</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">6/5 Cupania St</p>
                    <p className="text-gray-600">Daisy Hill QLD 4127</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      (07) 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a
                      href="mailto:info@thehappyfryer.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
                    >
                      info@thehappyfryer.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <p className="text-gray-600">Monday - Sunday</p>
                    <p className="text-gray-600">11:00 AM - 8:30 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg overflow-hidden border border-white/20">
              <AdvancedMap
                center={restaurantLocation}
                zoom={15}
                markers={mapMarkers}
                enableClustering={false}
                enableSearch={true}
                enableControls={true}
                style={{ height: '300px', width: '100%' }}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="general">General Inquiry</option>
                  <option value="job">Job Application</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
              
              {/* Connect With Us Section */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <SocialConnect />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;