import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEOHead = ({ title, description, image, type = 'website' }) => {
  const location = useLocation();
  const siteUrl = 'https://mewartreats.com';
  const fullUrl = `${siteUrl}${location.pathname}`;
  
  const defaultTitle = 'Mewar Treats - Artisanal Rajasthani Ice Cream & Kulfi | 100% Pure Vegetarian';
  const defaultDescription = 'Mewar Treats - Authentic Rajasthani artisanal ice cream and kulfi. 100% pure vegetarian, handcrafted with traditional recipes. Experience royal heritage flavors since 2024.';
  const defaultImage = '/images/Mewar Treats Logo.png';

  const seoData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || defaultImage,
    url: fullUrl,
    type: type
  };

  // Generate structured data based on page type
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@type': type === 'product' ? 'Product' : 'FoodService',
      name: seoData.title,
      description: seoData.description,
      image: `${siteUrl}${seoData.image}`,
      url: seoData.url,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Udaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      },
      servesCuisine: 'Rajasthani',
      priceRange: '$$'
    };

    if (type === 'product') {
      return {
        ...baseData,
        '@type': 'Product',
        offers: {
          '@type': 'Offer',
          price: 'Available on request',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock'
        },
        category: 'Ice Cream & Kulfi',
        brand: {
          '@type': 'Brand',
          name: 'Mewar Treats'
        }
      };
    }

    return baseData;
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description} />
      <meta name="keywords" content="artisanal ice cream, Rajasthani kulfi, traditional Indian desserts, pure veg ice cream, Mewar treats, handcrafted ice cream, royal desserts, Udaipur ice cream" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoData.url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoData.title} />
      <meta property="og:description" content={seoData.description} />
      <meta property="og:image" content={`${siteUrl}${seoData.image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={seoData.url} />
      <meta property="og:site_name" content="Mewar Treats" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seoData.title} />
      <meta property="twitter:description" content={seoData.description} />
      <meta property="twitter:image" content={`${siteUrl}${seoData.image}`} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
      <meta name="author" content="Mewar Treats" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-RJ" />
      <meta name="geo.placename" content="Udaipur, Rajasthan" />
      <meta name="geo.position" content="24.5854;73.7127" />
      <meta name="ICBM" content="24.5854, 73.7127" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEOHead;
