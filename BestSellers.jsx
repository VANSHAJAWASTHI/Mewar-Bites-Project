import { motion } from 'framer-motion';
import './BestSellers.css';

const bestSellers = [
    { id: 1, name: "Roasted Almonds", image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM (1).jpeg" },
    { id: 2, name: "Rajbhog", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (1).jpeg" },
    { id: 3, name: "Lotus Biscoff", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (2).jpeg" },
    { id: 4, name: "Mewar Treat Special", image: "/images/WhatsApp Image 2026-02-05 at 10.47.56 PM (3).jpeg" },
    { id: 5, name: "Shahi Malai", image: "/images/WhatsApp Image 2026-02-05 at 10.47.57 PM (1).jpeg" },
    { id: 6, name: "Ek Rabdi Kulfi", image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM (1).jpeg" },
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
    return (
        <section className="best-sellers-section section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Customers' Choice</span>
                    <h2>Best Sellers</h2>
                </div>

                <motion.div
                    className="best-sellers-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {bestSellers.map((item) => (
                        <motion.div key={item.id} className="best-seller-card" variants={itemVariants}>
                            <div className="bs-image-wrapper">
                                <span className="bs-tag">Top Pick</span>
                                <img src={item.image} alt={item.name} className="bs-img" loading="lazy" />
                            </div>
                            <div className="bs-content">
                                <h3 className="bs-title">{item.name}</h3>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BestSellers;
