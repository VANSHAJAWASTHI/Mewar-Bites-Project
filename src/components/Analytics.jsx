import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (!measurementId) {
      return undefined;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = window.gtag || gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: location.pathname + location.search + location.hash,
      cookie_flags: 'sameSite=none;secure',
    });

    const reportWebVitals = (onPerfEntry) => {
      if (onPerfEntry && onPerfEntry instanceof Function) {
        import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          getCLS(onPerfEntry);
          getFID(onPerfEntry);
          getFCP(onPerfEntry);
          getLCP(onPerfEntry);
          getTTFB(onPerfEntry);
        });
      }
    };

    reportWebVitals((metric) => {
      gtag('event', metric.name, {
        value: Math.round(metric.value),
        event_category: 'Web Vitals',
        event_label: metric.id,
        non_interaction: true,
      });
    });

    const trackEvent = (eventName, parameters) => {
      gtag('event', eventName, parameters);
    };

    let maxScroll = 0;
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) {
        return;
      }

      const currentScroll = (window.scrollY / scrollHeight) * 100;

      if (currentScroll > maxScroll) {
        maxScroll = currentScroll;

        if (maxScroll >= 25 && maxScroll < 50) {
          trackEvent('scroll', { event_category: 'engagement', event_label: '25%' });
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackEvent('scroll', { event_category: 'engagement', event_label: '50%' });
        } else if (maxScroll >= 75 && maxScroll < 90) {
          trackEvent('scroll', { event_category: 'engagement', event_label: '75%' });
        } else if (maxScroll >= 90) {
          trackEvent('scroll', { event_category: 'engagement', event_label: '90%' });
        }
      }
    };

    const trackFormSubmit = (event) => {
      if (event.target.classList.contains('contact-form')) {
        trackEvent('form_submit', {
          event_category: 'lead_generation',
          event_label: 'distributorship_enquiry',
        });
      }
    };

    const trackProductClick = (event) => {
      if (event.target.closest('.flavor-card') || event.target.closest('.best-seller-card')) {
        trackEvent('product_click', {
          event_category: 'engagement',
          event_label: 'product_view',
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('submit', trackFormSubmit);
    document.addEventListener('click', trackProductClick);

    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        event_category: 'engagement',
        value: timeSpent,
        non_interaction: true,
      });
    };

    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('submit', trackFormSubmit);
      document.removeEventListener('click', trackProductClick);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [location]);

  useEffect(() => {
    if (!measurementId) {
      return undefined;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default Analytics;

