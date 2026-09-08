import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './router'


function App() {
  return (
    // BASE_URL lets the same router work locally and under /portfolio-site/ on GitHub Pages.
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
