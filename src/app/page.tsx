import Link from "next/link";

const samples = [
  {
    href: "/sample-a",
    tag: "Light",
    title: "Light theme",
    desc: "Bright, clean and open — a warm neutral base with bold type and a lime accent.",
    accent: "bg-lime text-lime-ink",
  },
  {
    href: "/sample-b",
    tag: "Dark",
    title: "Dark theme",
    desc: "Bold and modern — a deep midnight base with glowing lime accents.",
    accent: "bg-ink text-snow",
  },
];

export default function Chooser() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-clay">
        Pathways
      </p>
      <h1 className="font-display max-w-2xl text-5xl leading-[1.03] md:text-6xl">
        Two looks. Pick the one that feels right.
      </h1>
      <p className="mt-5 max-w-xl text-lg text-ink-soft">
        The same website in two moods — light and dark. Open each and scroll.
      </p>

      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {samples.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group flex flex-col rounded-3xl border border-line bg-paper-2 p-8 transition-colors hover:bg-paper-3"
          >
            <span
              className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-medium ${s.accent}`}
            >
              {s.tag}
            </span>
            <h2 className="font-display mt-5 text-4xl">{s.title}</h2>
            <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{s.desc}</p>
            <span className="mt-6 inline-flex items-center gap-1.5 font-medium text-ink">
              View
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
