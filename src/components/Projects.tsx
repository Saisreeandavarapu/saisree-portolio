import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Layers, Maximize2 } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import {
  EDITORIAL_EASE,
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { ProjectModal } from './ProjectModal';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const activeProject = PROJECTS[activeIndex];

  return (
    <section
      id="projects"
      className="border-b border-hairline bg-surface/40 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="05"
          eyebrow="Selected Projects"
          titlePrefix="Featured"
          titleItalic="systems."
          subtitle="Full-stack applications and multi-panel platforms engineered with clear architecture, role-based workflows, and responsive UI."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Project Index */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="divide-y divide-hairline border-y border-hairline lg:col-span-7"
          >
            {PROJECTS.map((project, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.article
                  key={project.id}
                  variants={staggerItemVariants}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group relative py-8 transition-colors duration-300 sm:px-5 sm:py-10 ${
                    isActive ? 'bg-surface' : 'hover:bg-surface/60'
                  }`}
                >
                  <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3 font-mono text-xs">
                      <span className="text-accent">{project.num}</span>
                      <span className="text-ink-subtle">/</span>
                      <span className="uppercase tracking-[0.16em] text-ink-muted">
                        {project.context}
                      </span>
                    </div>

                    {project.externalUrl && (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[11px] tracking-[0.08em] text-accent transition-colors hover:bg-accent hover:text-canvas"
                      >
                        <span>{project.externalLabel ?? 'Live Site'}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="block w-full text-left focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold tracking-[-0.025em] text-ink transition-colors duration-300 group-hover:text-accent sm:text-3xl lg:text-[2.1rem]">
                          {project.title}
                        </h3>
                        <p className="mt-1 font-serif text-lg italic text-ink-muted">
                          {project.subtitle}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-hairline text-ink-muted transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-canvas"
                      >
                        <Maximize2 className="h-4 w-4 transition-transform duration-300 group-hover:scale-105" />
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-muted sm:text-base">
                      {project.description}
                    </p>
                  </button>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.slice(0, 6).map((tech) => (
                        <span
                          key={tech}
                          className="border border-hairline bg-canvas px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 6 && (
                        <span className="border border-hairline bg-canvas px-2.5 py-1 font-mono text-[11px] text-accent">
                          +{project.stack.length - 6}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink transition-colors hover:text-accent"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          {/* Right Sticky Architecture Preview Panel */}
          <div className="lg:col-span-5">
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_CONFIG}
              className="border border-hairline bg-canvas p-6 sm:p-8 lg:sticky lg:top-28"
            >
              <div className="mb-6 flex items-center justify-between border-b border-hairline pb-4">
                <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  <Layers className="h-3.5 w-3.5" />
                  <span>Architecture Preview</span>
                </div>
                <span className="font-mono text-xs text-ink-subtle">
                  {activeProject.num} / 0{PROJECTS.length}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EDITORIAL_EASE }}
                  className="space-y-6"
                >
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                      {activeProject.context}
                    </p>
                    <h4 className="mt-1.5 text-2xl font-semibold tracking-[-0.02em] text-ink">
                      {activeProject.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-ink-muted">
                      {activeProject.statusNote}
                    </p>
                  </div>

                  {/* Interactive System Module Map */}
                  <div className="space-y-2.5 border border-hairline bg-surface p-4">
                    <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                      Core System Modules
                    </span>
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                      {activeProject.architectureNodes.map((node, nodeIdx) => (
                        <div
                          key={node.label}
                          className="border border-hairline bg-canvas p-3.5"
                        >
                          <span className="font-mono text-[10px] text-accent">
                            0{nodeIdx + 1}
                          </span>
                          <p className="mt-1 text-sm font-medium text-ink">
                            {node.label}
                          </p>
                          <p className="mt-1 text-[11px] leading-snug text-ink-muted">
                            {node.role}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Feature Preview */}
                  <div>
                    <span className="mb-2.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink-subtle">
                      Implemented Capabilities
                    </span>
                    <ul className="space-y-2">
                      {activeProject.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-xs leading-relaxed text-ink-muted"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 bg-accent" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 border-t border-hairline pt-5">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(activeProject)}
                      className="inline-flex flex-1 items-center justify-center gap-2 bg-ink px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-canvas transition-colors hover:bg-accent"
                    >
                      <span>Inspect Full Specification</span>
                      <Maximize2 className="h-3.5 w-3.5" />
                    </button>

                    {activeProject.externalUrl && (
                      <a
                        href={activeProject.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 border border-hairline-strong px-4 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-accent hover:text-accent"
                      >
                        <span>Live</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

