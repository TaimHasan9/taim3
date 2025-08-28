import React, { useState } from 'react';
import { HiFilter, HiSortAscending } from 'react-icons/hi';

const JewelryPage = () => {
  const [sortOption, setSortOption] = useState('featured');
  
  const products = [
    {
      id: 1,
      name: "Diamond Necklace",
      price: 299.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Necklaces",
      discount: 10
    },
    {
      id: 2,
      name: "Gold Bracelet",
      price: 199.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Bracelets",
      discount: 15
    },
    {
      id: 3,
      name: "Pearl Earrings",
      price: 89.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      category: "Earrings",
      discount: 5
    },
    {
      id: 4,
      name: "Silver Ring",
      price: 49.99,
      rating: 4.5,
      image: "https://assets.ajio.com/medias/sys_master/root/20220722/Afjv/62dace3baeb26921af909b45/-473Wx593H-469209833-silver-MODEL.jpg",
      category: "Rings",
      discount: 0
    },
    {
      id: 5,
      name: "Charm Bracelet",
      price: 129.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
      category: "Bracelets",
      discount: 20
    },
    {
      id: 6,
      name: "Crystal Pendant",
      price: 79.99,
      rating: 4.4,
      image: "https://i.etsystatic.com/35897801/r/il/dd9897/4259858906/il_570xN.4259858906_lvn9.jpg",
      category: "Pendants",
      discount: 10
    },
    {
      id: 7,
      name: "Diamond Stud Earrings",
      price: 249.99,
      rating: 4.9,
      image: "https://www.jhollywooddesigns.com/cdn/shop/products/6.5RoundEarrings_d1be5cbf-0c7d-4e89-a789-dcb10800347c.jpg?v=1714575864",
      category: "Earrings",
      discount: 15
    },
    {
      id: 8,
      name: "Gold Chain",
      price: 159.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
      category: "Necklaces",
      discount: 5
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Jewelry Collection</h1>
      <p className="mb-12 text-center text-gray-600 dark:text-gray-400">Discover our exquisite jewelry pieces</p>
      
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
            <h3 className="mb-3 text-lg font-medium text-gray-800 dark:text-white">Material</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="material-gold" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="material-gold" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Gold</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="material-silver" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="material-silver" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Silver</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="material-diamond" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="material-diamond" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Diamond</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="material-pearl" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="material-pearl" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Pearl</label>
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
                <label htmlFor="price-low" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$0 - $100</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-medium" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-medium" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$100 - $200</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="price-high" name="price" className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
                <label htmlFor="price-high" className="ml-2 text-sm text-gray-700 dark:text-gray-300">$200+</label>
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

export default JewelryPage;