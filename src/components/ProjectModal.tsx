import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Layers, X } from 'lucide-react';
import type { ProjectItem } from '../data/portfolioData';
import { EDITORIAL_EASE } from '../utils/motion';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-canvas/85 p-4 backdrop-blur-md sm:p-6 lg:p-10"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-hairline-strong bg-surface p-6 shadow-2xl sm:p-10"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 border-b border-hairline pb-6">
              <div>
                <div className="mb-2 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  <span>Project {project.num}</span>
                  <span className="text-ink-subtle">/</span>
                  <span className="text-ink-muted">{project.context}</span>
                </div>
                <h3
                  id="project-modal-title"
                  className="text-2xl font-semibold tracking-[-0.025em] text-ink sm:text-4xl"
                >
                  {project.title}
                </h3>
                <p className="mt-1 font-serif text-xl italic text-ink-muted">
                  {project.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close project details"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-hairline bg-canvas text-ink transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Overview & Honest Status */}
            <div className="space-y-4 py-6">
              <p className="text-base leading-relaxed text-ink">
                {project.extendedOverview}
              </p>
              <div className="border-l-2 border-accent bg-canvas px-4 py-3 font-mono text-xs text-ink-muted">
                Status: {project.statusNote}
              </div>
            </div>

            {/* Architecture Topology */}
            <div className="border-t border-hairline py-6">
              <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-accent">
                <Layers className="h-3.5 w-3.5" />
                <span>System Architecture & Interfaces</span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.architectureNodes.map((node, idx) => (
                  <div
                    key={node.label}
                    className="border border-hairline bg-canvas p-4"
                  >
                    <span className="font-mono text-[11px] text-accent">
                      Module 0{idx + 1}
                    </span>
                    <h4 className="mt-1 text-base font-medium text-ink">
                      {node.label}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                      {node.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Workflows */}
            <div className="border-t border-hairline py-6">
              <span className="mb-4 block font-mono text-xs uppercase tracking-[0.18em] text-accent">
                Functional Scope & Implementation
              </span>
              <ul className="space-y-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-relaxed text-ink-muted"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Stack & Actions */}
            <div className="border-t border-hairline pt-6">
              <span className="mb-3 block font-mono text-xs uppercase tracking-[0.18em] text-ink-subtle">
                Technology Stack
              </span>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-hairline bg-canvas px-3 py-1.5 font-mono text-xs text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-5">
                {project.externalUrl ? (
                  <a
                    href={project.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-canvas transition-colors hover:bg-ink"
                  >
                    <span>{project.externalLabel ?? 'Open Live Site'}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-ink-subtle">
                    Source architecture & walkthrough available on request.
                  </span>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="border border-hairline-strong px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

