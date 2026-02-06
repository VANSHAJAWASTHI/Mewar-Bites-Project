import { motion } from 'framer-motion';
import './Story.css';

const Story = () => {
    return (
        <section className="story-section section-padding">
            <div className="container story-container">

                <motion.div
                    className="story-content"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="subtitle">Since 1995</span>
                    <h2>Traditional Roots,<br />Modern Soul.</h2>

                    <div className="divider"></div>

                    <p>
                        In the rich heritage of Mewar, dessert is not just an after-meal treat—it is a ceremony.
                        <strong>Mewar Treats</strong> began as a small family passion, churning fresh milk from our own
                        farms with saffron, pistachios, and rose petals.
                    </p>
                    <p>
                        Today, we honor those traditions while embracing modern craftsmanship. Every batch is slow-churned
                        to ensure that dense, creamy texture that our patrons have come to love.
                    </p>

                    <a href="#contact" className="btn btn-primary" style={{ marginTop: '20px' }}>Contact Us</a>
                </motion.div>

                <div className="story-visual">
                    <motion.div
                        className="visual-bg"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    <motion.img
                        src="/images/WhatsApp Image 2026-02-05 at 10.47.57 PM.jpeg"
                        alt="Making Ice Cream"
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
