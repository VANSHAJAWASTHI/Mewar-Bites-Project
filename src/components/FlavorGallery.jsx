import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductModal from './ProductModal';
import './FlavorGallery.css';

const allFlavors = [
    {
        id: 1,
        name: "Pista",
        category: "Royal",
        image: "/images/Pista.jpeg",
        shortDesc: "Rich pistachio loaded kulfi.",
        description: "Rich and creamy kulfi loaded with premium roasted pistachios for a delightful crunch.",
        ingredients: "Milk, Sugar, Pistachios",
        allergens: "Dairy, Nuts"
    },
    {
        id: 2,
        name: "Rabri Dryfruit Kulfi",
        category: "Royal",
        image: "/images/Rabri Dryfruit Kulfi .jpeg",
        shortDesc: "Thickened milk with dry fruits.",
        description: "A luxurious blend of thickened milk (Rabri) and mixed dry fruits, a true royal indulgence.",
        ingredients: "Reduced Milk, Cashews, Almonds, Pistachios, Sugar",
        allergens: "Dairy, Nuts"
    },
    {
        id: 3,
        name: "Rabri Kulfi",
        category: "Traditional",
        image: "/images/Rabri Kulfi.jpeg",
        shortDesc: "Classic slow-cooked kulfi.",
        description: "Traditional slow-cooked milk kulfi with the authentic, caramelized taste of Rabri.",
        ingredients: "Reduced Milk, Sugar, Cardamom",
        allergens: "Dairy"
    },
    {
        id: 4,
        name: "Rajbhog",
        category: "Royal",
        image: "/images/Rajbhog.jpeg",
        shortDesc: "Saffron and nuts delight.",
        description: "A royal dessert featuring the golden hue of saffron, fragrant cardamom, and a bounty of nuts.",
        ingredients: "Milk, Saffron, Cardamom, Cashews, Almonds",
        allergens: "Dairy, Nuts"
    },
    {
        id: 5,
        name: "Roasted Almonds",
        category: "Royal",
        image: "/images/Roasted Almonds.jpeg",
        shortDesc: "Crunchy almond perfection.",
        description: "Premium roasted almonds blended to perfection in a creamy base.",
        ingredients: "Milk, Sugar, Almonds",
        allergens: "Dairy, Nuts"
    },
    {
        id: 6,
        name: "Choco Vanilla",
        category: "Chocolate",
        image: "/images/Choco Vanilla.jpeg",
        shortDesc: "Classic swirl delight.",
        description: "The perfect harmony of rich chocolate and creamy vanilla in every bite.",
        ingredients: "Milk, Cream, Cocoa, Vanilla Extract, Sugar",
        allergens: "Dairy"
    },
    {
        id: 7,
        name: "Mango Bar",
        category: "Fruity",
        image: "/images/Mango Bar.jpeg",
        shortDesc: "Tropical mango bliss.",
        description: "Hand-picked Alphonsos transformed into a refreshing mango bar.",
        ingredients: "Mango Pulp, Sugar, Water",
        allergens: "None"
    },
    {
        id: 8,
        name: "Matka Kulfi",
        category: "Traditional",
        image: "/images/Matka Kulfi.jpeg",
        shortDesc: "Earthy clay pot tradition.",
        description: "Authentic kulfi served in traditional earthen pots for rustic charm.",
        ingredients: "Reduced Milk, Sugar, Saffron, Nuts",
        allergens: "Dairy, Nuts"
    },
    {
        id: 9,
        name: "Kesar Kulfi",
        category: "Royal",
        image: "/images/Kesar Kulfi.jpeg",
        shortDesc: "Golden saffron elegance.",
        description: "Premium saffron-infused kulfi with the rich aroma of royal kitchens.",
        ingredients: "Milk, Saffron, Sugar, Cardamom",
        allergens: "Dairy"
    },
    {
        id: 10,
        name: "Mini Chocobar",
        category: "Chocolate",
        image: "/images/Mini Chocobar.jpeg",
        shortDesc: "Pocket-sized chocolate joy.",
        description: "Compact chocolate bars perfect for instant indulgence.",
        ingredients: "Milk, Cream, Cocoa, Sugar",
        allergens: "Dairy"
    }
];

const categories = ["All", "Royal", "Traditional", "Chocolate", "Fruity"];

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

const FlavorGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedFlavor, setSelectedFlavor] = useState(null);

    const filteredFlavors = useMemo(() => {
        if (activeCategory === "All") {
            return allFlavors;
        } else {
            return allFlavors.filter(f => f.category === activeCategory);
        }
    }, [activeCategory]);

    return (
        <section id="flavors" className="flavor-gallery-section section-padding" itemScope itemType="https://schema.org/Menu">
            <div className="container">
                <header className="section-header text-center">
                    <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Our Collections</span>
                    <h2 itemProp="name">Artisanal Flavors</h2>
                    <p itemProp="description">Discover our handcrafted selection of traditional Rajasthani ice creams and kulfis</p>
                </header>

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
                            <motion.article
                                className="flavor-card"
                                key={flavor.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setSelectedFlavor(flavor)}
                                layoutId={`card-${flavor.id}`}
                                itemScope
                                itemType="https://schema.org/MenuItem"
                            >
                                <div className="card-image-wrapper">
                                    <div className="category-tag">{flavor.category}</div>
                                    <motion.img
                                        src={flavor.image}
                                        alt={`${flavor.name} - ${flavor.shortDesc}`}
                                        className="flavor-image"
                                        loading="lazy"
                                        layoutId={`image-${flavor.id}`}
                                        itemProp="image"
                                    />
                                    <div className="overlay"></div>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3 itemProp="name">{flavor.name}</h3>
                                    </div>
                                    <p itemProp="description">{flavor.shortDesc}</p>
                                    <meta itemProp="offers" content={`Price available on request - ${flavor.category} collection`} />
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Flavor Modal */}
                <AnimatePresence>
                    {selectedFlavor && (
                        <ProductModal
                            product={selectedFlavor}
                            onClose={() => setSelectedFlavor(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default FlavorGallery;
