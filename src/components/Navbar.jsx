import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  HiMenu, 
  HiSearch, 
  HiShoppingCart, 
  HiUser, 
  HiMoon, 
  HiSun,
  HiLogout
} from 'react-icons/hi';
import { useCart } from '../hooks/useCart'; // Fixed import
import { useAuth } from '../hooks/useAuth'; // Fixed import

const Navbar = ({ darkMode, setDarkMode, setIsSidebarOpen }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const { getCartItemsCount } = useCart();
  const { user, logout } = useAuth();
  
  const navItems = [
    { name: 'HOME', path: '/' },
    { name: 'CATEGORIES', path: '/categories' },
    { name: "MEN'S", path: '/mens' },
    { name: "WOMEN'S", path: '/womens' },
    { name: 'JEWELRY', path: '/jewelry' },
    { name: 'PERFUME', path: '/perfume' },
    { name: 'BLOG', path: '/blog' },
    { name: 'HOT OFFERS', path: '/offers' },
    { name: 'ABOUT', path: '/about' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/categories?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300 bg-white shadow-md dark:bg-gray-800">
      <div className="container px-4 py-3 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 mr-2 text-gray-700 dark:text-white md:hidden"
            >
              <HiMenu className="w-6 h-6" />
            </button>
            <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Mr.Tom
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden space-x-1 md:flex">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              {isSearchOpen ? (
                <form onSubmit={handleSearch} className="absolute top-0 right-0 flex items-center p-2 mt-1 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="px-2 py-1 text-sm text-gray-800 bg-transparent border-b border-gray-300 dark:text-white dark:border-gray-600 focus:outline-none"
                  />
                  <button 
                    type="submit"
                    className="ml-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
                  >
                    <HiSearch className="w-5 h-5" />
                  </button>
                  <button 
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white"
                  >
                    ✕
                  </button>
                </form>
              ) : (
                <button 
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  <HiSearch className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400"
            >
              {darkMode ? (
                <HiSun className="w-5 h-5" />
              ) : (
                <HiMoon className="w-5 h-5" />
              )}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
              <HiShoppingCart className="w-5 h-5" />
              {getCartItemsCount() > 0 && (
                <span className="absolute flex items-center justify-center w-4 h-4 text-xs text-white bg-indigo-600 rounded-full -top-1 -right-1">
                  {getCartItemsCount()}
                </span>
              )}
            </Link>

            {/* User Account */}
            {user ? (
              <div className="relative group">
                <button className="p-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                  <HiUser className="w-5 h-5" />
                </button>
                <div className="absolute right-0 z-50 invisible w-48 py-1 mt-2 transition-all duration-300 bg-white rounded-md shadow-lg opacity-0 dark:bg-gray-800 group-hover:opacity-100 group-hover:visible">
                  <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-800 dark:text-white">Hello, {user.name}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <HiLogout className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login" className="p-2 text-gray-700 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400">
                <HiUser className="w-5 h-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;