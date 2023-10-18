import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home-page';
import Building from './pages/building-page';
import Apartments from './pages/apartments-page';
import Gallery from './pages/gallery-page/idex';
import Neighbourhood from './pages/neighbourhood-page';
import Amenities from './pages/amenities-page';
import Contact from './pages/contact-page';
import Navbar from './components/navbar';
import Footer from './components/footer';
import './App.scss';

function App() {
  return (
    <Router>
      <div className='wrapper'>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/thebuilding" element={<Building />} /> */}
        <Route path="/apartments" element={<Apartments />} />
        <Route path="/gallery" element={<Gallery category="All" />} />
        <Route path="/gallery/all" element={<Gallery category="All" />} />
        <Route path="/gallery/interior" element={<Gallery category="Interior" />} />
        <Route path="/gallery/exterior" element={<Gallery category="Exterior" />} />
        <Route path="/neighbourhood" element={<Neighbourhood />} />
        <Route path="/amenities" element={<Amenities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
