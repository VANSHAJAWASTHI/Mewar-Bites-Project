import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Analytics from './components/Analytics';
import HomePage from './pages/HomePage';
import FlavorPage from './pages/FlavorPage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';

function App({ initialLoading = true }) {
  const [loading, setLoading] = useState(initialLoading);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [loading]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: loading ? false : true,
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

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animationFrameId);
    };
  }, [loading]);

  return (
    <div className="app-wrapper">
      <Analytics />
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.5s ease' }}>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flavors/:slug" element={<FlavorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingActions />
      </div>
    </div>
  );
}

export default App;
