import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus, HiMinus, HiTrash, HiArrowLeft } from 'react-icons/hi';
import { useCart } from '../hooks/useCart'; // Correct import path

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
          <Link
            to="/categories"
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-md transition-colors duration-300"
          >
            <HiArrowLeft className="w-5 h-5 mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="lg:w-2/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in Cart
              </h2>
              <button
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm font-medium"
              >
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {cartItems.map(item => (
                <div key={item.id} className="p-4 flex flex-col sm:flex-row items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
                  />
                  
                  <div className="flex-1 mb-4 sm:mb-0">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {item.category}
                    </p>
                    <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        <HiMinus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 text-gray-800 dark:text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                      >
                        <HiPlus className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      aria-label="Remove item"
                    >
                      <HiTrash className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:w-1/3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                <span className="text-gray-800 dark:text-white">${getCartTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                <span className="text-gray-800 dark:text-white">$10.00</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Tax</span>
                <span className="text-gray-800 dark:text-white">${(getCartTotal() * 0.1).toFixed(2)}</span>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between">
                <span className="text-lg font-semibold text-gray-800 dark:text-white">Total</span>
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  ${(getCartTotal() + 10 + getCartTotal() * 0.1).toFixed(2)}
                </span>
              </div>
            </div>
            
           
                  <Link
  to="/checkout"
  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 text-center block"
>
  Proceed to Checkout
</Link>
            
            <Link
              to="/categories"
              className="inline-flex items-center justify-center w-full text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium py-2"
            >
              <HiArrowLeft className="w-5 h-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;