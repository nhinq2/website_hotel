import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ContactPageProps {
  language: 'de' | 'en';
  setLanguage: (lang: 'de' | 'en') => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ language, setLanguage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = {
    de: {
      title: "LIÊN HỆ",
      breadcrumb: "TRANG CHỦ / LIÊN HỆ",
      contactForm: {
        title: "LIÊN HỆ VỚI CHÚNG TÔI",
        namePlaceholder: "Họ và tên",
        emailPlaceholder: "Email",
        messagePlaceholder: "Ghi chú",
        submitButton: "GỬI LIÊN HỆ"
      },
      contactInfo: {
        address: "Felchtaer Str. 2-4, 99974 Mühlhausen/Thüringen, Germany",
        phone: "091123 1234",
        email: "booking@luxury.hotel",
        website: "luxury.hotel",
        social: "luxury.hotel"
      }
    },
    en: {
      title: "CONTACT",
      breadcrumb: "HOME / CONTACT",
      contactForm: {
        title: "CONTACT US",
        namePlaceholder: "Full Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        submitButton: "SEND MESSAGE"
      },
      contactInfo: {
        address: "Felchtaer Str. 2-4, 99974 Mühlhausen/Thüringen, Germany",
        phone: "091123 1234",
        email: "booking@luxury.hotel",
        website: "luxury.hotel",
        social: "luxury.hotel"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
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
          <p className="text-sm tracking-widest opacity-80">{content[language].breadcrumb}</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Map Section */}
            <div className="space-y-6">
              <div className="bg-gray-100 h-96 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39994.010790525004!2d10.3941945!3d51.2075488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a492afaa1b1725%3A0xb6b9f848b97de5ff!2sBrauhaus%20zum%20L%C3%B6wen!5e0!3m2!1sen!2s!4v1754805064912!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin size={20} className="text-gray-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{content[language].contactInfo.address}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone size={20} className="text-gray-600 flex-shrink-0" />
                  <p className="text-gray-700">{content[language].contactInfo.phone}</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail size={20} className="text-gray-600 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-gray-700">{content[language].contactInfo.email}</p>
                    <p className="text-gray-700">{content[language].contactInfo.website}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <MapPin size={20} className="text-gray-600 flex-shrink-0" />
                  <p className="text-gray-700">{content[language].contactInfo.social}</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8 tracking-wide">
                {content[language].contactForm.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder={content[language].contactForm.namePlaceholder}
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder={content[language].contactForm.emailPlaceholder}
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-all duration-300"
                    required
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    placeholder={content[language].contactForm.messagePlaceholder}
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-all duration-300 resize-vertical"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-8 py-4 text-sm font-semibold tracking-widest hover:bg-gray-800 transition-all duration-300"
                >
                  {content[language].contactForm.submitButton}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;