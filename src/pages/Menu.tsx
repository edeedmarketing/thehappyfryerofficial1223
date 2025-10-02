import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import { Star, Leaf, Fish, Phone, Coffee } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_popular: boolean;
  allergen_info: string;
  category_id: string;
}

interface MenuCategory {
  id: string;
  name: string;
  description: string;
}

const Menu = () => {
  const [categories, setCategories] = useState<MenuCategory[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);
  const [currentGFMenuIndex, setCurrentGFMenuIndex] = useState(0);
  const [fullMenuModal, setFullMenuModal] = useState<'standard' | 'gluten-free' | null>(null);

  const standardMenuImages = [
    '/THF Menu_Aug25_1_1 (1).png',
    '/THF Menu_Aug25_1_2 (2).png'
  ];

  const gfMenuImages = [
    '/THF GF Menu_Aug25_1 (1).png',
    '/THF GF Menu_Aug25_2 (2).png'
  ];

  useEffect(() => {
    fetchMenuData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMenuIndex((prev) => (prev + 1) % standardMenuImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGFMenuIndex((prev) => (prev + 1) % gfMenuImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchMenuData = async () => {
    try {
      const { data: categoriesData, error: categoriesError } = await supabase
        .from('menu_categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      const { data: itemsData, error: itemsError } = await supabase
        .from('menu_items')
        .select('*')
        .eq('is_available', true)
        .order('display_order');

      if (categoriesError) throw categoriesError;
      if (itemsError) throw itemsError;

      setCategories(categoriesData || []);
      setMenuItems(itemsData || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category_id === selectedCategory);

  const getItemsByCategory = (categoryId: string) => {
    return menuItems.filter(item => item.category_id === categoryId);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-32 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading menu...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Menu - The Happy Fryer | Fresh Seafood, Gluten-Free Options, Fish & Chips Daisy Hill</title>
        <meta name="description" content="View our delicious menu featuring fresh fish, calamari, prawns, and gluten-free options. House-made sauces and daily specials. Premium seafood in Logan, Queensland. Call (07) 3152 7545 to order!" />
        <meta name="keywords" content="menu, fish and chips menu, seafood menu, gluten-free fish, fresh seafood, calamari, prawns, house-made sauces, Daisy Hill menu, Logan restaurant menu" />
        <link rel="canonical" href="https://thehappyfryer.com/menu" />

        <meta property="og:title" content="Menu - The Happy Fryer | Fresh Seafood & Fish & Chips" />
        <meta property="og:description" content="View our delicious menu featuring fresh fish, calamari, prawns, and gluten-free options. House-made sauces and daily specials." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehappyfryer.com/menu" />
        <meta property="og:image" content="https://thehappyfryer.com/THF Menu_Aug25_1_1 (1).png" />
        <meta property="og:locale" content="en_AU" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Menu - The Happy Fryer | Fresh Seafood & Fish & Chips" />
        <meta name="twitter:description" content="View our delicious menu featuring fresh fish, calamari, prawns, and gluten-free options. House-made sauces and daily specials." />
        <meta name="twitter:image" content="https://thehappyfryer.com/THF Menu_Aug25_1_1 (1).png" />
      </Helmet>
      <div className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Menu</h1>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Fresh ingredients, house-made sauces, and recipes passed down through generations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          <div
            className="bg-blue-600 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
            onClick={() => setFullMenuModal('standard')}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Standard Menu</h2>
            <p className="text-blue-100 text-center mb-4 text-sm">
              Click to view our full menu with all prices and options
            </p>
            <div className="bg-blue-600 rounded-xl overflow-hidden relative" style={{ minHeight: '500px' }}>
              {standardMenuImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Menu page ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    index === currentMenuIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-blue-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  View Full Menu
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-green-600 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-300 cursor-pointer relative group"
            onClick={() => setFullMenuModal('gluten-free')}
          >
            <h2 className="text-3xl font-bold text-white text-center mb-2">Gluten Free Menu</h2>
            <p className="text-green-100 text-center mb-4 text-sm">
              Special gluten-free options available for our customers
            </p>
            <div className="bg-green-600 rounded-xl overflow-hidden relative" style={{ minHeight: '500px' }}>
              {gfMenuImages.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Gluten Free Menu page ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                    index === currentGFMenuIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-green-600 px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                  View Full Menu
                </div>
              </div>
            </div>
          </div>
        </div>

        {fullMenuModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setFullMenuModal(null)}
          >
            <div className="relative max-w-5xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setFullMenuModal(null)}
                className="absolute top-4 right-4 z-10 bg-white text-gray-900 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-lg font-bold text-xl"
              >
                ×
              </button>
              <div className="p-8 max-h-[90vh] overflow-y-auto">
                <h2 className={`text-3xl font-bold text-center mb-6 ${fullMenuModal === 'standard' ? 'text-blue-600' : 'text-green-600'}`}>
                  {fullMenuModal === 'standard' ? 'Standard Menu' : 'Gluten Free Menu'}
                </h2>
                <div className="space-y-6">
                  {(fullMenuModal === 'standard' ? standardMenuImages : gfMenuImages).map((image, index) => (
                    <img
                      key={image}
                      src={image}
                      alt={`Menu page ${index + 1}`}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Menu Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fish className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Fresh Seafood</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-3">Seafood</h4>
              <p className="text-gray-600 leading-relaxed">
                Premium fish, calamari, and prawns prepared daily with our signature beer batter
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Gluten Free Options</h3>
              <p className="text-gray-600 leading-relaxed mt-8">
                Special gluten-free menu available for customers with dietary requirements
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">House-Made Sauces</h3>
              <p className="text-gray-600 leading-relaxed mt-8">
                Fresh tartare sauce, gravy, and coleslaw made in-house daily
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-3xl shadow-xl p-12 mb-16 max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Order?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Call us now or visit our shop for the freshest fish and chips in Logan
          </p>
          <a
            href="tel:+61731527545"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors duration-300 shadow-lg"
          >
            <Phone className="w-6 h-6" />
            <span>Call Now: (07) 3152 7545</span>
          </a>
        </div>

        {categories.length > 0 && menuItems.length > 0 && (
          <>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
                }`}
              >
                All Items
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 hover:bg-blue-50 shadow'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {selectedCategory === 'all' ? (
              categories.map((category) => {
                const categoryItems = getItemsByCategory(category.id);
                if (categoryItems.length === 0) return null;

                return (
                  <div key={category.id} className="mb-16">
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h2>
                      {category.description && (
                        <p className="text-gray-600">{category.description}</p>
                      )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {categoryItems.map((item) => (
                        <MenuItem key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                  <MenuItem key={item.id} item={item} />
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

const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      {item.image_url && (
        <div className="relative h-56 overflow-hidden">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {item.is_popular && (
            <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
              <Star className="w-4 h-4 fill-current" />
              <span>Popular</span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
        {item.description && (
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
        )}
        {item.allergen_info && (
          <div className="flex items-center space-x-1 text-sm text-green-600 mb-4">
            <Leaf className="w-4 h-4" />
            <span>{item.allergen_info}</span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-blue-600">${item.price.toFixed(2)}</span>
          <a
            href="tel:+61731527545"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
