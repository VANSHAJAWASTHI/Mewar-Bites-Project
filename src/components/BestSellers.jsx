import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProductModal from './ProductModal';
import './BestSellers.css';

const bestSellers = [
    {
        id: 1,
        name: "Rajbhog",
        category: "Royal Collection",
        image: "/images/Rajbhog.jpeg",
        description: "A royal treat loaded with dry fruits and saffron. Experience the authentic taste of tradition.",
        ingredients: "Saffron, Pistachios, Cashews, Almonds, Milk",
        allergens: "Dairy, Nuts"
    },
    {
        id: 2,
        name: "Roasted Almonds",
        category: "Nutty Delight",
        image: "/images/Roasted Almonds.jpeg",
        description: "Crunchy roasted almonds blended with creamy vanilla base. A perfect balance of texture and taste.",
        ingredients: "Roasted Almonds, Fresh Milk, Cream, Sugar",
        allergens: "Dairy, Nuts"
    },
    {
        id: 3,
        name: "Rabri Kulfi",
        category: "Traditional",
        image: "/images/Rabri Kulfi.jpeg",
        description: "Traditional slow-cooked milk kulfi with the authentic taste of Rabri.",
        ingredients: "Reduced Milk (Rabdi), Sugar, Cardamom, Nuts",
        allergens: "Dairy, Nuts"
    },
    {
        id: 4,
        name: "Choco Vanilla",
        category: "Chocolate",
        image: "/images/Choco Vanilla.jpeg",
        description: "The classic swirl of rich chocolate and creamy vanilla. A timeless favorite.",
        ingredients: "Milk, Cream, Cocoa, Vanilla Extract, Sugar",
        allergens: "Dairy"
    },
    {
        id: 5,
        name: "Mango Bar",
        category: "Fruity",
        image: "/images/Mango Bar.jpeg",
        description: "Experience the essence of summer with real mango pulp in a refreshing bar.",
        ingredients: "Mango Pulp, Sugar, Water",
        allergens: "None"
    },
    {
        id: 6,
        name: "Matka Kulfi",
        category: "Traditional",
        image: "/images/Matka Kulfi.jpeg",
        description: "Earthy and authentic kulfi served in a traditional clay pot for that rustic charm.",
        ingredients: "Reduced Milk, Sugar, Saffron, Nuts",
        allergens: "Dairy, Nuts"
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const BestSellers = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Close modal on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setSelectedProduct(null);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (selectedProduct) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [selectedProduct]);

    return (
<<<<<<< HEAD
        <section className="best-sellers-section section-padding" itemScope itemType="https://schema.org/Collection">
            <div className="container">
                <header className="section-header text-center">
                    <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Customers' Choice</span>
                    <h2 itemProp="name">Best Sellers</h2>
                    <p itemProp="description">Our most popular artisanal ice creams and kulfis loved by customers</p>
                </header>
=======
        <section className="best-sellers-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Customers' Choice</span>
                    <h2>Best Sellers</h2>
                </div>
>>>>>>> 72fe3b7611a8c821c34405e66d91519787f2d4e8

                <motion.div
                    className="best-sellers-grid"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {bestSellers.map((item) => (
<<<<<<< HEAD
                        <article
                            key={item.id}
                            className="best-seller-card"
                            onClick={() => setSelectedProduct(item)}
                            itemScope
                            itemType="https://schema.org/Product"
=======
                        <div
                            key={item.id}
                            className="best-seller-card"
                            onClick={() => setSelectedProduct(item)}
>>>>>>> 72fe3b7611a8c821c34405e66d91519787f2d4e8
                        >
                            <div className="bs-image-wrapper">
                                <span className="bs-tag">Top Pick</span>
                                <img
                                    src={item.image}
<<<<<<< HEAD
                                    alt={`${item.name} - ${item.description}`}
                                    className="bs-img"
                                    loading="lazy"
                                    itemProp="image"
                                />
                            </div>
                            <div className="bs-content">
                                <h3 className="bs-title" itemProp="name">{item.name}</h3>
                                <meta itemProp="description" content={item.description} />
                                <meta itemProp="category" content={item.category} />
                            </div>
                        </article>
=======
                                    alt={item.name}
                                    className="bs-img"
                                    loading="lazy"
                                />
                            </div>
                            <div className="bs-content">
                                <h3 className="bs-title">{item.name}</h3>
                            </div>
                        </div>
>>>>>>> 72fe3b7611a8c821c34405e66d91519787f2d4e8
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedProduct && (
                        <ProductModal
                            product={selectedProduct}
                            onClose={() => setSelectedProduct(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default BestSellers;
