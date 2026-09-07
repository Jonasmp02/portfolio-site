import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(124, 58, 237, 0.8) 0%, rgba(37, 99, 235, 0.8) 100%), url('https://readdy.ai/api/search-image?query=Modern%20tech%20workspace%20with%20multiple%20monitors%20displaying%20code%20and%20data%20visualizations%2C%20clean%20minimalist%20office%20environment%20with%20natural%20lighting%2C%20professional%20software%20development%20atmosphere%2C%20contemporary%20design%20elements%2C%20soft%20purple%20and%20blue%20color%20scheme%2C%20left%20side%20should%20be%20darker%20for%20text%20overlay%2C%20right%20side%20lighter%20for%20video%20content&width=1920&height=1080&seq=hero-bg-split-purple&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-28">
        <div
          className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100 mb-6 backdrop-blur-sm">
              <i className="ri-graduation-cap-line text-lg"></i>
              Masterstudent i informatikk ved NTNU
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Jonas Moen
              <span className="block text-4xl md:text-6xl text-blue-100 mt-2">Pettersen</span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed max-w-2xl">
              Bachelor i IT og informasjonssystemer fra UiA. Jeg bygger digitale løsninger med fokus på frontend,
              brukervennlighet, data og kunstig intelligens.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {['Ski/Trondheim', 'React + TypeScript', 'UX og produkt', 'AI og agentbaserte løsninger'].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm border border-white/20"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToProjects}
                className="group bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer whitespace-nowrap"
              >
                Se prosjekter
                <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
              </button>

              <button
                onClick={scrollToAbout}
                className="group glass-effect text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transform hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                Om prosjektmiljøet
                <i className="ri-arrow-down-line ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative max-w-md mx-auto lg:ml-auto">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-sm">
                <img
                  src={`${import.meta.env.BASE_URL}images/jonas.jpg`}
                  alt="Jonas Moen Pettersen"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="absolute bottom-4 right-4 flex gap-3">
                <a
                  href="https://github.com/Jonasmp02"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg transition-transform hover:scale-105"
                >
                  <i className="ri-github-fill text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/jonas-pettersen-073931382/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-105"
                >
                  <i className="ri-linkedin-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
        >
          <span className="text-sm mb-2">Scroll ned</span>
          <i className="ri-arrow-down-line text-2xl"></i>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
