import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface NewsPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ language, setLanguage }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const content = {
    de: {
      title: "TIN TỨC",
      searchPlaceholder: "Tìm kiếm...",
      latestPosts: "BÀI VIẾT MỚI NHẤT"
    },
    en: {
      title: "NEWS",
      searchPlaceholder: "Search...",
      latestPosts: "LATEST POSTS"
    }
  };

  const newsArticles = [
    {
      id: 1,
      title: "Du lịch Đà Nẵng : 10 điểm du lịch tham quan hấp dẫn nhất",
      excerpt: "1. Vinpearl Land Tọa lạc trên đảo Hòn Tre với những bãi biển trong xanh...",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "07",
      month: "TH12",
      slug: "du-lich-da-nang-10-diem-du-lich-tham-quan-hap-dan-nhat"
    },
    {
      id: 2,
      title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z",
      excerpt: "Tổng quan du lịch Vũng Tàu Cách trung tâm thành phố Hồ Chí Minh c...",
      image: "https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "06",
      month: "TH12",
      slug: "du-lich-vung-tau-cam-nang-tu-a-den-z"
    },
    {
      id: 3,
      title: "Du lịch Phú Quốc: Cẩm nang từ A đến Z",
      excerpt: "Tổng quan du lịch Phú Quốc Phú Quốc là quần đảo xinh đẹp nằm sâ...",
      image: "https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      date: "06",
      month: "TH12",
      slug: "du-lich-phu-quoc-cam-nang-tu-a-den-z"
    }
  ];

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

  const handleArticleClick = (slug: string) => {
    navigate(`/news/${slug}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header language={language} setLanguage={setLanguage} />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gray-800 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-light mb-4">{content[language].title}</h1>
        </div>
      </section>

      {/* News Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="grid md:grid-cols-3 gap-8">
                {newsArticles.map((article) => (
                  <article 
                    key={article.id}
                    className="group cursor-pointer"
                    onClick={() => handleArticleClick(article.slug)}
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img 
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Date Badge */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-2 text-center">
                        <div className="text-2xl font-bold">{article.date}</div>
                        <div className="text-xs">{article.month}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </article>
                ))}
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
                      onClick={() => handleArticleClick(`post-${post.id}`)}
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

export default NewsPage;