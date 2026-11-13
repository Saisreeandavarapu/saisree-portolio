import { motion } from 'framer-motion';
import { EDITORIAL_EASE } from '../utils/motion';

interface MonogramLogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  className?: string;
}

const SIZE_CLASSES = {
  sm: 'h-9 w-9 text-base',
  md: 'h-11 w-11 text-lg',
  lg: 'h-24 w-28 sm:h-28 sm:w-32 text-5xl sm:text-6xl',
} as const;

export function MonogramLogo({
  size = 'sm',
  animated = false,
  className = '',
}: MonogramLogoProps) {
  const isLarge = size === 'lg';

  return (
    <div
      className={`relative inline-flex select-none items-center justify-center ${
        isLarge
          ? ''
          : 'border border-hairline bg-surface transition-colors duration-300 group-hover:border-[#D4A373]/70'
      } ${SIZE_CLASSES[size]} ${className}`}
      aria-label="A.S Monogram"
    >
      {isLarge && (
        <motion.span
          aria-hidden="true"
          initial={animated ? { opacity: 0, scale: 0.7 } : false}
          animate={animated ? { opacity: 1, scale: 1 } : undefined}
          transition={{ duration: 0.9, delay: 0.35, ease: EDITORIAL_EASE }}
          className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#D4A373]/15 blur-2xl"
        />
      )}

      <span
        className={`inline-flex items-baseline font-serif italic leading-none tracking-[-0.04em] text-ink ${
          isLarge ? 'drop-shadow-[0_0_24px_rgba(212,163,115,0.25)]' : ''
        }`}
      >
        <span>A</span>
        <span
          className={`mx-[0.06em] inline-block rounded-full bg-[#D4A373] ${
            isLarge
              ? 'h-2 w-2 shadow-[0_0_14px_rgba(212,163,115,0.85)] sm:h-2.5 sm:w-2.5'
              : 'h-1 w-1'
          }`}
        />
        <span>S</span>
      </span>
    </div>
  );
}

