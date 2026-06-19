import type { Skill } from '../data/skills';
import { iconRegistry } from './iconRegistry';

function resolveGlyph(icon: Skill['icon']) {
  if ('si' in icon) return iconRegistry[icon.si];
  if ('fa' in icon) return iconRegistry[icon.fa];
  return undefined;
}

export default function SkillBadge({ skill }: { skill: Skill }) {
  const Glyph = resolveGlyph(skill.icon);
  const badgeText = 'badge' in skill.icon ? skill.icon.badge : undefined;

  return (
    <span className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-3.5 py-2 text-[15px] font-medium text-zinc-200 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-violet-400/[0.06] hover:text-white">
      {Glyph ? (
        <Glyph className="h-[18px] w-[18px] shrink-0 text-violet-200/90 transition-colors group-hover:text-violet-100" />
      ) : (
        <span className="grid h-[18px] min-w-[18px] place-items-center rounded-[5px] bg-violet-400/15 px-1 text-[10px] font-bold leading-none text-violet-100 transition-colors group-hover:bg-violet-400/25">
          {badgeText}
        </span>
      )}
      {skill.name}
    </span>
  );
}
