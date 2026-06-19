import { useEffect, useState } from 'react';
import { FiArrowUpRight, FiMenu, FiX } from 'react-icons/fi';
import ShinyText from '../ShinyText';

const LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Principle', href: '#principle' },
];

function Mark() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden>
      <path
        d="M5 3.5 13 8.2 5 12.9V3.5Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M21 22.5 13 17.8 21 13.1v9.4Z"
        fill="currentColor"
        opacity="0.6"
      />
      <path d="M13 8.2 21 3.5v9.6L13 8.2Z" fill="currentColor" opacity="0.8" />
      <path
        d="M13 17.8 5 22.5v-9.6l8 4.9Z"
        fill="currentColor"
        opacity="0.45"
      />
    </svg>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-40 bg-brand text-white">
        <a
          href="#contact"
          className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2.5 text-center text-[13px] sm:text-sm"
        >
          <span className="font-medium">
            Booking new projects for this quarter
          </span>
          <span className="hidden items-center gap-1.5 font-mono text-[13px] font-medium uppercase tracking-wide sm:inline-flex">
            See what I build
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </a>
      </div>

      {/* Nav */}
      <header
        className={[
          'sticky top-0 z-40 transition-colors duration-300',
          scrolled ? 'bg-night/85 backdrop-blur-xl' : 'bg-transparent',
        ].join(' ')}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-night-2/40 px-4 py-2.5 backdrop-blur-md sm:px-5">
            {/* Brand */}
            <a href="#top" className="flex items-center gap-2.5 text-white">
              <Mark />
              <span className="text-lg font-semibold tracking-tight">
                <ShinyText
                  text="Dany Tesco"
                  speed={3.4}
                  delay={1.4}
                  color="#dbe6ff"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                />
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden items-center gap-1 lg:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3.5 py-2 font-mono text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-4 py-2 font-mono text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
              >
                Get in touch
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-[#e7f0ff] px-4 py-2 font-mono text-sm font-semibold text-[#0a1020] transition-colors hover:bg-white"
              >
                Start a project
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-slate-200 lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu */}
          {open && (
            <div className="mt-2 rounded-2xl border border-white/[0.08] bg-night-2/95 p-3 backdrop-blur-xl lg:hidden">
              <nav className="flex flex-col">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 font-mono text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
              <div className="mt-2 flex flex-col gap-2 border-t border-white/[0.07] pt-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/15 px-4 py-2.5 text-center font-mono text-sm text-slate-200"
                >
                  Get in touch
                </a>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-[#e7f0ff] px-4 py-2.5 text-center font-mono text-sm font-semibold text-[#0a1020]"
                >
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
