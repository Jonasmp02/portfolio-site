import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'
import PageViewTracker from './components/feature/PageViewTracker'
import ChatWidget from './components/feature/ChatWidget'


function App() {
  return (
    // BASE_URL lets the same router work locally and under /portfolio-site/ on GitHub Pages.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PageViewTracker />
      <AppRoutes />
      <ChatWidget />
    </BrowserRouter>
  )
}

export default App
