import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../i18n/useLanguage'

const content = {
  no: {
    titleStart: 'Prosjektteam og ',
    titleHighlight: 'roller',
    subtitle: 'Medlemmer og roller fra tidligere studie- og bachelorprosjekter',
    readAbout: 'Les om',
    aboutMe: 'Mer om meg',
    philosophy: 'Vår filosofi',
    philosophyText:
      'Samarbeid, læring og nysgjerrighet driver oss. Vi bruker forskjellene våre som en styrke, og sammen lager vi løsninger vi lærer av og som stadig blir bedre underveis.',
  },
  en: {
    titleStart: 'Project team and ',
    titleHighlight: 'roles',
    subtitle: 'Members and roles from previous study and bachelor projects',
    readAbout: 'Read about',
    aboutMe: 'About me',
    philosophy: 'Our philosophy',
    philosophyText:
      'Collaboration, learning and curiosity drive us. We use our differences as a strength, and together we build solutions we learn from and that keep getting better along the way.',
  },
}

const withBase = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\/+/, '')}`

const TeamSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const c = content[useLanguage()]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.05 }
    )

    const element = document.getElementById('team')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  // Only Jonas has a profile page; the other members are shown as photos with their name.
  const teamMembers: { name: string; image: string; link?: string }[] = [
    {
      name: 'Nidal Alendar',
      image: withBase('images/nidal.jpg'),
    },
    {
      name: 'Kristian M. Bergedalen',
      image: withBase('images/kristian.jpg'),
    },
    {
      name: 'Jonas M. Pettersen',
      image: withBase('images/jonas.jpg'),
      link: '/team/jonas',
    },
    {
      name: 'Pheeraphan Uthamontree',
      image: withBase('images/pheeraphan.jpg'),
    },
  ]

  const cardClassName = 'group relative transform hover:scale-105 transition-all duration-300'

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-gray-50 to-accent-50">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const card = (
              <>
                {/* Profile Image */}
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div
                    className="w-full h-full transition-transform duration-500"
                    style={
                      member.name.includes('Pheeraphan')
                        ? { transform: 'scale(1.38) translateY(-6%)' }
                        : member.name.includes('Kristian')
                        ? { transform: 'scale(1.38)' }
                        : undefined
                    }
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-100 md:opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300"></div>

                  {/* Name overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform md:translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                    {member.link && (
                      <div className="flex items-center text-accent-200">
                        <span className="text-sm">{c.aboutMe}</span>
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      </div>
                    )}
                  </div>

                  {/* Click indicator */}
                  {member.link && (
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                      <i className="ri-external-link-line text-white text-lg"></i>
                    </div>
                  )}
                </div>
              </>
              )

              return member.link ? (
                <Link
                  to={member.link}
                  aria-label={`${c.readAbout} ${member.name}`}
                  key={member.name}
                  className={`${cardClassName} cursor-pointer`}
                >
                  {card}
                </Link>
              ) : (
                <div key={member.name} className={cardClassName}>
                  {card}
                </div>
              )
            })}
          </div>

          {/* Team Philosophy */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-accent-50 to-brand-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.philosophy}</h3>
              <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {c.philosophyText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamSection
