/**
 * Temporary placeholder images (Lorem Picsum — stable per seed).
 * Swap these URLs for real Pathways photography later. No CMS/next-image
 * config needed: they're plain remote URLs used via <img>.
 */
const pic = (seed: string, w = 1200, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const philosophyImages = [
  { src: pic("pathways-collab", 900, 1100), caption: "Ideas on the wall" },
  { src: pic("pathways-hands", 900, 1100), caption: "Hands on the work" },
  { src: pic("pathways-room", 900, 1100), caption: "The room, mid-session" },
];

export const heroImage = pic("pathways-hero", 1600, 1000);

export const sessionsImage = pic("pathways-sessions", 1000, 1150);

export const partnersImage = pic("pathways-partner", 900, 1000);

export const sessionShots = [
  pic("pw-s1", 900, 1120),
  pic("pw-s2", 900, 1120),
  pic("pw-s3", 900, 1120),
  pic("pw-s4", 900, 1120),
  pic("pw-s5", 900, 1120),
  pic("pw-s6", 900, 1120),
];

export const galleryImages = [
  pic("pathways-g1", 800, 800),
  pic("pathways-g2", 800, 800),
  pic("pathways-g3", 800, 800),
  pic("pathways-g4", 800, 800),
];
