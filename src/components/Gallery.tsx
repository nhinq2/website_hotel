import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = ({ language = 'de' }: { language?: string }) => {
  const galleryImages = [
    {
      id: 1,
      title: "Luxury Suite",
      category: "Rooms",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Restaurant",
      category: "Dining",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Spa & Wellness",
      category: "Wellness",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Pool Area",
      category: "Recreation",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Lobby",
      category: "Interior",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Executive Suite",
      category: "Rooms",
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const imagesPerView = 3;
  const maxSlides = Math.max(0, galleryImages.length - imagesPerView);

  const content = {
    de: {
      title: "Galerie",
      subtitle: "ENTDECKEN SIE UNSERE LUXURIÖSEN RÄUME UND EINRICHTUNGEN"
    },
    en: {
      title: "Gallery",
      subtitle: "DISCOVER OUR LUXURIOUS SPACES AND FACILITIES"
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxSlides));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  return (
    <section id="gallery" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-wide">
            {content[language].title}
          </h2>
          <p className="text-gray-600 text-lg font-light tracking-wider max-w-3xl mx-auto">
            {content[language].subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="overflow-hidden mb-12">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * (100 / imagesPerView)}%)` }}
          >
            {galleryImages.map((image, index) => (
              <div 
                key={image.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 flex-shrink-0"
                style={{ width: `calc(${100 / imagesPerView}% - ${(6 * (imagesPerView - 1)) / imagesPerView}px)` }}
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${image.image}')` }}
                  ></div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm font-light tracking-wider mb-2 opacity-80">{image.category}</p>
                    <h3 className="text-xl font-light">{image.title}</h3>
                  </div>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={prevSlide}
            className={`w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
              currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentSlide === 0}
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: maxSlides + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-gray-900' : 'bg-gray-400 hover:bg-gray-600'
                }`}
              ></button>
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className={`w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg ${
              currentSlide === maxSlides ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={currentSlide === maxSlides}
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <X size={20} />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img
              src={galleryImages[selectedImage].image}
              alt={galleryImages[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                <p className="text-sm font-light tracking-wider mb-1 opacity-80">
                  {galleryImages[selectedImage].category}
                </p>
                <h3 className="text-xl font-light">
                  {galleryImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;