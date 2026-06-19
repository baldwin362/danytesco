import { FiArrowUpRight } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';

const SERVICES = [
  {
    n: '01',
    q: 'You need a full stack application?',
    blurb:
      'Frontend, backend, database, deploy. The whole thing wired together and running in production.',
  },
  {
    n: '02',
    q: 'you need a simple website that converts ?',
    blurb:
      'Fast, sharp, built to turn visitors into customers. No bloat, no excuses.',
  },
  {
    n: '03',
    q: 'You need an AI automation workflow?',
    blurb:
      'Agents and pipelines that take the busywork off your plate and keep it off.',
  },
];

export default function Services() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div ref={ref} className={className}>
        <p className="font-mono text-sm tracking-wide text-brand-bright">
          What I take on
        </p>
        <h2 className="glow-text mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Just fucking name it.
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Whatever the shape of the work, the answer is the same. Here is what
          comes across my desk most.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-night-2/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#4f8cff]/35"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#356cff]/0 blur-3xl transition-colors duration-300 group-hover:bg-[#356cff]/20" />
              <span className="font-mono text-sm text-slate-500">{s.n}</span>
              <h3 className="mt-5 text-xl font-semibold leading-snug text-slate-100">
                {s.q}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                {s.blurb}
              </p>
              <span className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-[#356cff]/15 px-3.5 py-2 font-mono text-sm font-semibold text-[#a9c6ff] transition-colors group-hover:bg-[#356cff]/25 group-hover:text-white">
                I'm in.
              </span>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-6 flex flex-col items-start gap-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-r from-[#356cff]/[0.12] via-[#356cff]/[0.04] to-transparent p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <p className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">
            Just fucking name it: I'm in.
          </p>
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#e7f0ff] px-6 py-3 font-mono text-sm font-semibold text-[#0a1020] transition-colors hover:bg-white"
          >
            Name it
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
