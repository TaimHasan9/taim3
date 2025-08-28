// components/ProductCard.jsx
import React from 'react';
import { HiHeart, HiShoppingCart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    // Show a quick confirmation (optional)
    const button = e.currentTarget;
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.classList.add('bg-green-600');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-600');
    }, 1000);
  };

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl overflow-hidden transition-all duration-500">
      {product.discount > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
          {product.discount}% OFF
        </div>
      )}
      
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4">
          <button 
            onClick={handleAddToCart}
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300 transform hover:scale-110"
            aria-label="Add to cart"
          >
            <HiShoppingCart className="w-5 h-5" />
          </button>
          <button className="bg-white text-gray-800 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-300 transform hover:scale-110" aria-label="Add to favorites">
            <HiHeart className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{product.category}</p>
        <h3 className="font-semibold text-gray-800 dark:text-white mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`text-sm ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            >
              ★
            </span>
          ))}
          <span className="text-sm text-gray-600 dark:text-gray-400 ml-2">({product.rating})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">${product.price.toFixed(2)}</span>
            {product.discount > 0 && (
              <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                ${(product.price / (1 - product.discount/100)).toFixed(2)}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;