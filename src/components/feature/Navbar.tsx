import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // From subpages, navigate home first so the target section exists before scrolling.
      window.REACT_APP_NAVIGATE('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Hjem', id: 'hero' },
    { name: 'Prosjekter', id: 'projects' },
    { name: 'Kontakt', id: 'contact' },
  ];

  const navigateToBachelor = () => {
    // Prefer React Router navigation; fallback keeps the link working before the router helper is ready.
    if (window.REACT_APP_NAVIGATE) {
      window.REACT_APP_NAVIGATE('/projects/bachelor');
    } else {
      window.location.href = `${import.meta.env.BASE_URL}projects/bachelor`;
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-white/10 backdrop-blur-sm'
    }`} style={{ margin: 0, padding: 0 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm sm:text-xl xl:text-2xl font-bold cursor-pointer whitespace-nowrap transition-colors duration-300 ${
                isScrolled 
                  ? 'gradient-text' 
                  : 'text-white'
              }`}
            >
              Jonas Moen Pettersen | Portefølje
            </button>
          </div>

          <div className="hidden xl:block">
            <div className="ml-6 flex items-center space-x-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-base font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-blue-200'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/team/jonas"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={location.pathname === '/team/jonas' ? 'page' : undefined}
                className={`px-3 py-2 rounded-md text-base font-semibold whitespace-nowrap transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600 aria-[current=page]:bg-violet-100' : 'text-white hover:bg-white/15 aria-[current=page]:bg-white/20'
                }`}
              >
                Mer om meg
              </Link>
              <button
                onClick={navigateToBachelor}
                className={`ml-4 pl-4 border-l transition-colors cursor-pointer ${
                  isScrolled
                    ? 'border-gray-300 text-gray-700 hover:text-blue-600'
                    : 'border-white/30 text-white hover:text-blue-200'
                }`}
              >
                <div className="text-base font-semibold">Bachelorprosjekt</div>
                <div className="text-sm opacity-75">(Knowit)</div>
              </button>
            </div>
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors cursor-pointer ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-blue-200'
              }`}
              aria-label={isMobileMenuOpen ? 'Lukk meny' : 'Åpne meny'}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <i className={`ri-${isMobileMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
              </div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg mt-2 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left cursor-pointer whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
              <Link
                to="/team/jonas"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={location.pathname === '/team/jonas' ? 'page' : undefined}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 aria-[current=page]:bg-violet-100"
              >
                Mer om meg
              </Link>
              <button
                onClick={navigateToBachelor}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 w-full text-left cursor-pointer mt-2 border-t border-gray-200 pt-3"
              >
                <div>Bachelorprosjekt</div>
                <div className="text-sm opacity-75">(Knowit)</div>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
