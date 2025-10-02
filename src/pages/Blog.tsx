import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { User, ArrowRight, Fish } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  featured_image: string;
  author: string;
  category: string;
  published_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];
  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);


  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b52a3] py-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading posts...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Blog - The Happy Fryer | News, Recipes, Community Stories & Updates</title>
        <meta name="description" content="Read the latest news, recipes, and stories from The Happy Fryer. Behind-the-scenes insights, community updates, and delicious seafood tips from Daisy Hill's favorite fish and chips shop!" />
        <meta name="keywords" content="fish and chips blog, seafood recipes, The Happy Fryer news, Daisy Hill community, restaurant updates, cooking tips, fish recipes, behind the scenes" />
        <link rel="canonical" href="https://thehappyfryer.com/blog" />

        <meta property="og:title" content="Blog - The Happy Fryer | News, Recipes & Community Stories" />
        <meta property="og:description" content="Read the latest news, recipes, and stories from The Happy Fryer. Behind-the-scenes insights, community updates, and delicious seafood tips!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehappyfryer.com/blog" />
        <meta property="og:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
        <meta property="og:locale" content="en_AU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog - The Happy Fryer | News, Recipes & Community Stories" />
        <meta name="twitter:description" content="Read the latest news, recipes, and stories from The Happy Fryer. Behind-the-scenes insights and community updates!" />
        <meta name="twitter:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#3b52a3] py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 80 + 30;
          const animations = ['animate-bubble-rise', 'animate-bubble-rise-slow', 'animate-bubble-rise-fast'];
          const animation = animations[Math.floor(Math.random() * animations.length)];
          return (
            <div
              key={i}
              className={`absolute rounded-full border-2 border-white/30 ${animation}`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-${size}px`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          );
        })}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Our Blog</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stories from our kitchen, community updates, and behind-the-scenes insights
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="max-w-2xl mx-auto bg-white rounded-xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're working on exciting content for you. Check back soon for news, recipes, and more!
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize ${
                    selectedCategory === category
                      ? 'bg-white text-blue-900 shadow-lg scale-105'
                      : 'bg-white/20 text-white hover:bg-white/30 shadow backdrop-blur-sm'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filteredPosts.slice(0, 1).map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="block bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-1 group border-2 border-blue-200"
                >
                  <div className="md:flex">
                    {post.featured_image && (
                      <div className="relative overflow-hidden md:w-1/2 h-96 md:h-auto">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                          Featured Post
                        </div>
                      </div>
                    )}
                    <div className="md:w-1/2 p-8 md:p-12">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Fish className="w-4 h-4 text-blue-600" />
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-lg text-gray-600 mb-6 line-clamp-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 text-lg font-semibold group-hover:text-blue-700">
                        <span>Read More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPosts.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {filteredPosts.slice(1).map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                  >
                    {post.featured_image && (
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={post.featured_image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Fish className="w-4 h-4 text-blue-600" />
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                        <span>Read More</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Blog;
