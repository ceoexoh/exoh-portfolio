import Image from "next/image";

const interests = [
  "Mechatronics Engineering",
  "Robotics and Automation",
  "Mechanical and Electrical Systems",
  "Software Development",
  "Artificial Intelligence",
  "Engineering Systems and Innovation",
];

const technicalGroups = [
  { title: "Programming languages", items: ["Python", "JavaScript", "TypeScript", "Lua"], note: "Languages used and being developed through projects." },
  { title: "Web development", items: ["HTML", "CSS", "React", "Next.js", "Tailwind CSS"], note: "Tools used in building and extending web products." },
  { title: "Application development", items: ["React Native", "Expo"], note: "Application development technologies being explored and used." },
  { title: "Backend, APIs and deployment", items: ["Supabase", "API integration", "API routes", "Git", "GitHub", "Vercel"], note: "Used in product development and deployment workflows." },
  { title: "Development environment", items: ["Visual Studio Code", "Cursor", "Qoder", "GitHub Codespaces"], note: "Part of my day-to-day development workflow." },
  { title: "Creative and digital tools", items: ["DaVinci Resolve", "CapCut", "OBS Studio"], note: "Tools for multimedia and product communication." },
];

const exploring = [
  "Artificial Intelligence",
  "Robotics and Automation",
  "Mechatronics Engineering",
  "Software Engineering",
  "Engineering Systems",
  "Technology Product Development",
];

const nav = [
  ["About", "#about"],
  ["Work", "#projects"],
  ["Toolkit", "#technical"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-10"
          aria-label="Main navigation"
        >
          <p className="max-w-[11rem] text-[11px] font-medium uppercase leading-4 tracking-[0.2em] text-ink/70">
            Engineering, software and building
          </p>
          <a href="#" className="display text-2xl" aria-label="EXOH home">
            EXOH
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-ink/70 transition hover:text-green"
              >
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="text-sm font-medium md:hidden">
            Contact
          </a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative mx-auto grid min-h-[100svh] max-w-7xl items-center gap-6 overflow-hidden px-5 pb-16 pt-28 sm:px-10 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative z-10">
            <h1 className="hero-name display text-[clamp(6rem,24vw,17rem)] leading-[0.82]">
              Exoh
            </h1>
            <div className="hero-sub">
              <p className="mt-6 text-lg font-semibold uppercase tracking-[0.18em] text-green sm:text-xl">
                Tony-onuoha Munachiso Osaretin
              </p>
              <p className="mt-2 text-base text-ink/65">
                Mechatronics engineering student, technology enthusiast and builder
              </p>
              <p className="mt-8 max-w-md text-lg leading-8 text-ink/80">
                I build practical technology that turns complex problems into
                useful products.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#projects"
                  className="bg-ink px-7 py-4 text-center text-sm font-semibold text-paper transition hover:bg-green"
                >
                  See my work
                </a>
                <a
                  href="#contact"
                  className="border border-ink/25 px-7 py-4 text-center text-sm font-semibold transition hover:border-green hover:text-green"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>

          <div className="hero-disc relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 rounded-full bg-green" />
              <div className="absolute inset-[7%] overflow-hidden rounded-full bg-slate ring-8 ring-paper">
                <Image
                  src="/mascot.png"
                  alt="Exoh's mascot: a cartoon character with locs, round glasses, headphones and a blue hoodie"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-paper-2">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-10 lg:grid-cols-[0.5fr_1.5fr] lg:py-32">
            <h2 className="display text-5xl sm:text-6xl">About</h2>
            <div>
              <p className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Learning across engineering and software to build useful
                technology.
              </p>
              <div className="mt-10 grid max-w-4xl gap-6 text-base leading-7 text-ink/70 sm:grid-cols-2">
                <p>
                  I study Mechatronics Engineering at the University of Benin,
                  where my interests sit at the intersection of mechanical
                  engineering, electronics, software and intelligent systems.
                </p>
                <p>
                  I am developing practical capabilities across technology,
                  software development, automation and engineering
                  problem-solving, with an emphasis on understanding systems and
                  creating useful real-world solutions.
                </p>
              </div>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/15 pt-8">
                {interests.map((interest) => (
                  <li key={interest} className="flex items-center gap-3 text-sm font-medium">
                    <span className="h-2 w-2 rounded-full bg-green" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="projects" className="mx-auto max-w-7xl px-5 py-24 sm:px-10 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">
            <div>
              <h2 className="display text-5xl sm:text-6xl">Selected work</h2>
              <p className="mt-5 max-w-[16rem] text-sm leading-6 text-ink/65">
                Products I design, build and ship end to end.
              </p>
            </div>
            <article className="grid overflow-hidden bg-green text-white lg:grid-cols-[1fr_0.9fr]">
              <div className="flex min-h-80 flex-col justify-between p-8 sm:p-12">
                <p className="text-sm font-medium text-white/75">Creator</p>
                <p className="display text-[clamp(4rem,11vw,8rem)]">
                  Prep
                  <br />
                  UNIBEN
                </p>
              </div>
              <div className="flex flex-col justify-center bg-night p-8 sm:p-12">
                <h3 className="text-2xl font-semibold">PrepUNIBEN</h3>
                <p className="mt-5 leading-7 text-white/75">
                  A UNIBEN-focused academic information platform that helps
                  students find courses, lecture timetables and other
                  university academic information.
                </p>
                <p className="mt-5 text-sm leading-6 text-white/55">
                  Building it gave me practical experience in software
                  development, product design, Next.js, API integration and
                  deployment.
                </p>
                <a
                  href="https://prepuniben.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit bg-green px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-ink"
                >
                  Visit PrepUNIBEN
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* Toolkit */}
        <section id="technical" className="relative overflow-hidden bg-night py-24 text-white sm:py-32">
          <p
            aria-hidden="true"
            className="display outline-text pointer-events-none absolute top-6 left-0 w-full select-none text-center text-[clamp(7rem,26vw,22rem)]"
          >
            Toolkit
          </p>
          <div className="relative mx-auto max-w-7xl px-5 pt-[clamp(6rem,19vw,17rem)] sm:px-10">
            <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
                A growing multidisciplinary toolset.
              </h2>
              <p className="max-w-sm text-sm leading-6 text-white/55">
                These are tools and areas I have worked with or keep exploring.
                They are not proficiency scores or claims of mastery.
              </p>
            </div>

            <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
              {technicalGroups.map((group) => (
                <article key={group.title} className="border-t border-white/20 pt-6">
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="border border-white/15 px-3 py-2 text-sm text-white/85 transition hover:border-green hover:bg-green"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-xs leading-5 text-white/45">{group.note}</p>
                </article>
              ))}
            </div>

            <div className="mt-16 border-t border-green pt-8">
              <h3 className="text-lg font-semibold">Currently exploring</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {exploring.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-dashed border-white/30 px-4 py-2 text-sm text-white/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/45">
                Areas of continued learning, not claimed professional mastery.
              </p>
            </div>
          </div>
        </section>

        {/* Education + beyond */}
        <section id="education" className="mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <h2 className="display text-5xl sm:text-6xl">Education</h2>
            <p className="mt-8 text-sm text-ink/55">University of Benin (UNIBEN), Nigeria</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Mechatronics Engineering
            </p>
            <p className="mt-2 text-ink/55">Undergraduate</p>
          </div>
          <div>
            <h2 className="display text-5xl sm:text-6xl">Beyond engineering</h2>
            <p className="mt-8 max-w-md leading-7 text-ink/70">
              Outside the classroom, I am interested in technology products,
              entrepreneurship and practical ways engineering and software can
              solve real problems.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-paper-2">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 sm:px-10 lg:grid-cols-[1fr_auto] lg:py-32">
            <div>
              <h2 className="display text-[clamp(3.5rem,10vw,8rem)]">
                Let&apos;s build
                <br />
                something good
              </h2>
              <p className="mt-6 max-w-md text-ink/70">
                Open to internships, collaborations and conversations about
                engineering and software.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://github.com/ceoexoh"
                target="_blank"
                rel="noreferrer"
                className="bg-ink px-8 py-4 text-center text-sm font-semibold text-paper transition hover:bg-green"
              >
                GitHub
              </a>
              <a
                href="https://x.com/exohobviously"
                target="_blank"
                rel="noreferrer"
                className="border border-ink/25 px-8 py-4 text-center text-sm font-semibold transition hover:border-green hover:text-green"
              >
                X (Twitter)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-paper-2">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 text-xs text-ink/55 sm:px-10">
          <span className="display text-base text-ink">EXOH</span>
          <span>© 2026 Tony-onuoha Munachiso Osaretin</span>
        </div>
      </footer>
    </div>
  );
}
