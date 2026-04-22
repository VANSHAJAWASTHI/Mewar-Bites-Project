import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';

const Breadcrumbs = () => {
  const location = useLocation();
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(segment => segment);
    const breadcrumbItems = [
      { name: 'Home', path: '/' }
    ];

    // Handle hash-based routing for SPA
    if (location.hash) {
      const hashSegments = location.hash.substring(1).split('/');
      
      if (hashSegments[0]) {
        const sectionMap = {
          'home': 'Home',
          'flavors': 'Collections',
          'about': 'About Us',
          'contact': 'Contact'
        };
        
        const sectionName = sectionMap[hashSegments[0]] || hashSegments[0];
        breadcrumbItems.push({
          name: sectionName,
          path: `#${hashSegments[0]}`
        });
      }
    }

    setBreadcrumbs(breadcrumbItems);
  }, [location]);

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav aria-label="Breadcrumb navigation" className="breadcrumbs">
      <ol className="breadcrumb-list">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index === breadcrumbs.length - 1 ? (
              <span className="breadcrumb-current" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="breadcrumb-link">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
