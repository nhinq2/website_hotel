import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface NewsDetailPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ language, setLanguage }) => {
  const { slug } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const content = {
    de: {
      searchPlaceholder: "Tìm kiếm...",
      latestPosts: "BÀI VIẾT MỚI NHẤT",
      category: "HAWAII, TIN TỨC"
    },
    en: {
      searchPlaceholder: "Search...",
      latestPosts: "LATEST POSTS",
      category: "HAWAII, NEWS"
    }
  };

  const article = {
    title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
    category: content[language].category,
    date: "07",
    month: "TH12",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1000&h=600&fit=crop",
    content: `
      <p>1. Vinpearl Land Tọa lạc trên đảo Hòn Tre với những bãi biển trong xanh, Vinpearl Land Nha Trang là một trong những khu du lịch nghỉ dưỡng hàng đầu Việt Nam.</p>
      
      <p>Với hệ thống trò chơi hiện đại, công viên nước, thủy cung và nhiều hoạt động giải trí khác, đây là điểm đến lý tưởng cho cả gia đình.</p>
      
      <p>Ngoài ra, du khách còn có thể trải nghiệm cáp treo vượt biển dài nhất thế giới để di chuyển từ đất liền ra đảo.</p>
      
      <h3>2. Bãi biển Mỹ Khê</h3>
      <p>Bãi biển Mỹ Khê được Forbes bình chọn là một trong những bãi biển quyến rũ nhất hành tinh. Với bờ cát trắng mịn, nước biển trong xanh và nhiều hoạt động thể thao biển hấp dẫn.</p>
      
      <h3>3. Cầu Rồng</h3>
      <p>Cầu Rồng là biểu tượng của thành phố Đà Nẵng với thiết kế độc đáo hình con rồng. Vào cuối tuần, du khách có thể chứng kiến màn phun lửa và phun nước từ đầu rồng.</p>
    `
  };

  const recentPosts = [
    {
      id: 1,
      title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
      date: "07",
      month: "TH12",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=100&h=80&fit=crop"
    },
    {
      id: 2,
      title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z",
      date: "06",
      month: "TH12",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=100&h=80&fit=crop"
    },
    {
      id: 3,
      title: "Du lịch Phú Quốc: Cẩm nang từ A đến Z",
      date: "06",
      month: "TH12",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=100&h=80&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Article Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <div className="mb-8">
                <p className="text-sm text-gray-600 mb-4 tracking-wider">
                  {article.category}
                </p>
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 leading-tight">
                  {article.title}
                </h1>
              </div>

              {/* Featured Image */}
              <div className="relative mb-8">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                
                {/* Date Badge */}
                <div className="absolute top-6 left-6 bg-black/70 text-white px-4 py-3 text-center">
                  <div className="text-3xl font-bold">{article.date}</div>
                  <div className="text-sm">{article.month}</div>
                </div>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Search Box */}
              <div className="mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={content[language].searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pr-12 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-800 flex items-center justify-center">
                    <Search size={16} className="text-white" />
                  </button>
                </div>
              </div>

              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-6 tracking-wide">
                  {content[language].latestPosts}
                </h3>
                
                <div className="space-y-6">
                  {recentPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="flex space-x-4 cursor-pointer group"
                    >
                      <div className="relative flex-shrink-0">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div className="absolute top-1 left-1 bg-black/70 text-white px-1 py-0.5 text-center text-xs">
                          <div className="text-sm font-bold">{post.date}</div>
                          <div className="text-xs">{post.month}</div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                          {post.title}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsDetailPage;