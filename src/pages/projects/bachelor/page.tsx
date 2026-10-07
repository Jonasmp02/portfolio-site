import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`;

const techStack = [
  'Python',
  'FastAPI',
  'PostgreSQL',
  'TimescaleDB',
  'Docker',
  'Grafana',
  'Local LLM',
  'RAG',
  'Agent-based tools',
];

const summaryCards = [
  {
    icon: 'ri-ship-line',
    title: 'Problem',
    text: 'Maritim drift gir store mengder sensor- og tidsseriedata, men det kan være krevende for operatører å forstå hva dataene betyr og hvilke avvik som bør undersøkes først.',
  },
  {
    icon: 'ri-brain-line',
    title: 'Tilnærming',
    text: 'Prosjektet utforsket hvordan observability-data, RAG og agentbaserte verktøy kan kombineres med språkmodeller for å forklare tilstand, avvik og mulige tiltak.',
  },
  {
    icon: 'ri-dashboard-line',
    title: 'Resultat',
    text: 'Resultatet var en lokal prototype som koblet sammen alarmer, metrics, logger og relevant kontekst for å gi mer strukturert støtte ved hendelsesanalyse. Prosjektet inkluderte også en dynamisk dashboard proof-of-concept.',
  },
];

const dataFlow = [
  {
    title: 'Telemetry og monitoreringsdata',
    text: 'Prosjektet kombinerte tidlig maritim telemetri med genererte og seedede monitoreringsscenarioer for å teste hendelser, alarmer, logger og metrics i et kontrollert miljø.',
  },
  {
    title: 'PostgreSQL og TimescaleDB',
    text: 'Tidsseriedata kan struktureres og hentes effektivt for videre analyse.',
  },
  {
    title: 'Lokal LLM og RAG',
    text: 'Relevant prosjekt- og domenekontekst kan hentes inn før modellen svarer.',
  },
  {
    title: 'Agentbasert støtte',
    text: 'Agenter kan hjelpe med forklaring, avvikskontekst og forslag til videre undersøkelser.',
  },
];

const BachelorPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const goToStatus = () => {
    if ((window as any).REACT_APP_NAVIGATE) {
      (window as any).REACT_APP_NAVIGATE('/prosjektstatus');
      return;
    }

    window.location.href = `${import.meta.env.BASE_URL}prosjektstatus`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-violet-50">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-violet-600 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-violet-200 font-semibold mb-4">Knowit + Telenor Maritime</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Bachelorprosjekt <span className="text-violet-200">Agentic Observability</span>
              </h1>
              <p className="text-xl text-violet-100 leading-relaxed">
                Et bachelorprosjekt om agentbasert beslutningsstøtte for maritim drift, med fokus på sensordata,
                forklarbarhet og praktisk bruk av AI.
              </p>
            </div>

            <Link
              to="/team"
              aria-label="Møt teamet bak bachelorprosjektet"
              className="group relative block rounded-3xl overflow-hidden shadow-2xl bg-white/10 p-3 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <div className="relative overflow-hidden rounded-2xl">
              <img
                src={withBase('images/Guttasmiler.jpg')}
                alt="Code 9 bachelor project team"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                style={{ objectPosition: '30% 60%' }}
              />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 motion-reduce:transition-none">
                  <span className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4 text-white text-xl font-semibold">
                    Møt teamet
                    <i className="ri-arrow-right-line" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {summaryCards.map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <i className={`${card.icon} text-white text-2xl`}></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h2>
                <p className="text-gray-600 leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-violet-100 overflow-hidden">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-gradient-to-br from-violet-600 to-blue-700 p-8 md:p-10 text-white">
                <p className="text-violet-200 font-semibold mb-3">Min rolle</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">Utvikler og prosjektleder</h2>
                <p className="text-violet-100 leading-relaxed">
                  Jeg var med på utviklingen og programmeringen gjennom hele prosjektet, på lik linje med resten av gruppen.
                  Jeg utforsket og testet nye teknologier, vurderte hvilke som passet best for løsningen, og brukte AI aktivt
                  i utviklingsarbeidet. I tillegg hadde jeg ansvaret som prosjektleder: jeg holdt oversikt over fremdrift,
                  koordinerte arbeidet i gruppen og hadde hovedansvaret for stakeholder-kontakten med Knowit og Telenor Maritime.
                </p>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">Hva jeg lærte</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Teknisk lærte jeg hvordan man vurderer og tar i bruk ny teknologi i et åpent prosjekt, blant annet lokale
                    språkmodeller, RAG og tidsseriedata, og hvordan AI-verktøy kan brukes effektivt i utviklingen av en større kodebase.
                  </p>
                  <p>
                    Som prosjektleder lærte jeg å gjøre uklare behov om til konkrete oppgaver, prioritere arbeid og holde teamet
                    samlet rundt felles mål. Jeg så også hvor viktig et tydelig scope og en god arbeidsmetodikk er for å jobbe
                    effektivt og trygt sammen i et team.
                  </p>
                  <p>
                    Gjennom stakeholder-kontakten med Knowit og Telenor Maritime lærte jeg å sette opp møter, stille gode spørsmål
                    og få tydelige avklaringer på hva kunden forventer og ønsker. Jeg presenterte også løsningen for andre bedrifter,
                    og fikk erfaring med å forklare tekniske valg på en måte som gir mening for både fagpersoner og samarbeidspartnere.
                  </p>
                  <p>
                    Ved å jobbe fra Knowits kontor fikk jeg kjenne på hvordan det er å jobbe på en faktisk arbeidsplass, og lærte å
                    bruke ressursene der, som å søke råd og innspill fra erfarne konsulenter. Jeg fikk også se hvordan teknisk
                    utvikling, dokumentasjon, møtestruktur og relasjonsbygging henger sammen når et prosjekt skal levere noe som
                    faktisk kan brukes videre.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Prosjektarbeid</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Gruppen jobbet med en teknisk prototype som koblet sammen backend, database, observability-verktøy og
                AI-laget. Arbeidet handlet både om å forstå domenet, strukturere data og teste hvordan agentbasert
                beslutningsstøtte kunne presenteres på en nyttig måte.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Prosjektet krevde utforsking av flere teknologier og arbeidsformer, blant annet lokale språkmodeller,
                vector search, time-series data, observability og AI-assistert utvikling i en større kodebase.
              </p>
            </div>

            <div className="bg-gradient-to-br from-violet-50 to-blue-50 rounded-2xl p-8 border border-violet-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Teknologi</h2>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <span key={tech} className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-violet-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI og <span className="gradient-text">dataflyt</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prosjektet undersøkte hvordan tekniske data kan gjøres mer forklarbare for mennesker.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFlow.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prototype og veien videre</h2>
              <p className="text-gray-600">
                Videoen viser sluttprototypen og hvordan gruppen så for seg at løsningen kunne brukes videre.
              </p>
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg mb-8">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/wPt3VBZrFWw"
                title="Bachelor project prototype video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <button
                type="button"
                onClick={goToStatus}
                className="inline-flex items-center bg-gradient-to-r from-violet-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-violet-700 hover:to-blue-700 transition-all duration-300 cursor-pointer"
              >
                Se statusnotater og historikk
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BachelorPage;
