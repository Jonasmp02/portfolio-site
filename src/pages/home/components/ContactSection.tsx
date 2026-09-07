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

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mer om <span className="gradient-text">prosjektet</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            Se repoet eller gå til teamet for mer kontekst om prosjektarbeidet og medlemssidene.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              <i className="ri-github-fill mr-2 text-lg"></i>
              Se GitHub-repo
            </a>
            <button
              type="button"
              onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold hover:bg-white/20 transition cursor-pointer"
            >
              <i className="ri-team-line mr-2 text-lg"></i>
              Se teamet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
