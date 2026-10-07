
import { useEffect, useState } from 'react';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const KartverketPage = () => {
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

    const element = document.getElementById('kartverket-project');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const projectImages = [
    {
      src: `${import.meta.env.BASE_URL}images/kartverket/web-interface.jpg`,
      title: "Interactive Web Interface",
      description: "Moderne webapplikasjon med kartfunksjonalitet"
    },
    {
  src: `${import.meta.env.BASE_URL}images/kartverket/gutta.jpg`,
  title: "Development Team",
  description: "Samarbeid og systemutvikling"
},

    {
      src: `${import.meta.env.BASE_URL}images/kartverket/system-architecture.jpg`,
      title: "System Architecture",
      description: "MVC-struktur og databaseintegrasjon"
    },
    {
      src: `${import.meta.env.BASE_URL}images/kartverket/security.jpg`,
      title: "Security Implementation",
      description: "Sikker pålogging og identitetshåndtering"
    }
  ];

  const developmentSteps = [
    {
      icon: 'ri-building-line',
      title: 'Arkitektur og oppsett',
      description: 'Vi etablerte en MVC-struktur som la grunnlaget for en skalerbar applikasjon.'
    },
    {
      icon: 'ri-layout-line',
      title: 'Frontend og skjema',
      description: 'Vi implementerte skjemaer og brukervennlig frontend for innhenting og visning av data.'
    },
    {
      icon: 'ri-map-line',
      title: 'Kartintegrasjon',
      description: 'Vi koblet inn kartfunksjonalitet slik at brukere kunne interagere med geografisk informasjon.'
    },
    {
      icon: 'ri-database-line',
      title: 'Database og identitetshåndtering',
      description: 'Applikasjonen ble koblet til en database med støtte for sikker innlogging og lagring av brukerdata.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-green-500 to-blue-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Kartverket <span className="text-green-300">Webapplikasjon</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Interaktiv løsning med kart, database og sikker identitetshåndtering
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg">
                  Utviklet av studenter fra Universitetet i Agder
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
            {/* Challenge */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-map-2-line text-2xl text-blue-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Utfordringen</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Hvordan kan man presentere og organisere geografisk data på en interaktiv måte, 
                samtidig som brukerne får en enkel og trygg opplevelse gjennom identitetshåndtering 
                og sikker pålogging?
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-3xl shadow-xl p-8 text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-6">
                <i className="ri-code-line text-2xl text-white"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">Vår Løsning</h2>
              <p className="leading-relaxed text-lg">
                En ASP.NET Core MVC-applikasjon som kombinerer kartfunksjonalitet med 
                brukervennlig webgrensesnitt, sikker database og identitetshåndtering.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story with Slideshow */}
      <section id="kartverket-project" className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Fra <span className="gradient-text">Idé til Ferdig Løsning</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Slideshow */}
              <div className="relative">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={projectImages[currentSlide].src}
                    alt={projectImages[currentSlide].title}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{projectImages[currentSlide].title}</h3>
                    <p className="text-sm opacity-90">{projectImages[currentSlide].description}</p>
                  </div>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-green-500 to-blue-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Prosjektbeskrivelse</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    I samarbeid med Kartverket utviklet vi en løsning som kombinerte kartfunksjonalitet 
                    med en brukervennlig webapplikasjon. Prosjektet tok utgangspunkt i å bygge en 
                    ASP.NET Core MVC-applikasjon med integrasjon av kart, skjemafunksjoner og databasehåndtering.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Målet var å utforske hvordan man kan presentere og organisere geografisk data på en 
                    interaktiv måte, samtidig som brukerne får en enkel og trygg opplevelse gjennom 
                    identitetshåndtering og sikker pålogging.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-6 border border-green-500/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-government-line text-2xl text-green-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-900">Kartverket Partnership</h4>
                  </div>
                  <p className="text-gray-600">
                    Utviklet i samarbeid med Kartverket for å utforske moderne webløsninger for geografisk data.
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
              Arbeidet fulgte prinsipper for systemutvikling og god programmeringspraksis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
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

      {/* Technical Implementation */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Teknisk <span className="gradient-text">Implementering</span>
            </h2>
            <p className="text-xl text-gray-600">
              Fra idé til kode - utdrag fra løsningen
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Dokumentasjon og Resultater</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Hele prosessen ble dokumentert for å sikre transparens og gjenbrukbarhet. 
                  Resultatet ble en prototype som demonstrerte hvordan Kartverket sine data 
                  kan brukes i en moderne webapplikasjon.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Løsningen fokuserte på funksjonalitet, sikkerhet og brukervennlighet, 
                  og viste hvordan geografisk informasjon kan presenteres på en interaktiv måte.
                </p>
                <a
                href="https://github.com/Pheeraphau/Gruppe12Sem3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <i className="ri-github-line mr-2"></i>
                  Se kode på GitHub
                  </a>

              </div>
              <div className="bg-gray-900 rounded-2xl p-6 text-green-400 font-mono text-sm overflow-x-auto">
                <div className="mb-2 text-gray-500">// ASP.NET Core MVC Structure</div>
                <div>public class MapController : Controller</div>
                <div className="ml-4">{`{`}</div>
                <div className="ml-8">private readonly IMapService _mapService;</div>
                <div className="ml-8">private readonly UserManager&lt;User&gt; _userManager;</div>
                <div className="ml-4 mt-2">public async Task&lt;IActionResult&gt; Index()</div>
                <div className="ml-4">{`{`}</div>
                <div className="ml-8">var mapData = await _mapService.GetMapData();</div>
                <div className="ml-8">return View(mapData);</div>
                <div className="ml-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nøkkel<span className="gradient-text">funksjoner</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interaktive Kart</h3>
              <p className="text-gray-600">
                Avansert kartfunksjonalitet som lar brukere utforske geografisk data på en intuitiv måte
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sikker Pålogging</h3>
              <p className="text-gray-600">
                Robust identitetshåndtering og autentisering for trygg tilgang til systemet
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-database-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Database Integration</h3>
              <p className="text-gray-600">
                Sømløs integrasjon med database for lagring og håndtering av brukerdata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Interessert i vårt arbeid?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Se flere av våre prosjekter eller ta kontakt for samarbeid
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              Tilbake til Portfolio
            </a>
            <a
              href="#"
              className="bg-green-400 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-green-300 transition-colors duration-300 whitespace-nowrap cursor-pointer"
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

export default KartverketPage;