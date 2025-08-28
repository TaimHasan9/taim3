// pages/AboutPage.jsx
import React from 'react';
import { HiCheck, HiStar, HiUsers, HiGlobe, HiHeart } from 'react-icons/hi';

const AboutPage = () => {
  const features = [
    {
      title: "Quality Products",
      description: "We source only the highest quality products from trusted suppliers around the world.",
      icon: <HiStar className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Customer Satisfaction",
      description: "Our customers are our top priority. We strive to provide exceptional service at all times.",
      icon: <HiUsers className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Global Shipping",
      description: "We ship to over 100 countries worldwide with fast and reliable delivery options.",
      icon: <HiGlobe className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Ethical Practices",
      description: "We are committed to ethical business practices and sustainable sourcing.",
      icon: <HiHeart className="w-8 h-8 text-indigo-600" />
    }
  ];

  const values = [
    "Quality above all else",
    "Customer-centric approach",
    "Innovation and creativity",
    "Transparency and honesty",
    "Social and environmental responsibility"
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Ajooni</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          We are a passionate team dedicated to bringing you the best fashion products from around the world.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Our Story"
              className="rounded-lg shadow-md w-full h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Founded in 2015, Ajooni started as a small boutique with a big dream: to make high-quality fashion accessible to everyone. 
              What began as a single store has now grown into a global e-commerce platform serving customers worldwide.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Our journey has been guided by a simple philosophy: provide exceptional products at fair prices, backed by outstanding customer service. 
              We carefully curate our collections to ensure that every item meets our strict quality standards.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Today, we continue to innovate and expand our offerings while staying true to our core values of quality, integrity, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-indigo-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Our Values</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {values.map((value, index) => (
              <li key={index} className="flex items-start">
                <HiCheck className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-lg text-gray-700 dark:text-gray-300">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Michael Chen", role: "Head of Design", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Emma Rodriguez", role: "Marketing Director", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "David Kim", role: "Product Manager", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Jessica Williams", role: "Customer Support", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" },
            { name: "Alex Turner", role: "Logistics Manager", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" }
          ].map((member, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">{member.name}</h3>
                <p className="text-indigo-600 dark:text-indigo-400">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;