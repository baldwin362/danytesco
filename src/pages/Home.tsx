import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import ShinyText from '../ShinyText';

const services = [
  'You need a full stack application?',
  'you need a simple website that converts ?',
  'You need an AI automation workflow?',
];

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:py-24">
      {/* Hero */}
      <section className="rise-in">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
          Available for work
        </span>

        <h1 className="mt-7 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
          <ShinyText
            text="Dany Tesco"
            speed={3}
            delay={0.8}
            color="#d8d2f5"
            shineColor="#ffffff"
            spread={130}
            direction="left"
          />
        </h1>

        <p className="mt-5 text-2xl font-medium text-zinc-300 sm:text-3xl">
          My service is getting shit done
        </p>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
          I'm a software engineer with five years of experience programming in
          various languages. Ask me anything, I get it done.
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="mailto:hello@danytesco.dev"
            className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_-8px_rgba(124,92,255,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-400"
          >
            Start a project
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="mailto:hello@danytesco.dev"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-zinc-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
          >
            Say hello
          </a>
        </div>
      </section>

      {/* Principle */}
      <section className="mt-16 rise-in" style={{ animationDelay: '0.08s' }}>
        <div className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-r from-violet-500/[0.1] via-violet-500/[0.04] to-transparent p-7 sm:p-9">
          <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300/80">
            My principle
          </p>
          <p className="mt-3 text-xl font-medium leading-snug text-zinc-100 sm:text-2xl">
            if you're not happy with the results, you don't pay me that's it.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mt-16 rise-in" style={{ animationDelay: '0.16s' }}>
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
          What I take on
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {services.map((q) => (
            <div
              key={q}
              className="group flex flex-col justify-between rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/[0.04]"
            >
              <p className="text-lg font-medium leading-snug text-zinc-200">
                {q}
              </p>
              <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-violet-500/15 px-3 py-1.5 text-sm font-semibold text-violet-200 transition-colors group-hover:bg-violet-500/25 group-hover:text-white">
                <FiCheck className="h-4 w-4" />
                I'm in.
              </span>
            </div>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-2xl font-semibold tracking-tight text-zinc-100 sm:text-3xl">
            Just fucking name it: I'm in.
          </p>
          <a
            href="mailto:hello@danytesco.dev"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-400"
          >
            Name it
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
