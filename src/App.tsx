import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PortfolioIntro } from './components/PortfolioIntro';
import { Projects } from './components/Projects';
import { ScrollProgress } from './components/ScrollProgress';
import { Skills } from './components/Skills';
import { NAV_ITEMS } from './data/portfolioData';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [introDone, setIntroDone] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroDone(true);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-28% 0px -55% 0px',
        threshold: [0.1, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="editorial-grain relative min-h-screen bg-canvas text-ink">
        <PortfolioIntro onComplete={handleIntroComplete} />
        <ScrollProgress />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:font-semibold focus:text-canvas"
        >
          Skip to main content
        </a>

        <Navbar activeSection={activeSection} />

        <main
          id="main-content"
          data-ready={introDone}
          className="relative z-10"
        >
          <Hero ready={introDone} />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
