import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import AboutSection from '../home/components/AboutSection';
import TeamSection from '../home/components/TeamSection';

export default function TeamPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <header className="pt-32 pb-12 bg-gradient-to-r from-violet-700 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/projects/bachelor"
              className="inline-flex items-center gap-2 text-violet-100 hover:text-white rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <i className="ri-arrow-left-line" aria-hidden="true"></i>
              Tilbake til bachelorprosjektet
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mt-8">Teamet bak bachelorprosjektet</h1>
            <p className="text-lg text-violet-100 mt-4">Bli kjent med oss og samarbeidet bak prosjektet.</p>
          </div>
        </header>
        <AboutSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
