import { useReveal } from '../hooks/useReveal';
import { iconRegistry } from './iconRegistry';

const WALL: { name: string; key: string }[] = [
  { name: 'TypeScript', key: 'SiTypescript' },
  { name: 'React', key: 'SiReact' },
  { name: 'Python', key: 'SiPython' },
  { name: 'FastAPI', key: 'SiFastapi' },
  { name: 'PostgreSQL', key: 'SiPostgresql' },
  { name: 'Docker', key: 'SiDocker' },
  { name: 'Kubernetes', key: 'SiKubernetes' },
  { name: 'AWS', key: 'FaAws' },
  { name: 'PyTorch', key: 'SiPytorch' },
  { name: 'TensorFlow', key: 'SiTensorflow' },
  { name: 'LangChain', key: 'SiLangchain' },
  { name: 'Grafana', key: 'SiGrafana' },
  { name: 'GitHub Actions', key: 'SiGithubactions' },
  { name: 'Tailwind', key: 'SiTailwindcss' },
  { name: 'Hugging Face', key: 'SiHuggingface' },
  { name: 'Pandas', key: 'SiPandas' },
];

export default function TechWall() {
  const { ref, className } = useReveal<HTMLDivElement>();

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-28">
      <div ref={ref} className={className}>
        <h2 className="glow-text-soft max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          The toolkit behind every build, from quick sites to full platforms
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
          {WALL.map(({ name, key }) => {
            const Glyph = iconRegistry[key];
            return (
              <div
                key={name}
                className="flex items-center justify-center gap-2.5 text-slate-200 opacity-80 transition-all duration-300 hover:text-white hover:opacity-100"
              >
                {Glyph && <Glyph className="h-7 w-7 shrink-0" />}
                <span className="text-base font-medium tracking-tight">
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
