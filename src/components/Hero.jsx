import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const slides = [
    {
        id: 1,
        tagline: "Est. 2024",
        title1: "Artisanal",
        title2: "Excellence",
        desc: "Experience the rich tradition of Mewar blended with modern culinary artistry. Pure ingredients, zero preservatives, infinite joy.",
        image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM.jpeg",
        badge: "100% Organic"
    },
    {
        id: 2,
        tagline: "Royal Taste",
        title1: "Heritage",
        title2: "Flavors",
        desc: "Savor the royal essence of saffron and pistachios in every scoop. A tribute to the timeless desserts of Rajasthan.",
        image: "/images/WhatsApp Image 2026-02-05 at 10.47.57 PM (1).jpeg",
        badge: "Authentic"
    },
    {
        id: 3,
        tagline: "Summer Special",
        title1: "Mango",
        title2: "Delight",
        desc: "Hand-picked Alphonsos churned into creamy perfection. The ultimate summer treat for every dessert lover.",
        image: "/images/WhatsApp Image 2026-02-05 at 10.47.55 PM (1).jpeg",
        badge: "Seasonal"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [current, length]);

    const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
    const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">

                {/* Carousel Navigation - Invisible Click Zones */}
                {/* Carousel Navigation - Invisible Click Zones */}
                <div className="slider-nav-zone left-zone" onClick={prevSlide}></div>
                <div className="slider-nav-zone right-zone" onClick={nextSlide}></div>

                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className="hero-content-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hero-content">
                            <motion.span
                                className="hero-tagline"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {slides[current].tagline}
                            </motion.span>

                            <h1 className="hero-title">
                                <span className="block">{slides[current].title1}</span>
                                <span className="block highlight-wrapper">
                                    <span className="italic">{slides[current].title2}</span>
                                    <motion.div
                                        className="underline-anim"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 0.8, duration: 0.8 }}
                                    />
                                </span>
                            </h1>

                            <p className="hero-desc">
                                {slides[current].desc}
                            </p>

                            <div className="hero-cta">
                                <a href="#flavors" className="btn btn-primary">Discover Flavors</a>
                                <a href="#about" className="btn">Our Philosophy</a>
                            </div>
                        </div>

                        <div className="hero-visual">
                            <motion.div
                                className="hero-image-container"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="abstract-shape"></div>
                                <img
                                    src={slides[current].image}
                                    alt="Mewar Bites Ice Cream"
                                    className="hero-img"
                                />
                            </motion.div>

                            <motion.div
                                className="floating-badge badge-top"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span>{slides[current].badge}</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === current ? 'active' : ''}`}
                            onClick={() => setCurrent(index)}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;
