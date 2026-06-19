import { useState } from 'react';
import { FiHome, FiGrid } from 'react-icons/fi';
import Sidebar, { type View } from './components/Sidebar';
import Home from './pages/Home';
import Skills from './pages/Skills';

export default function App() {
  const [view, setView] = useState<View>('home');

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-ink-950">
      {/* Ambient aurora background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="animate-aurora absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px]" />
        <div
          className="animate-aurora absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-fuchsia-600/15 blur-[130px]"
          style={{ animationDelay: '-6s' }}
        />
        <div
          className="animate-aurora absolute bottom-[-10%] left-[-5%] h-[460px] w-[460px] rounded-full bg-indigo-600/15 blur-[140px]"
          style={{ animationDelay: '-11s' }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
      </div>

      <Sidebar view={view} onChange={setView} />

      {/* Mobile nav */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/[0.06] bg-ink-900/80 px-5 py-3 backdrop-blur-xl lg:hidden">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-violet-500/30 to-violet-500/5 text-xs font-bold text-violet-100 ring-1 ring-white/10">
            DT
          </div>
          <span className="text-sm font-semibold">Dany Tesco</span>
        </div>
        <nav className="flex items-center gap-1">
          {([
            { id: 'home', label: 'Home', icon: FiHome },
            { id: 'skills', label: 'Skills', icon: FiGrid },
          ] as const).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setView(id)}
              className={[
                'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
                view === id
                  ? 'bg-violet-500/15 text-white'
                  : 'text-zinc-400 hover:text-zinc-100',
              ].join(' ')}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      <main className="lg:pl-[260px]">
        {view === 'home' ? <Home /> : <Skills />}
      </main>
    </div>
  );
}
