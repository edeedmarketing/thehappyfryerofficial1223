import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const SocialConnect = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect With Us</h3>
        <p className="text-sm text-gray-600">Follow us on social media for updates</p>
      </div>
      
      <div className="relative">
        {/* Compact Container */}
        <div 
          className="rounded-xl bg-gradient-to-br from-blue-50/80 to-blue-100/90 border border-blue-200/50 shadow-lg backdrop-blur-sm overflow-hidden p-4"
          style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.15)'
          }}
        >
          <div className="flex justify-center gap-6">
            <a href="#" className="social-icon instagram">
              <div className="icon-container">
                <Instagram className="h-5 w-5 text-white" />
              </div>
              <span className="icon-label">Instagram</span>
            </a>
            
            <a href="#" className="social-icon facebook">
              <div className="icon-container">
                <Facebook className="h-5 w-5 text-white" />
              </div>
              <span className="icon-label">Facebook</span>
            </a>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .social-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
        }
        
        .icon-container {
          display: inline-flex;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
          position: relative;
          justify-content: center;
          align-items: center;
          background: rgba(59, 130, 246, 0.8);
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.3);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .social-icon:hover .icon-container {
          transform: translateY(-3px) scale(1.05);
        }
        
        .social-icon:hover .icon-label {
          opacity: 1;
          transform: translateY(2px);
        }
        
        .icon-label {
          margin-top: 6px;
          color: #374151;
          font-weight: 500;
          font-size: 0.75rem;
          opacity: 0.8;
          transition: all 0.3s ease;
        }
        
        .social-icon.instagram:hover .icon-container {
          background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
          box-shadow: 0 0 15px rgba(225, 48, 108, 0.4);
        }
        
        .social-icon.facebook:hover .icon-container {
          background: #1877f2;
          box-shadow: 0 0 15px rgba(24, 119, 242, 0.4);
        }
        
        .social-icon:hover svg {
          animation: shake 0.4s;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0) rotate(0); }
          25% { transform: translateX(-2px) rotate(-2deg); }
          50% { transform: translateX(2px) rotate(2deg); }
          75% { transform: translateX(-2px) rotate(-2deg); }
        }
        
        .icon-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .social-icon:hover .icon-container::before {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export { SocialConnect };