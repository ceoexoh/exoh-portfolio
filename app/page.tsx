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
  { title: "Exploring", items: ["Artificial Intelligence", "Robotics and Automation", "Mechatronics Engineering", "Software Engineering", "Engineering Systems", "Technology Product Development"], note: "Areas of continued learning and technical interest, not claimed areas of professional mastery.", exploring: true },
];

const nav = [
  ["About", "#about"],
  ["Technical profile", "#technical"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f5f2] text-[#151716]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-[#f4f5f2]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
          <a href="#" className="font-mono text-sm font-bold tracking-[0.28em]">EXOH</a>
          <div className="hidden items-center gap-6 md:flex">
            {nav.map(([label, href]) => <a key={href} href={href} className="text-sm text-black/65 transition hover:text-black">{label}</a>)}
            <a href="https://github.com/ceoexoh" target="_blank" rel="noreferrer" className="rounded-full bg-[#151716] px-4 py-2 text-sm font-medium text-white">GitHub</a>
          </div>
          <a href="#contact" className="text-sm font-medium md:hidden">Contact</a>
        </nav>
      </header>

      <main>
        <section className="mx-auto flex min-h-[92vh] max-w-6xl items-end px-5 pb-16 pt-32 sm:px-8 sm:pb-24">
          <div>
            <p className="mb-7 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-black/55">
              <span className="h-px w-8 bg-[#267b5b]" /> Mechatronics engineering · Technology · Building
            </p>
            <h1 className="text-[clamp(5rem,18vw,10rem)] font-semibold leading-[0.78] tracking-[-0.075em]">EXOH</h1>
            <p className="mt-8 text-xl font-medium sm:text-2xl">Tony-onuoha Munachiso Osaretin</p>
            <p className="mt-2 max-w-2xl text-lg leading-relaxed text-black/60">Mechatronics Engineering Student | Technology Enthusiast | Builder</p>
            <p className="mt-7 max-w-xl text-base leading-7 text-black/62 sm:text-lg">I am interested in engineering, technology and building practical solutions that turn complex problems into useful products.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#projects" className="rounded-full bg-[#267b5b] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#1d6449]">Explore My Work</a>
              <a href="#contact" className="rounded-full border border-black/15 px-6 py-3.5 text-center text-sm font-semibold transition hover:border-black/40">Contact Me</a>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-black/10 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-28">
            <p className="section-kicker">01 / About</p>
            <div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">Learning across engineering and software to build useful technology.</h2>
              <div className="mt-8 grid gap-6 text-base leading-7 text-black/65 sm:grid-cols-2">
                <p>I study Mechatronics Engineering at the University of Benin, where my interests sit at the intersection of mechanical engineering, electronics, software and intelligent systems.</p>
                <p>I am developing practical capabilities across technology, software development, automation and engineering problem-solving, with an emphasis on understanding systems and creating useful real-world solutions.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="section-kicker">02 / Engineering interests</p>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((interest, index) => (
              <article key={interest} className="min-h-44 bg-[#f4f5f2] p-6">
                <span className="font-mono text-xs text-black/40">0{index + 1}</span>
                <h3 className="mt-16 max-w-xs text-xl font-semibold">{interest}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="technical" className="bg-[#151716] py-20 text-white sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/50">03 / Technical profile</p>
            <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
              <h2 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">A growing multidisciplinary toolset.</h2>
              <p className="max-w-md text-sm leading-6 text-white/55">Technology labels indicate tools and areas I have worked with or continue to explore. They do not represent proficiency scores or professional mastery.</p>
            </div>
            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-white/12 md:grid-cols-2 xl:grid-cols-3">
              {technicalGroups.map((group, index) => (
                <article key={group.title} className="bg-[#1b1e1c] p-6">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs text-[#71cda4]">T{String(index + 1).padStart(2, "0")}</span>
                    {group.exploring && <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-widest text-white/55">Exploring</span>}
                  </div>
                  <h3 className="mt-8 text-lg font-semibold">{group.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => <li key={item} className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-white/80">{item}</li>)}
                  </ul>
                  <p className="mt-5 text-xs leading-5 text-white/45">{group.note}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <p className="section-kicker">04 / Selected work</p>
          <article className="mt-10 overflow-hidden rounded-3xl border border-black/10 bg-white">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              <div className="min-h-72 bg-[#267b5b] p-8 text-white sm:p-12">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/65">Product identity</p>
                <p className="mt-16 text-5xl font-semibold tracking-tight sm:text-7xl">PREP<br />UNIBEN</p>
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-sm font-medium text-[#267b5b]">Creator</p>
                <h2 className="mt-3 text-3xl font-semibold">PrepUNIBEN</h2>
                <p className="mt-5 leading-7 text-black/62">A UNIBEN-focused academic information platform designed to help students access courses, lecture timetables and other university academic information.</p>
                <p className="mt-5 text-sm leading-6 text-black/55">Building PrepUNIBEN has provided practical experience in software development, product design, Next.js application development, API integration and deployment.</p>
                <a href="https://prepuniben.vercel.app" target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-[#151716] px-5 py-3 text-sm font-semibold text-white">Visit PrepUNIBEN</a>
              </div>
            </div>
          </article>
        </section>

        <section id="education" className="border-y border-black/10 bg-white">
          <div className="mx-auto grid gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr]">
            <p className="section-kicker">05 / Education</p>
            <div><p className="text-sm text-black/50">University of Benin (UNIBEN), Nigeria</p><h2 className="mt-3 text-4xl font-semibold">Mechatronics Engineering</h2><p className="mt-3 text-black/55">Undergraduate</p></div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
          <p className="section-kicker">06 / Beyond Engineering</p>
          <div><h2 className="text-3xl font-semibold tracking-tight">Building useful technology products.</h2><p className="mt-5 max-w-xl leading-7 text-black/62">Beyond the classroom, I am interested in technology products, entrepreneurship and finding practical ways engineering and software can solve real problems.</p></div>
        </section>

        <section id="contact" className="bg-[#267b5b] text-white">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/65">07 / Contact</p>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">Let&apos;s build thoughtful things.</h2>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/ceoexoh" target="_blank" rel="noreferrer" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-[#151716]">GitHub</a>
              <a href="https://x.com/exohobviously" target="_blank" rel="noreferrer" className="rounded-full border border-white/35 px-5 py-3 text-center text-sm font-semibold">X / Twitter</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
