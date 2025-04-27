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
import Login from './Login-Signup/Login'; 
import SignUp from './Login-Signup/signup';

function AppContent() {
  const location = useLocation();
  const hideLayoutRoutes = ['/login', '/signup'];

  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
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
