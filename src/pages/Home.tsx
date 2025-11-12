import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import InfoSection from '../components/home/InfoSection';
import AboutSection from '../components/home/AboutSection';
import FeaturesSection from '../components/home/FeaturesSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import SocialFeed from '../components/home/SocialFeed';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>The Happy Fryer - Fresh Fish & Chips in Daisy Hill, Logan | Best Seafood QLD</title>
        <meta name="description" content="Enjoy the freshest fish and chips in Daisy Hill, Logan. Family-owned since 2010, serving premium seafood, gluten-free options, and house-made sauces. Order now for pickup or delivery!" />
        <meta name="keywords" content="fish and chips, Daisy Hill, Logan, Queensland, seafood, gluten-free, fresh fish, family restaurant, local business, The Happy Fryer" />
        <link rel="canonical" href="https://thehappyfryer.com/" />

        <meta property="og:title" content="The Happy Fryer - Fresh Fish & Chips in Daisy Hill, Logan" />
        <meta property="og:description" content="Enjoy the freshest fish and chips in Daisy Hill, Logan. Family-owned since 2010, serving premium seafood, gluten-free options, and house-made sauces." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thehappyfryer.com/" />
        <meta property="og:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />
        <meta property="og:locale" content="en_AU" />
        <meta property="og:site_name" content="The Happy Fryer" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Happy Fryer - Fresh Fish & Chips in Daisy Hill, Logan" />
        <meta name="twitter:description" content="Enjoy the freshest fish and chips in Daisy Hill, Logan. Family-owned since 2010, serving premium seafood, gluten-free options, and house-made sauces." />
        <meta name="twitter:image" content="https://thehappyfryer.com/happy_fryer_transparent.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            "name": "The Happy Fryer",
            "image": "https://thehappyfryer.com/happy_fryer_transparent.png",
            "description": "Fresh fish and chips restaurant in Daisy Hill, Logan, Queensland. Family-owned since 2010.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "6/5 Cupania St",
              "addressLocality": "Daisy Hill",
              "addressRegion": "QLD",
              "postalCode": "4127",
              "addressCountry": "AU"
            },
            "telephone": "+61731527545",
            "servesCuisine": "Seafood, Fish and Chips",
            "priceRange": "$$",
            "openingHours": "Tu-Su 11:00-20:00",
            "url": "https://thehappyfryer.com"
          })}
        </script>
      </Helmet>
      <div>
        <HeroSection />
        <InfoSection />
        <AboutSection />
        <div className="relative w-full h-24 bg-gray-50">
          <svg
            className="absolute bottom-0 w-full h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="#3b82f6"
              fillOpacity="0.15"
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
            <path
              fill="#3b82f6"
              fillOpacity="0.3"
              d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            ></path>
          </svg>
        </div>
        <FeaturesSection />
        <TestimonialsSection />
        <SocialFeed />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
