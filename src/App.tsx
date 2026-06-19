import Nav from './components/Nav';
import Hero from './components/Hero';
import TechWall from './components/TechWall';
import Services from './components/Services';
import Principle from './components/Principle';
import SkillsShowcase from './components/SkillsShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-night">
      {/* Page-wide ambient texture */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(140,170,255,0.6) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f8cff]/30 to-transparent" />
      </div>

      <Nav />
      <main>
        <Hero />
        <TechWall />
        <Services />
        <Principle />
        <SkillsShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
