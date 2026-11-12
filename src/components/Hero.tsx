import { motion } from 'framer-motion';
import {
  ArrowDownRight,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';
import {
  PROFILE,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_PATH,
} from '../data/portfolioData';
import { EDITORIAL_EASE, fadeUpVariants, revealLineVariants } from '../utils/motion';
import { PortraitFrame } from './PortraitFrame';

interface HeroProps {
  ready?: boolean;
}

export function Hero({ ready = true }: HeroProps) {
  const animState = ready ? 'visible' : 'hidden';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-between border-b border-hairline px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pb-16 lg:pt-36"
    >
      <div className="mx-auto w-full max-w-[1380px]">
        {/* Top Metadata Strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.6, delay: 0.08, ease: EDITORIAL_EASE }}
          className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4"
        >
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
            <span className="text-accent">01</span>
            <span>/</span>
            <span>{PROFILE.name}</span>
          </div>

          <div className="inline-flex items-center gap-2.5 border border-hairline bg-surface px-3.5 py-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4FA68]" />
            <span>{PROFILE.title}</span>
          </div>
        </motion.div>

        {/* Asymmetric 12-Column Editorial Hero */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <motion.p
              variants={fadeUpVariants}
              custom={0.12}
              initial="hidden"
              animate={animState}
              className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent"
            >
              {PROFILE.positioning}
            </motion.p>

            <h1 className="mb-8 text-[2.45rem] font-semibold leading-[1.03] tracking-[-0.035em] text-ink sm:text-[3.75rem] lg:text-[4.5rem] xl:text-[5.25rem]">
              {PROFILE.heroHeadlineLines.map((line, index) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    variants={revealLineVariants}
                    custom={0.16 + index * 0.08}
                    initial="hidden"
                    animate={animState}
                    className={`block ${
                      index === 1
                        ? 'font-serif font-normal italic text-accent'
                        : ''
                    }`}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              variants={fadeUpVariants}
              custom={0.42}
              initial="hidden"
              animate={animState}
              className="mb-10 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg"
            >
              {PROFILE.heroIntro}
            </motion.p>

            {/* Primary CTA & Social Actions */}
            <motion.div
              variants={fadeUpVariants}
              custom={0.5}
              initial="hidden"
              animate={animState}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-canvas transition-all duration-300 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <span>View Projects</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href={RESUME_PATH}
                download={RESUME_DOWNLOAD_FILENAME}
                className="group inline-flex items-center gap-3 border border-hairline-strong bg-surface px-6 py-3.5 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-all duration-300 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Minimal Direct Links */}
            <motion.div
              variants={fadeUpVariants}
              custom={0.58}
              initial="hidden"
              animate={animState}
              className="mt-10 flex flex-wrap items-center gap-6 border-t border-hairline pt-6 text-xs text-ink-muted"
            >
              <a
                href={PROFILE.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Github className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono uppercase tracking-[0.14em]">
                  GitHub
                </span>
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Linkedin className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono uppercase tracking-[0.14em]">
                  LinkedIn
                </span>
              </a>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
              >
                <Mail className="h-3.5 w-3.5 text-accent" />
                <span className="font-mono tracking-[0.06em]">
                  {PROFILE.contact.email}
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right Portrait Composition */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="mx-auto max-w-sm lg:ml-auto lg:max-w-none">
              <PortraitFrame
                src={PROFILE.images.hero.src}
                alt={PROFILE.images.hero.alt}
                caption={PROFILE.images.hero.caption}
                badgeText="AS // 01"
                aspectClass="aspect-[4/5]"
                objectPositionClass={PROFILE.images.hero.objectPositionClass}
                delay={0.22}
                immediate={ready}
              />

              <motion.div
                variants={fadeUpVariants}
                custom={0.56}
                initial="hidden"
                animate={animState}
                className="mt-5 grid grid-cols-2 gap-4 border-t border-hairline pt-4 font-mono text-[11px]"
              >
                <div>
                  <span className="block uppercase tracking-[0.16em] text-ink-subtle">
                    Core Focus
                  </span>
                  <span className="mt-1 block text-ink">
                    Spring Boot & React.js
                  </span>
                </div>
                <div>
                  <span className="block uppercase tracking-[0.16em] text-ink-subtle">
                    Current Role
                  </span>
                  <span className="mt-1 block text-ink">
                    QuickDines (HRMS)
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue Footer Row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.7, delay: 0.65 }}
        className="mx-auto mt-14 flex w-full max-w-[1380px] items-center justify-between border-t border-hairline pt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle"
      >
        <span>Scroll to explore architecture & projects</span>
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-accent"
        >
          <span>02 / About</span>
          <ArrowDownRight className="h-3.5 w-3.5" />
        </a>
      </motion.div>
    </section>
  );
}
