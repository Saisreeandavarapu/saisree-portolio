import { motion } from 'framer-motion';
import { PROFILE } from '../data/portfolioData';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { PortraitFrame } from './PortraitFrame';
import { SectionHeader } from './SectionHeader';

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

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Diptych Composition */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-6 lg:sticky lg:top-28">
            <PortraitFrame
              src={PROFILE.images.about.src}
              alt={PROFILE.images.about.alt}
              caption={PROFILE.images.about.caption}
              badgeText="AS // 02"
              aspectClass="aspect-[9/10]"
              objectPositionClass={PROFILE.images.about.objectPositionClass}
              delay={0.08}
            />

            {!PROFILE.images.workspace.isPlaceholder && (
              <div className="sm:mt-10">
                <PortraitFrame
                  src={PROFILE.images.workspace.src}
                  alt={PROFILE.images.workspace.alt}
                  caption={PROFILE.images.workspace.caption}
                  badgeText="AS // 03"
                  aspectClass="aspect-square"
                  objectPositionClass={PROFILE.images.workspace.objectPositionClass}
                  delay={0.18}
                />
              </div>
            )}
          </div>

          {/* Right Narrative & Architectural Focus */}
          <div className="flex flex-col justify-between gap-12 lg:col-span-6">
            <div className="space-y-6">
              <motion.blockquote
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
                className="border-l-2 border-accent pl-5 font-serif text-2xl italic leading-snug text-ink sm:text-3xl"
              >
                “Building maintainable full-stack applications where dependable Java
                & Spring Boot APIs meet clean React.js interfaces.”
              </motion.blockquote>

              <motion.div
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT_CONFIG}
                className="space-y-4 pt-2 text-base leading-relaxed text-ink-muted sm:text-[1.0625rem]"
              >
                {PROFILE.summaryParagraphs.map((paragraph) => (
                  <motion.p key={paragraph} variants={staggerItemVariants}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            {/* Three Architectural Pillars */}
            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="border-t border-hairline pt-8"
            >
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Core Engineering Approach
              </p>

              <div className="divide-y divide-hairline border-y border-hairline">
                {PROFILE.focusPillars.map((pillar) => (
                  <motion.div
                    key={pillar.num}
                    variants={staggerItemVariants}
                    className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 sm:col-span-4">
                      <span className="font-mono text-xs text-accent">
                        {pillar.num}
                      </span>
                      <h3 className="text-base font-medium text-ink">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm leading-relaxed text-ink-muted sm:col-span-8">
                      {pillar.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

