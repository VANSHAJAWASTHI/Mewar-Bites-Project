import { FaInstagram, FaFacebookF, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">Mewar Treats</h3>
                    <p className="footer-desc">
                        Crafting smiles, one scoop at a time. Join us on a journey
                        of traditional flavors and modern sweetness.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-icon"><FaInstagram /></a>
                        <a href="#" className="social-icon"><FaFacebookF /></a>
                        <a href="#" className="social-icon"><FaTwitter /></a>
                    </div>
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
                            <span>📍</span> 123 Ice Cream Lane, Udaipur
                        </li>
                        <li>
                            <span>📞</span> +91 98765 43210
                        </li>
                        <li>
                            <span>✉️</span> hello@mewartreats.com
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
                <p>&copy; 2026 Mewar Treats. Handcrafted with <FaHeart style={{ color: '#e25555', display: 'inline', width: '12px' }} /> in Udaipur.</p>
            </div>
        </footer>
    );
};

export default Footer;
