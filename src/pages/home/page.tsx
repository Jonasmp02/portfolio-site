
import Navbar from '../../components/feature/Navbar';
import Footer from '../../components/feature/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
