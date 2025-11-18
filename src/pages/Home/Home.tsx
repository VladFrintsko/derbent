import logo from '../../assets/logo.svg';

const resources = [
  { label: 'React docs', href: 'https://react.dev' },
  { label: 'TypeScript handbook', href: 'https://www.typescriptlang.org/docs/' },
  { label: 'TailwindCSS', href: 'https://tailwindcss.com/docs' }
];

export function HomePage() {
  return (
    <section className="flex flex-1 flex-col items-center gap-10 text-center">
      <img src={logo} alt="React logo" className="h-28 w-28 animate-spin" />
      <div className="flex flex-col gap-4">
        <p className="text-sm uppercase text-slate-400 tracking-[0.3em]">
          Modular React starter
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          TypeScript + Tailwind workflow out of the box
        </h1>
        <p className="text-base text-slate-300 max-w-2xl">
          Organize features by modules, keep UI lean with reusable components, and
          ship faster with a typed design system.
        </p>
      </div>
      <div className="grid w-full gap-4 md:grid-cols-3">
        {resources.map(resource => (
          <a
            key={resource.href}
            href={resource.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-6 transition hover:border-slate-500 hover:bg-slate-900"
          >
            <p className="text-lg font-medium text-white">{resource.label}</p>
            <p className="text-sm text-slate-400">Open resource</p>
          </a>
        ))}
      </div>
    </section>
  );
}

