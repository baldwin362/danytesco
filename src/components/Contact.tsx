import { FiArrowUpRight, FiMail } from 'react-icons/fi';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="animate-glow h-[420px] w-[760px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(53,108,255,0.28),transparent_64%)] blur-[40px]" />
      </div>

      <div
        ref={ref}
        className={`mx-auto max-w-3xl rounded-3xl border border-white/[0.09] bg-night-2/60 px-8 py-14 text-center backdrop-blur-sm sm:px-14 ${className}`}
      >
        <p className="font-mono text-sm tracking-wide text-brand-bright">
          Get in touch
        </p>
        <h2 className="glow-text mt-5 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Got something to build?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          Tell me what you need. If you're not happy with the results, you
          don't pay me that's it.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@danytesco.dev"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#e7f0ff] px-6 py-3 font-mono text-sm font-semibold text-[#0a1020] transition-colors hover:bg-white"
          >
            <FiMail className="h-4 w-4" />
            hello@danytesco.dev
          </a>
          <a
            href="mailto:hello@danytesco.dev?subject=Project"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-mono text-sm font-medium text-slate-200 transition-colors hover:border-white/30 hover:text-white"
          >
            Start a project
            <FiArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
