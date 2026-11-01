export const nav = [
  { label: "About", href: "#about", id: "about" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Toolkit", href: "#toolkit", id: "toolkit" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const roles = [
  "mechatronics student",
  "web developer",
  "product builder",
  "creator of PrepUNIBEN",
];

export const focusAreas = [
  {
    title: "Mechatronics Engineering",
    body: "Mechanics, electronics and software treated as one system.",
  },
  {
    title: "Robotics and Automation",
    body: "Machines that sense, decide and act.",
  },
  {
    title: "Software Development",
    body: "Web products, from the first idea to a live deployment.",
  },
  {
    title: "Artificial Intelligence",
    body: "Figuring out where it genuinely belongs inside real products.",
  },
  {
    title: "Engineering Systems",
    body: "Seeing how the parts fit before building on top of them.",
  },
];

export type ToolGroup = {
  id: string;
  title: string;
  note: string;
  items: string[];
};

export const toolGroups: ToolGroup[] = [
  {
    id: "languages",
    title: "Languages",
    note: "Used and sharpened through real projects.",
    items: ["Python", "JavaScript", "TypeScript", "Lua"],
  },
  {
    id: "web",
    title: "Web",
    note: "What I reach for when building and extending web products.",
    items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"],
  },
  {
    id: "apps",
    title: "Apps",
    note: "Application development I use and keep exploring.",
    items: ["React Native", "Expo"],
  },
  {
    id: "backend",
    title: "Backend and deploy",
    note: "Part of how products get built, connected and shipped.",
    items: ["Supabase", "API integration", "API routes", "Git", "GitHub", "Vercel"],
  },
  {
    id: "workflow",
    title: "Workflow",
    note: "My day-to-day development environment.",
    items: ["Visual Studio Code", "Cursor", "Qoder", "GitHub Codespaces"],
  },
  {
    id: "creative",
    title: "Creative",
    note: "For multimedia and for explaining what I build.",
    items: ["DaVinci Resolve", "CapCut", "OBS Studio"],
  },
];

export const exploring = [
  "Artificial Intelligence",
  "Robotics and Automation",
  "Mechatronics Engineering",
  "Software Engineering",
  "Engineering Systems",
  "Technology Product Development",
];

export const marquee = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "Supabase",
  "Vercel",
  "React Native",
  "Git",
  "Lua",
];

export const projectStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"];

export const projectPoints = [
  "Pick your faculty, department, level and semester.",
  "Every lecture by day and time, with free periods marked.",
  "Each lecture shows its venue, or says plainly when it is not confirmed.",
  "No signup. No login. No personal details.",
];
