import { useEffect, useState } from 'react'
import { useLanguage } from '../../../i18n/useLanguage'

const content = {
  no: {
    titleStart: 'Bachelorteam og ',
    titleHighlight: 'studieprosjekter',
    paragraph1:
      'Denne siden samler bachelorprosjektet, utvalgte studieprosjekter og teamarbeidet bak løsningene. Prosjektene viser hvordan jeg har jobbet med frontend, UX, sikkerhet, kart, data og AI i praktiske leveranser.',
    paragraph2:
      'Bachelorprosjektet ble gjennomført i gruppe ved Universitetet i Agder, mens resten av siden gir kontekst rundt prosess, teknologi og bidrag. Målet er å vise både hva som ble bygget, hvordan vi jobbet, og hvilken rolle jeg hadde i arbeidet.',
    technology: 'Teknologi',
    technologyText: 'React, TypeScript, Node.js og AI',
    team: 'Bachelorteam',
    teamText: 'Samarbeid, planlegging og leveranser',
    projects: 'Prosjekter',
    projectsText: 'Bachelor, UX, kart og webutvikling',
    role: 'Min rolle',
    roleText: 'Design, kode, struktur og forbedringer',
    imageAlt: 'Bachelorgruppen samlet rundt arbeidsbordet',
    teamMembers: 'Teammedlemmer',
    bigProjects: 'Store prosjekter',
    dedication: 'Dedikasjon',
    creativity: 'Kreativitet',
  },
  en: {
    titleStart: 'Bachelor team and ',
    titleHighlight: 'study projects',
    paragraph1:
      'This page brings together the bachelor project, selected study projects and the teamwork behind the solutions. The projects show how I have worked with frontend, UX, security, maps, data and AI in practical deliveries.',
    paragraph2:
      'The bachelor project was carried out as a group at the University of Agder, while the rest of the page gives context around process, technology and contributions. The goal is to show what was built, how we worked, and what role I had in the work.',
    technology: 'Technology',
    technologyText: 'React, TypeScript, Node.js and AI',
    team: 'Bachelor team',
    teamText: 'Collaboration, planning and deliveries',
    projects: 'Projects',
    projectsText: 'Bachelor, UX, maps and web development',
    role: 'My role',
    roleText: 'Design, code, structure and improvements',
    imageAlt: 'The bachelor group gathered around the work table',
    teamMembers: 'Team members',
    bigProjects: 'Major projects',
    dedication: 'Dedication',
    creativity: 'Creativity',
  },
}

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const c = content[useLanguage()]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {c.titleStart}<span className="gradient-text">{c.titleHighlight}</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-500 to-brand-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {c.paragraph1}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {c.paragraph2}
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-code-s-slash-line text-2xl text-accent-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{c.technology}</h3>
                  <p className="text-sm text-gray-600">{c.technologyText}</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-team-line text-2xl text-brand-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{c.team}</h3>
                  <p className="text-sm text-gray-600">{c.teamText}</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-lightbulb-line text-2xl text-green-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{c.projects}</h3>
                  <p className="text-sm text-gray-600">{c.projectsText}</p>
                </div>

                <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-award-line text-2xl text-orange-600"></i>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{c.role}</h3>
                  <p className="text-sm text-gray-600">{c.roleText}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src={withBase('images/Guttasmiler.jpg')}
                  alt={c.imageAlt}
                  className="rounded-2xl shadow-2xl object-cover w-full h-96"
                  style={{ objectPosition: '30% 60%' }}
                />
              </div>

              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-200 rounded-full opacity-50 animate-float"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-200 rounded-full opacity-50 animate-float-delayed"></div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">{c.teamMembers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4</div>
              <div className="text-gray-600">{c.bigProjects}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">110%</div>
              <div className="text-gray-600">{c.dedication}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">∞</div>
              <div className="text-gray-600">{c.creativity}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
