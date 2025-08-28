// pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Products from '../components/Products';

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Products />
    </main>
  );
};

export default Home;