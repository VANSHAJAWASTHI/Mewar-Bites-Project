import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import NotFoundPage from './NotFoundPage';
import { getBreadcrumbSchema, getFlavorBySlug, getFlavorSchema, getFlavorSeo, getFlavorPath, getFeaturedFlavors, site } from '../data/siteContent';
import './FlavorPage.css';

const FlavorPage = () => {
  const { slug } = useParams();
  const flavor = getFlavorBySlug(slug || '');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!flavor) {
    return <NotFoundPage />;
  }

  const seo = getFlavorSeo(flavor);
  const relatedFlavors = getFeaturedFlavors()
    .filter((item) => item.slug !== flavor.slug)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        image={seo.image}
        canonicalPath={seo.canonicalPath}
        schemaType={seo.schemaType}
        robots={seo.robots}
        structuredData={[getBreadcrumbSchema(flavor), site.businessSchema, getFlavorSchema(flavor)]}
      />

      <section className="flavor-page section-padding">
        <div className="container">
          <Breadcrumbs />

          <div className="flavor-page-hero">
            <div className="flavor-page-copy">
              <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>
                {flavor.category}
              </span>
              <h1>{flavor.name}</h1>
              <p className="flavor-page-description">{flavor.description}</p>

              <div className="flavor-meta">
                <div>
                  <span className="meta-label">Ingredients</span>
                  <span className="meta-value">{flavor.ingredients}</span>
                </div>
                <div>
                  <span className="meta-label">Allergens</span>
                  <span className="meta-value">{flavor.allergens}</span>
                </div>
              </div>

              <div className="flavor-page-actions">
                <Link to="/#flavors" className="btn btn-primary">
                  Back to collection
                </Link>
                <a href="/#contact" className="btn">
                  Enquire now
                </a>
              </div>
            </div>

            <div className="flavor-page-visual">
              <img src={flavor.image} alt={`${flavor.name} by Mewar Treats`} />
            </div>
          </div>

          <div className="flavor-detail-grid">
            <article className="detail-panel">
              <h2>Why it stands out</h2>
              <p>
                {flavor.shortDesc} This flavor is part of the handcrafted Mewar Treats
                collection and is prepared with a focus on traditional taste and premium
                ingredients.
              </p>
            </article>

            <article className="detail-panel">
              <h2>Explore more</h2>
              <div className="related-flavors">
                {relatedFlavors.map((item) => (
                  <Link key={item.slug} to={getFlavorPath(item.slug)} className="related-flavor-card">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlavorPage;
