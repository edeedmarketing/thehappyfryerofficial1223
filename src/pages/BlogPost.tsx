import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Clock } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();

  const blogPosts = [
    {
      id: 1,
      title: 'The Secret to Perfect Fish & Chips',
      excerpt: 'Discover the techniques and ingredients that make our fish and chips stand out from the rest.',
      image: '/image copy.png',
      author: 'The Happy Fryer Team',
      date: 'August 25, 2025',
      readTime: '5 min read',
      content: `
        <p>At The Happy Fryer, we believe that perfect fish and chips isn't just about following a recipe – it's about understanding the craft behind every golden piece of fish and every crispy chip.</p>
        
        <h2>The Foundation: Quality Ingredients</h2>
        <p>Our journey to perfection starts with sourcing the freshest local seafood. We work directly with trusted suppliers to ensure our fish arrives daily, never frozen. The difference is immediately noticeable – fresh fish has a firmer texture, cleaner taste, and creates that perfect flake we're known for.</p>
        
        <h2>The Art of Battering</h2>
        <p>Our signature beer batter is a closely guarded recipe that's been perfected over years of experimentation. The secret lies in the temperature of the ingredients, the type of beer we use, and most importantly, the timing. We mix our batter fresh throughout the day to ensure that light, crispy coating that doesn't overpower the fish.</p>
        
        <h2>Temperature Control</h2>
        <p>Maintaining the perfect oil temperature is crucial. Too hot, and the outside burns while the inside remains raw. Too cool, and you get soggy, greasy fish. We monitor our oil temperature constantly and adjust throughout service to ensure every piece meets our standards.</p>
        
        <h2>The Perfect Chip</h2>
        <p>Our chips start with premium potatoes, hand-cut daily in our kitchen. We use a two-stage cooking process – first blanching at a lower temperature to cook the potato through, then a final fry at high heat to achieve that golden, crispy exterior while maintaining a fluffy interior.</p>
        
        <h2>House-Made Accompaniments</h2>
        <p>What sets us apart is our commitment to making everything from scratch. Our tartare sauce, gravy, and coleslaw are all prepared fresh daily using traditional recipes and quality ingredients. It's these little touches that transform a good meal into an unforgettable experience.</p>
        
        <p>Next time you visit The Happy Fryer, you'll taste the difference that passion, quality ingredients, and traditional techniques make. It's not just fish and chips – it's a craft we're proud to share with our community.</p>
      `
    },
    {
      id: 2,
      title: 'Community Support: Our Recovery Story',
      excerpt: 'How the incredible Daisy Hill community helped us bounce back stronger than ever.',
      image: '/8983f1f7daec00917acb890e42fc03f0.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 22, 2025',
      readTime: '3 min read',
      content: `
        <p>Earlier this year, The Happy Fryer faced one of our biggest challenges when we experienced a break-in that left our shop damaged and our equipment compromised. What happened next reminded us why we love being part of the Daisy Hill and Shailer Park community.</p>
        
        <h2>The Incident</h2>
        <p>The break-in occurred on a quiet Tuesday night, leaving us with significant damage to our front windows, cash register, and some of our kitchen equipment. When we arrived the next morning to assess the damage, our hearts sank. We weren't sure how long it would take to get back on our feet.</p>
        
        <h2>Community Response</h2>
        <p>Word spread quickly through our local community, and the response was overwhelming. Customers who had become friends over the years reached out offering help, support, and encouragement. Local businesses offered assistance, and our regular customers kept asking when we'd be back open.</p>
        
        <h2>Back Stronger Than Ever</h2>
        <p>Thanks to the incredible support from our community and our determination to serve our customers again, we were able to reopen within just one week. The reopening day was something we'll never forget – there were lines out the door from the moment we opened, with customers eager to show their support.</p>
        
        <h2>More Than Just a Business</h2>
        <p>This experience taught us that The Happy Fryer is more than just a fish and chip shop – we're part of a community family. The support we received during our difficult time has strengthened our commitment to serving not just great food, but also being a place where neighbors become friends.</p>
        
        <p>To everyone who supported us during this challenging time – thank you. Your kindness and loyalty mean everything to us, and we're proud to continue serving the best fish and chips in Logan for our amazing community.</p>
      `
    },
    {
      id: 3,
      title: 'House-Made Sauces: The Difference is in the Details',
      excerpt: 'Learn about our commitment to making fresh tartare sauce, gravy, and coleslaw daily.',
      image: '/istockphoto-492508714-612x612.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 19, 2025',
      readTime: '4 min read',
      content: `
        <p>At The Happy Fryer, we believe that great fish and chips deserve equally great accompaniments. That's why we make all our sauces, gravies, and sides fresh in-house every single day.</p>
        
        <h2>Our Famous Tartare Sauce</h2>
        <p>Our tartare sauce recipe has been refined over years of customer feedback and experimentation. We start with quality mayonnaise as our base, then add finely chopped pickles, capers, fresh herbs, and a secret blend of seasonings. The result is a creamy, tangy sauce that perfectly complements our fresh fish without overpowering its natural flavors.</p>
        
        <h2>Rich, Savory Gravy</h2>
        <p>Our gravy is made from scratch using traditional methods. We start with a proper roux, slowly building layers of flavor with quality stock, herbs, and seasonings. It's the perfect companion to our golden chips, adding that comforting, homestyle touch that keeps customers coming back.</p>
        
        <h2>Fresh Daily Coleslaw</h2>
        <p>Our coleslaw is prepared fresh every morning using crisp cabbage, carrots, and our house-made dressing. We strike the perfect balance between creamy and tangy, creating a refreshing side that cuts through the richness of fried foods and adds a healthy crunch to your meal.</p>
        
        <h2>The Daily Routine</h2>
        <p>Every morning before we open, our team is busy preparing these accompaniments. It would be easier to buy pre-made sauces, but we believe our customers deserve better. The extra effort shows in every bite, and it's one of the reasons why our regular customers keep coming back.</p>
        
        <h2>Quality You Can Taste</h2>
        <p>When you order from The Happy Fryer, you're not just getting fish and chips – you're getting a complete meal experience where every component has been carefully crafted. From our house-made sauces to our fresh-cut chips, we're committed to quality in every detail.</p>
        
        <p>Next time you visit, ask about our house-made sauces. We're always happy to share what makes them special and why we believe the extra effort is worth it.</p>
      `
    },
    {
      id: 4,
      title: 'Fresh Fish: From Ocean to Your Plate',
      excerpt: 'Our commitment to sourcing the freshest local seafood for our customers.',
      image: '/478307183_1110738027515570_3802962707143678618_n.jpg',
      author: 'The Happy Fryer Team',
      date: 'August 15, 2025',
      readTime: '6 min read',
      content: `
        <p>At The Happy Fryer, freshness isn't just a promise – it's our daily commitment. Every morning, we receive deliveries of the finest local seafood, ensuring that what reaches your plate is as fresh as possible.</p>
        
        <h2>Our Sourcing Philosophy</h2>
        <p>We work exclusively with trusted local suppliers who share our commitment to quality and sustainability. Our fish is never frozen – it comes to us fresh from Australian waters, maintaining the texture, flavor, and nutritional value that makes great fish and chips.</p>
        
        <h2>Daily Deliveries</h2>
        <p>Our seafood arrives every morning, allowing us to serve fish that was swimming in the ocean just days before. This freshness is immediately apparent in the firm texture, clean taste, and beautiful flaking that our customers have come to expect.</p>
        
        <h2>Variety and Quality</h2>
        <p>We offer a range of fresh fish options including:</p>
        <ul>
          <li><strong>Barramundi:</strong> A local favorite with its mild flavor and firm texture</li>
          <li><strong>Snapper:</strong> Sweet and delicate, perfect for our signature crumbing</li>
          <li><strong>Flathead:</strong> Light and flaky, ideal for our beer batter</li>
          <li><strong>Whiting:</strong> Tender and subtle, a classic choice</li>
        </ul>
        
        <h2>Sustainable Practices</h2>
        <p>We're committed to responsible sourcing, working only with suppliers who follow sustainable fishing practices. This ensures that we can continue to serve quality seafood while protecting our marine environments for future generations.</p>
        
        <h2>The Preparation Process</h2>
        <p>Once our fresh fish arrives, our skilled team carefully prepares each piece. We hand-cut our fillets to ensure consistent sizing and remove any bones with precision. This attention to detail ensures that every piece of fish that leaves our kitchen meets our high standards.</p>
        
        <h2>Storage and Handling</h2>
        <p>Proper storage is crucial for maintaining freshness. Our fish is kept at optimal temperatures in specialized refrigeration units, and we follow strict food safety protocols to ensure quality and safety from delivery to service.</p>
        
        <p>When you choose The Happy Fryer, you're choosing a commitment to freshness that starts with our sourcing and continues through every step of preparation. Taste the difference that truly fresh fish makes – we think you'll agree it's worth the extra effort.</p>
      `
    }
  ];

  const post = blogPosts.find(p => p.id === parseInt(id || '1'));

  if (!post) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link
          to="/blog"
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          
          <div className="p-8 md:p-12">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More from our blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.id}`}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;