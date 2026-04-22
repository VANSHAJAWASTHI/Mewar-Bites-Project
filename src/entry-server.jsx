import { renderToString } from 'react-dom/server';
import { HelmetProvider } from 'react-helmet-async';
import { StaticRouter } from 'react-router';
import App from './App.jsx';

export function render(url) {
  const helmetContext = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App initialLoading={false} />
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    html,
    helmet: helmetContext.helmet,
  };
}
