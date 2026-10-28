import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

const NidalPage = () => {

  // Set scroll position to top immediately, before any other effects
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Existing code from original
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

    const element = document.getElementById('nidal-profile');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const competencies = [
    { category: 'Front-End', skills: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Figma'] },
    { category: 'Back-End', skills: ['Python', 'Java', 'React', 'TypeScript', 'Node.js' ] },
    { category: 'Database', skills: ['MySQL/MariaDB'] },
    { category: 'Utviklerverktøy', skills: ['Git/GitHub', 'Docker', 'Visual Studio', 'Visual Studio Code', 'PowerShell', 'Trello', 'Discord'] },

  ];

  const interests = [
    { icon: 'ri-computer-line', title: 'PC Building', description: 'Bygge og reparere PC-er' },
    { icon: 'ri-settings-3-line', title: 'Teknologi', description: 'Problemløsning og innovasjon' },
    { icon: 'ri-ping-pong-line', title: 'Tennis', description: 'Aktiv i tennis og sport' },
    { icon: 'ri-flight-takeoff-line', title: 'Reising', description: 'Oppleve nye steder og kulturer' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={withBase('images/nidalexpand.jpg')}
                    alt="Nidal Alendar"
                    className="w-full h-full object-cover transform scale-100 transition-transform duration-500"
                    style={{ objectPosition: '50% 60%' }}
                  />
                </div>
                {/* Floating decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-brand-500 to-accent-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent-500 to-brand-500 rounded-full opacity-30"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Nidal <span className="gradient-text">Alendar</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  21 år gammel • Kristiansand • Software Developer
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/dzemalen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-github-fill text-xl"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nidal-alendar-905a4b382/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-r from-accent-500 to-brand-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <i className="ri-linkedin-fill text-xl"></i>
                  </a>
                </div>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Kort om meg</h3>
                <p className="text-gray-600 leading-relaxed">
                  Engasjert og løsningsorientert person som ønsker å bidra positivt i prosjekter. 
                  Med erfaring fra både dagligvarebutikk og fruktlager, samt flere gruppeprosjekter 
                  gjennom studiet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nidal-profile" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Om <span className="gradient-text">Nidal</span>
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  Jeg heter Nidal Alendar, er 21 år gammel og kommer fra Kristiansand. Jeg har tidligere 
                  jobbet både i dagligvarebutikk og på fruktlager, hvor jeg har fått erfaring med struktur, 
                  ansvar og samarbeid.
                </p>
                
                <p>
                  Gjennom studiet har jeg deltatt i flere gruppeprosjekter, der jeg både har hatt rollen 
                  som gruppeleder og som deltaker. Dette har gitt meg innsikt i viktigheten av kommunikasjon, 
                  samarbeid og å kunne ta initiativ når det trengs. Jeg ser på meg selv som en engasjert og 
                  løsningsorientert person som ønsker å bidra positivt i prosjekter.
                </p>
                
                <p>
                  På fritiden liker jeg å bygge og reparere PC-er, og jeg interesserer meg for teknologi 
                  og problemløsning generelt. I tillegg er jeg glad i sport, særlig tennis og frisbeegolf, 
                  og jeg elsker å reise for å oppleve nye steder og kulturer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competencies Section */}
      <section className="py-16 bg-gradient-to-r from-brand-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Relevante <span className="gradient-text">Kompetanseområder IT</span>
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

      {/* Interests Section */}
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

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-brand-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            La oss samarbeide!
          </h2>
          <p className="text-xl text-brand-100 mb-8">
            Interessert i å jobbe sammen eller lære mer om mine prosjekter?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/dzemalen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-github-fill mr-2"></i>
              Se GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nidal-alendar-905a4b382/"
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

export default NidalPage;
