import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RoomsPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [sortBy, setSortBy] = useState('default');

  const content = {
    de: {
      title: "Loại phòng",
      breadcrumb: "TRANG CHỦ / LOẠI PHÒNG",
      sortLabel: "Thứ tự mặc định"
    },
    en: {
      title: "Room Types",
      breadcrumb: "HOME / ROOM TYPES",
      sortLabel: "Default Order"
    }
  };

  const rooms = [
    {
      id: 1,
      title: "LUXURY DOUBLE ROOM SUITE",
      price: "850,000 ₫",
      image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      slug: "luxury-double-room-suite"
    },
    {
      id: 2,
      title: "LUXURY DOUBLE SUITE, ATTIC FLOOR",
      price: "1,500,000 ₫",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      slug: "luxury-double-suite-attic"
    }
  ];

  const handleRoomClick = (slug: string) => {
    navigate(`/rooms/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative h-56 bg-gray-800 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{content[language].title}</h1>
          <p className="text-sm tracking-widest opacity-80">{content[language].breadcrumb}</p>
        </div>
        
        {/* Sort Dropdown */}
        <div className="absolute top-4 right-6 z-20">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-black/50 text-white border border-white/30 rounded px-4 py-2 text-sm focus:outline-none focus:border-white/60"
          >
            <option value="default">{content[language].sortLabel}</option>
            <option value="price-low">Giá thấp đến cao</option>
            <option value="price-high">Giá cao đến thấp</option>
          </select>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-0">
            {rooms.map((room) => (
              <div 
                key={room.id}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => handleRoomClick(room.slug)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                {/* Room Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                  <h3 className="text-white text-2xl font-light mb-2 tracking-wide">
                    {room.title}
                  </h3>
                  <p className="text-orange-400 text-lg font-light">
                    {room.price}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomsPage;