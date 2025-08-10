import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ language, setLanguage }) => {
  const content = {
    de: {
      title: "GIỚI THIỆU",
      breadcrumb: "TRANG CHỦ / GIỚI THIỆU",
      mission: {
        title: "MỤC TIÊU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      },
      history: {
        title: "SỬ MỆNH",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      },
      future: {
        title: "TƯƠNG LAI",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      }
    },
    en: {
      title: "ABOUT US",
      breadcrumb: "HOME / ABOUT US",
      mission: {
        title: "MISSION",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      },
      history: {
        title: "HISTORY",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      },
      future: {
        title: "FUTURE",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      }
    }
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
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Three Columns Section */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                {content[language].mission.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content[language].mission.description}
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                {content[language].history.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content[language].history.description}
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-wide">
                {content[language].future.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {content[language].future.description}
              </p>
            </div>
          </div>

          {/* Large Image Section */}
          <div className="w-full">
            <div 
              className="h-96 md:h-[500px] bg-cover bg-center rounded-lg shadow-lg"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop')`
              }}
            ></div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;