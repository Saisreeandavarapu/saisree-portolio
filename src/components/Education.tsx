import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';
import {
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { SectionHeader } from './SectionHeader';

export function Education() {
  return (
    <section
      id="education"
      className="border-b border-hairline px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="06"
          eyebrow="Education"
          titlePrefix="Academic"
          titleItalic="foundation."
          subtitle="Formal computer science and applications training supporting software architecture and problem solving."
        />

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {EDUCATION.map((item) => (
            <motion.article
              key={item.num}
              variants={staggerItemVariants}
              className="group flex flex-col justify-between border border-hairline bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/50 hover:bg-surface sm:p-9"
            >
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                    {item.num} // Degree
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted">
                    <GraduationCap className="h-3.5 w-3.5 text-accent" />
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                  {item.degree}
                </h3>
                <p className="mt-2 text-base text-ink-muted">
                  {item.institution}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-hairline pt-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                  Academic Performance
                </span>
                <span className="border border-accent/35 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
                  {item.grade}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

