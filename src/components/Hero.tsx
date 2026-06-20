import { FiArrowRight } from 'react-icons/fi';
import LifecycleDiagram from './LifecycleDiagram';

export default function Hero() {
  return (
    <section id="top" className="relative">
      {/* Ambient hero glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center overflow-hidden">
        <div className="animate-glow h-[460px] w-[820px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(53,108,255,0.35),transparent_62%)] blur-[40px]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-20 text-center sm:pt-28">
        <p className="font-mono text-sm tracking-wide text-slate-400">
          Software engineer for hire
        </p>

        <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
          <span className="glow-text">I make your projects</span>
          <br />
          <span className="glow-text">come to life</span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl">
          I'm a software engineer with five years of experience programming in
          various languages. Ask me anything, I get it done.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#e7f0ff] px-6 py-3 font-mono text-sm font-semibold text-[#0a1020] transition-colors hover:bg-white"
          >
            Start a project
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-mono text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            See what I do
          </a>
        </div>
      </div>

      {/* Lifecycle diagram */}
      <div id="process" className="mt-16 scroll-mt-28 px-4 sm:mt-20">
        <LifecycleDiagram />
      </div>
    </section>
  );
}
