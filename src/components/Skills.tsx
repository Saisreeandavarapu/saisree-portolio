import { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  EDITORIAL_EASE,
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { SectionHeader } from './SectionHeader';

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const visibleCategories =
    selectedCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((item) => item.id === selectedCategory);

  return (
    <section
      id="skills"
      className="border-b border-hairline bg-surface/40 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="03"
          eyebrow="Technical Expertise"
          titlePrefix="Verified"
          titleItalic="capabilities."
          subtitle="Technologies and engineering patterns applied directly across production HRMS work and full-stack applications."
        />

        {/* Interactive Category Filter */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="mb-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter skill categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
            className={`relative px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
              selectedCategory === 'all'
                ? 'text-canvas'
                : 'border border-hairline text-ink-muted hover:border-hairline-strong hover:text-ink'
            }`}
          >
            {selectedCategory === 'all' && (
              <motion.span
                layoutId="skill-filter-pill"
                transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                className="absolute inset-0 bg-accent"
              />
            )}
            <span className="relative z-10">All Domains</span>
          </button>

          {SKILL_CATEGORIES.map((category) => {
            const active = selectedCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category.id)}
                className={`relative px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? 'text-canvas'
                    : 'border border-hairline text-ink-muted hover:border-hairline-strong hover:text-ink'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="skill-filter-pill"
                    transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                    className="absolute inset-0 bg-accent"
                  />
                )}
                <span className="relative z-10">{category.category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Editorial Matrix Rows */}
        <motion.div
          key={selectedCategory}
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="divide-y divide-hairline border-y border-hairline"
        >
          {visibleCategories.map((group) => (
            <motion.div
              key={group.id}
              variants={staggerItemVariants}
              className="group grid grid-cols-1 gap-6 py-8 transition-colors duration-300 hover:bg-surface/70 sm:px-4 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-10"
            >
              <div className="lg:col-span-5">
                <div className="mb-2 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-accent">
                    {group.num}
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl">
                    {group.category}
                  </h3>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                  {group.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:col-span-7 lg:justify-end">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-hairline bg-canvas px-4 py-2 font-mono text-xs tracking-[0.06em] text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

