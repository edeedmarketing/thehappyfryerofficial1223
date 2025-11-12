
const AboutSection = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Welcome to The Happy Fryer
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Since 2010, we've been proudly serving the Daisy Hill community with the freshest fish and chips in Logan. Our family-owned business is built on a simple philosophy: quality ingredients, traditional recipes, and genuine care for our customers.
            </p>
            <p className="text-gray-600 text-lg mb-4">
              We source our seafood daily from trusted local suppliers, ensuring every bite is as fresh as can be. Our signature batter recipe, perfected over years, creates that perfect golden crunch everyone loves.
            </p>
            <p className="text-gray-600 text-lg">
              Whether you're grabbing a quick lunch or feeding the whole family, we're here to make your meal memorable. Come visit us and taste the difference that passion and quality make.
            </p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Fresh fish and chips"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
