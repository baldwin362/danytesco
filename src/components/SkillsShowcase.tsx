import { useState } from 'react';
import { skillSections } from '../data/skills';
import SkillBadge from './SkillBadge';
import { useReveal } from '../hooks/useReveal';

export default function SkillsShowcase() {
  const [active, setActive] = useState(0);
  const { ref, className } = useReveal<HTMLDivElement>();
  const section = skillSections[active];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div ref={ref} className={className}>
        <p className="font-mono text-sm tracking-wide text-brand-bright">
          Skills
        </p>
        <h2 className="glow-text mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
          Five years, the whole stack
        </h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-16">
          {/* Left vertical sub-nav */}
          <nav className="flex flex-col gap-1 lg:border-r lg:border-white/[0.07] lg:pr-6">
            {skillSections.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  className={[
                    'group relative flex items-center gap-3 rounded-lg px-3 py-3 text-left font-mono text-[15px] transition-colors',
                    isActive
                      ? 'text-white'
                      : 'text-slate-500 hover:text-slate-300',
                  ].join(' ')}
                >
                  <span
                    className={[
                      'h-2 w-2 shrink-0 rounded-full transition-all',
                      isActive
                        ? 'bg-[#4f8cff] shadow-[0_0_10px_2px_rgba(79,140,255,0.7)]'
                        : 'bg-slate-700 group-hover:bg-slate-500',
                    ].join(' ')}
                  />
                  {s.title}
                </button>
              );
            })}
          </nav>

          {/* Right panel */}
          <div className="min-h-[320px]">
            <p className="text-lg text-slate-400">{section.subtitle}</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {section.cards.map(({ card, wide }) => (
                <div
                  key={card.title}
                  className={[
                    'rounded-2xl border border-white/[0.08] bg-night-2/50 p-6 transition-colors hover:border-white/[0.14]',
                    wide ? 'sm:col-span-2' : '',
                  ].join(' ')}
                >
                  <h3 className="text-base font-semibold tracking-tight text-slate-100">
                    {card.title}
                  </h3>
                  {card.description ? (
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  ) : (
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {card.skills?.map((s) => (
                        <SkillBadge key={s.name} skill={s} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
