import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { User, ArrowLeft } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  author: string;
  category: string;
  published_at: string;
}

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', id)
        .eq('is_published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };


  const isGlutenFreePost = post?.slug === 'discover-the-gluten-free-difference';
  const isCommunityPost = post?.slug === 'community-support-recovery-story';

  const themeColor = isGlutenFreePost ? 'emerald' : 'blue';
  const bgGradient = isGlutenFreePost
    ? 'bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50'
    : isCommunityPost
    ? 'bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50'
    : 'bg-gray-50';

  if (loading) {
    return (
      <div className={`min-h-screen ${bgGradient} py-32 flex items-center justify-center`}>
        <div className="text-center">
          <div className={`animate-spin rounded-full h-16 w-16 border-b-4 border-${themeColor}-600 mx-auto mb-4`}></div>
          <p className="text-gray-600 text-lg">Loading post...</p>
        </div>
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className={`min-h-screen ${bgGradient} py-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sorry, we couldn't find the blog post you're looking for.
            </p>
            <Link
              to="/blog"
              className={`inline-flex items-center space-x-2 bg-${themeColor}-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-${themeColor}-700 transition-all duration-300`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const postUrl = `https://thehappyfryer.com/blog/${post.slug}`;
  const postImage = post.featured_image || 'https://thehappyfryer.com/happy_fryer_transparent.png';
  const metaDescription = post.excerpt.length > 155 ? post.excerpt.substring(0, 152) + '...' : post.excerpt;

  return (
    <>
      <Helmet>
        <title>{post.title} - The Happy Fryer Blog</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${post.category}, The Happy Fryer, fish and chips, Daisy Hill, blog, ${post.author}`} />
        <link rel="canonical" href={postUrl} />

        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:image" content={postImage} />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="The Happy Fryer" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.published_at} />
        <meta property="article:section" content={post.category} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={postImage} />
        <meta name="twitter:creator" content={post.author} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "image": postImage,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "The Happy Fryer",
              "logo": {
                "@type": "ImageObject",
                "url": "https://thehappyfryer.com/happy_fryer_transparent.png"
              }
            },
            "datePublished": post.published_at,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": postUrl
            }
          })}
        </script>
      </Helmet>
      <div className={`min-h-screen ${bgGradient} py-24`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className={`inline-flex items-center space-x-2 text-${themeColor}-600 hover:text-${themeColor}-700 font-semibold mb-8 group`}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>

        <article className={`bg-white rounded-2xl overflow-hidden shadow-2xl ${
          isGlutenFreePost ? 'border-2 border-emerald-200' :
          isCommunityPost ? 'border-2 border-blue-200' : ''
        }`}>
          {post.featured_image && (
            <div className="relative h-96 overflow-hidden">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${
                isGlutenFreePost ? 'from-emerald-900/60' :
                isCommunityPost ? 'from-blue-900/60' : 'from-black/50'
              } to-transparent`}></div>
            </div>
          )}

          <div className="p-8 md:p-12">
            <div className="mb-8">
              <span className={`inline-block bg-gradient-to-r ${
                isGlutenFreePost
                  ? 'from-emerald-500 to-green-600'
                  : 'from-blue-500 to-blue-600'
              } text-white px-5 py-2 rounded-full text-sm font-bold capitalize mb-4 shadow-lg`}>
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className={`text-xl leading-relaxed mb-10 font-medium p-6 rounded-xl ${
                isGlutenFreePost
                  ? 'bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500'
                  : isCommunityPost
                  ? 'bg-gradient-to-r from-blue-50 to-sky-50 border-l-4 border-blue-500'
                  : 'bg-gray-50 border-l-4 border-blue-500'
              }`}>
                {post.excerpt}
              </p>
              <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className={paragraph.length < 50 ? 'text-2xl font-bold text-gray-900 mt-8 mb-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link
                to="/blog"
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${
                  isGlutenFreePost
                    ? 'from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700'
                    : 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700'
                } text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to All Posts</span>
              </Link>
            </div>
          </div>
        </article>
      </div>
      </div>
    </>
  );
};

export default BlogPost;
