import React, { useState } from 'react';
import { HiFilter, HiSortAscending } from 'react-icons/hi';

const WomensPage = () => {
  const [sortOption, setSortOption] = useState('featured');
  
  const products = [
    {
      id: 1,
      name: "Women's Summer Dress",
      price: 59.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Dresses",
      discount: 20
    },
    {
      id: 2,
      name: "Elegant Blouse",
      price: 45.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Tops",
      discount: 15
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 129.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2035&q=80",
      category: "Accessories",
      discount: 10
    },
    {
      id: 4,
      name: "Casual Jeans",
      price: 49.99,
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Bottoms",
      discount: 5
    },
    {
      id: 5,
      name: "Evening Gown",
      price: 199.99,
      rating: 4.9,
      image: "https://samyakkclothing.files.wordpress.com/2024/04/image-175.jpeg",
      category: "Formal",
      discount: 25
    },
    {
      id: 6,
      name: "Summer Skirt",
      price: 39.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Skirts",
      discount: 15
    },
    {
      id: 7,
      name: "Winter Sweater",
      price: 65.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
      category: "Sweaters",
      discount: 10
    },
    {
      id: 8,
      name: "High Heels",
      price: 89.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Shoes",
      discount: 0
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Women's Collection</h1>
      <p className="mb-12 text-center text-gray-600 dark:text-gray-400">Discover the latest trends in women's fashion</p>
      
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
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-white">Price Range</h3>
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

export default WomensPage;