import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// GitHub Pages SPA fallback handling:
// If a visitor requested a deep URL and GitHub Pages served public/404.html,
// our 404.html redirects to index.html#<original-path>. We restore the
// original pathname before React mounts so BrowserRouter receives the
// correct location and routing works with pretty URLs.
(function handleGitHubPagesRedirect() {
  try {
    const hash = window.location.hash;
    if (hash && hash.length > 1) {
      // hash contains the original absolute path (e.g. "#/portfolio-site/prosjektstatus")
      const original = hash.slice(1); // remove '#'
      if (original.startsWith('/')) {
        // replace the browser URL without reloading
        window.history.replaceState({}, '', original);
      }
    }
  } catch (e) {
    // ignore
    console.error(e);
  }
})();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
