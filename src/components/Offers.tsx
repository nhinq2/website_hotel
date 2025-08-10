import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Offers = ({ language = 'de' }: { language?: string }) => {
  const content = {
    de: {
      title: "Ưu đãi đặc biệt",
      subtitle: "TẬN HƯỞNG ĐẶC QUYỀN CAO CẤP CỦA MONA",
      offers: [
        {
          title: "Khuyến mãi 3 ngày 2 đêm",
          subtitle: "ĐỌC THÊM",
          image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        },
        {
          title: "Buffet món Âu mỗi sáng",
          subtitle: "ĐỌC THÊM",
          image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        },
        {
          title: "Liệu trình trang mặt 5 đêm",
          subtitle: "ĐỌC THÊM",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        }
      ]
    },
    en: {
      title: "Special Offers",
      subtitle: "ENJOY MONA'S PREMIUM PRIVILEGES",
      offers: [
        {
          title: "3 Days 2 Nights Promotion",
          subtitle: "READ MORE",
          image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        },
        {
          title: "European Breakfast Buffet",
          subtitle: "READ MORE",
          image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        },
        {
          title: "5-Night Facial Treatment",
          subtitle: "READ MORE",
          image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
        }
      ]
    }
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  const offers = content[language].offers;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % offers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  return (
    <section id="offers" className="bg-white py-15">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
            {content[language].title}
          </h2>
          <p className="text-gray-600 text-lg font-light tracking-wider">
            {content[language].subtitle}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden"
            >
              <div className="h-80 overflow-hidden">
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${offer.image}')` }}
                ></div>
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-xl font-light mb-2">{offer.title}</h3>
                  <p className="text-sm font-light tracking-wider">{offer.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;