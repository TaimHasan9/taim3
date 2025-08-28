import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ChatWidget from './components/ChatWidget';
import Home from './pages/Home';
import CategoriesPage from './pages/CategoriesPage';
import MensPage from './pages/MensPage';
import WomensPage from './pages/WomensPage';
import JewelryPage from './pages/JewelryPage';
import PerfumePage from './pages/PerfumePage';
import BlogPage from './pages/BlogPage';
import OffersPage from './pages/OffersPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import CheckoutPage from './pages/CheckoutPage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar 
              darkMode={darkMode} 
              setDarkMode={setDarkMode}
              setIsSidebarOpen={setIsSidebarOpen}
            />
            <Sidebar 
              isOpen={isSidebarOpen} 
              setIsOpen={setIsSidebarOpen}
            />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/mens" element={<MensPage />} />
                <Route path="/womens" element={<WomensPage />} />
                <Route path="/jewelry" element={<JewelryPage />} />
                <Route path="/perfume" element={<PerfumePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/offers" element={<OffersPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
              </Routes>
            </main>
            <Footer />
            <ChatWidget />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;