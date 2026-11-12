import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';
import { EXPERIENCE } from '../data/portfolioData';
import {
  EDITORIAL_EASE,
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { SectionHeader } from './SectionHeader';

const ARCHITECTURE_FLOW = [
  'React.js Components',
  'REST API Integration',
  'Spring Security (JWT & RBAC)',
  'Spring Boot + JPA / Hibernate',
  'MySQL Relational Database',
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-hairline px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="04"
          eyebrow="Professional Experience"
          titlePrefix="Production"
          titleItalic="engineering."
          subtitle="End-to-end full-stack delivery from relational data models and JWT security to React.js workflows."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Anchored Role & Architecture Overview */}
          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="border border-hairline bg-surface p-6 sm:p-8 lg:sticky lg:top-28"
            >
              <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                  Role {EXPERIENCE.num}
                </span>
                <span className="border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[11px] tracking-[0.12em] text-accent">
                  {EXPERIENCE.period}
                </span>
              </div>

              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink sm:text-3xl">
                {EXPERIENCE.company}
              </h3>
              <p className="mt-1 font-serif text-xl italic text-accent">
                {EXPERIENCE.position}
              </p>

              <div className="mt-6 border-t border-hairline pt-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  Primary Project
                </span>
                <p className="mt-1.5 text-sm font-medium text-ink">
                  {EXPERIENCE.project}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {EXPERIENCE.overview}
                </p>
              </div>

              {/* Layered System Flow */}
              <div className="mt-8 border-t border-hairline pt-6">
                <div className="mb-4 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  <Layers className="h-3.5 w-3.5 text-accent" />
                  <span>Application Request Lifecycle</span>
                </div>
                <ol className="space-y-2">
                  {ARCHITECTURE_FLOW.map((step, index) => (
                    <li
                      key={step}
                      className="flex items-center justify-between border border-hairline bg-canvas px-3.5 py-2 font-mono text-xs text-ink-muted"
                    >
                      <span>{step}</span>
                      <span className="text-[10px] text-accent">
                        0{index + 1}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>

          {/* Right Numbered Timeline */}
          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={VIEWPORT_CONFIG}
              transition={{ duration: 1, ease: EDITORIAL_EASE }}
              aria-hidden="true"
              className="absolute bottom-4 left-[19px] top-4 hidden w-[1px] bg-hairline sm:block"
            />

            <motion.ol
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="space-y-6"
            >
              {EXPERIENCE.milestones.map((item) => (
                <motion.li
                  key={item.num}
                  variants={staggerItemVariants}
                  className="group relative flex flex-col gap-4 border border-hairline bg-surface/50 p-6 transition-colors duration-300 hover:border-hairline-strong hover:bg-surface sm:ml-12 sm:p-7"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[49px] top-7 hidden h-10 w-10 items-center justify-center border border-hairline bg-canvas font-mono text-xs text-accent transition-colors duration-300 group-hover:border-accent sm:flex"
                  >
                    {item.num}
                  </span>

                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent sm:hidden">
                        {item.num}
                      </span>
                      <h4 className="text-lg font-medium tracking-[-0.01em] text-ink sm:text-xl">
                        {item.title}
                      </h4>
                    </div>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-subtle">
                      {item.layer}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-ink-muted sm:text-[0.95rem]">
                    {item.detail}
                  </p>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}

