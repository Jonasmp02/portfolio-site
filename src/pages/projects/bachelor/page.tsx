import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { useLanguage } from '../../../i18n/useLanguage';

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

const content = {
  no: {
    summaryCards: [
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
    ],
    dataFlow: [
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
    ],
    titleStart: 'Bachelorprosjekt ',
    intro:
      'Et bachelorprosjekt om agentbasert beslutningsstøtte for maritim drift, med fokus på sensordata, forklarbarhet og praktisk bruk av AI.',
    meetTeamLabel: 'Møt teamet bak bachelorprosjektet',
    meetTeam: 'Møt teamet',
    roleLabel: 'Min rolle',
    roleTitle: 'Utvikler og prosjektleder',
    roleText:
      'Jeg var med på utviklingen og programmeringen gjennom hele prosjektet, på lik linje med resten av gruppen. Jeg utforsket og testet nye teknologier, vurderte hvilke som passet best for løsningen, og brukte AI aktivt i utviklingsarbeidet. I tillegg hadde jeg ansvaret som prosjektleder: jeg holdt oversikt over fremdrift, koordinerte arbeidet i gruppen og hadde hovedansvaret for stakeholder-kontakten med Knowit og Telenor Maritime.',
    learnedTitle: 'Hva jeg lærte',
    learned1:
      'Teknisk lærte jeg hvordan man vurderer og tar i bruk ny teknologi i et åpent prosjekt, blant annet lokale språkmodeller, RAG og tidsseriedata, og hvordan AI-verktøy kan brukes effektivt i utviklingen av en større kodebase.',
    learned2:
      'Som prosjektleder lærte jeg å gjøre uklare behov om til konkrete oppgaver, prioritere arbeid og holde teamet samlet rundt felles mål. Jeg så også hvor viktig et tydelig scope og en god arbeidsmetodikk er for å jobbe effektivt og trygt sammen i et team.',
    learned3:
      'Gjennom stakeholder-kontakten med Knowit og Telenor Maritime lærte jeg å sette opp møter, stille gode spørsmål og få tydelige avklaringer på hva kunden forventer og ønsker. Jeg presenterte også løsningen for andre bedrifter, og fikk erfaring med å forklare tekniske valg på en måte som gir mening for både fagpersoner og samarbeidspartnere.',
    learned4:
      'Ved å jobbe fra Knowits kontor fikk jeg kjenne på hvordan det er å jobbe på en faktisk arbeidsplass, og lærte å bruke ressursene der, som å søke råd og innspill fra erfarne konsulenter. Jeg fikk også se hvordan teknisk utvikling, dokumentasjon, møtestruktur og relasjonsbygging henger sammen når et prosjekt skal levere noe som faktisk kan brukes videre.',
    projectWorkTitle: 'Prosjektarbeid',
    projectWork1:
      'Gruppen jobbet med en teknisk prototype som koblet sammen backend, database, observability-verktøy og AI-laget. Arbeidet handlet både om å forstå domenet, strukturere data og teste hvordan agentbasert beslutningsstøtte kunne presenteres på en nyttig måte.',
    projectWork2:
      'Prosjektet krevde utforsking av flere teknologier og arbeidsformer, blant annet lokale språkmodeller, vector search, time-series data, observability og AI-assistert utvikling i en større kodebase.',
    technologyTitle: 'Teknologi',
    dataFlowStart: 'AI og ',
    dataFlowHighlight: 'dataflyt',
    dataFlowText: 'Prosjektet undersøkte hvordan tekniske data kan gjøres mer forklarbare for mennesker.',
    videoTitle: 'Prototype og veien videre',
    videoText: 'Videoen viser sluttprototypen og hvordan gruppen så for seg at løsningen kunne brukes videre.',
    statusButton: 'Se statusnotater og historikk',
  },
  en: {
    summaryCards: [
      {
        icon: 'ri-ship-line',
        title: 'Problem',
        text: 'Maritime operations produce large amounts of sensor and time-series data, but it can be hard for operators to understand what the data means and which anomalies to investigate first.',
      },
      {
        icon: 'ri-brain-line',
        title: 'Approach',
        text: 'The project explored how observability data, RAG and agent-based tools can be combined with language models to explain status, anomalies and possible actions.',
      },
      {
        icon: 'ri-dashboard-line',
        title: 'Result',
        text: 'The result was a local prototype that connected alarms, metrics, logs and relevant context to give more structured support during incident analysis. The project also included a dynamic dashboard proof of concept.',
      },
    ],
    dataFlow: [
      {
        title: 'Telemetry and monitoring data',
        text: 'The project combined early maritime telemetry with generated and seeded monitoring scenarios to test incidents, alarms, logs and metrics in a controlled environment.',
      },
      {
        title: 'PostgreSQL and TimescaleDB',
        text: 'Time-series data can be structured and retrieved efficiently for further analysis.',
      },
      {
        title: 'Local LLM and RAG',
        text: 'Relevant project and domain context can be retrieved before the model answers.',
      },
      {
        title: 'Agent-based support',
        text: 'Agents can help with explanations, anomaly context and suggestions for further investigation.',
      },
    ],
    titleStart: 'Bachelor project ',
    intro:
      'A bachelor project on agent-based decision support for maritime operations, focusing on sensor data, explainability and practical use of AI.',
    meetTeamLabel: 'Meet the team behind the bachelor project',
    meetTeam: 'Meet the team',
    roleLabel: 'My role',
    roleTitle: 'Developer and project manager',
    roleText:
      'I took part in development and programming throughout the project, on equal terms with the rest of the group. I explored and tested new technologies, assessed which ones suited the solution best, and actively used AI in the development work. I was also the project manager: I kept track of progress, coordinated the group’s work and had the main responsibility for stakeholder contact with Knowit and Telenor Maritime.',
    learnedTitle: 'What I learned',
    learned1:
      'Technically, I learned how to evaluate and adopt new technology in an open-ended project, including local language models, RAG and time-series data, and how AI tools can be used effectively when developing a larger codebase.',
    learned2:
      'As project manager, I learned to turn unclear needs into concrete tasks, prioritize work and keep the team united around shared goals. I also saw how important a clear scope and a good way of working are for working efficiently and safely together as a team.',
    learned3:
      'Through the stakeholder contact with Knowit and Telenor Maritime, I learned to set up meetings, ask good questions and get clear answers about what the client expects and wants. I also presented the solution to other companies and gained experience explaining technical choices in a way that makes sense to both specialists and partners.',
    learned4:
      'Working from Knowit’s office let me experience what it is like to work at a real workplace, and I learned to use the resources there, such as asking experienced consultants for advice and input. I also saw how technical development, documentation, meeting structure and relationship building fit together when a project needs to deliver something that can actually be used going forward.',
    projectWorkTitle: 'Project work',
    projectWork1:
      'The group worked on a technical prototype that connected the backend, database, observability tools and the AI layer. The work was about understanding the domain, structuring data and testing how agent-based decision support could be presented in a useful way.',
    projectWork2:
      'The project required exploring several technologies and ways of working, including local language models, vector search, time-series data, observability and AI-assisted development in a larger codebase.',
    technologyTitle: 'Technology',
    dataFlowStart: 'AI and ',
    dataFlowHighlight: 'data flow',
    dataFlowText: 'The project investigated how technical data can be made more explainable for people.',
    videoTitle: 'Prototype and next steps',
    videoText: 'The video shows the final prototype and how the group imagined the solution could be used going forward.',
    statusButton: 'See status notes and history',
  },
};

