import { Instagram } from 'lucide-react';

const SocialFeed = () => {
  const images = [
    'https://images.pexels.com/photos/8753591/pexels-photo-8753591.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/4057665/pexels-photo-4057665.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2374946/pexels-photo-2374946.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600 text-lg mb-4">
            See what's cooking at The Happy Fryer
          </p>
          <a
            href="https://instagram.com/thehappyfryer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            <Instagram size={24} />
            <span>@thehappyfryer</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
            >
              <img
                src={image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
