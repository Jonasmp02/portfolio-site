import { useLanguage } from '../../i18n/useLanguage';
import { CvFooterLink } from './CvDownload';

const content = {
  no: {
    title: 'Jonas Moen Pettersen | Portefølje',
    description:
      'Porteføljeside med bachelorprosjekt, studieprosjekter og erfaringer innen frontend, UX, data og kunstig intelligens.',
    quickLinks: 'Hurtiglenker',
    home: 'Hjem',
    projects: 'Prosjekter',
    contact: 'Kontakt',
    location: 'NTNU, Trondheim · fra Ski',
  },
  en: {
    title: 'Jonas Moen Pettersen | Portfolio',
    description:
      'Portfolio featuring my bachelor project, study projects and experience in frontend, UX, data and artificial intelligence.',
    quickLinks: 'Quick links',
    home: 'Home',
    projects: 'Projects',
    contact: 'Contact',
    location: 'NTNU, Trondheim · from Ski',
  },
};

const Footer = () => {
  const c = content[useLanguage()];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text-light mb-4">{c.title}</h3>
            <p className="text-gray-400 mb-4">
              {c.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{c.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { name: c.home, id: 'hero' },
                { name: c.projects, id: 'projects' },
                { name: c.contact, id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{c.contact}</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <i className="ri-mail-line text-red-400 mr-3"></i>
                <a
                  href="mailto:jonazmp@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  jonazmp@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-mail-line text-red-400 mr-3"></i>
                <a
                  href="mailto:jonasmp@stud.ntnu.no"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  jonasmp@stud.ntnu.no
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-phone-line text-red-400 mr-3"></i>
                <a
                  href="tel:+4795306110"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  953 06 110
                </a>
              </div>
              <div className="flex items-center">
                <i className="ri-map-pin-line text-red-400 mr-3"></i>
                <span className="text-gray-400">{c.location}</span>
              </div>
              <CvFooterLink />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025-2026 Jonas Moen Pettersen.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
