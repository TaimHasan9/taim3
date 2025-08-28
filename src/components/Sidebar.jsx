// components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiX, HiHome, HiShoppingBag, HiUser, HiCollection, HiTag, HiBookOpen, HiFire } from 'react-icons/hi';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'HOME', path: '/', icon: HiHome },
    { name: 'CATEGORIES', path: '/categories', icon: HiCollection },
    { name: "MEN'S", path: '/mens', icon: HiUser },
    { name: "WOMEN'S", path: '/womens', icon: HiUser },
    { name: 'JEWELRY', path: '/jewelry', icon: HiShoppingBag },
    { name: 'PERFUME', path: '/perfume', icon: HiShoppingBag },
    { name: 'BLOG', path: '/blog', icon: HiBookOpen },
    { name: 'HOT OFFERS', path: '/offers', icon: HiFire },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Ajooni</div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === item.path
                        ? 'bg-indigo-600 text-white'
                        : 'text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5 mr-3" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;