import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8753591/pexels-photo-8753591.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Fresh Fish & Chips in Daisy Hill
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Family-owned since 2010, serving the freshest seafood with a smile
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/order" className="btn-primary inline-flex items-center justify-center space-x-2">
            <span>Order Now</span>
            <ArrowRight size={20} />
          </Link>
          <Link to="/menu" className="btn-secondary inline-flex items-center justify-center">
            View Menu
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
