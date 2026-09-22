import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const withBase = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function TechnologyGraphic() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-indigo-950 to-violet-900 p-6 sm:p-8 shadow-xl border border-indigo-800">
      <div aria-hidden="true" className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="relative">
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">Bygget med</span>
          <i className="ri-code-s-slash-line text-2xl text-violet-300" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {[
            { name: 'React', detail: 'Komponenter', icon: 'ri-reactjs-line', color: 'text-cyan-300' },
            { name: 'TypeScript', detail: 'Typesikker kode', icon: 'ri-code-box-line', color: 'text-blue-300' },
            { name: 'Tailwind CSS', detail: 'Design og layout', icon: 'ri-palette-line', color: 'text-teal-300' },
            { name: 'Vite', detail: 'Utvikling og bygg', icon: 'ri-flashlight-line', color: 'text-violet-300' },
          ].map((tech) => (
            <div key={tech.name} className="rounded-xl border border-white/15 bg-white/5 p-4">
              <i className={`${tech.icon} ${tech.color} text-3xl`} aria-hidden="true" />
              <p className="font-semibold text-white mt-2">{tech.name}</p>
              <p className="text-xs text-blue-200 mt-1">{tech.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function PortfolioPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <section className="pt-32 pb-20 bg-gradient-to-br from-violet-700 via-indigo-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-100 hover:text-white mb-10 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
              <i className="ri-arrow-left-line" aria-hidden="true"></i>
              Tilbake til forsiden
            </Link>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-blue-100 font-semibold mb-4">Eget prosjekt · Frontend og webdesign</p>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">Personlig <span className="text-blue-100">portefølje</span></h1>
                <p className="text-xl text-blue-50 leading-relaxed">
                  Nettsiden du er på nå. Et sted for å vise hvem jeg er, hva jeg har jobbet med,
                  og erfaringene jeg tar med meg fra studier og prosjekter.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Vite'].map((tech) => (
                    <span key={tech} className="rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-medium">{tech}</span>
                  ))}
                </div>
              </div>
              <img
                src={withBase('images/portfolio/frontside nett.png')}
                alt="Porteføljens forside med introduksjon og profilbilde av Jonas"
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Målet', icon: 'ri-focus-3-line', text: 'Samle prosjekter og kompetanse på ett sted, og gjøre det enkelt å bli kjent med meg og finne relevante eksempler på arbeidet mitt.' },
              { title: 'Løsningen', icon: 'ri-layout-line', text: 'En responsiv nettside med prosjektoversikt, egne detaljsider, personlig profil og kontaktinformasjon. Navigasjonen knytter innholdet sammen.' },
              { title: 'Arbeidsformen', icon: 'ri-code-s-slash-line', text: 'Porteføljen videreutvikles med AI-assistert arbeid. Jeg bruker egne ønsker og tilbakemeldinger til å forme innhold, struktur og visuelt uttrykk.' },
            ].map((item) => (
              <article key={item.title} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
                <i className={`${item.icon} text-3xl text-violet-600`} aria-hidden="true"></i>
                <h2 className="text-2xl font-bold text-gray-900 mt-5 mb-4">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Design og brukeropplevelse</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Lilla og blå gradienter binder sidene sammen. Prosjektkort med hover-effekter gjør det
                tydelig hva man kan utforske, mens egne prosjektsider gir plass til mer kontekst.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Forsiden har fokus på meg og arbeidene mine. Teamet bak bachelorprosjektet har fått
                en egen side som åpnes via gruppebildet, slik at samarbeid og individuelle bidrag får sin plass.
              </p>
            </div>
            <img
              src={withBase('images/portfolio/Prosjekter side.png')}
              alt="Prosjektoversikten med bachelorprosjektet, IK Start, Kartverket og FINN.no"
              loading="lazy"
              className="w-full h-auto rounded-2xl shadow-lg border border-slate-200"
            />
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <TechnologyGraphic />
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Oppbygning og videre arbeid</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                React-komponenter brukes til blant annet navigasjon, prosjektkort og bunntekst.
                React Router håndterer sidene, Tailwind CSS brukes til utforming, og Vite kjører og bygger prosjektet.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Siden utvikles videre etter hvert som nye prosjekter og erfaringer kommer til.
                Innhold, lesbarhet og navigasjon er sentrale deler av det videre arbeidet.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
