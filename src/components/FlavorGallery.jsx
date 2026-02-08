import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductModal from './ProductModal';
import './FlavorGallery.css'; // Reusing CSS, will add filter styles

const allFlavors = [
    {
        id: 1,
        name: "Pista",
        category: "Fruity", // Using Pista within Fruity/Nutty context or create new category? Let's use "Royal" or "Nutty". Let's stick to simple categories.
        // Actually, let's redefine categories: Royal, Traditional, Chocolate, Fruity, Family Packs
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
        shortDesc: "Crunchy almond ice cream.",
        description: "Smooth and creamy ice cream base with the satisfying crunch of perfectly roasted almonds.",
        ingredients: "Milk, Cream, Roasted Almonds, Sugar",
        allergens: "Dairy, Nuts"
    },
    {
        id: 6,
        name: "Bulk Pack",
        category: "Family Packs",
        image: "/images/Bulk Pack.jpeg",
        shortDesc: "Value pack for the family.",
        description: "Bring home the joy with our value-packed family tubs. Perfect for gatherings and daily treats.",
        ingredients: "Varied flavors",
        allergens: "Dairy"
    },
    {
        id: 7,
        name: "Choco Vanilla",
        category: "Chocolate",
        image: "/images/Choco Vanilla.jpeg",
        shortDesc: "Best of both worlds.",
        description: "The classic swirl of rich chocolate and creamy vanilla. A timeless favorite for everyone.",
        ingredients: "Milk, Cream, Cocoa, Vanilla Extract",
        allergens: "Dairy"
    },
    {
        id: 8,
        name: "Chocolate",
        category: "Chocolate",
        image: "/images/Chocolate.jpeg",
        shortDesc: "Intense cocoa indulgence.",
        description: "Intense and indulgent chocolate ice cream crafted for true cocoa lovers.",
        ingredients: "Milk, Cream, Cocoa Powder, Sugar",
        allergens: "Dairy"
    },
    {
        id: 9,
        name: "Kesar Kulfi",
        category: "Traditional",
        image: "/images/Kesar Kulfi.jpeg",
        shortDesc: "Saffron infused kulfi.",
        description: "The golden hue and aromatic flavor of saffron infused into our signture creamy kulfi.",
        ingredients: "Milk, Sugar, Saffron",
        allergens: "Dairy"
    },
    {
        id: 10,
        name: "Mango Bar",
        category: "Fruity",
        image: "/images/Mango Bar.jpeg",
        shortDesc: "Real mango pulp bar.",
        description: "Experience the essence of summer with real mango pulp in a refreshing, cool bar.",
        ingredients: "Mango Pulp, Sugar, Water",
        allergens: "None"
    },
    {
        id: 11,
        name: "Matka Kulfi",
        category: "Traditional",
        image: "/images/Matka Kulfi.jpeg",
        shortDesc: "Kulfi in clay pot.",
        description: "Earthy and authentic kulfi served in a traditional clay pot (Matka) for that rustic charm.",
        ingredients: "Reduced Milk, Sugar, Saffron, Nuts",
        allergens: "Dairy, Nuts"
    },
    {
        id: 12,
        name: "Mini Chocobar",
        category: "Chocolate",
        image: "/images/Mini Chocobar.jpeg",
        shortDesc: "Bite-sized chocobar.",
        description: "Bite-sized chocolate coated vanilla bars. The perfect quick treat for any time of day.",
        ingredients: "Milk, Sugar, Cocoa Solids, Chocolate Coating",
        allergens: "Dairy, Soy"
    },
];

const categories = ["All", "Royal", "Traditional", "Chocolate", "Fruity", "Family Packs"];

const FlavorGallery = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [filteredFlavors, setFilteredFlavors] = useState(allFlavors);
    const [selectedFlavor, setSelectedFlavor] = useState(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                layoutId={`card-${flavor.id}`}
                            >
                                <div className="card-image-wrapper">
                                    <div className="category-tag">{flavor.category}</div>
                                    <motion.img
                                        src={flavor.image}
                                        alt={flavor.name}
                                        className="flavor-image"
                                        loading="lazy"
                                        layoutId={`image-${flavor.id}`}
                                    />
                                    <div className="overlay"></div>
                                    <button className="view-btn">View Details</button>
                                </div>
                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{flavor.name}</h3>
                                    </div>
                                    <p>{flavor.shortDesc}</p>
                                </div>
                            </motion.div>
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
