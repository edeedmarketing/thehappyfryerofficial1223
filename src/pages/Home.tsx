import React from 'react';
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
        <FeaturesSection />
        <TestimonialsSection />
        <SocialFeed />
        <CTASection />
      </div>
    </>
  );
};

export default Home;
