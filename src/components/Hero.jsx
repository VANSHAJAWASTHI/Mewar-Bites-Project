import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">

                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        className="hero-tagline"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Est. 2024
                    </motion.span>

                    <h1 className="hero-title">
                        <span className="block">Artisanal</span>
                        <span className="block highlight-wrapper">
                            <span className="italic">Excellence</span>
                            <motion.div
                                className="underline-anim"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </h1>

                    <p className="hero-desc">
                        Experience the rich tradition of Mewar blended with modern culinary artistry.
                        Pure ingredients, zero preservatives, infinite joy.
                    </p>

                    <div className="hero-cta">
                        <a href="#flavors" className="btn btn-primary">Discover Flavors</a>
                        <a href="#about" className="btn">Our Philosophy</a>
                    </div>
                </motion.div>

                <div className="hero-visual">
                    <motion.div
                        className="hero-image-container"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <div className="abstract-shape"></div>
                        <img
                            src="/images/WhatsApp Image 2026-02-05 at 10.47.55 PM.jpeg"
                            alt="Signature Ice Cream"
                            className="hero-img"
                        />
                    </motion.div>

                    <motion.div
                        className="floating-badge badge-top"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span>100% Organic</span>
                    </motion.div>

                    <motion.div
                        className="floating-badge badge-bottom"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        <span>Hand-Churned</span>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
