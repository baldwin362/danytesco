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
    <span className="group inline-flex items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3.5 py-2 text-[15px] font-medium text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#4f8cff]/40 hover:bg-[#356cff]/[0.08] hover:text-white">
      {Glyph ? (
        <Glyph className="h-[18px] w-[18px] shrink-0 text-[#a9c6ff] transition-colors group-hover:text-white" />
      ) : (
        <span className="grid h-[18px] min-w-[18px] place-items-center rounded-[5px] bg-[#356cff]/20 px-1 font-mono text-[10px] font-bold leading-none text-[#bcd6ff] transition-colors group-hover:bg-[#356cff]/35">
          {badgeText}
        </span>
      )}
      {skill.name}
    </span>
  );
}
