import React, { useState } from 'react';
import { HiFilter, HiSortAscending } from 'react-icons/hi';

const PerfumePage = () => {
  const [sortOption, setSortOption] = useState('featured');
  
  const products = [
    {
      id: 1,
      name: "Floral Essence",
      price: 79.99,
      rating: 4.8,
      image: "https://cdn.igp.com/f_auto,q_auto,t_pnopt19prodlp/products/p-floral-essence-205424-1.jpg",
      category: "Women's Perfume",
      discount: 15
    },
    {
      id: 2,
      name: "Woody Mystique",
      price: 89.99,
      rating: 4.6,
      image: "https://www.houbigant-parfum.com/cdn/shop/products/HP2000x2000_271819c7-e4d8-430d-824e-4a5df772393b_800x.png?v=1678266715",
      category: "Men's Cologne",
      discount: 10
    },
    {
      id: 3,
      name: "Citrus Blossom",
      price: 69.99,
      rating: 4.7,
      image: "https://www.thebodyshop.com.my/img/resize/565?url=%2Fpub/media%2Fcatalog%2Fproduct%2Fs%2Fs%2Fssmyzone-1683653805-1034085_lifesty3jpg_2.jpg",
      category: "Unisex",
      discount: 5
    },
    {
      id: 4,
      name: "Oriental Nights",
      price: 99.99,
      rating: 4.9,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1T7_LLSn8mHpfFhNvIYaFWnneTqFfZ1m9ww&s",
      category: "Women's Perfume",
      discount: 20
    },
    {
      id: 5,
      name: "Aqua Fresh",
      price: 59.99,
      rating: 4.5,
      image: "https://rafahia.in/wp-content/uploads/2024/11/52-1-600x600.webp",
      category: "Men's Cologne",
      discount: 0
    },
    {
      id: 6,
      name: "Vanilla Dream",
      price: 74.99,
      rating: 4.7,
      image: "https://shop.simon.com/cdn/shop/products/476eecdd371b41039d6f4938d6ccba97_1080x.jpg?v=1686258327",
      category: "Women's Perfume",
      discount: 10
    },
    {
      id: 7,
      name: "Spice Route",
      price: 84.99,
      rating: 4.8,
      image: "https://www.theperfumist.com/cdn/shop/files/IMG_8637s.png?v=1739028687",
      category: "Men's Cologne",
      discount: 15
    },
    {
      id: 8,
      name: "Gardenia Bloom",
      price: 94.99,
      rating: 4.9,
      image: "https://www.no-angel.co.uk/cdn/shop/files/7CA1CC57-4E48-4025-BFF1-B2BBF0C0999A.jpg?v=1725374385&width=1080",
      category: "Women's Perfume",
      discount: 25
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Perfume Collection</h1>
      <p className="mb-12 text-center text-gray-600 dark:text-gray-400">Discover our exquisite fragrances</p>
      
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar Filters */}
        <div className="w-full p-6 bg-white rounded-lg shadow-md md:w-1/4 dark:bg-gray-800 h-fit">
          <div className="flex items-center mb-6">
            <HiFilter className="w-5 h-5 mr-2 text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Filters</h2>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-white">Category</h3>
            <div className="space-y-2">
              {[...new Set(products.map(p => p.category))].map(category => (
                <div key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`category-${category}`}
                    className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                  />
                  <label htmlFor={`category-${category}`} className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-white">Scent Type</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="scent-floral" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="scent-floral" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Floral</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="scent-woody" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="scent-woody" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Woody</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="scent-citrus" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="scent-citrus" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Citrus</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="scent-oriental" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="scent-oriental" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Oriental</label>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-white">Price Range</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="radio" id="price-all" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-all" className="ml-2 text-sm text-gray-700 dark:text-gray-300">All Prices</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-low" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-low" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$0 - $75</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-medium" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-medium" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$75 - $100</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-high" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-high" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$100+</label>
              </div>
            </div>
          </div>
          
          <button className="w-full px-4 py-2 text-white transition-colors duration-300 bg-indigo-600 rounded-md hover:bg-indigo-700">
            Apply Filters
          </button>
        </div>
        
        {/* Products Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 dark:text-gray-400">Showing {products.length} products</p>
            <div className="flex items-center">
              <HiSortAscending className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="px-3 py-2 text-gray-800 bg-white border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Customer Rating</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map(product => (
              <div key={product.id} className="relative overflow-hidden transition-all duration-500 bg-white rounded-lg shadow-md group dark:bg-gray-800 hover:shadow-xl">
                {product.discount > 0 && (
                  <div className="absolute z-10 px-2 py-1 text-xs font-bold text-white bg-red-500 rounded top-2 left-2">
                    {product.discount}% OFF
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full transition-transform duration-700 h-60 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">{product.category}</p>
                  <h3 className="mb-2 font-semibold text-gray-800 dark:text-white">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                        ★
                      </span>
                    ))}
                    <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">${product.price}</span>
                      {product.discount > 0 && (
                        <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">
                          ${(product.price / (1 - product.discount/100)).toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button className="px-3 py-1 text-sm text-white transition-colors duration-300 bg-indigo-600 rounded hover:bg-indigo-700">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfumePage;