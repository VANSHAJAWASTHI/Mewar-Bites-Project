import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const slides = [
    {
        id: 1,
        tagline: "Est. 2024",
        title1: "Artisanal",
        title2: "Excellence",
        desc: "Experience the rich tradition of Mewar blended with modern culinary artistry. Pure ingredients, zero preservatives, infinite joy.",
        image: "/images/Matka Kulfi.jpeg",
        badge: "100% Organic"
    },
    {
        id: 2,
        tagline: "Royal Taste",
        title1: "Heritage",
        title2: "Flavors",
        desc: "Savor the royal essence of saffron and pistachios in every scoop. A tribute to the timeless desserts of Rajasthan.",
        image: "/images/Rajbhog.jpeg",
        badge: "Authentic"
    },
    {
        id: 3,
        tagline: "Summer Special",
        title1: "Mango",
        title2: "Delight",
        desc: "Hand-picked Alphonsos churned into creamy perfection. The ultimate summer treat for every dessert lover.",
        image: "/images/Mango Bar.jpeg",
        badge: "Seasonal"
    }
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    useEffect(() => {
        // Preload images
        slides.forEach(slide => {
            const img = new Image();
            img.src = slide.image;
        });

        const interval = setInterval(() => {
            setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(interval);
    }, [length]);



    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <section id="home" className="hero-section" itemScope itemType="https://schema.org/FoodService">
            <div className="hero-container">

                {/* Carousel Navigation */}


                <AnimatePresence mode='wait'>
                    <motion.div
                        key={current}
                        className="hero-content-wrapper"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <header className="hero-content">
                            <span className="hero-tagline" itemProp="servesCuisine">
                                {slides[current].tagline}
                            </span>

                            <h1 className="hero-title" itemProp="name">
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

                            <p className="hero-desc" itemProp="description">
                                {slides[current].desc}
                            </p>

                            <nav className="hero-cta" aria-label="Main navigation">
                                <a href="#flavors" className="btn btn-primary" aria-label="Discover our artisanal ice cream flavors">Discover Flavors</a>
                                <a href="#about" className="btn" aria-label="Learn about our philosophy and heritage">Our Philosophy</a>
                            </nav>
                        </header>

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
                                    alt={`${slides[current].title1} ${slides[current].title2} - ${slides[current].desc}`}
                                    className={`hero-img ${slides[current].id === 3 ? 'mango-img' : ''}`}
                                    loading="eager"
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
