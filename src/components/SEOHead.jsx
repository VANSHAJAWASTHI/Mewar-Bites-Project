import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { site } from '../data/siteContent';

const normalizeStructuredData = (structuredData, schemaType, pageData) => {
  if (structuredData) {
    return Array.isArray(structuredData) ? structuredData : [structuredData];
  }

  if (schemaType === 'product') {
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: pageData.title,
        description: pageData.description,
        image: `${site.url}${pageData.image}`,
        url: pageData.url,
        brand: {
          '@type': 'Brand',
          name: site.name,
        },
      },
    ];
  }

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'FoodService',
      name: site.name,
      description: pageData.description || site.description,
      url: pageData.url,
      telephone: '+91 77478 70418',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Udaipur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN',
      },
      servesCuisine: 'Rajasthani',
      priceRange: '$$',
      sameAs: ['https://www.instagram.com/mewartreats'],
    },
  ];
};

const SEOHead = ({
  title,
  description,
  image = site.defaultImage,
  canonicalPath,
  robots = 'index, follow, max-snippet:-1, max-image-preview:large',
  schemaType = 'business',
  structuredData,
}) => {
  const location = useLocation();
  const path = canonicalPath || location.pathname;
  const canonicalUrl = `${site.url}${path}`;
  const pageData = {
    title,
    description,
    image,
    url: canonicalUrl,
  };
  const schemaItems = normalizeStructuredData(structuredData, schemaType, pageData);

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta name="author" content={site.name} />
      <meta name="language" content="English" />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={schemaType === 'product' ? 'product' : 'website'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${site.url}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${site.url}${image}`} />

      {schemaItems.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

