import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import {
  NAV_ITEMS,
  PROFILE,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_PATH,
} from '../data/portfolioData';
import { EDITORIAL_EASE } from '../utils/motion';
import { MonogramLogo } from './MonogramLogo';

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ease-editorial ${
          scrolled
            ? 'border-b border-hairline bg-canvas/88 py-3.5 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#hero"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
          >
            <MonogramLogo size="sm" />
            <div className="hidden flex-col sm:flex">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
                {PROFILE.name}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
                {PROFILE.title}
              </span>
            </div>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-1 lg:flex"
          >
            {NAV_ITEMS.filter((item) => item.id !== 'hero').map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-3.5 py-2 text-xs font-medium tracking-[0.08em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent ${
                    isActive ? 'text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  <span className="mr-1.5 font-mono text-[10px] text-accent/80">
                    {item.num}
                  </span>
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-underline"
                      transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                      className="absolute bottom-1 left-3.5 right-3.5 h-[1px] bg-accent"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={RESUME_PATH}
              download={RESUME_DOWNLOAD_FILENAME}
              className="group inline-flex items-center gap-2 border border-hairline-strong bg-surface px-3.5 py-2 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-all duration-300 hover:border-accent hover:bg-accent hover:text-canvas focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent sm:px-4"
            >
              <Download className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center border border-hairline bg-surface text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col justify-between bg-canvas px-6 py-6 sm:px-10 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-hairline pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Navigation // {PROFILE.monogram}
              </span>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-10 w-10 items-center justify-center border border-hairline bg-surface text-ink transition-colors hover:border-accent hover:text-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <nav aria-label="Mobile links" className="my-auto flex flex-col gap-2 py-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.045,
                    ease: EDITORIAL_EASE,
                  }}
                  className="group flex items-baseline justify-between border-b border-hairline py-3.5 text-2xl font-medium tracking-[-0.02em] text-ink transition-colors hover:text-accent sm:text-3xl"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      {item.num}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-hairline pt-5">
              <a
                href={RESUME_PATH}
                download={RESUME_DOWNLOAD_FILENAME}
                onClick={handleLinkClick}
                className="inline-flex items-center justify-center gap-2.5 bg-accent px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-canvas transition-colors hover:bg-ink"
              >
                <Download className="h-4 w-4" />
                Download Resume PDF
              </a>
              <div className="flex items-center justify-between font-mono text-[11px] text-ink-muted">
                <a href={`mailto:${PROFILE.contact.email}`} className="hover:text-ink">
                  {PROFILE.contact.email}
                </a>
                <a
                  href={PROFILE.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ink"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

