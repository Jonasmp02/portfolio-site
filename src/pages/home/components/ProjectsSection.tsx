import { useEffect, useState } from 'react'
import { useLanguage } from '../../../i18n/useLanguage'

const content = {
  no: {
    titleStart: 'Tidligere ',
    titleHighlight: 'Prosjekter',
    subtitle: 'Et utvalg tidligere prosjekter fra bachelor, studiearbeid og praktisk utvikling.',
    projects: [
      {
        title: 'IK Start – Køfri kioskopplevelse',
        description:
          'Revolusjonerende løsning for køfri handel som forbedrer kundeopplevelsen og effektiviserer driften for IK Start.',
      },
      {
        title: 'Kartverket – Webapp med kart og sikker innlogging',
        description:
          'Avansert kartapplikasjon med robust sikkerhet og brukerautentisering for Kartverket sine tjenester.',
      },
      {
        title: 'FINN.no – Forbedret kart og universell utforming',
        description:
          'Omfattende forbedringer av kartfunksjonalitet og tilgjengelighet for å gjøre FINN.no mer inkluderende for alle brukere.',
      },
      {
        title: 'Personlig portefølje',
        description:
          'Nettsiden du er på nå: en personlig portefølje med prosjekter, erfaring og kompetanse, tilpasset både mobil og større skjermer.',
      },
    ],
    imagePlaceholder: 'Plass til bilde av porteføljen',
    seeDetails: 'Se detaljer',
    bachelorLabel: 'Se bachelorprosjektet med Knowit og Telenor Maritime',
    bachelorKicker: 'Bachelorprosjekt · Knowit + Telenor Maritime',
    bachelorTitle: 'Agentbasert beslutningsstøtte for maritim drift',
    bachelorText:
      'Vårt mest omfattende studieprosjekt: en prototype som koblet monitoreringsdata, observability og lokale AI-agenter for å støtte teknisk personell ved hendelsesanalyse.',
    bachelorTags: ['FastAPI', 'PostgreSQL', 'Grafana', 'RAG', 'Lokal LLM'],
    seeBachelor: 'Se bachelorprosjektet',
  },
  en: {
    titleStart: 'Previous ',
    titleHighlight: 'Projects',
    subtitle: 'A selection of previous projects from my bachelor’s degree, coursework and hands-on development.',
    projects: [
      {
        title: 'IK Start – Queue-free kiosk experience',
        description:
          'A new approach to queue-free purchasing that improves the customer experience and streamlines operations for IK Start.',
      },
      {
        title: 'Kartverket – Web app with maps and secure login',
        description:
          'An advanced map application with robust security and user authentication for the Norwegian Mapping Authority’s services.',
      },
      {
        title: 'FINN.no – Improved maps and universal design',
        description:
          'Extensive improvements to map functionality and accessibility to make FINN.no more inclusive for all users.',
      },
      {
        title: 'Personal portfolio',
        description:
          'The website you are on right now: a personal portfolio with projects, experience and skills, built for both mobile and larger screens.',
      },
    ],
    imagePlaceholder: 'Placeholder for an image of the portfolio',
    seeDetails: 'See details',
    bachelorLabel: 'See the bachelor project with Knowit and Telenor Maritime',
    bachelorKicker: 'Bachelor project · Knowit + Telenor Maritime',
    bachelorTitle: 'Agent-based decision support for maritime operations',
    bachelorText:
      'Our most extensive study project: a prototype that combined monitoring data, observability and local AI agents to support technical staff during incident analysis.',
    bachelorTags: ['FastAPI', 'PostgreSQL', 'Grafana', 'RAG', 'Local LLM'],
    seeBachelor: 'See the bachelor project',
  },
}

