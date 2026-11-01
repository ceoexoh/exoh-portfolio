import LocalClock from "./_components/LocalClock";
import Reveal from "./_components/Reveal";
import SiteNav from "./_components/SiteNav";
import TiltAvatar from "./_components/TiltAvatar";
import Toolkit from "./_components/Toolkit";
import Typewriter from "./_components/Typewriter";
import {
  exploring,
  focusAreas,
  marquee,
  projectPoints,
  projectStack,
  roles,
} from "./_data/site";

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <p className="flex items-center gap-3 font-mono text-[13px] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-rule" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <SiteNav />

      <main>
        {/* Hero */}
        <section id="top" className="relative overflow-hidden">
          <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
          <div
            className="glow pointer-events-none absolute top-1/2 right-[-10%] h-[42rem] w-[42rem] -translate-y-1/2"
            aria-hidden="true"
          />

          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pt-28 lg:pb-16">
            <div className="order-2 lg:order-1">
              <p className="settle flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] text-muted">
                <span className="inline-flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-accent" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                  </span>
                  Open to internships and collaborations
                </span>
              </p>

              <h1 className="settle display mt-6 text-[clamp(5.5rem,19vw,13.5rem)]" style={{ animationDelay: "0.08s" }}>
                Exoh
              </h1>

              <div className="settle" style={{ animationDelay: "0.2s" }}>
                <p className="mt-6 font-mono text-sm tracking-wide text-ink/90 sm:text-[15px]">
                  Tony-onuoha Munachiso Osaretin
                </p>
                <p className="mt-4 max-w-xl text-xl leading-9 text-muted sm:text-2xl sm:leading-10">
                  Mechatronics student at the University of Benin. I write software, study how
                  machines work, and ship things people can actually use.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#work"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-ink px-7 text-sm font-semibold text-canvas transition hover:bg-ink/85"
                  >
                    See what I&apos;ve built
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex h-12 items-center justify-center rounded-lg border border-rule px-7 text-sm font-semibold transition hover:border-ink/50 hover:bg-panel"
                  >
                    Get in touch
                  </a>
                </div>
              </div>

              {/* Terminal */}
              <div
                className="settle mt-12 max-w-xl overflow-hidden rounded-xl border border-rule bg-panel/80 backdrop-blur"
                style={{ animationDelay: "0.35s" }}
              >
                <div className="flex items-center justify-between border-b border-rule px-4 py-2.5">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                  </div>
                  <span className="font-mono text-xs text-faint">exoh@benin-city</span>
                </div>
                <div className="space-y-1 px-4 py-4 font-mono text-[13px] leading-6 sm:text-sm">
                  <p>
                    <span className="text-accent">~</span> <span className="text-faint">$</span> ls projects
                  </p>
                  <p className="text-muted">prepuniben/</p>
                  <p className="pt-2">
                    <span className="text-accent">~</span> <span className="text-faint">$</span> whoami --role
                  </p>
                  <p className="text-ink">
                    <Typewriter words={roles} />
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="settle" style={{ animationDelay: "0.1s" }}>
                <TiltAvatar />
              </div>
            </div>
          </div>
        </section>

        {/* Stack ticker */}
        <div
          className="ticker overflow-hidden border-y border-rule bg-panel/50 py-4"
          aria-label="Technologies I work with"
        >
          <div className="ticker-track" aria-hidden="true">
            {[...marquee, ...marquee].map((item, i) => (
              <span key={`${item}-${i}`} className="flex items-center font-mono text-sm text-muted">
                <span className="px-6">{item}</span>
                <span className="text-accent">/</span>
              </span>
            ))}
          </div>
          <p className="sr-only">{marquee.join(", ")}</p>
        </div>

        {/* About */}
        <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>

          <div className="mt-10 grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <Reveal>
              <h2 className="text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
                I like knowing how the whole system fits together, then building something{" "}
                <span className="text-accent">useful</span> on top of it.
              </h2>
              <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-muted">
                <p>
                  I study Mechatronics Engineering at the University of Benin, which keeps me
                  moving between mechanical systems, electronics and code. That overlap is where
                  most of my curiosity lives.
                </p>
                <p>
                  On the software side I build for the web: designing the product, wiring up the
                  data and shipping it live. PrepUNIBEN is the project where all of that came
                  together.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <p className="font-mono text-[13px] text-faint">// focus areas</p>
              <ul className="mt-4 divide-y divide-rule border-y border-rule">
                {focusAreas.map((area) => (
                  <li key={area.title} className="group py-4">
                    <p className="flex items-center gap-2.5 font-medium">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-faint transition-colors group-hover:bg-accent"
                        aria-hidden="true"
                      />
                      {area.title}
                    </p>
                    <p className="mt-1 pl-4 text-sm leading-6 text-muted">{area.body}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="border-t border-rule bg-panel/40">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
            <Reveal>
              <SectionLabel index="02">Selected work</SectionLabel>
              <h2 className="mt-10 max-w-2xl text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
                One product, built end to end.
              </h2>
            </Reveal>

            <Reveal className="mt-12" delay={100}>
              <article className="overflow-hidden rounded-2xl border border-rule bg-canvas">
                {/* Window chrome */}
                <div className="flex items-center gap-4 border-b border-rule bg-panel px-4 py-3">
                  <div className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-ink/20" />
                  </div>
                  <div className="min-w-0 flex-1 truncate rounded-md bg-canvas px-3 py-1.5 font-mono text-xs text-muted">
                    prepuniben.vercel.app
                  </div>
                </div>

                <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-7 sm:p-10">
                    <p className="font-mono text-[13px] text-accent">Creator · live</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                      PrepUNIBEN
                    </h3>
                    <p className="mt-5 max-w-lg text-lg leading-8 text-muted">
                      A free timetable and course-location site for University of Benin
                      students. Choose your class and see your week, with no account needed.
                      The Faculty of Engineering is first, with more faculties on the way.
                    </p>

                    <ul className="mt-8 space-y-3">
                      {projectPoints.map((point) => (
                        <li key={point} className="flex gap-3 text-[15px] leading-6">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-between gap-10 border-t border-rule bg-panel/60 p-7 sm:p-10 lg:border-t-0 lg:border-l">
                    <div>
                      <p className="font-mono text-[13px] text-faint">// built with</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {projectStack.map((item) => (
                          <li key={item} className="rounded-md border border-rule px-3 py-1.5 font-mono text-[13px] text-ink">
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-6 text-sm leading-6 text-muted">
                        It taught me product design, Next.js, API integration and deployment in
                        one real, shipped project.
                      </p>
                    </div>

                    <a
                      href="https://prepuniben.vercel.app"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex h-12 w-fit items-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold text-white transition hover:brightness-110"
                    >
                      Visit PrepUNIBEN
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          </div>
        </section>

        {/* Toolkit */}
        <section id="toolkit" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-32">
          <Reveal>
            <SectionLabel index="03">Toolkit</SectionLabel>
            <h2 className="mt-10 max-w-3xl text-3xl leading-[1.15] font-semibold tracking-tight sm:text-5xl">
              What I build with, and what I&apos;m still learning.
            </h2>
          </Reveal>

          <Reveal className="mt-12" delay={100}>
            <Toolkit />
          </Reveal>

          <Reveal className="mt-16 border-t border-rule pt-10" delay={100}>
            <p className="font-mono text-[13px] text-faint">// currently exploring</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {exploring.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-dashed border-ink/25 px-4 py-2 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* Education + beyond */}
        <section id="education" className="border-t border-rule bg-panel/40">
          <div className="mx-auto grid max-w-6xl gap-16 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-32">
            <Reveal>
              <SectionLabel index="04">Education</SectionLabel>
              <div className="mt-10 rounded-2xl border border-rule bg-canvas p-7 sm:p-9">
                <p className="font-mono text-[13px] text-accent">Undergraduate</p>
                <p className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Mechatronics Engineering
                </p>
                <p className="mt-3 text-muted">University of Benin (UNIBEN), Nigeria</p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <SectionLabel index="05">Beyond the classroom</SectionLabel>
              <p className="mt-10 max-w-md text-2xl leading-10 font-medium tracking-tight">
                Technology products, entrepreneurship, and finding practical ways for
                engineering and software to solve real problems.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative overflow-hidden border-t border-rule">
          <div className="glow pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:py-36">
            <Reveal>
              <SectionLabel index="06">Contact</SectionLabel>
              <h2 className="display mt-10 text-[clamp(3.25rem,10vw,8.5rem)]">
                Let&apos;s build
                <br />
                something <span className="text-accent">good</span>
              </h2>
              <p className="mt-8 max-w-lg text-lg leading-8 text-muted">
                I&apos;m open to internships, collaborations and conversations about engineering
                and software. The quickest way to reach me is on GitHub or X.
              </p>
            </Reveal>

            <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row" delay={100}>
              <a
                href="https://github.com/ceoexoh"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-ink px-8 text-sm font-semibold text-canvas transition hover:bg-ink/85"
              >
                GitHub · ceoexoh
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <a
                href="https://x.com/exohobviously"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-rule px-8 text-sm font-semibold transition hover:border-ink/50 hover:bg-panel"
              >
                X · @exohobviously
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Tony-onuoha Munachiso Osaretin</span>
          <span>
            Benin City, Nigeria · <LocalClock />
          </span>
        </div>
      </footer>
    </div>
  );
}
