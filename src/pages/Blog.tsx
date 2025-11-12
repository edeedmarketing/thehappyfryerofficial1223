import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Secret to Perfect Fish & Chips',
      excerpt: 'Discover the techniques and ingredients that make our fish and chips stand out from the rest.',
      image: '/image copy.png',
      author: 'The Happy Fryer Team',
      date: 'August 25, 2025',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Community Support: Our Recovery Story',
      excerpt: 'How the incredible Daisy Hill community helped us bounce back stronger than ever.',
      image: '/8983f1f7daec00917acb890e42fc03f0.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 22, 2025',
      readTime: '3 min read'
    },
    {
      id: 3,
      title: 'House-Made Sauces: The Difference is in the Details',
      excerpt: 'Learn about our commitment to making fresh tartare sauce, gravy, and coleslaw daily.',
      image: '/istockphoto-492508714-612x612.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 19, 2025',
      readTime: '4 min read'
    },
    {
      id: 4,
      title: 'Fresh Fish: From Ocean to Your Plate',
      excerpt: 'Our commitment to sourcing the freshest local seafood for our customers.',
      image: '/478307183_1110738027515570_3802962707143678618_n.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 15, 2025',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Fish */}
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-20 left-10 transform w-32 h-32 opacity-10 rotate-45 animate-pulse"
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-1/3 right-20 transform scale-x-[-1] w-48 h-48 opacity-5 rotate-12 animate-pulse"
          style={{ animationDelay: '2s' }}
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute bottom-20 left-1/4 transform w-40 h-40 opacity-8 -rotate-30 animate-pulse"
          style={{ animationDelay: '4s' }}
        />
        <img
          src="/blue-fish-drawing.png"
          alt=""
          className="absolute top-1/6 left-1/5 transform w-36 h-36 opacity-12 rotate-45 animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        
        {/* Animated Waves */}
        <svg
          className="absolute top-0 left-0 w-full h-40 opacity-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,0 L0,0 Z"
            fill="url(#wave-gradient-1)"
          />
          <defs>
            <linearGradient id="wave-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#1D4ED8" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
        
        <svg
          className="absolute bottom-0 right-0 w-full h-32 opacity-15 transform rotate-180"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave-gradient-2)"
          />
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E40AF" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#3730A3" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#312E81" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating Bubbles */}
        <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-blue-400 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '0s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-cyan-300 rounded-full opacity-30 animate-bounce" style={{ animationDelay: '1s', animationDuration: '3.5s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-8 h-8 bg-blue-300 rounded-full opacity-15 animate-bounce" style={{ animationDelay: '2s', animationDuration: '4.5s' }}></div>
        <div className="absolute top-1/5 right-1/3 w-5 h-5 bg-indigo-400 rounded-full opacity-25 animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3.8s' }}></div>
        <div className="absolute bottom-1/4 right-1/5 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4.2s' }}></div>
        <div className="absolute top-3/4 left-1/4 w-7 h-7 bg-cyan-400 rounded-full opacity-10 animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-1/2 right-1/6 w-4 h-4 bg-blue-200 rounded-full opacity-35 animate-bounce" style={{ animationDelay: '0.8s', animationDuration: '3.2s' }}></div>
        <div className="absolute bottom-1/3 left-2/5 w-3 h-3 bg-indigo-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1.8s', animationDuration: '4.8s' }}></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/6 left-1/5 w-16 h-16 bg-blue-500 rounded-full opacity-5 blur-xl animate-pulse" style={{ animationDelay: '0s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-cyan-400 rounded-full opacity-8 blur-2xl animate-pulse" style={{ animationDelay: '3s', animationDuration: '8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-600 rounded-full opacity-3 blur-3xl animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '7s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Blog
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stories from our kitchen, community updates, and behind-the-scenes insights
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16 relative z-10">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-600 mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                <Link
                  to={`/blog/${blogPosts[0].id}`}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 self-start"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {blogPosts.slice(1).map((post) => (
            <article
              key={post.id}
              className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.id}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300 inline-flex items-center space-x-1"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;