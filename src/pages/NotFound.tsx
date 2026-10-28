import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../i18n/useLanguage';

const content = {
  no: {
    title: 'Oops!',
    code: 'Feil 404 – fant ikke siden',
    text: 'Noe gikk galt. Sjekk at lenken er riktig, eller finn veien tilbake herfra.',
    home: 'Til forsiden',
    projects: 'Se prosjektene',
    illustration: 'En fortvilet person i en liten båt, omringet av haifinner',
  },
  en: {
    title: 'Oops!',
    code: 'Error 404 – page not found',
    text: 'Something went wrong. Check that the link is correct, or find your way back from here.',
    home: 'Go to the front page',
    projects: 'See the projects',
    illustration: 'A distressed person in a small boat, surrounded by shark fins',
  },
};

const Fin = ({ x, className }: { x: number; className: string }) => (
  <g className={className}>
    <path d={`M${x} 150 Q${x + 6} 122 ${x + 22} 112 Q${x + 18} 132 ${x + 30} 150 Z`} fill="rgb(var(--brand-700))" />
  </g>
);

export default function NotFound() {
  const c = content[useLanguage()];
  const navigate = useNavigate();

  const goToProjects = () => {
    // Same as "Prosjekter" in the navbar: go home first so the section exists, then scroll to it.
    navigate('/');
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-white to-accent-50">
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-6xl md:text-7xl font-bold text-brand-700">{c.title}</h1>
        <p className="mt-4 text-lg font-semibold text-accent-600">{c.code}</p>
        <p className="mt-3 max-w-md text-lg text-gray-600">{c.text}</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <i className="ri-arrow-left-line mr-2" aria-hidden="true"></i>
            {c.home}
          </Link>
          <button
            type="button"
            onClick={goToProjects}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-accent-500 text-accent-700 font-semibold hover:bg-accent-50 transition-colors cursor-pointer"
          >
            {c.projects}
          </button>
        </div>
      </div>

      <svg viewBox="0 0 400 200" className="w-full max-h-[45vh]" role="img" aria-label={c.illustration} preserveAspectRatio="xMidYMax slice">
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(var(--accent-300))" />
            <stop offset="100%" stopColor="rgb(var(--accent-600))" />
          </linearGradient>
        </defs>

        {/* Fins behind the boat */}
        <Fin x={70} className="animate-swim" />
        <Fin x={290} className="animate-swim-reverse" />

        {/* Boat with the person, rocking */}
        <g className="animate-bob">
          {/* Person */}
          <rect x="183" y="96" width="34" height="34" rx="10" fill="rgb(var(--accent-700))" />
          <circle cx="200" cy="84" r="17" fill="#f8c9a0" />
          <path d="M184 78 Q200 58 216 78 Q208 70 200 72 Q192 70 184 78 Z" fill="#4b3621" />
          {/* Worried eyebrows, eyes and open mouth */}
          <path d="M189 77 L195 79 M211 77 L205 79" stroke="#4b3621" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="193" cy="83" r="1.8" fill="#1f2937" />
          <circle cx="207" cy="83" r="1.8" fill="#1f2937" />
          <ellipse cx="200" cy="93" rx="4" ry="5" fill="#7f1d1d" />
          {/* Tears */}
          <path d="M190 86 Q188 91 190 93 Q192 91 190 86 Z" fill="rgb(var(--accent-300))" />
          <path d="M210 86 Q208 91 210 93 Q212 91 210 86 Z" fill="rgb(var(--accent-300))" />
          {/* Hull */}
          <path d="M150 122 L250 122 Q244 146 222 150 L178 150 Q156 146 150 122 Z" fill="#a0612c" />
          <path d="M150 122 L250 122 L248 128 L152 128 Z" fill="#c47a3a" />
          <path d="M160 134 L240 134" stroke="#8a5124" strokeWidth="1.5" />
        </g>

        {/* Water in front, so the boat and fins look like they sit in it */}
        <path
          d="M0 146 Q25 138 50 146 T100 146 T150 146 T200 146 T250 146 T300 146 T350 146 T400 146 V200 H0 Z"
          fill="url(#water)"
        />
        <path
          d="M0 156 Q30 150 60 156 T120 156 T180 156 T240 156 T300 156 T360 156 T420 156"
          stroke="white"
          strokeOpacity="0.5"
          strokeWidth="2"
          fill="none"
        />

        {/* One fin in front of the water line, closer to the viewer */}
        <Fin x={250} className="animate-swim" />
      </svg>
    </div>
  );
}