// Prefix asset paths so images work both locally and on GitHub Pages.
const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const c = content[useLanguage()]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )

    const element = document.getElementById('projects')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Titles and descriptions come from `content`, in the same order as this list.
  const projects = [
    {
      category: 'Mobile App & UX Design',
      image: withBase('images/IkStartappbilde.jpg'),
      tags: ['React Native', 'Payment Integration', 'UX Design', 'Real-time'],
      color: 'from-accent-500 to-accent-500',
      route: '/projects/ikstart',
    },
    {
      category: 'Web Application & Security',
      image: withBase('images/kartverketlogooo.jpg'),
      tags: ['React', 'Maps API', 'Authentication', 'Security'],
      color: 'from-green-500 to-emerald-500',
      route: '/projects/kartverket',
    },
    {
      category: 'Accessibility & User Experience',
      image: withBase('images/Finnprojectside.jpg'),
      tags: ['Accessibility', 'Maps', 'Universal Design', 'Frontend'],
      color: 'from-orange-500 to-red-500',
      route: '/projects/finn',
    },
    {
      category: 'Frontend & webdesign',
      image: withBase('images/portfolio/frontside nett.png'),
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      color: 'from-brand-500 to-accent-500',
      route: '/projects/portfolio',
    },
  ].map((project, index) => ({ ...project, ...c.projects[index] }))

  const navigateToBachelor = () => {
    // The highlighted bachelor card is keyboard/click accessible and routes to the detail page.
    if ((window as any).REACT_APP_NAVIGATE) {
      (window as any).REACT_APP_NAVIGATE('/projects/bachelor')
      return
    }

    window.location.href = `${import.meta.env.BASE_URL}projects/bachelor`
  }

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {c.titleStart}<span className="gradient-text">{c.titleHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.subtitle}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-brand-600 mx-auto rounded-full mt-6"></div>
          </div>

          <div className="flex flex-col">
            <div className="order-2 grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onClick={() => {
                  if ((window as any).REACT_APP_NAVIGATE && project.route !== '#') {
                    (window as any).REACT_APP_NAVIGATE(project.route)
                  }
                }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  {project.image ? <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  /> : (
                    <div className="w-full h-full bg-slate-100 border border-dashed border-slate-300" role="img" aria-label={c.imagePlaceholder} />
                  )}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-300`}
                  ></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-accent-100 hover:text-accent-700 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="group/btn w-full bg-gradient-to-r from-accent-500 to-brand-600 text-white py-3 rounded-xl font-semibold hover:from-accent-600 hover:to-brand-700 transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap">
                    {c.seeDetails}
                    <i className="ri-arrow-right-line ml-2 group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                  </button>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>

          <div
            className="order-1 relative overflow-hidden mb-12 bg-gradient-to-r from-slate-900 via-accent-900 to-brand-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl focus-within:shadow-2xl border border-accent-200/20 cursor-pointer group transform hover:-translate-y-2 focus-within:-translate-y-2 transition-all duration-500 motion-reduce:transform-none motion-reduce:transition-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-600"
            onClick={navigateToBachelor}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigateToBachelor()
              }
            }}
            role="button"
            tabIndex={0}
            aria-label={c.bachelorLabel}
          >
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-accent-600 to-accent-500 opacity-0 group-hover:opacity-80 group-focus-within:opacity-80 transition-opacity duration-300 pointer-events-none motion-reduce:transition-none"></div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none motion-reduce:transition-none"></div>
            <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-accent-200 mb-2">
                  {c.bachelorKicker}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {c.bachelorTitle}
                </h3>
                <p className="text-accent-50 max-w-3xl leading-relaxed">
                  {c.bachelorText}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.bachelorTags.map((tag) => (
                    <span key={tag} className="bg-white/10 text-accent-50 px-3 py-1 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={(event) => {
                  event.stopPropagation()
                  navigateToBachelor()
                }}
                className="bg-white text-accent-900 px-6 py-3 rounded-full font-semibold hover:bg-accent-50 transition-all duration-300 cursor-pointer whitespace-nowrap group-hover:scale-105"
              >
                {c.seeBachelor}
                <i className="ri-arrow-right-line ml-2"></i>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
