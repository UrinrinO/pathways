import { Reveal } from "@/components/reveal";
import { Counter } from "@/components/motion/counter";
import { Container, Label } from "@/components/sample-b/ui";

const cards = [
  {
    tag: "If this sounds like you",
    title: "Creative & curious",
    body: "You already make things — designs, music, films, side projects, ideas in notebooks. You want to understand where technology fits and how far it could take you.",
  },
  {
    tag: "Or maybe",
    title: "Some skills, unsure of next",
    body: "You’ve picked up real skills but the next step feels foggy. You need direction, honest guidance and people who can point you toward the right opportunities.",
  },
];

const metrics = [
  { value: 30, suffix: "", label: "young people", note: "in the first cohort" },
  { value: 6, suffix: "", label: "core sessions", note: "collaborative, monthly" },
  { value: 12, suffix: "", label: "months", note: "of sessions + support" },
  { value: 100, suffix: "%", label: "free to join", note: "no cost, ever" },
];

export function Positioning() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Label>Who Pathways is built for</Label>
          </Reveal>
          <Reveal delay={90}>
            <h2 className="font-display mt-6 text-5xl leading-[1.02] md:text-7xl">
              Built for young people{" "}
              <span className="italic text-clay">beyond</span> the first idea.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              You don’t need a tech background, a finished plan or a portfolio.
              You just need curiosity and something you want to move forward.
            </p>
          </Reveal>
        </div>

        {/* Two positioning cards — staggered in */}
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 130}>
              <div className="group flex h-full flex-col rounded-[28px] border border-line bg-paper-2 p-9 transition-colors hover:bg-paper-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-clay">
                  {card.tag}
                </p>
                <h3 className="font-display mt-4 text-4xl leading-tight">
                  {card.title}
                </h3>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  {card.body}
                </p>
                <span
                  aria-hidden
                  className="mt-8 text-2xl text-ink/25 transition-all duration-200 group-hover:translate-x-1 group-hover:text-clay"
                >
                  →
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Animated result-style numbers — the motion payoff */}
        <div className="mt-16 grid gap-x-6 gap-y-12 border-t border-line pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 110}>
              <div>
                <Counter
                  value={m.value}
                  suffix={m.suffix}
                  className="font-display block text-6xl leading-none text-ink md:text-7xl"
                />
                <div className="mt-3 text-base font-medium text-ink">
                  {m.label}
                </div>
                <p className="mt-1 text-sm text-ink-mute">{m.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
