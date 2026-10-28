import { useEffect, useState } from 'react';

type Props = {
  githubUrl?: string;
};

const ContactSection = ({
  githubUrl = 'https://github.com/Jonasmp02/portfolio-site',
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const navigateToJonas = () => {
    // Same navigation as the hero image, so it works both locally and under the GitHub Pages base path.
    if ((window as any).REACT_APP_NAVIGATE) {
      (window as any).REACT_APP_NAVIGATE('/team/jonas');
      return;
    }

    window.location.href = `${import.meta.env.BASE_URL}team/jonas`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-accent-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vil du vite <span className="gradient-text-light">mer?</span>
          </h2>
          <p className="text-xl text-accent-200 max-w-2xl mx-auto mb-10">
            Les mer om bakgrunnen og erfaringen min, eller se koden bak denne nettsiden på GitHub.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-accent-600 to-brand-600 text-white text-sm font-semibold hover:from-accent-700 hover:to-brand-700 transition-all shadow-lg hover:shadow-xl"
            >
              <i className="ri-github-fill mr-2 text-lg"></i>
              Se GitHub-repo
            </a>
            <button
              type="button"
              onClick={navigateToJonas}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-accent-100 text-sm font-semibold hover:bg-white/20 transition cursor-pointer"
            >
              <i className="ri-user-line mr-2 text-lg"></i>
              Mer om meg
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
