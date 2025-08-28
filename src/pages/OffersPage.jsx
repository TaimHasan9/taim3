import React, { useState, useEffect } from 'react';
import { HiClock, HiFire, HiTag } from 'react-icons/hi';

const OffersPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(0, 0, 0, 0);
      
      const difference = tomorrow - now;
      
      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const hotDeals = [
    {
      id: 1,
      name: "Summer Collection Sale",
      discount: 50,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      originalPrice: 199.99,
      discountedPrice: 99.99,
      itemsLeft: 15
    },
    {
      id: 2,
      name: "Winter Wear Special",
      discount: 40,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      originalPrice: 149.99,
      discountedPrice: 89.99,
      itemsLeft: 8
    },
    {
      id: 3,
      name: "Accessories Bundle",
      discount: 60,
      image: "https://images.unsplash.com/photo-1590649880760-2d4b0f523de7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      originalPrice: 179.99,
      discountedPrice: 71.99,
      itemsLeft: 5
    }
  ];

  const specialOffers = [
    {
      id: 1,
      name: "Buy 2 Get 1 Free",
      description: "On all t-shirts and casual wear",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80",
      validUntil: "2023-08-31"
    },
    {
      id: 2,
      name: "Free Shipping",
      description: "On orders over $50",
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      validUntil: "2023-12-31"
    },
    {
      id: 3,
      name: "20% Off First Order",
      description: "For new customers",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      validUntil: "2023-09-30"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">Hot Offers & Deals</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Don't miss out on these limited-time offers</p>
      
      {/* Flash Sale Section */}
      <div className="mb-16">
        <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <HiFire className="w-8 h-8 text-red-600 mr-2" />
            <h2 className="text-2xl font-bold text-red-700 dark:text-red-400">Flash Sale</h2>
          </div>
          <p className="text-red-600 dark:text-red-300 mb-4">These deals expire in:</p>
          <div className="flex space-x-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-md">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.hours.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500 dark:text-red-300">Hours</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-md">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.minutes.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500 dark:text-red-300">Minutes</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-md">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">{timeLeft.seconds.toString().padStart(2, '0')}</div>
              <div className="text-xs text-red-500 dark:text-red-300">Seconds</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hotDeals.map(deal => (
            <div key={deal.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={deal.image} 
                  alt={deal.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {deal.discount}% OFF
                </div>
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  Only {deal.itemsLeft} left
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{deal.name}</h3>
                <div className="flex items-center mb-3">
                  <span className="text-xl font-bold text-red-600 dark:text-red-400">${deal.discountedPrice}</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">${deal.originalPrice}</span>
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Special Offers Section */}
      <div className="mb-16">
        <div className="flex items-center mb-8">
          <HiTag className="w-8 h-8 text-indigo-600 mr-2" />
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Special Offers</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialOffers.map(offer => (
            <div key={offer.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img 
                src={offer.image} 
                alt={offer.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{offer.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{offer.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <HiClock className="w-4 h-4 mr-1" />
                    Valid until: {offer.validUntil}
                  </div>
                  <button className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded transition-colors duration-300">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Newsletter Subscription */}
      <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Never Miss a Deal</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">Subscribe to our newsletter and be the first to know about exclusive offers and discounts.</p>
        <div className="max-w-md mx-auto flex">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          />
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-r-lg transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default OffersPage;