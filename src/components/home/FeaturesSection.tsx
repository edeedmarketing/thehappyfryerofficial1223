import { Fish, Award, Leaf, Heart } from 'lucide-react';

const features = [
  {
    icon: Fish,
    title: 'Fresh Daily Catch',
    description: 'We source our seafood daily from trusted local suppliers for the freshest taste.',
  },
  {
    icon: Award,
    title: 'Premium Quality',
    description: 'Only the finest ingredients make it to our kitchen. No compromises on quality.',
  },
  {
    icon: Leaf,
    title: 'Gluten-Free Options',
    description: 'We offer gluten-free batter so everyone can enjoy our delicious fish and chips.',
  },
  {
    icon: Heart,
    title: 'Family Owned',
    description: 'A local family business serving the community with passion since 2010.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 text-lg">
            What makes The Happy Fryer special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
