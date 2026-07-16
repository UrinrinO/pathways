/**
 * Local content for the Pathways homepage.
 *
 * These shapes intentionally mirror what the Sanity schema will return, so
 * swapping `import { ... } from "@/lib/content"` for a Sanity query later is a
 * drop-in change — the components below never need to know where the data came
 * from.
 */

export const nav = [
  { label: "About", href: "/about" },
  { label: "Programme", href: "/programme" },
  { label: "Sessions", href: "/sessions" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Stories", href: "/stories" },
  { label: "Partners", href: "/partners" },
] as const;

export const announcement =
  "Pathways launches August 2026 — register your interest for the first cohort.";

export const pillars = [
  {
    n: "01",
    title: "Connect",
    body: "Understand how technology fits into what you already enjoy, create or want to build.",
  },
  {
    n: "02",
    title: "Build",
    body: "Develop stronger digital knowledge, practical skills and a clearer sense of your niche.",
  },
  {
    n: "03",
    title: "Progress",
    body: "Access guidance, mentors, opportunities and continued support to make your next move.",
  },
] as const;

export const journey = [
  {
    n: "01",
    title: "Discover",
    body: "Explore your interests, current skills, strengths and possible directions.",
  },
  {
    n: "02",
    title: "Build",
    body: "Develop digital understanding, practical knowledge and stronger ways of working.",
  },
  {
    n: "03",
    title: "Position",
    body: "Communicate your value, build visibility and recognise the right opportunities.",
  },
  {
    n: "04",
    title: "Progress",
    body: "Receive mentoring, guidance, connections and practical support to move forward.",
  },
] as const;

export const forYou = [
  "have ideas but need more direction",
  "want to understand how tech connects with creativity",
  "already have skills but are unsure how to develop them",
  "want to build a clearer niche",
  "need practical guidance and professional connections",
  "want to meet other young people building their next move",
] as const;

export const stats = [
  { value: "30", label: "young people", note: "Across the full programme." },
  { value: "6", label: "core sessions", note: "Collaborative monthly sessions." },
  {
    value: "12",
    label: "months",
    note: "Six months of sessions plus six months of progression support.",
  },
] as const;

export type Article = {
  kicker: string;
  title: string;
  body: string;
  cta: string;
};

export const latest: Article[] = [
  {
    kicker: "Project update",
    title: "Pathways has been funded — and we are getting ready to build.",
    body: "Pathways is entering its first stage of development. We are shaping the programme, building our first cohort and creating a space where young people in Cardiff can connect creativity with technology.",
    cta: "Read the Update",
  },
  {
    kicker: "Our approach",
    title: "Why Pathways is not being built like a normal classroom.",
    body: "Young people need useful knowledge, but they also need environments where they feel comfortable contributing, questioning and sharing ideas. Pathways is being designed around collaboration rather than traditional classroom teaching.",
    cta: "Read the Story",
  },
];

export type Session = {
  n: string;
  title: string;
  status: "Upcoming" | "Completed";
};

export const sessions: Session[] = Array.from({ length: 6 }, (_, i) => ({
  n: String(i + 1).padStart(2, "0"),
  title: "Details coming soon",
  status: "Upcoming" as const,
}));

export const partners = [
  {
    name: "Youth4Change Wales",
    role: "Lead organisation delivering Pathways.",
  },
  {
    name: "NatWest Accelerator",
    role: "Supporting mentorship, practical advice and enterprise connections.",
  },
  {
    name: "The National Lottery Community Fund",
    role: "Funding the first 12 months of Pathways.",
  },
] as const;
