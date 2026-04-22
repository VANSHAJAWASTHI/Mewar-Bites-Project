import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './FlavorGallery.css';
import { flavorCategories, getAllFlavors, getFlavorPath } from '../data/siteContent';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FlavorGallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const isServer = typeof window === 'undefined';

  const filteredFlavors = useMemo(() => {
    const flavors = getAllFlavors();
    return activeCategory === 'All'
      ? flavors
      : flavors.filter((flavor) => flavor.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="flavors" className="flavor-gallery-section section-padding" itemScope itemType="https://schema.org/Menu">
      <div className="container">
        <header className="section-header text-center">
          <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>
            Our Collections
          </span>
          <h2 itemProp="name">Artisanal Flavors</h2>
          <p itemProp="description">
            Discover our handcrafted selection of traditional Rajasthani ice creams and kulfis
          </p>
        </header>

        <div className="filter-tabs">
          {flavorCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          className="flavor-grid"
          variants={containerVariants}
          initial={isServer ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredFlavors.map((flavor) => (
            <motion.article
              className="flavor-card"
              key={flavor.id}
              variants={itemVariants}
              itemScope
              itemType="https://schema.org/Product"
            >
              <Link to={getFlavorPath(flavor.slug)} className="flavor-card-link">
                <div className="card-image-wrapper">
                  <div className="category-tag">{flavor.category}</div>
                  <img
                    src={flavor.image}
                    alt={`${flavor.name} - ${flavor.shortDesc}`}
                    className="flavor-image"
                    loading="lazy"
                    itemProp="image"
                  />
                  <div className="overlay"></div>
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <h3 itemProp="name">{flavor.name}</h3>
                  </div>
                  <p itemProp="description">{flavor.shortDesc}</p>
                  <span className="view-flavor-link">View details</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FlavorGallery;
