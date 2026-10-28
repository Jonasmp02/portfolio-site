import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/feature/Navbar';
import Footer from '../../../components/feature/Footer';
import { useLanguage } from '../../../i18n/useLanguage';

const content = {
  no: {
    images: {
      ideas: 'Ideer og prioriteringer',
      mindMapTitle: 'Tankekart',
      mindMap: 'Bestillingsflyt og kart',
      wireframes: 'Tidlige wireframes',
      figmaScreen: 'Skjerm fra Figma',
    },
    steps: [
      { title: 'Tankekart og idémyldring', description: 'Vi utforsket utfordringene og mulige løsninger gjennom workshops.' },
      { title: 'Navigasjonskart', description: 'Vi kartla strukturen i appen, inkludert sider som hjem, meny, bestilling og profil.' },
      { title: 'Wireframes', description: 'Vi designet skisser av de viktigste skjermene for å sikre en enkel og brukervennlig reise.' },
      { title: 'Figma-prototype', description: 'Til slutt utviklet vi en interaktiv prototype med Start sine gule og svarte profilfarger.' },
    ],
    titleHighlight: 'Digital Matapp',
    subtitle: 'En innovativ løsning for å forbedre kampdagsopplevelsen på Sparebanken Sør Arena',
    developedBy: 'Utviklet av studenter fra Universitetet i Agder',
    challengeTitle: 'Utfordringen',
    challengeText:
      'Publikum opplevde lange køer i kioskområdene, spesielt i pausen, noe som skapte frustrasjon og svekket opplevelsen på Sparebanken Sør Arena.',
    solutionTitle: 'Vår Løsning',
    solutionText:
      'En matapp som lar supportere forhåndsbestille mat og drikke, motta varsel når bestillingen er klar, og hente maten uten å stå i kø.',
    journeyStart: 'Fra ',
    journeyHighlight: 'Idé til Ferdig Produkt',
    descriptionTitle: 'Prosjektbeskrivelse',
    description1:
      'I samarbeid med IK Start utviklet vi en løsning for å forbedre kampdagsopplevelsen på Sparebanken Sør Arena. Publikum opplevde lange køer i kioskområdene, spesielt i pausen, noe som skapte frustrasjon og svekket opplevelsen.',
    description2:
      'Vår løsning ble en matapp som lar supportere forhåndsbestille mat og drikke, motta varsel når bestillingen er klar, og hente maten uten å stå i kø.',
    partnershipText: 'Utviklet i tett samarbeid med IK Start for å løse reelle utfordringer på stadion.',
    processStart: 'Utviklings',
    processHighlight: 'prosess',
    processText: 'Arbeidet fulgte prinsippene for tjenestedesign og designtenkning',
    videoStart: 'Se Prosjektet i ',
    videoHighlight: 'Aksjon',
    videoText: 'Få en dypere forståelse av vårt arbeid og resultater',
    featuresStart: 'Nøkkel',
    featuresHighlight: 'funksjoner',
    preorderTitle: 'Forhåndsbestilling',
    preorderText: 'Bestill mat og drikke før kampen eller i pausen for å unngå køer',
    notifyTitle: 'Smart Varsling',
    notifyText: 'Få beskjed når bestillingen din er klar for henting',
    timeTitle: 'Tidsbesparelse',
    timeText: 'Hent maten din uten å stå i kø og miss mindre av kampen',
    ctaTitle: 'Interessert i arbeidet mitt?',
    ctaText: 'Se flere av prosjektene mine, eller ta gjerne kontakt med meg',
    ctaBack: 'Tilbake til porteføljen',
    ctaContact: 'Kontakt meg',
  },
  en: {
    images: {
      ideas: 'Ideas and priorities',
      mindMapTitle: 'Mind map',
      mindMap: 'Ordering flow and map',
      wireframes: 'Early wireframes',
      figmaScreen: 'Screen from Figma',
    },
    steps: [
      { title: 'Mind mapping and brainstorming', description: 'We explored the challenges and possible solutions through workshops.' },
      { title: 'Navigation map', description: 'We mapped out the structure of the app, including pages such as home, menu, ordering and profile.' },
      { title: 'Wireframes', description: 'We designed sketches of the most important screens to ensure a simple and user-friendly journey.' },
      { title: 'Figma prototype', description: 'Finally, we developed an interactive prototype in Start’s yellow and black brand colors.' },
    ],
    titleHighlight: 'Digital Food App',
    subtitle: 'An innovative solution to improve the match-day experience at Sparebanken Sør Arena',
    developedBy: 'Developed by students from the University of Agder',
    challengeTitle: 'The challenge',
    challengeText:
      'Spectators faced long queues at the kiosks, especially during half-time, which caused frustration and weakened the experience at Sparebanken Sør Arena.',
    solutionTitle: 'Our Solution',
    solutionText:
      'A food app that lets supporters pre-order food and drinks, get notified when the order is ready, and pick it up without queuing.',
    journeyStart: 'From ',
    journeyHighlight: 'Idea to Finished Product',
    descriptionTitle: 'Project description',
    description1:
      'In collaboration with IK Start, we developed a solution to improve the match-day experience at Sparebanken Sør Arena. Spectators faced long queues at the kiosks, especially during half-time, which caused frustration and weakened the experience.',
    description2:
      'Our solution was a food app that lets supporters pre-order food and drinks, get notified when the order is ready, and pick it up without queuing.',
    partnershipText: 'Developed in close collaboration with IK Start to solve real challenges at the stadium.',
    processStart: 'Development ',
    processHighlight: 'process',
    processText: 'The work followed the principles of service design and design thinking',
    videoStart: 'See the Project in ',
    videoHighlight: 'Action',
    videoText: 'Get a deeper understanding of our work and results',
    featuresStart: 'Key ',
    featuresHighlight: 'features',
    preorderTitle: 'Pre-ordering',
    preorderText: 'Order food and drinks before the match or at half-time to avoid queues',
    notifyTitle: 'Smart Notifications',
    notifyText: 'Get notified when your order is ready for pickup',
    timeTitle: 'Time saving',
    timeText: 'Pick up your food without queuing and miss less of the match',
    ctaTitle: 'Interested in my work?',
    ctaText: 'See more of my projects, or feel free to get in touch',
    ctaBack: 'Back to the portfolio',
    ctaContact: 'Contact me',
  },
};

