// components/Products.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Summer Floral Dress",
      price: 49.99,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Dress & Frock",
      discount: 20
    },
    {
      id: 2,
      name: "Winter Warm Jacket",
      price: 89.99,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Winter Wear",
      discount: 15
    },
    {
      id: 3,
      name: "Designer Sunglasses",
      price: 59.99,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
      category: "Glasses & Lens",
      discount: 10
    },
    {
      id: 4,
      name: "Denim Jeans",
      price: 39.99,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Shorts & Jeans",
      discount: 25
    },
    {
      id: 5,
      name: "Elegant Evening Gown",
      price: 99.99,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      category: "Dress & Frock",
      discount: 30
    },
    {
      id: 6,
      name: "Winter Scarf",
      price: 24.99,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Winter Wear",
      discount: 10
    },
    {
      id: 7,
      name: "Reading Glasses",
      price: 29.99,
      rating: 4.0,
      image: "https://images.unsplash.com/photo-1508210063632-74fcf5f914ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80",
      category: "Glasses & Lens",
      discount: 5
    },
    {
      id: 8,
      name: "Designer Shorts",
      price: 34.99,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      category: "Shorts & Jeans",
      discount: 15
    }
  ]);

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;