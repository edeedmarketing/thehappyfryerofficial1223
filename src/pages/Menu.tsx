import React from 'react';
import { Fish, Merge as Burger, Salad, Coffee, Phone, X, Eye } from 'lucide-react';

const Menu = () => {
  const [isMenuModalOpen, setIsMenuModalOpen] = React.useState(false);
  const [isGlutenFreeModalOpen, setIsGlutenFreeModalOpen] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState('');

  const openMenuModal = (menuType: string) => {
    setActiveMenu(menuType);
    if (menuType === 'regular') {
      setIsMenuModalOpen(true);
    } else if (menuType === 'gluten-free') {
      setIsGlutenFreeModalOpen(true);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Our Menu
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, house-made sauces, and recipes passed down through generations
          </p>
        </div>

        {/* Menu Options */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Regular Menu */}
            <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Complete Menu
                </h2>
                <p className="text-lg text-blue-100 mb-6">
                  Click to view our full menu with all prices and options
                </p>
              </div>
              
              <div className="relative group cursor-pointer" onClick={() => openMenuModal('regular')}>
                <img
                  src="/475272566_1097712468818126_6601093914898273014_n.jpg"
                  alt="The Happy Fryer Complete Menu"
                  className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>View Full Menu</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gluten Free Menu */}
            <div className="bg-green-600 text-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Gluten Free Menu
                </h2>
                <p className="text-lg text-green-100 mb-6">
                  Special gluten-free options available for our customers
                </p>
              </div>
              
              <div className="relative group cursor-pointer" onClick={() => openMenuModal('gluten-free')}>
                <img
                  src="/474830462_1097712418818131_22556542410791156_n.jpg"
                  alt="The Happy Fryer Gluten Free Menu"
                  className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <div className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 flex items-center space-x-2">
                    <Eye className="w-5 h-5" />
                    <span>View Gluten Free Menu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Menu Modal */}
        {isMenuModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsMenuModalOpen(false)}>
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsMenuModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src="/475272566_1097712468818126_6601093914898273014_n.jpg"
                alt="The Happy Fryer Complete Menu"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Gluten Free Menu Modal */}
        {isGlutenFreeModalOpen && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setIsGlutenFreeModalOpen(false)}>
            <div className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsGlutenFreeModalOpen(false)}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src="/474830462_1097712418818131_22556542410791156_n.jpg"
                alt="The Happy Fryer Gluten Free Menu"
                className="w-full h-auto"
              />
            </div>
          </div>
        )}

        {/* Additional Menu Information */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Menu Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 transform animate-bounce-in-1">
                  <Fish className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Fresh Seafood</h3>
                <p className="text-gray-600">Premium fish, calamari, and prawns prepared daily with our signature beer batter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 transform animate-bounce-in-2">
                  <Salad className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Gluten Free Options</h3>
                <p className="text-gray-600">Special gluten-free menu available for customers with dietary requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 transform animate-bounce-in-3">
                  <Coffee className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">House-Made Sauces</h3>
                <p className="text-gray-600">Fresh tartare sauce, gravy, and coleslaw made in-house daily</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Order?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Call us now or visit our shop for the freshest fish and chips in Logan
          </p>
          <a
            href="tel:+1234567890"
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now: (07) 1234 5678</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;