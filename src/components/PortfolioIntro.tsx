import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { EDITORIAL_EASE } from '../utils/motion';
import { MonogramLogo } from './MonogramLogo';

interface PortfolioIntroProps {
  onComplete: () => void;
}

const FULL_NAME = 'SAISREE ANDAVARAPU';
const DESIGNATION = 'JAVA FULL STACK DEVELOPER';
const TAGLINE = 'Building Scalable • Secure • User-Centric Applications';
const MOTTO = 'Build. Innovate. Create.';

export function PortfolioIntro({ onComplete }: PortfolioIntroProps) {
  const prefersReduced = useReducedMotion();
  const [visible, setVisible] = useState(!prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      setVisible(false);
      onComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    const finishTimer = window.setTimeout(() => {
      setVisible(false);
      onComplete();
    }, 2650);

    return () => {
      window.clearTimeout(finishTimer);
      document.body.style.overflow = '';
    };
  }, [onComplete, prefersReduced]);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = '';
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="portfolio-cinematic-intro"
          initial={{ y: 0, opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.72, ease: EDITORIAL_EASE },
          }}
          className="fixed inset-0 z-50 flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-[#070708] px-6 py-10 text-ink sm:px-10 sm:py-12"
          role="presentation"
          aria-hidden="true"
        >
          {/* Subtle atmospheric radial lighting */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(212,250,104,0.08),rgba(18,18,22,0.4)_42%,rgba(7,7,8,1)_78%)]"
          />

          {/* Top subtle technical index */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: EDITORIAL_EASE }}
            className="relative z-10 flex w-full max-w-5xl items-center justify-between font-mono text-[10px] uppercase tracking-[0.26em] text-ink-subtle sm:text-[11px]"
          >
            <span>Portfolio // 2026</span>
            <span className="text-[#D4FA68]/85">{MOTTO}</span>
          </motion.div>

          {/* Centerpiece Choreography */}
          <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
            {/* Step 2: Subtle glowing center line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.65, delay: 0.15, ease: EDITORIAL_EASE }}
              className="mb-8 h-[1px] w-40 bg-gradient-to-r from-transparent via-[#D4FA68] to-transparent shadow-[0_0_16px_rgba(212,250,104,0.65)] sm:w-56"
            />

            {/* Step 3 & 4: Large centered A.S monogram with blur + scale + opacity reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.84, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.78, delay: 0.4, ease: EDITORIAL_EASE }}
              className="mb-7"
            >
              <MonogramLogo size="lg" animated />
            </motion.div>

            {/* Step 5: Letter-by-letter reveal of SAISREE ANDAVARAPU */}
            <h2
              aria-label={FULL_NAME}
              className="mb-3 flex flex-wrap justify-center gap-x-[0.36em] text-2xl font-semibold uppercase tracking-[0.2em] text-ink sm:text-4xl sm:tracking-[0.26em] md:text-[2.75rem]"
            >
              {FULL_NAME.split(' ').map((word, wordIdx) => (
                <span key={word} className="inline-flex">
                  {word.split('').map((char, charIdx) => {
                    const index = wordIdx * 8 + charIdx;
                    return (
                      <motion.span
                        key={`${word}-${charIdx}`}
                        initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{
                          duration: 0.45,
                          delay: 0.82 + index * 0.028,
                          ease: EDITORIAL_EASE,
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </span>
              ))}
            </h2>

            {/* Step 6: Professional designation */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.38, ease: EDITORIAL_EASE }}
              className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.28em] text-[#D4FA68] sm:text-sm"
            >
              {DESIGNATION}
            </motion.p>

            {/* Step 7: Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 1.66, ease: EDITORIAL_EASE }}
              className="max-w-xl text-xs tracking-[0.08em] text-ink-muted sm:text-sm"
            >
              {TAGLINE}
            </motion.p>
          </div>

          {/* Step 8: Subtle animated loading/progress line */}
          <div className="relative z-10 w-full max-w-xs sm:max-w-sm">
            <div className="h-[1.5px] w-full overflow-hidden bg-white/10">
              <motion.div
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.35, delay: 0.2, ease: 'easeInOut' }}
                className="h-full w-full bg-[#D4FA68] shadow-[0_0_12px_rgba(212,250,104,0.75)]"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

