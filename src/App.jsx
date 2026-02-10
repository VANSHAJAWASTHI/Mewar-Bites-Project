import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import FlavorGallery from './components/FlavorGallery';
import Story from './components/Story';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Preloader from './components/Preloader';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll locking during load
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: loading ? false : true, // Disable lenis while loading
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Disable logic cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, [loading]);

  return (
    <div className="app-wrapper">
      <AnimatePresence mode='wait'>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />

        <main>
          <Hero />

          <BestSellers />

          <div id="flavors">
            <FlavorGallery />
          </div>

          <div id="about">
            <Story />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </div>
  )
}

export default App
