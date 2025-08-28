import React, { useState } from 'react';
import { HiFilter } from 'react-icons/hi';

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    {
      id: 1,
      name: "DRESS & FROCK",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      count: "12 products"
    },
    {
      id: 2,
      name: "WINTER WEAR",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      count: "23 products"
    },
    {
      id: 3,
      name: "GLASSES & LENS",
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      count: "34 products"
    },
    {
      id: 4,
      name: "SHORTS & JEANS",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      count: "45 products"
    },
    {
      id: 5,
      name: "T-SHIRTS",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      count: "56 products"
    },
    {
      id: 6,
      name: "JACKETS",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      count: "67 products"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">All Categories</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Discover our wide range of fashion categories</p>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-fit">
          <div className="flex items-center mb-6">
            <HiFilter className="w-5 h-5 mr-2 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Filters</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Categories</h3>
            <div className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    id={`category-${category.id}`}
                    name="category"
                    value={category.name.toLowerCase()}
                    checked={selectedCategory === category.name.toLowerCase()}
                    onChange={() => setSelectedCategory(category.name.toLowerCase())}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor={`category-${category.id}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {category.name} ({category.count})
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3 text-gray-800 dark:text-white">Price Range</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="radio" id="price-all" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-all" className="ml-2 text-sm text-gray-700 dark:text-gray-300">All Prices</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-low" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-low" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$0 - $50</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-medium" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-medium" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$50 - $100</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-high" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-high" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$100+</label>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
            Apply Filters
          </button>
        </div>
        
        {/* Categories Grid */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <div key={category.id} className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-500">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
                  <p className="text-gray-200">{category.count}</p>
                  <button className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-md font-medium hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    Explore
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{category.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{category.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;