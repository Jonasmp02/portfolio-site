import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    goatcounter?: { count: (vars?: { path?: string }) => void };
  }
}

// Skip local development, LAN testing and `vite preview`.
const isLocalHost = /^(localhost|127\.|0\.0\.0\.0|\[::1\]|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(
  window.location.hostname,
);

// Counts a GoatCounter page view on every route change. The script in index.html
// has no_onload set, so this is the only place views are counted.
const PageViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (isLocalHost) return;

    // location.pathname is relative to the router basename, so /portfolio-site/ is not included.
    const count = () => window.goatcounter?.count({ path: location.pathname });

    if (window.goatcounter?.count) {
      count();
      return;
    }

    // The script loads async, so the first view may happen before it is ready.
    const script = document.getElementById('goatcounter-script');
    script?.addEventListener('load', count, { once: true });
    return () => script?.removeEventListener('load', count);
  }, [location.pathname]);

  return null;
};

export default PageViewTracker;
