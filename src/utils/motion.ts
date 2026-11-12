import type { Transition, Variants } from 'framer-motion';

export const EDITORIAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const editorialTransition: Transition = {
  duration: 0.75,
  ease: EDITORIAL_EASE,
};

export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.05,
} as const;

export const revealLineVariants: Variants = {
  hidden: {
    y: '105%',
    opacity: 0,
  },
  visible: (delay = 0) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const hairlineRevealVariants: Variants = {
  hidden: {
    scaleX: 0,
    originX: 0,
  },
  visible: (delay = 0) => ({
    scaleX: 1,
    transition: {
      duration: 0.85,
      delay,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const imageCurtainVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 1.04,
  },
  visible: (delay = 0.08) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      delay,
      ease: EDITORIAL_EASE,
    },
  }),
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EDITORIAL_EASE,
    },
  },
};

