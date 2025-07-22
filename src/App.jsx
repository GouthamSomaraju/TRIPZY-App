import React from 'react';
import { useLocation } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import ContactUs from './Contact';
import About from './About';
import Packages from './Packages';
import CategoryPage from './CategoryPage';
import ProductDetails from './ProductDetails';
import UpcomingPlaces from './UpcomingPlaces';

function AppContent() {
  const location = useLocation();
  // Remove login/signup from hideLayoutRoutes
  const hideLayoutRoutes = [];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/upcoming-places" element={<UpcomingPlaces />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
      </Routes>
      {!shouldHideLayout && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
