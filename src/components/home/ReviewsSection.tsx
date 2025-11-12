import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { StaggerTestimonials } from '../ui/stagger-testimonials';

const ReviewsSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          
          {/* Star Rating */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-6 h-6 ${
                    star <= 4 ? 'text-yellow-400 fill-current' : 
                    star === 5 ? 'text-yellow-400 fill-current opacity-50' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-3 text-xl font-semibold text-gray-900">4.5/5</span>
            <span className="ml-2 text-lg text-gray-600">• 781 reviews</span>
          </div>
          
          <p className="text-lg text-gray-600">Real reviews from our happy customers</p>
        </div>

        <div className="mb-8">
          <StaggerTestimonials />
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?sca_esv=827ca067cae54b45&sxsrf=AE3TifNYjMrTKXgn2eN9MSGBX0Edra6Ozw:1755135905357&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-U4nXVfHJJZKYaJhGyWo-i_QP5f5n6hL-2bsaDqkIeT8MijiqSXSKWJI5cBS5muoq8XCypEIg5WgyJAWOkX2V6_rpjD&q=The+Happy+Fryer+Reviews&sa=X&ved=2ahUKEwiKl6_hlomPAxX1TmwGHfi-HvsQ0bkNegQILRAD&biw=2048&bih=1044&dpr=1.25"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            {/* Google Icon */}
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span>Leave a Review</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;