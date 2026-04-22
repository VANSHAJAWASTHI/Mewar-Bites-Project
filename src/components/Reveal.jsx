import { useEffect, useRef, useState } from 'react';
import './Reveal.css';

const Reveal = ({ children, animation = 'fade-up', delay = 0 }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${animation} ${isVisible ? 'active' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default Reveal;
