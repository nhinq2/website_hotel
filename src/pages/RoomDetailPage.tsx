import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Facebook, Twitter, Mail, Share, ArrowUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface RoomDetailPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const RoomDetailPage: React.FC<RoomDetailPageProps> = ({ language, setLanguage }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(true);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  const roomData = {
    'luxury-double-room-suite': {
      title: "LUXURY DOUBLE ROOM SUITE",
      price: "850,000 ₫",
      categories: ["Gia đình", "Giá rẻ", "Loại phòng"],
      tags: ["giường đôi"],
      description: "Luxury Double Room Suite có kích thước nữ hoàng hoặc giường đôi thoải mái, khu vực tiếp khách, bàn làm việc và phòng tắm riêng biệt với vòi hoa sen nhây đi bộ hoặc bồn tắm và vòi sen cùng nghệ thuật hiện đại và màu sắc trung tính.",
      images: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop"
      ],
      largeImages: [
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
      ]
    }
  };

  const relatedRooms = [
    {
      id: 1,
      title: "LUXURY FAMILY DOUBLE ROOM SUITE",
      price: "800,000 ₫",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "PREMIUM DOUBLE ROOM SUITE",
      price: "2,000,000 ₫",
      image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 3,
      title: "LUXURY SINGLE ROOM SUITE",
      price: "1,450,000 ₫",
      image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    },
    {
      id: 4,
      title: "LUXURY SINGLE ROOM ART SUITE",
      price: "900,000 ₫",
      image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
    }
  ];

  const room = roomData[slug as keyof typeof roomData];

  if (!room) {
    return <div>Room not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button onClick={() => navigate('/')} className="hover:text-gray-900">TRANG CHỦ</button>
              <span>/</span>
              <button onClick={() => navigate('/rooms')} className="hover:text-gray-900">LOẠI PHÒNG</button>
              <span>/</span>
              <span className="text-gray-900">GIA ĐÌNH</span>
            </div>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronLeft size={16} />
              </button>
              <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Room Detail Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img 
                src={room.largeImages[currentImageIndex]}
                alt={room.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-2">
              {room.images.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`aspect-[4/3] overflow-hidden rounded border-2 ${
                    currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'
                  }`}
                >
                  <img 
                    src={thumb}
                    alt={`${room.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            
            {/* Navigation Arrows for Main Image */}
            <div className="flex justify-center space-x-4 mt-4">
              <button
                onClick={prevImage}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <button
                onClick={nextImage}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Room Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-light text-gray-900 mb-4">{room.title}</h1>
              <div className="text-2xl text-orange-400 font-light mb-6">{room.price}</div>
              
              <button className="bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition-colors duration-300 mb-6">
                Đặt ngay
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <span className="font-medium text-gray-700">Danh mục: </span>
                <span className="text-gray-600">{room.categories.join(', ')}</span>
              </div>
              
              <div>
                <span className="font-medium text-gray-700">Tag: </span>
                <span className="text-gray-600">{room.tags.join(', ')}</span>
              </div>
            </div>

            {/* Social Share */}
            <div className="flex space-x-3 pt-4">
              <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Facebook size={18} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Twitter size={18} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Mail size={18} className="text-gray-600" />
              </button>
              <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <Share size={18} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          {/* Description Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <h3 className="text-lg font-medium text-gray-900">Mô tả</h3>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${showDescription ? 'rotate-90' : ''}`}
              />
            </button>
            {showDescription && (
              <div className="pb-6">
                <h4 className="text-xl font-medium text-gray-900 mb-4">
                  Căn phòng chất lượng với tầm nhìn ra biển
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {room.description}
                </p>
              </div>
            )}
          </div>

          {/* Additional Info Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <h3 className="text-lg font-medium text-gray-900">Thông tin bổ sung</h3>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${showAdditionalInfo ? 'rotate-90' : ''}`}
              />
            </button>
          </div>

          {/* Reviews Section */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowReviews(!showReviews)}
              className="flex items-center justify-between w-full py-4 text-left"
            >
              <h3 className="text-lg font-medium text-gray-900">Đánh giá (0)</h3>
              <ChevronRight 
                size={20} 
                className={`transform transition-transform ${showReviews ? 'rotate-90' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h3 className="text-2xl font-light text-gray-900 mb-8">SẢN PHẨM TƯƠNG TỰ</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedRooms.map((relatedRoom) => (
              <div key={relatedRoom.id} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img 
                    src={relatedRoom.image}
                    alt={relatedRoom.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-medium text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {relatedRoom.title}
                </h4>
                <p className="text-orange-400 font-light">{relatedRoom.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-300 shadow-lg z-50"
      >
        <ArrowUp size={20} className="text-gray-600" />
      </button>

      <Footer />
    </div>
  );
};

export default RoomDetailPage;