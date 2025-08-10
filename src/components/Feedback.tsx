import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Feedback = ({ language = 'de' }: { language?: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const content = {
    de: {
      title: "Nhận xét",
      subtitle: "NHỮNG KHÁCH HÀNG HÀI LÒNG CỦA CHÚNG TÔI ĐÃ NÓI GÌ VỀ CHÚNG TÔI"
    },
    en: {
      title: "Reviews",
      subtitle: "WHAT OUR SATISFIED CUSTOMERS SAY ABOUT US"
    }
  };

  const reviews = [
    {
      id: 1,
      name: "Anna Schmidt",
      rating: 5,
      comment: "Ausgezeichneter Service und wunderschöne Zimmer. Ich kann dieses Hotel nur empfehlen!",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Michael Johnson",
      rating: 5,
      comment: "Perfect location and amazing staff. The breakfast was incredible!",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Sarah Wilson",
      rating: 5,
      comment: "Luxury at its finest. Every detail was perfect during our stay.",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-gray-600 text-lg font-light tracking-wider max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Reviews Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="h-96 md:h-[500px] overflow-hidden rounded-lg">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${review.image}')` }}
                      ></div>
                    </div>
                    <div className="space-y-6">
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xl">★</span>
                        ))}
                      </div>
                      <blockquote className="text-xl text-gray-700 leading-relaxed italic">
                        "{review.comment}"
                      </blockquote>
                      <div className="text-gray-900 font-medium">
                        - {review.name}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md"
            >
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            
            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-gray-900' : 'bg-gray-400'
                  }`}
                ></button>
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md"
            >
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;