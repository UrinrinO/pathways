type Blob = { c: string; pos: string; size: string };

/**
 * Decorative background colour splashes — blends of the brand palette only
 * (Electric Lime + Warm Orange, occasional Soft Grey). The wrapper clips its
 * own blobs but is a sibling of the content, so it never breaks `sticky`
 * descendants or cause horizontal overflow.
 */
const VARIANTS: Record<string, Blob[]> = {
  a: [
    { c: "bg-lime/20", pos: "-left-24 top-12", size: "h-[26rem] w-[26rem]" },
    { c: "bg-orange/15", pos: "-right-16 bottom-0", size: "h-[24rem] w-[24rem]" },
  ],
  b: [
    { c: "bg-orange/15", pos: "right-0 -top-10", size: "h-[24rem] w-[24rem]" },
    { c: "bg-lime/15", pos: "left-10 bottom-8", size: "h-[22rem] w-[22rem]" },
    { c: "bg-soft-grey/25", pos: "left-1/2 top-1/3", size: "h-[18rem] w-[18rem]" },
  ],
  c: [
    { c: "bg-lime/15", pos: "right-1/4 -top-16", size: "h-[28rem] w-[28rem]" },
    { c: "bg-orange/12", pos: "-left-20 bottom-0", size: "h-[22rem] w-[22rem]" },
  ],
  d: [
    { c: "bg-orange/18", pos: "-left-16 top-1/4", size: "h-[24rem] w-[24rem]" },
    { c: "bg-lime/16", pos: "right-0 bottom-1/4", size: "h-[26rem] w-[26rem]" },
  ],
};

export function Splashes({ variant = "a" }: { variant?: keyof typeof VARIANTS }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {VARIANTS[variant].map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-[130px] ${b.c} ${b.pos} ${b.size}`}
        />
      ))}
    </div>
  );
}
