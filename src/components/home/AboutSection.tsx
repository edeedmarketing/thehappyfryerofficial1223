import { Fish, Heart, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our Story
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-3"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              After years of running a café in Jindalee as well as running a 200 seater bistro, we decided it was time for a change, moving closer to home to focus on what we love most – serving some of the tastiest fish and chips in Logan.
            </p>
            <p>
              At The Happy Fryer, we make all our dressing, sauces and salads in house, giving our fish, chips, and calamari that extra flavour everyone loves, whether it's a midweek treat or weekend indulgence.
            </p>
            <p>
              Our menu has something for everyone, from fresh fish and golden calamari to juicy burgers, crisp salads, and our famous hot chips with chicken salt.
            </p>
            <p>
              We're particularly proud of our extensive gluten-free menu, featuring a dedicated fryer and separate preparation area to ensure safe dining for customers with dietary requirements. From gluten-free fish and chips to calamari and potato scallops, we believe everyone should be able to enjoy great food without compromise.
            </p>
            <p>
              Located on the corner of Daisy Hill Road and Cupania Street, we welcome locals and passersby alike. Enjoy your meal in our shop or take it home to share.
            </p>
            <p>
              We're proud to be part of the Daisy Hill and Shailer Park community, and we'll never forget the incredible support we received after a break-in earlier this year. Thanks to our loyal customers, we were back up and running within a week, with lines out the door on reopening day.
            </p>
            <p className="text-blue-600 font-semibold text-lg pt-2">
              At The Happy Fryer, it's more than just fish and chips. It's community, comfort, and a little taste of home.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6419720/pexels-photo-6419720.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="The Happy Fryer storefront"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Fish size={24} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Daily</h3>
                <p className="text-sm text-gray-600">Locally sourced</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Heart size={24} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Made with Love</h3>
                <p className="text-sm text-gray-600">Traditional recipes</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Award size={24} className="text-blue-600" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">Local Favorite</h3>
                <p className="text-sm text-gray-600">Community trusted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
