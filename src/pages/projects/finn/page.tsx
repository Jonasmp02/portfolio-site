
import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const FinnPage = () => {
  // Set scroll position to top immediately, before any other effects
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('finn-project');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 6000); // slower auto-rotate like IKStart page

    return () => clearInterval(interval);
  }, []);

  const projectImages = [
    // Local assets for FINN page (use BASE_URL so paths work on GitHub Pages / subpaths)

        {
      src: `${import.meta.env.BASE_URL}images/finn/finnlogo.png`,
      title: 'FINN Logo'
    },
    {
      src: `${import.meta.env.BASE_URL}images/finn/hovedsidefinn.png`,
      title: 'Hovedside',
      description: 'Forside og kartvisning'
    },
        {
      src: `${import.meta.env.BASE_URL}images/finn/testingfinn.png`,
      title: 'Testing',
      description: 'Noen av sidens funksjoner'
    },
    {
      src: `${import.meta.env.BASE_URL}images/finn/acheckerogwave.png`,
      title: 'AChecker & WAVE',
      description: 'Automatisert tilgjengelighetstesting som ble tatt i bruk'
    },
    {
      src: `${import.meta.env.BASE_URL}images/finn/colortests.png`,
      title: 'Fargetester',
      description: 'Kontrast- og fargetesting'
    },
    {
      src: `${import.meta.env.BASE_URL}images/finn/susscoretest.png`,
      title: 'SUS-score test',
      description: 'SUS-score og brukertesting'
    }
  ];

  // Navigation helpers for manual slide control (prev/next)
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + projectImages.length) % projectImages.length);
  const nextSlide = () => setCurrentSlide((s) => (s + 1) % projectImages.length);

  const developmentSteps = [
    {
      icon: 'ri-search-line',
      title: 'Analyse',
      description: 'Kartlegging av problemer via automatisert testing (AChecker, Wave), manuell WCAG-gjennomgang og brukertester.'
    },
    {
      icon: 'ri-draft-line',
      title: 'Skisser og wireframes',
      description: 'Vi tegnet opp forbedringsforslag med fokus på tydelig struktur, navigasjon og semantikk.'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Prototyping i Figma',
      description: 'Utvikling av low- og high-fidelity prototyper.'
    },
    {
      icon: 'ri-user-line',
      title: 'Brukertesting',
      description: 'Samme testpersoner som i første runde deltok igjen, slik at vi kunne måle forbedringer direkte.'
    }
  ];

  const uxPrinciples = [
    {
      icon: 'ri-eye-line',
      title: "Jakob's Law",
      description: "Gjenkjennelighet - brukere forventer at ting fungerer som de er vant til"
    },
    {
      icon: 'ri-cursor-line',
      title: "Fitts' Law",
      description: "Større klikkflater for bedre brukervennlighet og tilgjengelighet"
    },
    {
      icon: 'ri-time-line',
      title: "Hick's Law",
      description: "Færre valg for raskere beslutninger og mindre kognitiv belastning"
    },
    {
      icon: 'ri-star-line',
      title: "Von Restorff-effekten",
      description: "Fremheving av viktige elementer for bedre oppmerksomhet"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              FINN.no <span className="text-accent-300">Kart Redesign</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Forbedring av tilgjengelighet og brukervennlighet gjennom universell utforming
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg">
                  Evaluering og redesign av Norges største markedsplass
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utfordringen</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                FINN.no sitt kartverktøy hadde flere tilgjengelighetsbarrierer, inkludert manglende 
                overskriftsstruktur, svak kontrast, dårlig tabbordre og manglende etiketter i søkefelt.
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-accessibility-line text-2xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">Vår Løsning</h2>
              <p className="leading-relaxed text-lg">
                Systematisk forbedring av eksisterende løsning gjennom WCAG-evaluering, 
                brukertesting og implementering av universell utforming prinsipper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story with Slideshow */}
      <section id="finn-project" className="py-16 bg-gradient-to-r from-accent-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Fra <span className="gradient-text">Analyse til Løsning</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-accent-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Slideshow */}
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-50 h-64 sm:h-80 md:h-[420px] lg:h-[480px]">
                  <img
                    src={projectImages[currentSlide].src}
                    alt={projectImages[currentSlide].title}
                    className="max-h-full max-w-full object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                    <h3 className="text-xl font-bold mb-2">{projectImages[currentSlide].title}</h3>
                    <p className="text-sm opacity-90">{projectImages[currentSlide].description}</p>
                  </div>

                  {/* Arrow buttons */}
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15 19l-7-7 7-7v14z" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 5l7 7-7 7V5z" />
                    </svg>
                  </button>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-accent-500 to-accent-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="h-64 sm:h-80 md:h-[420px] lg:h-[480px] flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Prosjektbeskrivelse</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      I dette prosjektet evaluerte vi FINN.no sitt kartverktøy med fokus på universell 
                      utforming, tilgjengelighet og brukervennlighet. Gjennom både automatiserte tester, 
                      manuelle WCAG 2.1-evalueringer og brukertester fant vi flere barrierer.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      For å adressere utfordringene valgte vi å forbedre den eksisterende løsningen 
                      fremfor å bygge noe helt nytt. Resultet var en betydelig økning i brukervennlighet.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-accent-500/10 to-accent-500/10 rounded-2xl p-6 border border-accent-500/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-trophy-line text-2xl text-accent-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-900">Målbare Resultater</h4>
                  </div>
                  <p className="text-gray-600">
                    SUS-score økte fra 45 (under akseptabelt nivå) til 77,5 - en betydelig forbedring.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Utviklings<span className="gradient-text">prosess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematisk tilnærming til tilgjengelighetsforbedringer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UX Principles */}
      <section className="py-16 bg-gradient-to-r from-accent-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              UX-<span className="gradient-text">Prinsipper</span>
            </h2>
            <p className="text-xl text-gray-600">
              Anvendte designprinsipper for bedre brukeropplevelse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {uxPrinciples.map((principle, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className={`${principle.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Se Prosjektet i <span className="gradient-text">Aksjon</span>
            </h2>
            <p className="text-xl text-gray-600">
              Få en dypere forståelse av vårt arbeid og resultater
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/GqPU4g6jRlw"
                title="FINN.no Kart Redesign Project"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Key Improvements */}
      <section className="py-16 bg-gradient-to-r from-accent-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nøkkel<span className="gradient-text">forbedringer</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-contrast-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bedre Kontrast</h3>
              <p className="text-gray-600">
                Forbedret fargekontrast for bedre lesbarhet og tilgjengelighet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-keyboard-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Tabbordre</h3>
              <p className="text-gray-600">
                Logisk navigasjon med tastatur for bedre tilgjengelighet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-text-spacing text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Semantisk Struktur</h3>
              <p className="text-gray-600">
                Korrekt overskriftsstruktur og etiketter for skjermlesere
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-accent-500 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interessert i vårt arbeid?
          </h2>
          <p className="text-xl text-accent-100 mb-8">
            Se flere av våre prosjekter eller ta kontakt for samarbeid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Tilbake til Portfolio
            </a>
            <a
              href="#"
              className="bg-accent-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-accent-300 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line mr-2"></i>
              Kontakt Oss
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FinnPage;
