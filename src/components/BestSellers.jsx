import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './BestSellers.css';
import { getFeaturedFlavors, getFlavorPath } from '../data/siteContent';

const BestSellers = () => {
  const bestSellers = getFeaturedFlavors().slice(0, 6);
  const isServer = typeof window === 'undefined';

  return (
    <section className="best-sellers-section section-padding" itemScope itemType="https://schema.org/Collection">
      <div className="container">
        <header className="section-header text-center">
          <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>
            Customers' Choice
          </span>
          <h2 itemProp="name">Best Sellers</h2>
          <p itemProp="description">
            Our most popular artisanal ice creams and kulfis loved by customers
          </p>
        </header>

        <motion.div
          className="best-sellers-grid"
          initial={isServer ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {bestSellers.map((item) => (
            <article
              key={item.id}
              className="best-seller-card"
              itemScope
              itemType="https://schema.org/Product"
            >
              <Link to={getFlavorPath(item.slug)} className="best-seller-link">
                <div className="bs-image-wrapper">
                  <span className="bs-tag">Top Pick</span>
                  <img
                    src={item.image}
                    alt={`${item.name} - ${item.description}`}
                    className="bs-img"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                <div className="bs-content">
                  <h3 className="bs-title" itemProp="name">
                    {item.name}
                  </h3>
                  <meta itemProp="description" content={item.description} />
                  <span className="view-flavor-link">View details</span>
                </div>
              </Link>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BestSellers;
