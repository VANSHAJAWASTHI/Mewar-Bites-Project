import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics 4 Configuration
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX', {
      page_path: location.pathname + location.search + location.hash,
      cookie_flags: 'sameSite=none;secure'
    });

    // Track page views
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href
    });

    // Core Web Vitals tracking
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
        non_interaction: true
      });
    });

    // Custom event tracking
    const trackEvent = (eventName, parameters) => {
      gtag('event', eventName, parameters);
    };

    // Track scroll depth
    let maxScroll = 0;
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = (window.scrollY / scrollHeight) * 100;
      
      if (currentScroll > maxScroll) {
        maxScroll = currentScroll;
        
        // Track scroll milestones
        if (maxScroll >= 25 && maxScroll < 50) {
          trackEvent('scroll', {
            event_category: 'engagement',
            event_label: '25%'
          });
        } else if (maxScroll >= 50 && maxScroll < 75) {
          trackEvent('scroll', {
            event_category: 'engagement',
            event_label: '50%'
          });
        } else if (maxScroll >= 75 && maxScroll < 90) {
          trackEvent('scroll', {
            event_category: 'engagement',
            event_label: '75%'
          });
        } else if (maxScroll >= 90) {
          trackEvent('scroll', {
            event_category: 'engagement',
            event_label: '90%'
          });
        }
      }
    };

    // Track form submissions
    const trackFormSubmit = (event) => {
      if (event.target.classList.contains('contact-form')) {
        trackEvent('form_submit', {
          event_category: 'lead_generation',
          event_label: 'distributorship_enquiry'
        });
      }
    };

    // Track product interactions
    const trackProductClick = (event) => {
      if (event.target.closest('.flavor-card') || event.target.closest('.best-seller-card')) {
        trackEvent('product_click', {
          event_category: 'engagement',
          event_label: 'product_view'
        });
      }
    };

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('submit', trackFormSubmit);
    document.addEventListener('click', trackProductClick);

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      trackEvent('time_on_page', {
        event_category: 'engagement',
        value: timeSpent,
        non_interaction: true
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

  // Load Google Analytics script
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default Analytics;
