import React from 'react';
import { HiCalendar, HiUser, HiArrowRight } from 'react-icons/hi';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Summer Fashion Trends 2024",
      excerpt: "Discover the latest summer fashion trends that will keep you stylish and comfortable all season long.",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "June 15, 2024",
      author: "Sarah Johnson",
      category: "Fashion"
    },
    {
      id: 2,
      title: "How to Accessorize Your Outfit",
      excerpt: "Learn the art of accessorizing to elevate your everyday outfits and make a statement with your style.",
      image: "https://i0.wp.com/zaloraphilippinesblog.wpcomstaging.com/wp-content/uploads/2024/11/Untitled-design-18.png?resize=720%2C405&ssl=1",
      date: "May 28, 2025",
      author: "Michael Chen",
      category: "Style Tips"
    },
    {
      id: 3,
      title: "The History of Denim",
      excerpt: "Explore the fascinating history of denim and how it became a timeless fashion staple across the world.",
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      date: "April 12, 2025",
      author: "Emma Rodriguez",
      category: "Fashion History"
    },
    {
      id: 4,
      title: "Sustainable Fashion Choices",
      excerpt: "Learn how to make eco-friendly fashion choices that are good for the planet and your wardrobe.",
      image: "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      date: "March 22, 2025",
      author: "David Kim",
      category: "Sustainability"
    },
    {
      id: 5,
      title: "Winter Layering Techniques",
      excerpt: "Master the art of layering to stay warm and stylish during the colder months without sacrificing comfort.",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
      date: "February 8, 2025",
      author: "Jessica Williams",
      category: "Style Tips"
    },
    {
      id: 6,
      title: "The Power of Color in Fashion",
      excerpt: "Discover how different colors can influence your mood and make a powerful statement with your clothing choices.",
      image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      date: "January 15, 2025",
      author: "Alex Turner",
      category: "Fashion Psychology"
    }
  ];

  return (
    <div className="container px-4 py-12 mx-auto">
      <h1 className="mb-4 text-4xl font-bold text-center text-gray-800 dark:text-white">Fashion Blog</h1>
      <p className="mb-12 text-center text-gray-600 dark:text-gray-400">Stay updated with the latest fashion trends, tips, and insights</p>
      
      {/* Featured Post */}
      <div className="mb-16">
        <div className="overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
          <img 
            src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80" 
            alt="Featured Post"
            className="object-cover w-full h-96"
          />
          <div className="p-8">
            <div className="flex items-center mb-4">
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Featured</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <HiCalendar className="w-4 h-4 mr-1" />
                July 10, 2023
              </span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <HiUser className="w-4 h-4 mr-1" />
                Olivia Parker
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800 dark:text-white">The Future of Fashion: Trends to Watch in 2023</h2>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Explore the emerging fashion trends that are set to define the rest of 2023 and beyond. From sustainable materials to bold color choices, discover what's next in the world of fashion.
            </p>
            <button className="inline-flex items-center font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
              Read More
              <HiArrowRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map(post => (
          <div key={post.id} className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <div className="flex items-center mb-3">
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{post.category}</span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <HiCalendar className="w-3 h-3 mr-1" />
                  {post.date}
                </span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-800 dark:text-white">{post.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <HiUser className="w-4 h-4 mr-1" />
                  {post.author}
                </span>
                <button className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300">
                  Read More
                  <HiArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Newsletter Subscription */}
      <div className="p-8 mt-16 text-center rounded-lg bg-indigo-50 dark:bg-gray-800">
        <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-white">Subscribe to Our Newsletter</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">Stay updated with the latest fashion trends, exclusive offers, and style tips.</p>
        <div className="flex max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-l-lg dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
          />
          <button className="px-6 py-2 text-white transition-colors duration-300 bg-indigo-600 rounded-r-lg hover:bg-indigo-700">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;