import { useState, useEffect } from 'react';
import { FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import './FloatingActions.css';

const FloatingActions = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="floating-actions">
            <a
                href="https://wa.me/919876543210"
                className="float-btn whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
            >
                <FaWhatsapp />
            </a>

            <button
                className={`float-btn to-top ${showTopBtn ? 'show' : ''}`}
                onClick={scrollToTop}
                aria-label="Back to Top"
            >
                <FaArrowUp />
            </button>
        </div>
    );
};

export default FloatingActions;
