import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

const KristianPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('kristian-profile');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const competencies = [
    { category: 'Frontend', skills: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Figma'] },
    { category: 'Backend & API', skills: ['Python', 'Java', 'Node.js', 'FastAPI', 'REST APIs'] },
    { category: 'Database & data', skills: ['PostgreSQL', 'MySQL/MariaDB', 'SQL'] },
    { category: 'Utviklerverktøy', skills: ['Git/GitHub', 'Docker', 'Visual Studio Code', 'Visual Studio', 'PowerShell', 'Trello', 'AI-assisted development'] },
  ];

  const interests = [
    { icon: 'ri-run-line', title: 'Sport & trening', description: 'Aktiv livsstil og styrketrening' },
    { icon: 'ri-computer-line', title: 'PC & Teknologi', description: 'Alt som har med PC å gjøre' },
    { icon: 'ri-brain-line', title: 'Kunstig Intelligens', description: 'Leser jevnlig om AI-utvikling' },
    { icon: 'ri-palette-line', title: 'Design', description: 'Figma og universell utforming' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={withBase('images/kristian.jpg')}
                    alt="Kristian Magnus Bergedalen"
                    className="w-full h-full object-cover transform transition-transform duration-500 will-change-transform"
                    style={{ transform: 'scale(1.03)', objectPosition: '50% 35%' }}
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full opacity-30"></div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Kristian Magnus <span className="gradient-text">Bergedalen</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  Kolbotn • Bachelor i IT og informasjonssystemer • Utvikling, UX og AI
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/KristianMB13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                    aria-label="Kristian på GitHub"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kristian-magnus-bergedalen-221bb3186/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-accent-500 to-brand-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                    aria-label="Kristian på LinkedIn"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kort om meg</h3>
                <p className="text-gray-600 leading-relaxed">
                  Nyutdannet med bachelor i IT og informasjonssystemer, med interesse for utvikling, frontend, brukeropplevelse og AI. Jeg liker å kombinere praktisk kode, tydelig brukerflyt og nye verktøy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="kristian-profile" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Om <span className="gradient-text">Kristian</span>
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Jeg heter Kristian Magnus Bergedalen, kommer fra Kolbotn og har bachelor i IT og informasjonssystemer fra Universitetet i Agder. Gjennom studiet har jeg fått erfaring med programmering, databaser, systemanalyse, universell utforming og design. Jeg har også deltatt i flere gruppeprosjekter hvor samarbeid og strukturert arbeid har vært sentralt.
                </p>
                
                <p>
                  Jeg har alltid hatt en sterk interesse for teknologi. Innen IT er design og brukeropplevelse noe av det som interesserer meg mest. Jeg har vært aktiv i Figma og jobbet mye med universell utforming i tidligere prosjekter. I tillegg følger jeg med på hvordan AI kan brukes til å forbedre og effektivisere utviklingsarbeid.
                </p>
                
                <p>
                  Utenfor studier og utvikling liker jeg å trene og løpe, og jeg er generelt glad i sport, spesielt fotball. Jeg setter pris på å sosialisere og kobler gjerne av med spill eller samtaler med kompiser.
                </p>

                <p>
                  Som person er jeg nysgjerrig, løsningsorientert og lærevillig. Jeg trives best når jeg får kombinere teknologi og kreativitet for å finne praktiske løsninger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relevante <span className="gradient-text">kompetanseområder</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((comp, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{comp.category}</h3>
                <div className="space-y-2">
                  {comp.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interesser & <span className="gradient-text">Hobbyer</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${interest.icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{interest.title}</h3>
                <p className="text-gray-600">{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-brand-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Vil du se mer av arbeidet?
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            GitHub og LinkedIn har mer kontekst om prosjektene og erfaringen min.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/KristianMB13"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-github-fill mr-2"></i>
              Se GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kristian-magnus-bergedalen-221bb3186/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-800 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-linkedin-fill mr-2"></i>
              Kontakt på LinkedIn
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KristianPage;
