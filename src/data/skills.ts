// Skill data drives the Skills page. Each leaf either renders a brand glyph
// (from react-icons) or a short letter badge, mirroring the reference layout.

export type SkillIcon =
  | { si: string } // react-icons/si export name
  | { fa: string } // react-icons/fa export name
  | { badge: string }; // short text badge, e.g. "S3"

export interface Skill {
  name: string;
  icon: SkillIcon;
}

export interface SkillCard {
  title: string;
  // A card either lists skills or carries a single descriptive line.
  description?: string;
  skills?: Skill[];
}

export interface SkillSection {
  title: string;
  subtitle: string;
  // Cards are laid out in a responsive grid; `wide` cards span both columns.
  cards: { card: SkillCard; wide?: boolean }[];
}

export const skillSections: SkillSection[] = [
  {
    title: 'Software Engineering',
    subtitle: 'From pixel to pipeline, the whole stack.',
    cards: [
      {
        card: {
          title: 'Web Development',
          skills: [
            { name: 'TypeScript', icon: { si: 'SiTypescript' } },
            { name: 'React', icon: { si: 'SiReact' } },
            { name: 'Tailwind CSS', icon: { si: 'SiTailwindcss' } },
            { name: 'TanStack Query', icon: { si: 'SiReactquery' } },
            { name: 'Nginx', icon: { si: 'SiNginx' } },
          ],
        },
      },
      {
        card: {
          title: 'Back-end Development',
          skills: [
            { name: 'Python', icon: { si: 'SiPython' } },
            { name: 'FastAPI', icon: { si: 'SiFastapi' } },
            { name: 'Celery', icon: { si: 'SiCelery' } },
            { name: 'Pydantic', icon: { si: 'SiPydantic' } },
          ],
        },
      },
      {
        card: {
          title: 'Database Management',
          skills: [
            { name: 'PostgreSQL', icon: { si: 'SiPostgresql' } },
            { name: 'Amazon S3', icon: { badge: 'S3' } },
          ],
        },
      },
      {
        card: {
          title: 'Cybersecurity',
          description:
            'A security-first mindset baked into every layer of the stack.',
        },
      },
      {
        wide: true,
        card: {
          title: 'DevOps',
          skills: [
            { name: 'GitLab CI', icon: { si: 'SiGitlab' } },
            { name: 'GitHub Actions', icon: { si: 'SiGithubactions' } },
            { name: 'Docker', icon: { si: 'SiDocker' } },
            { name: 'Kubernetes', icon: { si: 'SiKubernetes' } },
            { name: 'Grafana', icon: { si: 'SiGrafana' } },
            { name: 'Git', icon: { si: 'SiGit' } },
            { name: 'Nginx', icon: { si: 'SiNginx' } },
            { name: 'AWS', icon: { fa: 'FaAws' } },
            { name: 'Railway', icon: { si: 'SiRailway' } },
            { name: 'Render', icon: { si: 'SiRender' } },
          ],
        },
      },
    ],
  },
  {
    title: 'Machine & Deep Learning',
    subtitle: 'Teaching machines to see, predict and learn.',
    cards: [
      {
        wide: true,
        card: {
          title: 'Frameworks & libraries',
          skills: [
            { name: 'PyTorch', icon: { si: 'SiPytorch' } },
            { name: 'TensorFlow', icon: { si: 'SiTensorflow' } },
            { name: 'Keras', icon: { si: 'SiKeras' } },
            { name: 'scikit-learn', icon: { si: 'SiScikitlearn' } },
            { name: 'NumPy', icon: { si: 'SiNumpy' } },
            { name: 'Pandas', icon: { si: 'SiPandas' } },
            { name: 'Hugging Face', icon: { si: 'SiHuggingface' } },
          ],
        },
      },
    ],
  },
  {
    title: 'Agentic AI',
    subtitle: 'Building autonomous, tool-using AI systems.',
    cards: [
      {
        wide: true,
        card: {
          title: 'Agent stack',
          skills: [
            { name: 'LangChain', icon: { si: 'SiLangchain' } },
            { name: 'LlamaIndex', icon: { badge: 'LI' } },
            { name: 'Pinecone', icon: { badge: 'PC' } },
            { name: 'n8n', icon: { si: 'SiN8N' } },
          ],
        },
      },
    ],
  },
];
