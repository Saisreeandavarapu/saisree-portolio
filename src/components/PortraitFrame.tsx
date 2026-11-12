import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { imageCurtainVariants } from '../utils/motion';

interface PortraitFrameProps {
  src: string;
  alt: string;
  caption: string;
  aspectClass?: string;
  objectPositionClass?: string;
  delay?: number;
  immediate?: boolean;
  badgeText?: string;
}

export function PortraitFrame({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/5]',
  objectPositionClass = 'object-top',
  delay = 0.08,
  immediate = false,
  badgeText,
}: PortraitFrameProps) {
  const frameRef = useRef<HTMLElement>(null);
  const isInView = useInView(frameRef, { once: true, amount: 0.05 });
  const shouldShow = immediate || isInView;

  return (
    <figure ref={frameRef} className="group relative">
      <div className="relative overflow-hidden border border-hairline bg-surface">
        {/* Corner architectural tick marks */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-2.5 top-2.5 z-10 h-3 w-3 border-l border-t border-accent/60 transition-transform duration-500 ease-editorial group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2.5 top-2.5 z-10 h-3 w-3 border-r border-t border-accent/60 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2.5 left-2.5 z-10 h-3 w-3 border-b border-l border-accent/60 transition-transform duration-500 ease-editorial group-hover:-translate-x-0.5 group-hover:translate-y-0.5"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2.5 right-2.5 z-10 h-3 w-3 border-b border-r border-accent/60 transition-transform duration-500 ease-editorial group-hover:translate-x-0.5 group-hover:translate-y-0.5"
        />

        <motion.div
          variants={imageCurtainVariants}
          custom={delay}
          initial="hidden"
          animate={shouldShow ? 'visible' : 'hidden'}
          className={`w-full overflow-hidden ${aspectClass}`}
        >
          <img
            src={src}
            alt={alt}
            loading="eager"
            decoding="async"
            className={`h-full w-full object-cover ${objectPositionClass} transition-transform duration-700 ease-editorial group-hover:scale-[1.03]`}
          />
        </motion.div>
      </div>

      <figcaption className="mt-3 flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
        <span className="truncate">{caption}</span>
        {badgeText && (
          <span className="shrink-0 text-accent">{badgeText}</span>
        )}
      </figcaption>
    </figure>
  );
}
