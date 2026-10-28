import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';

const processVideos = [
  {
    label: '01',
    kicker: 'Planlegging og kvalitet',
    title: 'Statusvideo',
    description: 'En kort gjennomgang av planlegging, kvalitet og hvordan gruppen jobbet underveis.',
    embedUrl: 'https://www.youtube.com/embed/-zL-mKu7GNg',
    iframeTitle: 'Statusvideo for bachelorprosjektet',
    accentClass: 'from-brand-500 to-accent-500',
  },
  {
    label: '02',
    kicker: 'Ressursbruk og timeføring',
    title: 'Time9 og timeføring',
    description: 'Gruppen laget en egen liten løsning, Time9, for å holde oversikt over timer og ressursbruk i prosjektet.',
    embedUrl: 'https://www.youtube.com/embed/8AjCyIJvhGQ',
    iframeTitle: 'Time9 timeføring i bachelorprosjektet',
    accentClass: 'from-accent-500 to-accent-500',
  },
];

const ProsjektstatusPage = () => {
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const sections = [
    {
      number: '1',
      title: 'Hva konkret er det vi skal utvikle / gjøre?',
      content: 'Vi skal utvikle en konseptuell og teknisk løsning for agentbasert beslutningsstøtte innen maritim drift. Løsningen tar utgangspunkt i sanntids og historiske sensordata fra skip, og kombinerer disse med AI-agenter og språkmodeller for å forklare tilstand, avdekke avvik og foreslå tiltak. Målet er å utforske hvordan moderne arkitektur og AI kan brukes til mer enn tradisjonell overvåkning og gi reell verdi til operatører og teknisk personell.',
    },
    {
      number: '2',
      title: 'Viktige kvalitetsaspekter i produktet (og hvorfor)',
      content: [
        {
          subtitle: 'Brukerforståelse og forklarbarhet',
          text: 'Løsningen skal gjøre komplekse data og analyser forståelige for brukeren. I stedet for å presentere rådata, skal systemet forklare hva som skjer, hvorfor det skjer, og hva det kan bety for videre drift.',
        },
        {
          subtitle: 'Pålitelighet og stabilitet',
          text: 'Produktet må oppleves som stabilt og forutsigbart. Når løsningen brukes til beslutningsstøtte, er det avgjørende at brukeren har tillit til både systemet og informasjonen som presenteres.',
        },
        {
          subtitle: 'Synliggjøring av datakvalitet og usikkerhet',
          text: 'Dersom data er mangelfulle, forsinkede eller usikre, skal dette komme tydelig frem. Dette er spesielt viktig når AI benyttes til analyse og anbefalinger, for å redusere risiko for feil beslutninger.',
        },
        {
          subtitle: 'Fleksibel og robust arkitektur',
          text: 'Løsningen skal bygges på en arkitektur som gjør det mulig å koble sammen flere datakilder, AI-modeller og tjenester, og som kan videreutvikles over tid.',
        },
        {
          subtitle: 'Grunnleggende sikkerhet og ansvarlig bruk av AI',
          text: 'Selv om sikkerhet ikke er hovedfokus i prosjektet, skal løsningen håndtere data på en ansvarlig måte og ta hensyn til risiko knyttet til bruk av AI, som feilslutninger og hallusinasjoner.',
        },
      ],
      note: 'Disse kvalitetsaspektene er viktige fordi verdien i løsningen ikke ligger i mengden data eller teknologi, men i hvor godt den støtter forståelige, pålitelige og trygge beslutninger for brukeren.',
    },
    {
      number: '3',
      title: 'Hvordan vet vi om ønsket kvalitet er oppnådd? (indikatorer)',
      content: [
        {
          subtitle: 'Brukertesting og faglig feedback',
          text: 'Korte gjennomganger og diskusjoner med Knowit, Telenor Maritime og relevante roller fra Color Line (f.eks. kapteiner og maskinister) for å vurdere om løsningen er forståelig, nyttig og gir mening i en operativ kontekst.',
        },
        {
          subtitle: 'Forklarbarhet og tillit til beslutningsstøtte',
          text: 'Vurdering av om systemet tydelig forklarer hva som skjer i dataene, hvorfor det skjer, og om brukeren opplever analysene og anbefalingene som troverdige.',
        },
        {
          subtitle: 'Synlig datakvalitet og usikkerhet',
          text: 'Sjekk av om mangelfull, forsinket eller usikker data kommer tydelig frem, slik at beslutninger ikke tas på feil grunnlag.',
        },
        {
          subtitle: 'Teknisk stabilitet og arkitektur',
          text: 'Verifisering av at prototypen fungerer stabilt, og at arkitekturen er modulær, forståelig og egnet for videre utvikling og utvidelse.',
        },
        {
          subtitle: 'Ansvarlig bruk av AI',
          text: 'Evaluering av hvordan løsningen håndterer risiko knyttet til AI, som feilslutninger og hallusinasjoner, og hvordan dette kommuniseres til brukeren.',
        },
      ],
    },
    {
      number: '4',
      title: 'Planer, backlogg, estimater og ressursbruk – hvordan få kontroll?',
      content: [
        'Backlogg: Oppgaver som må gjøres etter prioritering og status i Trello.',
        'Enkle estimater per oppgave i timer eller minutter.',
        'Timeføring ble fulgt opp gjennom Time9, en enkel side gruppen laget for å holde oversikt over arbeid og timer.',
        'Målet er å ha både et "budsjett" (estimat) og et "regnskap" (reelle timer), slik at vi ser om vi ligger foran/bak, og kan justere tidlig.',
      ],
    },
    {
      number: '5',
      title: 'Hvordan kvalitetssikrer vi planen?',
      content: [
        'Siden planen tidlig er usikker (prosjektet er åpent og vi lærer underveis), vil vi kvalitetssikre planen ved å:',
        'Holde planen enkel og kortsiktig (1 uke av gangen).',
        'Oppdatere planen jevnlig basert på hva vi faktisk får gjort.',
        'Ha synlige prioriteringer (hva er viktigst akkurat nå).',
        'Vi skal ha jevnlige møter med Knowit og Telenor Maritime der vi presenterer hva som har blitt gjort og veien videre.',
      ],
    },
    {
      number: '6',
      title: 'Hvordan kvalitetssikrer vi backloggen?',
      content: [
        'Oppgaver er små nok til å kunne fullføres innen kort tid.',
        'Hver oppgave har en tydelig "done"-beskrivelse (hva betyr det at oppgaven er ferdig?).',
        'Vi prioriterer og rydder backloggen jevnlig (fjerne/endre oppgaver som ikke lenger er relevante).',
        'Har reviews for godkjenning før den flyttes til "ferdig". Gruppemedlemmene kommenterer at de har gått gjennom og godkjenner den slik at den kan bli flyttet over til godkjent.',
      ],
    },
    {
      number: '7',
      title: 'Hvordan bruker vi estimater og timeføring for kontroll?',
      content: [
        'Estimat brukes til å velge realistisk mengde arbeid for en uke.',
        'Timeføring brukes til å se om vi undervurderer oppgaver eller bruker tid på "feil ting".',
        'Hvis det er store avvik mellom estimat og faktisk tid, bruker vi det som læring og justerer estimatene våre videre.',
      ],
    },
    {
      number: '8',
      title: 'Hvordan kan vi si noe om at ressursene er utnyttet på en god måte?',
      content: [
        'Om vi fullfører prioriterte oppgaver jevnlig (fremdrift).',
        'Om timeføringen viser fordeling på nyttige aktiviteter (utvikling, design, research, møter).',
        'Om vi tidlig oppdager "tidstyver" (uklarhet, for store oppgaver, for mye venting) og gjør tiltak.',
        'At alle i gruppen bidrar jevnt og har tydelige oppgaver.',
        'Om arbeidsgiver er fornøyd.',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Prosjektstatus <span className="gradient-text">(Knowit)</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Vår gjennomgang av prosjektkvalitet, planlegging og gjennomføring
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto mt-8 rounded-full"></div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950 rounded-3xl shadow-2xl p-6 md:p-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
              <div>
                <p className="text-sm font-semibold text-accent-200 mb-3">Prosessvideoer</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Hvordan gruppen jobbet underveis
                </h2>
                <p className="text-slate-300 max-w-3xl leading-relaxed">
                  Statusvideoen viser planlegging og kvalitet i prosjektet, mens Time9-videoen viser verktøyet gruppen
                  laget for å holde kontroll på timer og ressursbruk.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Status', 'Time9', 'Kvalitet', 'Ressursbruk'].map((tag) => (
                  <span key={tag} className="bg-white/10 text-slate-100 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {processVideos.map((video) => (
                <article key={video.title} className="bg-white rounded-3xl overflow-hidden shadow-xl">
                  <div className="relative w-full pb-[56.25%] bg-black">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={video.embedUrl}
                      title={video.iframeTitle}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${video.accentClass} flex items-center justify-center text-white font-bold`}
                      >
                        {video.label}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-accent-600">{video.kicker}</p>
                        <h3 className="text-2xl font-bold text-gray-900">{video.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Bachelorprosjekt - Code 9  (Knowit + Telenor Maritime)
            </h2>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex gap-6 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{section.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 pt-1">{section.title}</h3>
                </div>

                <div className="ml-18 space-y-4 text-gray-600 leading-relaxed">
                  {typeof section.content === 'string' ? (
                    <p>{section.content}</p>
                  ) : Array.isArray(section.content) && typeof section.content[0] === 'string' ? (
                    <ul className="space-y-3">
                      {(section.content as string[]).map((item, i) => (
                        <li key={i} className="flex gap-3">
                          <span className="text-brand-500 font-bold flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="space-y-5">
                      {section.content.map((item: any, i: number) => (
                        <div key={i} className="flex gap-3">
                          <span className="text-brand-500 font-bold flex-shrink-0">•</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{item.subtitle}</h4>
                            <p>{item.text}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.note && (
                    <div className="mt-6 pt-6 border-t border-gray-200 italic text-gray-600">
                      {section.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProsjektstatusPage;
