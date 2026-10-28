import { useEffect } from 'react';
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import { useLanguage } from '../../i18n/useLanguage';

const content = {
  no: {
    processVideos: [
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
    ],
    sections: [
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
    ],
    title: 'Prosjektstatus ',
    subtitle: 'Vår gjennomgang av prosjektkvalitet, planlegging og gjennomføring',
    videosKicker: 'Prosessvideoer',
    videosTitle: 'Hvordan gruppen jobbet underveis',
    videosText:
      'Statusvideoen viser planlegging og kvalitet i prosjektet, mens Time9-videoen viser verktøyet gruppen laget for å holde kontroll på timer og ressursbruk.',
    videoTags: ['Status', 'Time9', 'Kvalitet', 'Ressursbruk'],
    projectHeading: 'Bachelorprosjekt - Code 9 (Knowit + Telenor Maritime)',
  },
  en: {
    processVideos: [
      {
        label: '01',
        kicker: 'Planning and quality',
        title: 'Status video',
        description: 'A short walkthrough of planning, quality and how the group worked along the way.',
        embedUrl: 'https://www.youtube.com/embed/-zL-mKu7GNg',
        iframeTitle: 'Status video for the bachelor project',
        accentClass: 'from-brand-500 to-accent-500',
      },
      {
        label: '02',
        kicker: 'Resource use and time tracking',
        title: 'Time9 and time tracking',
        description: 'The group built its own small tool, Time9, to keep track of hours and resource use in the project.',
        embedUrl: 'https://www.youtube.com/embed/8AjCyIJvhGQ',
        iframeTitle: 'Time9 time tracking in the bachelor project',
        accentClass: 'from-accent-500 to-accent-500',
      },
    ],
    sections: [
      {
        number: '1',
        title: 'What exactly are we going to develop / do?',
        content: 'We will develop a conceptual and technical solution for agent-based decision support in maritime operations. The solution is based on real-time and historical sensor data from ships, and combines this with AI agents and language models to explain status, detect anomalies and suggest actions. The goal is to explore how modern architecture and AI can be used for more than traditional monitoring and provide real value to operators and technical staff.',
      },
      {
        number: '2',
        title: 'Important quality aspects of the product (and why)',
        content: [
          {
            subtitle: 'User understanding and explainability',
            text: 'The solution should make complex data and analyses understandable for the user. Instead of presenting raw data, the system should explain what is happening, why it is happening, and what it may mean for further operations.',
          },
          {
            subtitle: 'Reliability and stability',
            text: 'The product must feel stable and predictable. When the solution is used for decision support, it is crucial that the user trusts both the system and the information presented.',
          },
          {
            subtitle: 'Making data quality and uncertainty visible',
            text: 'If data is incomplete, delayed or uncertain, this must be made clear. This is especially important when AI is used for analysis and recommendations, to reduce the risk of wrong decisions.',
          },
          {
            subtitle: 'Flexible and robust architecture',
            text: 'The solution should be built on an architecture that makes it possible to connect several data sources, AI models and services, and that can be developed further over time.',
          },
          {
            subtitle: 'Basic security and responsible use of AI',
            text: 'Even though security is not the main focus of the project, the solution should handle data responsibly and take into account risks related to the use of AI, such as faulty reasoning and hallucinations.',
          },
        ],
        note: 'These quality aspects matter because the value of the solution does not lie in the amount of data or technology, but in how well it supports understandable, reliable and safe decisions for the user.',
      },
      {
        number: '3',
        title: 'How do we know if the desired quality has been achieved? (indicators)',
        content: [
          {
            subtitle: 'User testing and expert feedback',
            text: 'Short reviews and discussions with Knowit, Telenor Maritime and relevant roles from Color Line (e.g. captains and engineers) to assess whether the solution is understandable, useful and makes sense in an operational context.',
          },
          {
            subtitle: 'Explainability and trust in decision support',
            text: 'Assessing whether the system clearly explains what is happening in the data, why it is happening, and whether the user finds the analyses and recommendations credible.',
          },
          {
            subtitle: 'Visible data quality and uncertainty',
            text: 'Checking whether incomplete, delayed or uncertain data is clearly shown, so that decisions are not made on the wrong basis.',
          },
          {
            subtitle: 'Technical stability and architecture',
            text: 'Verifying that the prototype runs stably, and that the architecture is modular, understandable and suitable for further development and extension.',
          },
          {
            subtitle: 'Responsible use of AI',
            text: 'Evaluating how the solution handles risks related to AI, such as faulty reasoning and hallucinations, and how this is communicated to the user.',
          },
        ],
      },
      {
        number: '4',
        title: 'Plans, backlog, estimates and resource use – how do we stay in control?',
        content: [
          'Backlog: Tasks that need to be done, by priority and status, in Trello.',
          'Simple estimates per task in hours or minutes.',
          'Time tracking was followed up through Time9, a simple page the group built to keep track of work and hours.',
          'The goal is to have both a "budget" (estimate) and "accounts" (actual hours), so we can see whether we are ahead or behind, and adjust early.',
        ],
      },
      {
        number: '5',
        title: 'How do we quality-assure the plan?',
        content: [
          'Since the plan is uncertain early on (the project is open-ended and we learn along the way), we will quality-assure the plan by:',
          'Keeping the plan simple and short-term (1 week at a time).',
          'Updating the plan regularly based on what we actually get done.',
          'Having visible priorities (what matters most right now).',
          'We will have regular meetings with Knowit and Telenor Maritime where we present what has been done and the way forward.',
        ],
      },
      {
        number: '6',
        title: 'How do we quality-assure the backlog?',
        content: [
          'Tasks are small enough to be completed within a short time.',
          'Each task has a clear "done" description (what does it mean that the task is finished?).',
          'We prioritize and clean up the backlog regularly (removing/changing tasks that are no longer relevant).',
          'We hold reviews for approval before a task is moved to "done". Group members comment that they have reviewed and approved it so it can be moved to approved.',
        ],
      },
      {
        number: '7',
        title: 'How do we use estimates and time tracking for control?',
        content: [
          'Estimates are used to choose a realistic amount of work for a week.',
          'Time tracking is used to see whether we underestimate tasks or spend time on "the wrong things".',
          'If there are large differences between estimated and actual time, we use it as a learning opportunity and adjust our estimates going forward.',
        ],
      },
      {
        number: '8',
        title: 'How can we tell whether resources have been used well?',
        content: [
          'Whether we complete prioritized tasks regularly (progress).',
          'Whether time tracking shows time spent on useful activities (development, design, research, meetings).',
          'Whether we spot "time thieves" early (unclear tasks, tasks that are too large, too much waiting) and take action.',
          'That everyone in the group contributes evenly and has clear tasks.',
          'Whether the employer is satisfied.',
        ],
      },
    ],
    title: 'Project status ',
    subtitle: 'Our review of project quality, planning and execution',
    videosKicker: 'Process videos',
    videosTitle: 'How the group worked along the way',
    videosText:
      'The status video shows planning and quality in the project, while the Time9 video shows the tool the group built to keep track of hours and resource use.',
    videoTags: ['Status', 'Time9', 'Quality', 'Resource use'],
    projectHeading: 'Bachelor project - Code 9 (Knowit + Telenor Maritime)',
  },
};

const ProsjektstatusPage = () => {
  const c = content[useLanguage()];
  const { processVideos, sections } = c;

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 to-accent-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {c.title}<span className="gradient-text">(Knowit)</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {c.subtitle}
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
                <p className="text-sm font-semibold text-accent-200 mb-3">{c.videosKicker}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {c.videosTitle}
                </h2>
                <p className="text-slate-300 max-w-3xl leading-relaxed">
                  {c.videosText}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.videoTags.map((tag) => (
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
              {c.projectHeading}
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