const IKStartPage = () => {
  const c = content[useLanguage()];

  // Set scroll position to top immediately, before any other effects
  useEffect(() => {
    // Force immediate scroll to top without smooth behavior
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('ikstart-project');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projectImages.length);
    }, 6000); // slowed a bit so slides change a little slower

    return () => clearInterval(interval);
  }, []);

  const projectImages = [
  // Replaced external/AI-generated images with local assets from public/images/ikstart
  // Paths use the public/ directory root so they resolve as /images/ikstart/...

    {
    src: `${import.meta.env.BASE_URL}images/ikstart/startlogo.png`,
    title: "Start Logo",
    description: "IK Start"
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/figma1.jpg`,
    title: "Figma Final Design",
    description: "Prototype figma"
  },
    {
    src: `${import.meta.env.BASE_URL}images/ikstart/postitest2.png`,
    title: "Post-it Layout 1",
    description: c.images.ideas
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/postittest.png`,
    title: "Post-it Notes 2",
    description: c.images.ideas
  },
    {
    src: `${import.meta.env.BASE_URL}images/ikstart/takekart.png`,
    title: c.images.mindMapTitle,
    description: c.images.mindMap
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/wireframe1.png`,
    title: "Wireframe 1",
    description: c.images.wireframes
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/wireframe2.png`,
    title: "Wireframe 2",
    description: c.images.wireframes
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/figma2.png`,
    title: "Figma Screen 1",
    description: c.images.figmaScreen
  },
  {
    src: `${import.meta.env.BASE_URL}images/ikstart/figma3.png`,
    title: "Figma Screen 2",
    description: c.images.figmaScreen
  }
  ];

  // Navigation helpers for manual slide control
  const prevSlide = () => setCurrentSlide((s) => (s - 1 + projectImages.length) % projectImages.length);
  const nextSlide = () => setCurrentSlide((s) => (s + 1) % projectImages.length);

  const developmentSteps = [
    {
      icon: 'ri-lightbulb-line',
      title: c.steps[0].title,
      description: c.steps[0].description
    },
    {
      icon: 'ri-route-line',
      title: c.steps[1].title,
      description: c.steps[1].description
    },
    {
      icon: 'ri-draft-line',
      title: c.steps[2].title,
      description: c.steps[2].description
    },
    {
      icon: 'ri-smartphone-line',
      title: c.steps[3].title,
      description: c.steps[3].description
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-accent-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-r from-yellow-400 to-black">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              IK Start <span className="text-yellow-400">{c.titleHighlight}</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {c.subtitle}
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg">
                  {c.developedBy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Problem */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <i className="ri-error-warning-line text-2xl text-red-600"></i>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{c.challengeTitle}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {c.challengeText}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl shadow-xl p-8 text-black">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-6">
                <i className="ri-smartphone-line text-2xl text-black"></i>
              </div>
              <h2 className="text-3xl font-bold mb-6">{c.solutionTitle}</h2>
              <p className="leading-relaxed text-lg">
                {c.solutionText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Story with Slideshow */}
      <section id="ikstart-project" className="py-16 bg-gradient-to-r from-brand-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {c.journeyStart}<span className="gradient-text">{c.journeyHighlight}</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-accent-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Slideshow */}
              <div className="relative">
                {/* Fixed responsive height prevents the image from changing the overall layout height */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-50 h-64 sm:h-80 md:h-[420px] lg:h-[480px]">
                  <img
                    src={projectImages[currentSlide].src}
                    alt={projectImages[currentSlide].title}
                    className="max-h-full max-w-full object-contain"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                    <h3 className="text-xl font-bold mb-2">{projectImages[currentSlide].title}</h3>
                    <p className="text-sm opacity-90">{projectImages[currentSlide].description}</p>
                  </div>

                  {/* Arrow buttons */}
                  <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M15 19l-7-7 7-7v14z" />
                    </svg>
                  </button>

                  <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 5l7 7-7 7V5z" />
                    </svg>
                  </button>
                </div>

                {/* Slide indicators */}
                <div className="flex justify-center mt-6 space-x-2">
                  {projectImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 cursor-pointer ${
                        index === currentSlide 
                          ? 'bg-gradient-to-r from-brand-500 to-accent-500' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-6">
                <div className="h-64 sm:h-80 md:h-[420px] lg:h-[480px] flex flex-col justify-center">
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{c.descriptionTitle}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {c.description1}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {c.description2}
                  </p>
                </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-400/10 to-black/10 rounded-2xl p-6 border border-yellow-400/20">
                  <div className="flex items-center mb-3">
                    <i className="ri-trophy-line text-2xl text-yellow-600 mr-3"></i>
                    <h4 className="text-lg font-semibold text-gray-900">IK Start Partnership</h4>
                  </div>
                  <p className="text-gray-600">
                    {c.partnershipText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {c.processStart}<span className="gradient-text">{c.processHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {c.processText}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`${step.icon} text-white text-2xl`}></i>
                </div>
                <div className="flex items-center mb-3">
                  <span className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-sm mr-3">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gradient-to-r from-brand-50 to-accent-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {c.videoStart}<span className="gradient-text">{c.videoHighlight}</span>
            </h2>
            <p className="text-xl text-gray-600">
              {c.videoText}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <div className="aspect-video rounded-2xl overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/ma4pgFfeGYQ"
                title="IK Start Digital Matapp Project"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {c.featuresStart}<span className="gradient-text">{c.featuresHighlight}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-shopping-cart-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{c.preorderTitle}</h3>
              <p className="text-gray-600">
                {c.preorderText}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-notification-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{c.notifyTitle}</h3>
              <p className="text-gray-600">
                {c.notifyText}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-time-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{c.timeTitle}</h3>
              <p className="text-gray-600">
                {c.timeText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            {c.ctaTitle}
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            {c.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-arrow-left-line mr-2"></i>
              {c.ctaBack}
            </Link>
            <a
              href="mailto:jonazmp@gmail.com"
              className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line mr-2"></i>
              {c.ctaContact}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IKStartPage;
