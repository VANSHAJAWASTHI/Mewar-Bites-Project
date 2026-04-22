import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFoundPage = () => {
  return (
    <section className="section-padding">
      <SEOHead
        title="Page not found | Mewar Treats"
        description="The requested page could not be found."
        canonicalPath="/404"
        robots="noindex, nofollow"
        structuredData={[]}
      />
      <div className="container" style={{ textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>The page you requested does not exist.</p>
        <Link to="/" className="btn btn-primary">
          Return home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
