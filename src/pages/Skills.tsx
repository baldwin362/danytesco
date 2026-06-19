import { skillSections } from '../data/skills';
import type { SkillCard as SkillCardType } from '../data/skills';
import SkillBadge from '../components/SkillBadge';

function SkillCard({ card }: { card: SkillCardType }) {
  return (
    <div className="h-full rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-colors duration-200 hover:border-white/[0.12] sm:p-7">
      <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
        {card.title}
      </h3>

      {card.description ? (
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-400">
          {card.description}
        </p>
      ) : (
        <div className="mt-5 flex flex-wrap gap-2.5">
          {card.skills?.map((s) => (
            <SkillBadge key={s.name} skill={s} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-10 lg:py-24">
      <div className="space-y-20">
        {skillSections.map((section, i) => (
          <section
            key={section.title}
            className="rise-in"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <header className="mb-8">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {section.title}
              </h2>
              <p className="mt-3 text-lg text-zinc-400">{section.subtitle}</p>
              <div className="mt-4 h-[3px] w-24 rounded-full bg-gradient-to-r from-violet-400 to-violet-400/0" />
            </header>

            <div className="grid gap-5 md:grid-cols-2">
              {section.cards.map(({ card, wide }) => (
                <div
                  key={card.title}
                  className={wide ? 'md:col-span-2' : ''}
                >
                  <SkillCard card={card} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
