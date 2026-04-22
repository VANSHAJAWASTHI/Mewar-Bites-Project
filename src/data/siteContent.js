const siteUrl = 'https://mewartreats.com';

const baseDescription =
  'Mewar Treats - Authentic Rajasthani artisanal ice cream and kulfi. 100% pure vegetarian, handcrafted with traditional recipes.';

const flavors = [
  {
    id: 1,
    name: 'Pista',
    slug: 'pista',
    category: 'Royal',
    image: '/images/Pista.jpeg',
    shortDesc: 'Rich pistachio loaded kulfi.',
    description:
      'Rich and creamy kulfi loaded with premium roasted pistachios for a delightful crunch.',
    ingredients: 'Milk, Sugar, Pistachios',
    allergens: 'Dairy, Nuts',
    featured: true,
  },
  {
    id: 2,
    name: 'Rabri Dryfruit Kulfi',
    slug: 'rabri-dryfruit-kulfi',
    category: 'Royal',
    image: '/images/Rabri Dryfruit Kulfi .jpeg',
    shortDesc: 'Thickened milk with dry fruits.',
    description:
      'A luxurious blend of thickened milk (Rabri) and mixed dry fruits, a true royal indulgence.',
    ingredients: 'Reduced Milk, Cashews, Almonds, Pistachios, Sugar',
    allergens: 'Dairy, Nuts',
    featured: true,
  },
  {
    id: 3,
    name: 'Rabri Kulfi',
    slug: 'rabri-kulfi',
    category: 'Traditional',
    image: '/images/Rabri Kulfi.jpeg',
    shortDesc: 'Classic slow-cooked kulfi.',
    description:
      'Traditional slow-cooked milk kulfi with the authentic, caramelized taste of Rabri.',
    ingredients: 'Reduced Milk, Sugar, Cardamom',
    allergens: 'Dairy',
    featured: true,
  },
  {
    id: 4,
    name: 'Rajbhog',
    slug: 'rajbhog',
    category: 'Royal',
    image: '/images/Rajbhog.jpeg',
    shortDesc: 'Saffron and nuts delight.',
    description:
      'A royal dessert featuring the golden hue of saffron, fragrant cardamom, and a bounty of nuts.',
    ingredients: 'Milk, Saffron, Cardamom, Cashews, Almonds',
    allergens: 'Dairy, Nuts',
    featured: true,
  },
  {
    id: 5,
    name: 'Roasted Almonds',
    slug: 'roasted-almonds',
    category: 'Royal',
    image: '/images/Roasted Almonds.jpeg',
    shortDesc: 'Crunchy almond perfection.',
    description: 'Premium roasted almonds blended to perfection in a creamy base.',
    ingredients: 'Milk, Sugar, Almonds',
    allergens: 'Dairy, Nuts',
    featured: true,
  },
  {
    id: 6,
    name: 'Choco Vanilla',
    slug: 'choco-vanilla',
    category: 'Chocolate',
    image: '/images/Choco Vanilla.jpeg',
    shortDesc: 'Classic swirl delight.',
    description:
      'The perfect harmony of rich chocolate and creamy vanilla in every bite.',
    ingredients: 'Milk, Cream, Cocoa, Vanilla Extract, Sugar',
    allergens: 'Dairy',
    featured: true,
  },
  {
    id: 7,
    name: 'Mango Bar',
    slug: 'mango-bar',
    category: 'Fruity',
    image: '/images/Mango Bar.jpeg',
    shortDesc: 'Tropical mango bliss.',
    description: 'Hand-picked Alphonsos transformed into a refreshing mango bar.',
    ingredients: 'Mango Pulp, Sugar, Water',
    allergens: 'None',
    featured: true,
  },
  {
    id: 8,
    name: 'Matka Kulfi',
    slug: 'matka-kulfi',
    category: 'Traditional',
    image: '/images/Matka Kulfi.jpeg',
    shortDesc: 'Earthy clay pot tradition.',
    description:
      'Authentic kulfi served in traditional earthen pots for rustic charm.',
    ingredients: 'Reduced Milk, Sugar, Saffron, Nuts',
    allergens: 'Dairy, Nuts',
    featured: true,
  },
  {
    id: 9,
    name: 'Kesar Kulfi',
    slug: 'kesar-kulfi',
    category: 'Royal',
    image: '/images/Kesar Kulfi.jpeg',
    shortDesc: 'Golden saffron elegance.',
    description: 'Premium saffron-infused kulfi with the rich aroma of royal kitchens.',
    ingredients: 'Milk, Saffron, Sugar, Cardamom',
    allergens: 'Dairy',
    featured: false,
  },
  {
    id: 10,
    name: 'Mini Chocobar',
    slug: 'mini-chocobar',
    category: 'Chocolate',
    image: '/images/Mini Chocobar.jpeg',
    shortDesc: 'Pocket-sized chocolate joy.',
    description: 'Compact chocolate bars perfect for instant indulgence.',
    ingredients: 'Milk, Cream, Cocoa, Sugar',
    allergens: 'Dairy',
    featured: false,
  },
];

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'FoodService',
  name: 'Mewar Treats',
  description: baseDescription,
  url: siteUrl,
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
};

export const site = {
  name: 'Mewar Treats',
  url: siteUrl,
  description: baseDescription,
  defaultImage: '/images/Mewar Treats Logo.png',
  businessSchema,
  themeColor: '#d4a574',
};

export const flavorCategories = ['All', 'Royal', 'Traditional', 'Chocolate', 'Fruity'];

export const getFlavorPath = (slug) => `/flavors/${slug}`;

export const getFlavorBySlug = (slug) => flavors.find((flavor) => flavor.slug === slug);

export const getFeaturedFlavors = () => flavors.filter((flavor) => flavor.featured);

export const getAllFlavors = () => flavors.slice();

export const getHomeSeo = () => ({
  title:
    'Mewar Treats - Artisanal Rajasthani Ice Cream & Kulfi | 100% Pure Vegetarian',
  description: baseDescription,
  image: site.defaultImage,
  canonicalPath: '/',
  schemaType: 'business',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
});

export const getFlavorSeo = (flavor) => ({
  title: `${flavor.name} | Mewar Treats`,
  description: flavor.description,
  image: flavor.image,
  canonicalPath: getFlavorPath(flavor.slug),
  schemaType: 'product',
  robots: 'index, follow, max-snippet:-1, max-image-preview:large',
});

export const getFlavorSchema = (flavor) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: flavor.name,
  description: flavor.description,
  image: `${site.url}${flavor.image}`,
  url: `${site.url}${getFlavorPath(flavor.slug)}`,
  brand: {
    '@type': 'Brand',
    name: site.name,
  },
  category: flavor.category,
});

export const getBreadcrumbSchema = (flavor) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${site.url}/`,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: flavor.name,
      item: `${site.url}${getFlavorPath(flavor.slug)}`,
    },
  ],
});
