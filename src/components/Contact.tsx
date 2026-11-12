import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  Github,
  Linkedin,
  Mail,
  Phone,
} from 'lucide-react';
import {
  PROFILE,
  RESUME_DOWNLOAD_FILENAME,
  RESUME_PATH,
} from '../data/portfolioData';
import {
  fadeUpVariants,
  staggerContainerVariants,
  staggerItemVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';
import { SectionHeader } from './SectionHeader';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${PROFILE.contact.email}`;
    }
  };

  return (
    <section
      id="contact"
      className="border-b border-hairline bg-surface/35 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1380px]">
        <SectionHeader
          index="07"
          eyebrow="Contact"
          titlePrefix="Let’s build something"
          titleItalic="dependable."
          subtitle="Open to conversations around Java Full Stack engineering, Spring Boot API architecture, and React.js product development."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Primary Direct Outreach */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="flex flex-col justify-between gap-8 border border-hairline bg-canvas p-7 sm:p-10 lg:col-span-7"
          >
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Direct Communication
              </span>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.025em] text-ink sm:text-4xl">
                Ready to contribute to{' '}
                <span className="font-serif font-normal italic text-accent">
                  scalable full-stack teams.
                </span>
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-muted sm:text-base">
                Reach out directly via email or phone, inspect my repositories on
                GitHub, connect on LinkedIn, or download a copy of my resume.
              </p>
            </div>

            {/* Email Copy & Send Row */}
            <div className="space-y-3 border-t border-hairline pt-6">
              <span className="block font-mono text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
                Email Address
              </span>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="break-all font-mono text-base text-ink transition-colors hover:text-accent sm:text-lg"
                >
                  {PROFILE.contact.email}
                </a>

                <div className="flex flex-wrap gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 border border-hairline-strong bg-surface px-4 py-2.5 font-mono text-xs uppercase tracking-[0.12em] text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-accent" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PROFILE.contact.email}`}
                    className="inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-canvas transition-colors hover:bg-ink"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Email Me</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Channels & Resume Download */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="flex flex-col justify-between gap-4 lg:col-span-5"
          >
            <motion.a
              variants={staggerItemVariants}
              href={PROFILE.contact.phoneHref}
              className="group flex items-center justify-between border border-hairline bg-canvas p-5 transition-colors hover:border-accent/60 hover:bg-surface"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-hairline text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    Phone
                  </span>
                  <span className="mt-0.5 block font-mono text-sm text-ink">
                    {PROFILE.contact.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </motion.a>

            <motion.a
              variants={staggerItemVariants}
              href={PROFILE.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-hairline bg-canvas p-5 transition-colors hover:border-accent/60 hover:bg-surface"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-hairline text-accent">
                  <Linkedin className="h-4 w-4" />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    LinkedIn
                  </span>
                  <span className="mt-0.5 block text-sm text-ink">
                    linkedin.com/in/saisreeandavarapu
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </motion.a>

            <motion.a
              variants={staggerItemVariants}
              href={PROFILE.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between border border-hairline bg-canvas p-5 transition-colors hover:border-accent/60 hover:bg-surface"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-hairline text-accent">
                  <Github className="h-4 w-4" />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-subtle">
                    GitHub
                  </span>
                  <span className="mt-0.5 block text-sm text-ink">
                    github.com/Saisreeandavarapu
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </motion.a>

            <motion.a
              variants={staggerItemVariants}
              href={RESUME_PATH}
              download={RESUME_DOWNLOAD_FILENAME}
              className="group flex items-center justify-between border border-accent/45 bg-accent/10 p-5 transition-colors hover:bg-accent hover:text-canvas"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 items-center justify-center border border-accent/40 text-accent transition-colors group-hover:border-canvas/30 group-hover:text-canvas">
                  <Download className="h-4 w-4" />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-accent transition-colors group-hover:text-canvas/80">
                    Curriculum Vitae
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold text-ink transition-colors group-hover:text-canvas">
                    Download Resume (PDF)
                  </span>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-canvas" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

