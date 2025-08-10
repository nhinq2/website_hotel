import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Search, Menu, X, ChevronDown } from 'lucide-react';

const Header = ({ language, setLanguage }: { language: string; setLanguage: (lang: string) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoomTypesOpen, setIsRoomTypesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    if (isHomePage) {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setIsScrolled(true);
    }
  }, [isHomePage]);

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  const menuItems = {
    de: {
      home: 'STARTSEITE',
      roomTypes: 'LOẠI PHÒNG',
      news: 'TIN TỨC',
      about: 'GIỚI THIỆU',
      contact: 'LIÊN HỆ',
      roomCategories: {
        luxury: 'Sang trọng',
        couple: 'Cặp đôi',
        family: 'Gia đình',
        budget: 'Giá rẻ'
      }
    },
    en: {
      home: 'HOME',
      roomTypes: 'ROOM TYPES',
      news: 'NEWS',
      about: 'ABOUT',
      contact: 'CONTACT',
      roomCategories: {
        luxury: 'Luxury',
        couple: 'Couple',
        family: 'Family',
        budget: 'Budget'
      }
    }
  };

  return (
    <header className={`${isHomePage ? 'absolute top-10' : 'relative'} left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled || !isHomePage ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className={`relative z-50 w-8 h-8 flex flex-col justify-center items-center transition-all duration-300 ${
              isScrolled || isMenuOpen || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Centered Logo */}
          <button 
            onClick={() => navigate('/')}
            className={`absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-300 ${
              isScrolled || isMenuOpen || !isHomePage ? 'text-gray-900' : 'text-white'
          }`}>
            <img 
              src="/instagram-logo.png" 
              alt="LUXURY Hotel Logo" 
              className="w-12 h-12 mb-1 object-contain"
            />
            <div className="flex space-x-0.5 mb-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-xs">★</span>
              ))}
            </div>
            <h1 className="text-xl font-bold tracking-wider">LUXURY HOTEL</h1>
            <p className="text-xs tracking-widest opacity-80">SINCE 1896</p>
          </button>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center space-x-2 hover:opacity-70 transition-all duration-300 text-sm font-medium tracking-wide ${
                isScrolled || !isHomePage ? 'text-gray-900' : 'text-white'
              }`}
            >
              <Globe size={16} />
              <span>{language.toUpperCase()}</span>
            </button>

            {/* Search Icon */}
            <button className={`hover:opacity-70 transition-all duration-300 ${
              isScrolled || isMenuOpen || !isHomePage ? 'text-gray-900' : 'text-white'
            }`}>
              <Search size={20} />
            </button>
          </div>
        </div>

        {/* Side Navigation Menu */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-white z-40 transform transition-transform duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className={`transform transition-transform duration-500 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
            {/* Search Bar */}
            <div className="pt-20 px-8 pb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <Search size={16} className="text-white" />
                </button>
              </div>
            </div>

            <nav className="flex flex-col pt-20 px-8 space-y-4 text-gray-900">
              <a 
                href="/" 
                className="text-lg font-normal hover:opacity-70 transition-all duration-300 tracking-wide border-b border-gray-200 pb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItems[language].home}
              </a>
              
              {/* Room Types with Dropdown */}
              <div className="border-b border-gray-200 pb-3">
                <button
                  onClick={() => setIsRoomTypesOpen(!isRoomTypesOpen)}
                  className="flex items-center justify-between w-full text-lg font-normal hover:opacity-70 transition-all duration-300 tracking-wide"
                >
                  {menuItems[language].roomTypes}
                  <ChevronDown 
                    size={20} 
                    className={`transform transition-transform duration-300 ${isRoomTypesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                
                {/* Room Type Submenu */}
                <div className={`mt-3 ml-4 space-y-2 transition-all duration-300 ${
                  isRoomTypesOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
                }`}>
                  <button
                    onClick={() => { setIsMenuOpen(false); navigate('/rooms?category=luxury'); }}
                    className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {menuItems[language].roomCategories.luxury}
                  </button>
                  <button
                    onClick={() => { setIsMenuOpen(false); navigate('/rooms?category=couple'); }}
                    className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {menuItems[language].roomCategories.couple}
                  </button>
                  <button
                    onClick={() => { setIsMenuOpen(false); navigate('/rooms?category=family'); }}
                    className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {menuItems[language].roomCategories.family}
                  </button>
                  <button
                    onClick={() => { setIsMenuOpen(false); navigate('/rooms?category=budget'); }}
                    className="block text-base text-gray-600 hover:text-gray-900 transition-colors duration-300"
                  >
                    {menuItems[language].roomCategories.budget}
                  </button>
                </div>
              </div>
              
              <a 
                href="/news" 
                className="text-lg font-normal hover:opacity-70 transition-all duration-300 tracking-wide border-b border-gray-200 pb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItems[language].news}
              </a>
              
              <a 
                href="/about" 
                className="text-lg font-normal hover:opacity-70 transition-all duration-300 tracking-wide border-b border-gray-200 pb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItems[language].about}
              </a>
              
              <a 
                href="/contact" 
                className="text-lg font-normal hover:opacity-70 transition-all duration-300 tracking-wide border-b border-gray-200 pb-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {menuItems[language].contact}
              </a>
              
              {/* Mobile Language Toggle */}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-gray-900 hover:opacity-70 transition-all duration-300 text-lg font-light tracking-wide border border-gray-300 px-6 py-3 rounded-full"
                >
                  <Globe size={20} />
                  <span>{language.toUpperCase()}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>

        {/* Overlay Background */}
        <div className={`fixed inset-0 bg-black/50 z-30 transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`} onClick={() => setIsMenuOpen(false)}></div>
      </div>
    </header>
  );
};

export default Header;