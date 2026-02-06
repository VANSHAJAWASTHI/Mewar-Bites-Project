import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './FlavorGallery.css'; // Reusing CSS, will add filter styles

const allFlavors = [
    { id: 1, name: "Sunset Mango", category: "Fruity", price: "₹120", image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM (1).jpeg" },
    { id: 2, name: "Berry Blast", category: "Fruity", price: "₹140", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (1).jpeg" },
    { id: 3, name: "Royal Pista", category: "Royal", price: "₹150", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (2).jpeg" },
    { id: 4, name: "Choco Seduction", category: "Chocolate", price: "₹130", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (3).jpeg" },
    { id: 5, name: "Kesar Delight", category: "Royal", price: "₹160", image: "/images/WhatsApp Image 2026-02-05 at 10.47.57 PM (1).jpeg" },
    { id: 6, name: "Choco Chip", category: "Chocolate", price: "₹130", image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM (1).jpeg" }, // Reusing image for demo
];

const categories = ["All", "Fruity", "Royal", "Chocolate"];

const FlavorGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredFlavors, setFilteredFlavors] = useState(allFlavors);
    const [selectedFlavor, setSelectedFlavor] = useState(null);

    useEffect(() => {
        if (activeCategory === "All") {
            setFilteredFlavors(allFlavors);
        } else {
            setFilteredFlavors(allFlavors.filter(f => f.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <section className="flavors-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle">Our Collections</span>
                    <h2>Curated Delights</h2>
                </div>

                <div className="filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="flavor-grid">
                    <AnimatePresence>
                        {filteredFlavors.map((flavor) => (
                            <motion.div
                                className="flavor-card"
                                key={flavor.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedFlavor(flavor)}
                            >
                                <div className="card-image-wrapper">
                                    <div className="category-tag">{flavor.category}</div>
                                    <img src={flavor.image} alt={flavor.name} className="flavor-image" loading="lazy" />
                                    <div className="overlay"></div>
                                    <button className="view-btn">View Details</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{flavor.name}</h3>
                                        <span className="price">{flavor.price}</span>
                                    </div>
                                    <p>Artisanal scoop made with fresh ingredients.</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Flavor Modal */}
                <AnimatePresence>
                    {selectedFlavor && (
                        <motion.div
                            className="modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedFlavor(null)}
                        >
                            <motion.div
                                className="modal-content"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="close-btn" onClick={() => setSelectedFlavor(null)}>&times;</button>

                                <div className="modal-body">
                                    <div className="modal-image-col">
                                        <img src={selectedFlavor.image} alt={selectedFlavor.name} />
                                    </div>
                                    <div className="modal-text-col">
                                        <span className="modal-category">{selectedFlavor.category}</span>
                                        <h3>{selectedFlavor.name}</h3>
                                        <div className="modal-price">{selectedFlavor.price}</div>
                                        <p className="modal-desc">
                                            Indulge in the rich, creamy texture of our handcrafted {selectedFlavor.name}.
                                            Made with locally sourced, premium ingredients to deliver an authentic taste
                                            of Mewar in every scoop.
                                        </p>

                                        <div className="modal-details">
                                            <div className="detail-item">
                                                <span className="label">Ingredients</span>
                                                <span className="value">Fresh Milk, Cream, Natural Flavors</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="label">Allergens</span>
                                                <span className="value">Dairy, Nuts</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FlavorGallery;
