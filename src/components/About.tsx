import React from 'react';

const About = ({ language = 'de' }: { language?: string }) => {
  const content = {
    de: {
      title: "Không gian sống đỉnh cao",
      subtitle: "TẠI HỒ CHÍ MINH",
      description1: "Khách sạn Đệ Nhất tọa lạc gần sân bay quốc tế và quốc nội Tân Sơn Nhất của thành phố Hồ Chí Minh và khu vực phía Nam. Là cánh cửa đầu tiên của TP. HCM mở ra đón bạn bè quốc tế đến với các di sản thiên nhiên - văn hóa nổi tiếng thế giới và các trung tâm thương mại lớn của Việt Nam.",
      description2: "Khách sạn được chia thành 5 hạng phòng khác nhau, được du khách yêu thích bởi sự sang sẻ và dịch vụ phòng hoàn hảo. Ngoài ra, khách sạn Đệ Nhất còn trang bị phòng tập thể hình, hồ bơi, 3 sân tennis, CLB trò chơi có thưởng (chỉ dành cho khách nước ngoài) & khu mát-xa - xông hơi để phục vụ khách lưu trú.",
      buttonText: "KHÁM PHÁ THÊM"
    },
    en: {
      title: "Premium Living Space",
      subtitle: "IN HO CHI MINH CITY",
      description1: "The First Hotel is located near Tan Son Nhat international and domestic airport of Ho Chi Minh City and the southern region. It is the first gateway of Ho Chi Minh City opening to welcome international friends to the world-famous natural and cultural heritage sites and major commercial centers of Vietnam.",
      description2: "The hotel is divided into 5 different room categories, loved by guests for their elegance and perfect room service. In addition, the First Hotel is also equipped with a gym, swimming pool, 3 tennis courts, a gaming club (for foreign guests only) & massage - sauna area to serve guests.",
      buttonText: "DISCOVER MORE"
    }
  };

  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4">
            {content[language].title}
          </h2>
          <p className="text-lg text-gray-600 font-light tracking-wider">
            {content[language].subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <p className="text-gray-700 text-base leading-relaxed">
              {content[language].description1}
            </p>
            
            <p className="text-gray-700 text-base leading-relaxed">
              {content[language].description2}
            </p>

            <div className="pt-4">
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 text-sm font-semibold tracking-widest hover:bg-gray-900 hover:text-white transition-all duration-300">
                {content[language].buttonText}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop')`
                }}
              ></div>
            </div>
            <div className="space-y-4 pt-8">
              <div 
                className="h-64 bg-cover bg-center rounded-lg"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop')`
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;