import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface HeroProps {
  language: 'de' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const content = {
    de: {
      title: "Nghệ thuật",
      subtitle: "trong thành phố",
      description: "Trải nghiệm tuyệt vời nhất cho bạn ngày lễ",
      buttonText: "XEM CHI TIẾT"
    },
    en: {
      title: "Art in",
      subtitle: "the city",
      description: "The best experience for your holiday",
      buttonText: "VIEW DETAILS"
    }
  };

  const slides = [
    {
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    },
    {
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
    }
  ];

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setDirection(index > currentSlide ? 'next' : 'prev');
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 1000);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  // Enhanced Snow effect component
  const SnowFlake = ({ delay, duration, left, size }: { delay: number; duration: number; left: number; size: number }) => (
    <div
      className="absolute bg-white rounded-full pointer-events-none"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        animation: `snowfall ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
        opacity: 0.6 + Math.random() * 0.4,
      }}
    />
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Snow Effect */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[...Array(50)].map((_, i) => (
          <SnowFlake
            key={i}
            delay={Math.random() * 10}
            duration={8 + Math.random() * 4}
            left={Math.random() * 100}
            size={1 + Math.random() * 5}
          />
        ))}
      </div>

      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 scale-100 z-10' 
              : index === (currentSlide - 1 + slides.length) % slides.length
                ? `opacity-0 ${direction === 'next' ? 'scale-95 -translate-x-full' : 'scale-105 translate-x-full'} z-5`
                : index === (currentSlide + 1) % slides.length
                  ? `opacity-0 ${direction === 'prev' ? 'scale-95 translate-x-full' : 'scale-105 -translate-x-full'} z-5`
                  : 'opacity-0 scale-110 z-0'
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          <div className={`absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 transition-all duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-70'
          }`}></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 text-white/90 hover:text-white transition-all duration-300 z-30 w-12 h-12 rounded-full border border-white/40 hover:border-white/70 flex items-center justify-center backdrop-blur-sm hover:bg-white/10"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/90 hover:text-white transition-all duration-300 z-30 w-12 h-12 rounded-full border border-white/40 hover:border-white/70 flex items-center justify-center backdrop-blur-sm hover:bg-white/10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Hero Content */}
      <div className="relative z-30 text-left text-white max-w-6xl px-6 w-full">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-light mb-6 leading-none tracking-wide">
            <span className={`block transform transition-all duration-800 delay-200 ${
              isTransitioning 
                ? `${direction === 'next' ? 'translate-x-8' : '-translate-x-8'} opacity-0` 
                : 'translate-x-0 opacity-100'
            }`}>
              {content[language].title}
            </span>
            <span className={`block transform transition-all duration-800 delay-400 ${
              isTransitioning 
                ? `${direction === 'next' ? 'translate-x-12' : '-translate-x-12'} opacity-0` 
                : 'translate-x-0 opacity-100'
            }`}>
              {content[language].subtitle}
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl mb-12 font-light leading-relaxed transition-all duration-800 delay-600 ${
            isTransitioning 
              ? `${direction === 'next' ? 'translate-y-4' : '-translate-y-4'} opacity-0` 
              : 'translate-y-0 opacity-90'
          }`}>
            {content[language].description}
          </p>
          
          <div className={`transition-all duration-800 delay-800 ${
            isTransitioning 
              ? `${direction === 'next' ? 'translate-y-6' : '-translate-y-6'} opacity-0` 
              : 'translate-y-0 opacity-100'
          }`}>
            <button className="group relative bg-transparent border-2 border-white text-white px-10 py-4 text-sm font-semibold tracking-[0.2em] hover:bg-white hover:text-gray-900 transition-all duration-500 overflow-hidden">
              <span className="relative z-10">{content[language].buttonText}</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative w-12 h-1 transition-all duration-700 overflow-hidden ${
              index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            disabled={isTransitioning}
          >
            {/* Active indicator fill animation */}
            <div className={`absolute inset-0 bg-white transform origin-left transition-transform duration-1000 ${
              index === currentSlide ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-center"></div>
            
            {/* Click ripple effect */}
            <div className="absolute inset-0 bg-white/50 rounded-full transform scale-0 group-active:scale-150 transition-transform duration-300"></div>
            
            {/* Pulse effect for active indicator */}
            {index === currentSlide && (
              <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;