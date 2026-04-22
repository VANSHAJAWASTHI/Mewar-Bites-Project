import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'flavors', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <div style={{ position: 'relative', display: 'inline-flex' }}>
            <img src="/images/Mewar Treats Logo.png" alt="Mewar Treats" className="logo-img" />
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: '20%',
                right: '-12px',
                fontSize: '0.9rem',
                color: 'var(--color-primary)',
                fontWeight: '600',
              }}
            >
              TM
            </span>
          </div>
        </div>

        <div className="pure-veg-badge">
          <div className="veg-icon-box">
            <div className="veg-circle"></div>
          </div>
          <span className="veg-text">100% Pure Veg</span>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className="nav-menu desktop-menu">
          {['home', 'flavors', 'about', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`/#${item}`}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item === 'flavors' ? 'Collections' : item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="nav-menu mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              {['home', 'flavors', 'about', 'contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/#${item}`}
                    className="nav-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item === 'flavors' ? 'Collections' : item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

