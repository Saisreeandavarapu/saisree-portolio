import { motion } from 'framer-motion';
import {
  fadeUpVariants,
  hairlineRevealVariants,
  VIEWPORT_CONFIG,
} from '../utils/motion';

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  titlePrefix: string;
  titleItalic: string;
  subtitle?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  titlePrefix,
  titleItalic,
  subtitle,
}: SectionHeaderProps) {
  return (
    <div className="mb-12 sm:mb-16">
      <div className="mb-5 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.22em] text-accent">
          {index}
        </span>
        <motion.span
          variants={hairlineRevealVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="h-[1px] flex-1 bg-hairline"
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted">
          {eyebrow}
        </span>
      </div>

      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <motion.h2
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_CONFIG}
          className="text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]"
        >
          {titlePrefix}{' '}
          <span className="font-serif font-normal italic text-accent">
            {titleItalic}
          </span>
        </motion.h2>

        {subtitle && (
          <motion.p
            variants={fadeUpVariants}
            custom={0.12}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_CONFIG}
            className="max-w-md text-sm leading-relaxed text-ink-muted sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

