import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { useLanguage } from '../../../i18n/useLanguage';

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

const content = {
  no: {
    builtWith: 'Bygget med',
    techDetails: ['Komponenter', 'Typesikker kode', 'Design og layout', 'Utvikling og bygg'],
    back: 'Tilbake til forsiden',
    kicker: 'Eget prosjekt · Frontend og webdesign',
    titleStart: 'Personlig ',
    titleHighlight: 'portefølje',
    intro:
      'Nettsiden du er på nå. Et sted for å vise hvem jeg er, hva jeg har jobbet med, og erfaringene jeg tar med meg fra studier og prosjekter.',
    heroAlt: 'Porteføljens forside med introduksjon og profilbilde av Jonas',
    cards: [
      { title: 'Målet', icon: 'ri-focus-3-line', text: 'Samle prosjekter og kompetanse på ett sted, og gjøre det enkelt å bli kjent med meg og finne relevante eksempler på arbeidet mitt.' },
      { title: 'Løsningen', icon: 'ri-layout-line', text: 'En responsiv nettside med prosjektoversikt, egne detaljsider, personlig profil og kontaktinformasjon. Navigasjonen knytter innholdet sammen.' },
      { title: 'Arbeidsformen', icon: 'ri-code-s-slash-line', text: 'Porteføljen videreutvikles med AI-assistert arbeid. Jeg bruker egne ønsker og tilbakemeldinger til å forme innhold, struktur og visuelt uttrykk.' },
    ],
    designTitle: 'Design og brukeropplevelse',
    design1:
      'Mørk marineblå og himmelblå binder sidene sammen. Prosjektkort med hover-effekter gjør det tydelig hva man kan utforske, mens egne prosjektsider gir plass til mer kontekst.',
    design2:
      'Forsiden har fokus på meg og arbeidene mine. Teamet bak bachelorprosjektet har fått en egen side som åpnes via gruppebildet, slik at samarbeid og individuelle bidrag får sin plass.',
    projectsAlt: 'Prosjektoversikten med bachelorprosjektet, IK Start, Kartverket og FINN.no',
    structureTitle: 'Oppbygning og videre arbeid',
    structure1:
      'React-komponenter brukes til blant annet navigasjon, prosjektkort og bunntekst. React Router håndterer sidene, Tailwind CSS brukes til utforming, og Vite kjører og bygger prosjektet.',
    structure2:
      'Siden utvikles videre etter hvert som nye prosjekter og erfaringer kommer til. Innhold, lesbarhet og navigasjon er sentrale deler av det videre arbeidet.',
  },
  en: {
    builtWith: 'Built with',
    techDetails: ['Components', 'Type-safe code', 'Design and layout', 'Development and build'],
    back: 'Back to the front page',
    kicker: 'Personal project · Frontend and web design',
    titleStart: 'Personal ',
    titleHighlight: 'portfolio',
    intro:
      'The website you are on right now. A place to show who I am, what I have worked on, and the experience I bring from my studies and projects.',
    heroAlt: 'The portfolio’s front page with an introduction and a profile picture of Jonas',
    cards: [
      { title: 'The goal', icon: 'ri-focus-3-line', text: 'Gather projects and skills in one place, and make it easy to get to know me and find relevant examples of my work.' },
      { title: 'The solution', icon: 'ri-layout-line', text: 'A responsive website with a project overview, dedicated detail pages, a personal profile and contact information. The navigation ties the content together.' },
      { title: 'The way of working', icon: 'ri-code-s-slash-line', text: 'The portfolio is developed further with AI-assisted work. I use my own wishes and feedback to shape the content, structure and visual style.' },
    ],
    designTitle: 'Design and user experience',
    design1:
      'Dark navy and sky blue tie the pages together. Project cards with hover effects make it clear what you can explore, while dedicated project pages leave room for more context.',
    design2:
      'The front page focuses on me and my work. The team behind the bachelor project has its own page, opened via the group photo, so that collaboration and individual contributions get their place.',
    projectsAlt: 'The project overview with the bachelor project, IK Start, Kartverket and FINN.no',
    structureTitle: 'Structure and further work',
    structure1:
      'React components are used for things like navigation, project cards and the footer. React Router handles the pages, Tailwind CSS is used for styling, and Vite runs and builds the project.',
    structure2:
      'The site keeps evolving as new projects and experience come along. Content, readability and navigation are central parts of the further work.',
  },
};

function TechnologyGraphic() {
  const c = content[useLanguage()];

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-brand-950 to-brand-900 p-6 sm:p-8 shadow-xl border border-brand-800">
      <div aria-hidden="true" className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent-200">{c.builtWith}</span>
          <i className="ri-code-s-slash-line text-2xl text-brand-300" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { name: 'React', detail: c.techDetails[0], icon: 'ri-reactjs-line', color: 'text-accent-300' },
            { name: 'TypeScript', detail: c.techDetails[1], icon: 'ri-code-box-line', color: 'text-accent-300' },
            { name: 'Tailwind CSS', detail: c.techDetails[2], icon: 'ri-palette-line', color: 'text-teal-300' },
            { name: 'Vite', detail: c.techDetails[3], icon: 'ri-flashlight-line', color: 'text-brand-300' },
          ].map((tech) => (
            <div key={tech.name} className="rounded-xl border border-white/15 bg-white/5 p-4">
              <i className={`${tech.icon} ${tech.color} text-3xl`} aria-hidden="true" />
              <p className="font-semibold text-white mt-2">{tech.name}</p>
              <p className="text-xs text-accent-200 mt-1">{tech.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  const c = content[useLanguage()];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-brand-700 via-brand-600 to-accent-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-accent-100 hover:text-white mb-10 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              <i className="ri-arrow-left-line" aria-hidden="true"></i>
              {c.back}
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-accent-100 font-semibold mb-4">{c.kicker}</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">{c.titleStart}<span className="text-accent-100">{c.titleHighlight}</span></h1>
                <p className="text-xl text-accent-50 leading-relaxed">
                  {c.intro}
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <img
                src={withBase('images/portfolio/frontside nett.png')}
                alt={c.heroAlt}
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {c.cards.map((item) => (
              <article key={item.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <i className={`${item.icon} text-3xl text-brand-600`} aria-hidden="true"></i>
                <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.designTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {c.design1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {c.design2}
              </p>
            </div>
            <img
              src={withBase('images/portfolio/Prosjekter side.png')}
              alt={c.projectsAlt}
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-lg border border-slate-200"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <TechnologyGraphic />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.structureTitle}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                {c.structure1}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {c.structure2}
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
