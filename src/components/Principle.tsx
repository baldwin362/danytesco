import { useReveal } from '../hooks/useReveal';

export default function Principle() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section id="principle" className="relative overflow-hidden border-y border-white/[0.07]">
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <div className="animate-glow h-[340px] w-[680px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(53,108,255,0.22),transparent_65%)] blur-[30px]" />
      </div>

      <div ref={ref} className={`mx-auto max-w-4xl px-6 py-28 text-center ${className}`}>
        <p className="font-mono text-sm tracking-wide text-brand-bright">
          My principle
        </p>
        <p className="glow-text mt-7 text-3xl font-semibold leading-[1.18] tracking-tight sm:text-5xl">
          if you're not happy with the results, you don't pay me that's it.
        </p>
      </div>
    </section>
  );
}
