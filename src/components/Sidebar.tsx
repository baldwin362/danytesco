import { FiHome, FiGrid, FiArrowUpRight } from 'react-icons/fi';
import ShinyText from '../ShinyText';

export type View = 'home' | 'skills';

const NAV: { id: View; label: string; icon: typeof FiHome }[] = [
  { id: 'home', label: 'Home', icon: FiHome },
  { id: 'skills', label: 'Skills', icon: FiGrid },
];

export default function Sidebar({
  view,
  onChange,
}: {
  view: View;
  onChange: (v: View) => void;
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 flex w-[260px] flex-col border-r border-white/[0.06] bg-ink-900/70 px-5 py-7 backdrop-blur-xl max-lg:hidden">
      {/* Brand */}
      <div className="flex items-center gap-3 px-1">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-violet-500/5 text-sm font-bold tracking-tight text-violet-100 ring-1 ring-white/10">
          DT
        </div>
        <div className="leading-tight">
          <div className="text-base font-semibold">
            <ShinyText
              text="Dany Tesco"
              speed={3}
              delay={1.2}
              color="#cfc8ee"
              shineColor="#ffffff"
              spread={120}
              direction="left"
            />
          </div>
          <div className="text-xs text-zinc-500">Software Engineer</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="mt-9 flex flex-col gap-1">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-600">
          Menu
        </div>
        {NAV.map(({ id, label, icon: Icon }) => {
          const active = view === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className={[
                'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200',
                active
                  ? 'bg-violet-500/[0.12] text-white'
                  : 'text-zinc-400 hover:bg-white/[0.04] hover:text-zinc-100',
              ].join(' ')}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full bg-violet-400" />
              )}
              <Icon
                className={[
                  'h-[18px] w-[18px] transition-colors',
                  active
                    ? 'text-violet-300'
                    : 'text-zinc-500 group-hover:text-zinc-300',
                ].join(' ')}
              />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Footer card */}
      <div className="mt-auto">
        <div className="rounded-2xl border border-white/[0.07] bg-gradient-to-br from-violet-500/[0.08] to-transparent p-4">
          <p className="text-sm font-semibold text-zinc-100">
            Got something to build?
          </p>
          <p className="mt-1 text-xs leading-relaxed text-zinc-500">
            Name it. I get it done.
          </p>
          <a
            href="mailto:hello@danytesco.dev"
            className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-violet-500/90 px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-violet-500"
          >
            Get in touch
            <FiArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
