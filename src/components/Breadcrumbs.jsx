import { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Breadcrumbs.css';
import { getFlavorBySlug } from '../data/siteContent';

const Breadcrumbs = () => {
  const location = useLocation();

  const breadcrumbs = useMemo(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);

    if (pathSegments.length === 0) {
      return [];
    }

    const items = [{ name: 'Home', path: '/' }];

    if (pathSegments[0] === 'flavors') {
      if (pathSegments[1]) {
        const flavor = getFlavorBySlug(pathSegments[1]);
        items.push({
          name: flavor ? flavor.name : pathSegments[1].replace(/-/g, ' '),
          path: location.pathname,
        });
      }
    }

    return items;
  }, [location.pathname]);

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
