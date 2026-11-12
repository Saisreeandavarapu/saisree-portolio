import { ArrowUp } from 'lucide-react';
import { NAV_ITEMS, PROFILE } from '../data/portfolioData';
import { MonogramLogo } from './MonogramLogo';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="px-5 py-10 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1380px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3.5">
          <MonogramLogo size="sm" />
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              {PROFILE.name}
            </span>
            <span className="font-mono text-[11px] text-ink-subtle">
              © {new Date().getFullYear()} — {PROFILE.title}
            </span>
          </div>
        </div>

        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap items-center gap-x-5 gap-y-2"
        >
          {NAV_ITEMS.filter((item) => item.id !== 'hero').map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex w-fit items-center gap-2 border border-hairline bg-surface px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted transition-colors hover:border-accent hover:text-accent"
        >
          <span>Top</span>
          <ArrowUp className="h-3.5 w-3.5" />
        </button>
      </div>
    </footer>
  );
}

