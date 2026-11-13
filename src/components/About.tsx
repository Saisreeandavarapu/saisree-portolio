import { motion } from 'framer-motion';
import { Database, Layers, Layout, Server } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { SectionHeader } from './SectionHeader';

const SNAPSHOT_CARDS = [
  {
    num: '01',
    label: 'Focus',
    title: 'Full Stack Development',
    detail: 'End-to-end web architectures, multi-panel platforms & responsive workflows',
    icon: Layers,
  },
  {
    num: '02',
    label: 'Backend',
    title: 'Java & Spring Boot',
    detail: 'Layered REST APIs, Spring Security, Spring Data JPA, Hibernate & validation',
    icon: Server,
  },
  {
    num: '03',
    label: 'Frontend',
    title: 'React.js & JavaScript',
    detail: 'Component-driven UI engineering, client state & modern Tailwind styling',
    icon: Layout,
  },
  {
    num: '04',
    label: 'Database',
    title: 'MySQL & REST APIs',
    detail: 'Relational schemas, ACID transactions, CRUD operations & Postman testing',
    icon: Database,
  },
];

export function About() {
  return (
    <section
      id="about"
      className="border-b border-hairline px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="02"
          eyebrow="About Me"
          titlePrefix="Engineering with"
          titleItalic="clarity & structure."
          subtitle="Focused on clean backend abstractions, dependable data layers, and responsive user interfaces."
        />

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative & Professional Mission */}
          <div className="space-y-8 lg:col-span-7">
            <motion.blockquote
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="border-l-2 border-[#D4A373] pl-5 font-serif text-2xl italic leading-snug text-ink sm:text-3xl"
            >
              “Building maintainable full-stack applications where dependable Java
              & Spring Boot APIs meet clean React.js interfaces.”
            </motion.blockquote>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="space-y-4 text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]"
            >
              {PROFILE.summaryParagraphs.map((paragraph) => (
                <motion.p key={paragraph} variants={staggerItemVariants}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Quick Context Pill */}
            <motion.div
              variants={fadeUpVariants}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="flex flex-wrap items-center gap-3 border-t border-hairline pt-6 font-mono text-xs text-ink-muted"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4A373]" />
                <span className="text-ink">QuickDines</span>
                <span className="text-ink-subtle">/</span>
                <span>Full Stack Developer</span>
              </span>
              <span className="text-ink-subtle">•</span>
              <span className="text-ink">July 2026 – Present</span>
              <span className="text-ink-subtle">•</span>
              <span className="text-accent">HRMS Application</span>
            </motion.div>

            {/* Core Engineering Approach Pillars */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="border-t border-hairline pt-6"
            >
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-[#D4A373]">
                Core Engineering Approach
              </p>

              <div className="divide-y divide-hairline border-y border-hairline">
                {PROFILE.focusPillars.map((pillar) => (
                  <motion.div
                    key={pillar.num}
                    variants={staggerItemVariants}
                    className="grid grid-cols-1 gap-2 py-4 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 sm:col-span-4">
                      <span className="font-mono text-xs text-[#D4A373]">
                        {pillar.num}
                      </span>
                      <h3 className="text-sm font-semibold text-ink sm:text-base">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-ink-muted sm:col-span-8 sm:text-sm">
                      {pillar.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Professional Snapshot Cards (No photos, pure typographic & icon UI) */}
          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="mb-4 flex items-center justify-between border-b border-hairline pb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-subtle"
            >
              <span>Professional Snapshot</span>
              <span className="text-[#D4A373]">04 Core Capabilities</span>
            </motion.div>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-1"
            >
              {SNAPSHOT_CARDS.map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.num}
                    variants={staggerItemVariants}
                    className="group relative border border-hairline bg-surface/70 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A373]/50 hover:bg-surface hover:shadow-[0_4px_20px_rgba(212,163,115,0.08)]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center border border-hairline bg-canvas text-[#D4A373] transition-colors group-hover:border-[#D4A373]/60 group-hover:bg-[#D4A373]/10">
                          <Icon className="h-4 w-4" />
                        </span>
                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                            {card.num} — {card.label}
                          </span>
                          <h4 className="mt-0.5 text-base font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-[#D4A373]">
                            {card.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                      {card.detail}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