const BachelorPage = () => {
  const c = content[useLanguage()];
  const { summaryCards, dataFlow } = c;

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-50">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-brand-600 to-accent-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <p className="text-brand-200 font-semibold mb-4">Knowit + Telenor Maritime</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {c.titleStart}<span className="text-brand-200">Agentic Observability</span>
              </h1>
              <p className="text-xl text-brand-100 leading-relaxed">
                {c.intro}
              </p>
            </div>

            <Link
              to="/team"
              aria-label={c.meetTeamLabel}
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
                    {c.meetTeam}
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
                <div className="w-14 h-14 bg-gradient-to-r from-brand-500 to-accent-600 rounded-full flex items-center justify-center mb-6">
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
          <div className="bg-white rounded-3xl shadow-xl border border-brand-100 overflow-hidden">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="bg-gradient-to-br from-brand-600 to-accent-700 p-8 md:p-10 text-white">
                <p className="text-brand-200 font-semibold mb-3">{c.roleLabel}</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">{c.roleTitle}</h2>
                <p className="text-brand-100 leading-relaxed">
                  {c.roleText}
                </p>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-5">{c.learnedTitle}</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    {c.learned1}
                  </p>
                  <p>
                    {c.learned2}
                  </p>
                  <p>
                    {c.learned3}
                  </p>
                  <p>
                    {c.learned4}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.projectWorkTitle}</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {c.projectWork1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {c.projectWork2}
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-accent-50 rounded-2xl p-8 border border-brand-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.technologyTitle}</h2>
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

      <section className="py-16 bg-gradient-to-r from-brand-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {c.dataFlowStart}<span className="gradient-text">{c.dataFlowHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.dataFlowText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataFlow.map((item, index) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-10 h-10 bg-gradient-to-r from-brand-500 to-accent-600 rounded-full flex items-center justify-center text-white font-bold mb-4">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{c.videoTitle}</h2>
              <p className="text-gray-600">
                {c.videoText}
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
                className="inline-flex items-center bg-gradient-to-r from-brand-600 to-accent-600 text-white px-6 py-3 rounded-full font-semibold hover:from-brand-700 hover:to-accent-700 transition-all duration-300 cursor-pointer"
              >
                {c.statusButton}
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
