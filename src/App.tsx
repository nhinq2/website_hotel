import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Feedback from './components/Feedback';
import Offers from './components/Offers';
import Rooms from './components/Rooms';
import Footer from './components/Footer';
import RoomsPage from './pages/RoomsPage';
import RoomDetailPage from './pages/RoomDetailPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';


function App() {
  const [language, setLanguage] = useState('de');

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Header language={language} setLanguage={setLanguage} />
              <Hero language={language} />
              <About language={language} />
              <Rooms language={language} />
              <Gallery language={language} />
              <Offers language={language} />
              <Feedback language={language} />
              <Footer />
            </>
          } />
          <Route path="/rooms" element={
            <RoomsPage language={language} setLanguage={setLanguage} />
          } />
          <Route path="/rooms/:slug" element={
            <RoomDetailPage language={language} setLanguage={setLanguage} />
          } />
          <Route path="/news" element={
            <NewsPage language={language} setLanguage={setLanguage} />
          } />
          <Route path="/news/:slug" element={
            <NewsDetailPage language={language} setLanguage={setLanguage} />
          } />
          <Route path="/about" element={
            <AboutPage language={language} setLanguage={setLanguage} />
          } />
        <Route path="/contact" element={
            <ContactPage language={language} setLanguage={setLanguage} />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;