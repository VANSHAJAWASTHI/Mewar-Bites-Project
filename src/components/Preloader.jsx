import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 1000); // Wait for exit animation
        }, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="preloader"
            initial={{ y: 0 }}
            animate={{ y: loading ? 0 : '-100%' }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        >
            <div className="preloader-content">
                <motion.img
                    src="/images/Mewar Treats Logo.png"
                    alt="Mewar Treats"
                    className="preloader-logo"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <motion.div
                    className="loader-line"
                    initial={{ width: 0 }}
                    animate={{ width: loading ? '200px' : '200px' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </div>

            {/* Curved SVG for curtain effect */}
            <svg className="curtain-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path
                    d="M0 0 L100 0 L100 100 Q50 100 0 100 Z"
                    animate={{ d: loading ? "M0 0 L100 0 L100 100 Q50 100 0 100 Z" : "M0 0 L100 0 L100 0 Q50 100 0 0 Z" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                    fill="#1A1A1A"
                />
            </svg>
        </motion.div>
    );
};

export default Preloader;
