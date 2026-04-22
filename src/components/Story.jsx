import { motion } from 'framer-motion';
import './Story.css';

const Story = () => {
    return (
<<<<<<< HEAD
        <section className="story-section section-padding" itemScope itemType="https://schema.org/AboutPage">
            <div className="container story-container">

                <motion.article
=======
        <section className="story-section section-padding">
            <div className="container story-container">

                <motion.div
>>>>>>> 72fe3b7611a8c821c34405e66d91519787f2d4e8
                    className="story-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="subtitle" style={{ color: 'var(--color-secondary)' }}>Since 2024</span>
<<<<<<< HEAD
                    <h2 itemProp="headline">Heritage of <br /><span style={{ color: 'var(--color-primary)' }}>Mewar</span></h2>

                    <div className="divider"></div>

                    <div itemProp="text">
                        <p>
                            Born in the heart of Rajasthan, <strong itemProp="name">Mewar Treats</strong> is more than a dessert brand—it's a tribute to a royal legacy.
                            We believe that true indulgence lies in purity. That's why every scoop is crafted from farm-fresh milk,
                            churned slowly to perfection, and infused with the finest saffron, rose petals, and nuts.
                        </p>
                        <p>
                            No preservatives, no shortcuts. Just the authentic taste of tradition, served with love.
                            Experience the royal delicacy that has been delighting families for generations.
                        </p>
                    </div>

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }} aria-label="Contact us to learn more about our journey">Our Journey</a>
                </motion.article>
=======
                    <h2>Heritage of <br /><span style={{ color: 'var(--color-primary)' }}>Mewar</span></h2>

                    <div className="divider"></div>

                    <p>
                        Born in the heart of Rajasthan, <strong>Mewar Treats</strong> is more than a dessert brand—it's a tribute to a royal legacy.
                        We believe that true indulgence lies in purity. That’s why every scoop is crafted from farm-fresh milk,
                        churned slowly to perfection, and infused with the finest saffron, rose petals, and nuts.
                    </p>
                    <p>
                        No preservatives, no shortcuts. Just the authentic taste of tradition, served with love.
                        Experience the royal delicacy that has been delighting families for generations.
                    </p>

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }}>Our Journey</a>
                </motion.div>
>>>>>>> 72fe3b7611a8c821c34405e66d91519787f2d4e8

                <div className="story-visual">
                    <motion.div
                        className="visual-bg"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="/images/Matka Kulfi.jpeg"
                        alt="Matka Kulfi - Heritage of Mewar"
                        className="story-img"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </div>

            </div>
        </section>
    );
};

export default Story;
