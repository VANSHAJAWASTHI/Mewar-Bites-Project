import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import FlavorGallery from '../components/FlavorGallery';
import Story from '../components/Story';
import FAQSection from '../components/FAQSection';
import Contact from '../components/Contact';
import SEOHead from '../components/SEOHead';
import { getHomeSeo, site } from '../data/siteContent';

const HomePage = () => {
  const seo = getHomeSeo();

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        image={seo.image}
        canonicalPath={seo.canonicalPath}
        schemaType={seo.schemaType}
        robots={seo.robots}
        structuredData={site.businessSchema}
      />

      <Hero />
      <BestSellers />
      <FlavorGallery />
      <Story />
      <FAQSection />
      <Contact />
    </>
  );
};

export default HomePage;
