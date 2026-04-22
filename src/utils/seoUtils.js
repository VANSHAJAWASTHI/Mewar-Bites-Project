// SEO Utility Functions for Mewar Treats

export const generateProductSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    category: product.category,
    brand: {
      '@type': 'Brand',
      name: 'Mewar Treats'
    },
    offers: {
      '@type': 'Offer',
      price: 'Available on request',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: 'Mewar Treats'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '200-300 kcal',
      proteinContent: '5-8g',
      fatContent: '10-15g',
      carbohydrateContent: '25-35g'
    }
  };
};

export const generateBreadcrumbSchema = (breadcrumbs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodService',
    name: 'Mewar Treats',
    description: 'Authentic Rajasthani artisanal ice cream and kulfi makers',
    url: 'https://mewartreats.com',
    telephone: '+917747870418',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Udaipur',
      addressRegion: 'Rajasthan',
      addressCountry: 'IN',
      postalCode: '313001'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '24.5854',
      longitude: '73.7127'
    },
    servesCuisine: 'Rajasthani',
    priceRange: '$$',
    openingHours: 'Mo-Su 10:00-22:00',
    paymentAccepted: 'Cash, Credit Card, UPI',
    menu: 'https://mewartreats.com/#flavors',
    sameAs: [
      'https://www.instagram.com/mewartreats',
      'https://wa.me/917747870418'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200+',
      bestRating: '5'
    }
  };
};

export const generateRecipeSchema = (product) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    name: product.name,
    description: `Traditional ${product.name} recipe from Mewar Treats`,
    image: product.image,
    author: {
      '@type': 'Organization',
      name: 'Mewar Treats'
    },
    datePublished: '2024-01-01',
    recipeCategory: 'Dessert',
    recipeCuisine: 'Rajasthani',
    prepTime: 'PT30M',
    cookTime: 'PT4H',
    totalTime: 'PT4H30M',
    recipeYield: '6 servings',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: '250 kcal',
      proteinContent: '6g'
    },
    ingredients: product.ingredients ? product.ingredients.split(', ') : [],
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        text: 'Boil milk in a heavy-bottomed pan'
      },
      {
        '@type': 'HowToStep',
        text: 'Add sugar and stir until dissolved'
      },
      {
        '@type': 'HowToStep',
        text: 'Add traditional flavors and nuts'
      },
      {
        '@type': 'HowToStep',
        text: 'Pour into molds and freeze overnight'
      }
    ]
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };
};

export const generateVideoSchema = (video) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: video.thumbnail,
    uploadDate: video.uploadDate,
    duration: video.duration,
    contentUrl: video.url,
    embedUrl: video.embedUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Mewar Treats'
    }
  };
};

// SEO-friendly URL generator
export const generateSEOUrl = (name, category) => {
  const cleanName = name.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
  
  const cleanCategory = category.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim('-');
  
  return `/flavors/${cleanCategory}/${cleanName}`;
};

// Meta description generator
export const generateMetaDescription = (product, maxLength = 160) => {
  const baseDesc = `Authentic ${product.name} from Mewar Treats. ${product.shortDesc}`;
  const fullDesc = `${baseDesc}. 100% pure vegetarian, handcrafted with traditional Rajasthani recipes.`;
  
  return fullDesc.length > maxLength 
    ? fullDesc.substring(0, maxLength - 3) + '...'
    : fullDesc;
};

// Open Graph image generator
export const generateOGImage = (product, baseUrl = 'https://mewartreats.com') => {
  return {
    url: `${baseUrl}${product.image}`,
    width: 1200,
    height: 630,
    alt: `${product.name} - ${product.shortDesc}`,
    type: 'image/jpeg'
  };
};

// Twitter Card generator
export const generateTwitterCard = (product) => {
  return {
    card: 'summary_large_image',
    site: '@MewarTreats',
    creator: '@MewarTreats',
    title: product.name,
    description: generateMetaDescription(product),
    image: product.image
  };
};

// Canonical URL generator
export const generateCanonicalUrl = (path, baseUrl = 'https://mewartreats.com') => {
  return `${baseUrl}${path}`;
};

// Robots meta generator
export const generateRobotsMeta = (index = true, follow = true, maxSnippet = -1, maxImagePreview = 'large') => {
  const directives = [];
  
  if (index) directives.push('index');
  else directives.push('noindex');
  
  if (follow) directives.push('follow');
  else directives.push('nofollow');
  
  if (maxSnippet !== -1) directives.push(`max-snippet:${maxSnippet}`);
  if (maxImagePreview) directives.push(`max-image-preview:${maxImagePreview}`);
  
  return directives.join(', ');
};
