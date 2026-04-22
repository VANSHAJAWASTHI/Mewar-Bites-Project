import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col" style={{ position: 'relative' }}>
                    <div style={{ position: 'relative', display: 'inline-block', marginBottom: 'var(--space-md)' }}>
                        <img
                            src="/images/Mewar Treats Logo.png"
                            alt="Mewar Treats"
                            className="footer-logo-img"
                            style={{ marginBottom: 0 }}
                        />
                        <span style={{
                            position: 'absolute',
                            top: '10px',
                            right: '-15px',
                            fontSize: '1rem',
                            color: 'var(--color-text)',
                            fontWeight: 'bold',
                            opacity: 0.8
                        }}>™</span>
                    </div>

                    <p className="footer-desc">
                        Crafting smiles, one scoop at a time. Join us on a journey
                        of traditional flavors and modern sweetness.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#flavors">Collections</a></li>
                        <li><a href="#about">Our Story</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact Us</h4>
                    <ul className="footer-links contact-info">
                        <li>
                            <span>📍</span> Village mengras, District Bhilwara, Rajasthan
                        </li>
                        <li>
                            <span>📞</span> <a href="tel:+918319573730">+91 83195 73730</a>
                        </li>
                        <li>
                            <span>📞</span> <a href="tel:+919358085364">+91 93580 85364</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Business Hours</h4>
                    <ul className="footer-links">
                        <li>Mon - Sun: 11:00 AM - 11:00 PM</li>
                        <li>Happy Hour: 5:00 PM - 7:00 PM</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Mewar Treats. Made with <FaHeart style={{ color: '#e25555', display: 'inline', width: '12px' }} /> in Rajasthan, India.</p>
            </div>
        </footer>
    );
};

export default Footer;
