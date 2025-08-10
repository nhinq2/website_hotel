import React from 'react';
import { ArrowUp, Building } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Hotel Logo and Stars */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center mb-4">
            <Building size={60} className="text-gray-800" />
          </div>
          <div className="flex justify-center items-center mb-4 space-x-1">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gray-800 text-xl">★</span>
            ))}
          </div>
          <h3 className="text-3xl font-bold tracking-wider mb-2">LUXURY HOTEL</h3>
          <p className="text-sm text-gray-600 tracking-widest">SINCE 1896</p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Address Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-gray-800">ĐỊA CHỈ</h4>
            <div className="space-y-3 text-gray-700">
              <p className="font-medium">HOTEL Beach</p>
              <p>Felchtaer Str. 2-4, 99974 Mühlhausen/Thüringen</p>
              <p>Germanyt</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-gray-800">ĐẶT CHỖ</h4>
            <div className="space-y-3 text-gray-700">
              <p>Tel : 091234 5678</p>
              <p>Fax : 091234 5678</p>
              <p>booking@luxury.hotel</p>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-gray-800">NHẬN TIN</h4>
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Email của bạn"
                className="w-full px-4 py-3 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-all duration-300"
              />
              <button className="w-full bg-gray-800 text-white px-6 py-3 text-sm font-semibold tracking-widest hover:bg-gray-700 transition-all duration-300">
                ĐĂNG KÝ
              </button>
            </div>
          </div>

          {/* Awards Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-lg font-semibold mb-6 tracking-wide text-gray-800">GIẢI THƯỞNG</h4>
            <div className="flex gap-3 space-y-4">
              {/* Trip Award */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/trip.jpg" 
                  alt="TripAdvisor Award" 
                  className="w-24 h-24 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
              
              {/* Hotel Award */}
              <div className="flex justify-center lg:justify-start">
                <img 
                  src="/award.png" 
                  alt="Hotel Award" 
                  className="w-24 h-24 object-contain rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 bg-white relative z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-600 text-sm text-center lg:text-left">
              © All rights reserved.
            </div>
            
            {/* Back to Top Button */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-gray-600 hover:bg-gray-100 transition-all duration-300 group"
            >
              <ArrowUp size={16} className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;