import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AboutSection from '../home/components/AboutSection';
import TeamSection from '../home/components/TeamSection';
import { useLanguage } from '../../i18n/useLanguage';

const content = {
  no: {
    back: 'Tilbake til bachelorprosjektet',
    title: 'Teamet bak bachelorprosjektet',
    subtitle: 'Bli kjent med oss og samarbeidet bak prosjektet.',
  },
  en: {
    back: 'Back to the bachelor project',
    title: 'The team behind the bachelor project',
    subtitle: 'Get to know us and the collaboration behind the project.',
  },
};

export default function TeamPage() {
  const c = content[useLanguage()];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <header className="pt-32 pb-12 bg-gradient-to-r from-brand-700 to-accent-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects/bachelor"
              className="inline-flex items-center gap-2 text-brand-100 hover:text-white rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <i className="ri-arrow-left-line" aria-hidden="true"></i>
              {c.back}
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mt-8">{c.title}</h1>
            <p className="text-lg text-brand-100 mt-4">{c.subtitle}</p>
          </div>
        </header>
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
