import { useI18n } from "@/lib/i18n";
import { Header } from "@/components/site/Header";
import { CalorieChart } from "@/components/site/CalorieChart";
import heroImg from "@/assets/hero.jpg";
import suitImg from "@/assets/suit.jpg";
import aboutStudioImg from "@/assets/about-studio.jpg";
import coachingImg from "@/assets/coaching.jpg";

export function Home() {
  const { t, lang } = useI18n();

  const stats = [
    { value: "20", label: t("stats.time") },
    { value: "100%", label: t("stats.muscles") },
    { value: "3×", label: t("stats.calories") },
    { value: "7", label: t("stats.results") },
  ];

  const services = [
    { title: t("services.coach.title"), body: t("services.coach.body"), img: coachingImg },
    { title: t("services.culture.title"), body: t("services.culture.body"), img: workplaceImg },
    { title: t("services.tech.title"), body: t("services.tech.body"), img: suitImg },
  ];

  return (
    <div id="top" className="min-h-dvh bg-background text-foreground">
      <Header />

      <main id="main">
        {/* Hero */}
        <section
          aria-labelledby="hero-title"
          className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
        >
          <div className="absolute inset-0 -z-10">
            <img
              src={heroImg}
              alt=""
              aria-hidden
              width={1920}
              height={1080}
              className="h-full w-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>

          <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <p className="text-eyebrow">{t("hero.eyebrow")}</p>
              <h1
                id="hero-title"
                className="mt-5 text-[clamp(2.5rem,7vw,5.5rem)] font-display whitespace-pre-line"
              >
                {t("hero.title")}
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">{t("hero.sub")}</p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#appointment"
                  className="inline-flex items-center justify-center min-h-12 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
                >
                  {t("hero.cta")}
                </a>
                <a
                  href="#ems"
                  className="inline-flex items-center justify-center min-h-12 rounded-full border border-border bg-surface/40 px-6 text-sm font-medium text-foreground hover:bg-surface transition-colors"
                >
                  {t("hero.cta2")}
                </a>
              </div>
            </div>

            <dl className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur"
                >
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-2 font-display text-3xl sm:text-4xl text-foreground">
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-title" className="section-pad">
          <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <p className="text-eyebrow">{t("about.eyebrow")}</p>
              <h2 id="about-title" className="mt-4 text-4xl sm:text-5xl">
                {t("about.title")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">{t("about.body")}</p>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-3xl border border-border">
              <img
                src={workplaceImg}
                alt={lang === "de" ? "Team trainiert gemeinsam im Büro" : "Team training together in the office"}
                loading="lazy"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" aria-labelledby="services-title" className="section-pad bg-surface/40">
          <div className="container-x">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-eyebrow">{t("services.eyebrow")}</p>
                <h2 id="services-title" className="mt-4 text-4xl sm:text-5xl max-w-xl">
                  {t("services.title")}
                </h2>
              </div>
            </div>

            <ul className="mt-12 grid gap-6 md:grid-cols-3" role="list">
              {services.map((s) => (
                <li
                  key={s.title}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={s.img}
                      alt=""
                      aria-hidden
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl">{s.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EMS explained + chart */}
        <section id="ems" aria-labelledby="ems-title" className="section-pad">
          <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="text-eyebrow">{t("ems.eyebrow")}</p>
              <h2 id="ems-title" className="mt-4 text-4xl sm:text-5xl">
                {t("ems.title")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">{t("ems.body")}</p>
              <ul className="mt-6 space-y-3" role="list">
                {[t("ems.bullet1"), t("ems.bullet2"), t("ems.bullet3")].map((b) => (
                  <li key={b} className="flex gap-3 text-base">
                    <span
                      aria-hidden
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CalorieChart />
          </div>
        </section>

        {/* Suit / Tech */}
        <section id="tech" aria-labelledby="tech-title" className="section-pad bg-surface/40">
          <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-border">
              <img
                src={suitImg}
                alt={lang === "de" ? "Nahaufnahme des X1200 EMS-Anzugs" : "Close-up of the X1200 EMS suit"}
                loading="lazy"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-eyebrow">{t("suit.eyebrow")}</p>
              <h2 id="tech-title" className="mt-4 text-4xl sm:text-5xl">
                {t("suit.title")}
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">{t("suit.body")}</p>

              <dl className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
                {[
                  { p: "Chest", g: "Brust" },
                  { p: "Back", g: "Rücken" },
                  { p: "Arms", g: "Arme" },
                  { p: "Core", g: "Bauch" },
                  { p: "Glutes", g: "Gesäß" },
                  { p: "Legs", g: "Beine" },
                  { p: "Neck", g: "Nacken" },
                  { p: "Shoulders", g: "Schultern" },
                ].map((m) => (
                  <div
                    key={m.p}
                    className="rounded-xl border border-border bg-background px-3 py-2.5 text-center"
                  >
                    <dt className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      {lang === "de" ? m.g : m.p}
                    </dt>
                    <dd className="mt-0.5 font-display text-base text-mint">100%</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" aria-labelledby="team-title" className="section-pad">
          <div className="container-x">
            <p className="text-eyebrow">{t("team.eyebrow")}</p>
            <h2 id="team-title" className="mt-4 text-4xl sm:text-5xl max-w-2xl">
              {t("team.title")}
            </h2>

            <ul className="mt-12 grid gap-6 sm:grid-cols-3" role="list">
              {[
                { name: t("team1.name"), role: t("team1.role"), initial: "D" },
                { name: t("team2.name"), role: t("team2.role"), initial: "L" },
                { name: t("team3.name"), role: t("team3.role"), initial: "V" },
              ].map((m) => (
                <li
                  key={m.name}
                  className="rounded-3xl border border-border bg-surface/50 p-6 text-center"
                >
                  <div
                    aria-hidden
                    className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-[var(--gradient-ember)] font-display text-3xl text-primary-foreground shadow-[var(--shadow-glow)]"
                  >
                    {m.initial}
                  </div>
                  <h3 className="mt-5 text-xl">{m.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Inclusive */}
        <section aria-labelledby="inclusive-title" className="section-pad bg-surface/40">
          <div className="container-x max-w-3xl text-center">
            <p className="text-eyebrow">{t("inclusive.eyebrow")}</p>
            <h2 id="inclusive-title" className="mt-4 text-4xl sm:text-5xl">
              {t("inclusive.title")}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">{t("inclusive.body")}</p>
          </div>
        </section>

        {/* Appointment */}
        <section id="appointment" aria-labelledby="appt-title" className="section-pad">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--gradient-radial)] p-8 sm:p-14">
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <div>
                  <p className="text-eyebrow">{t("appt.eyebrow")}</p>
                  <h2 id="appt-title" className="mt-4 text-4xl sm:text-5xl">
                    {t("appt.title")}
                  </h2>
                  <p className="mt-5 text-lg text-muted-foreground max-w-xl">{t("appt.body")}</p>

                  <a
                    href="https://calendly.com/xttraction"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center min-h-12 rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
                  >
                    {t("appt.cta")}
                    <span aria-hidden className="ml-2">→</span>
                  </a>
                </div>

                <div className="rounded-2xl border border-border bg-background/70 p-6 backdrop-blur">
                  <p className="text-sm text-muted-foreground">{t("appt.or")}</p>
                  <div className="mt-4 space-y-3">
                    <a
                      href="mailto:gp@xttraction.studio"
                      className="block min-h-11 rounded-xl border border-border bg-surface px-4 py-3 text-foreground hover:border-primary transition-colors"
                    >
                      <span className="block text-xs text-muted-foreground">Email</span>
                      <span className="block font-medium">gp@xttraction.studio</span>
                    </a>
                    <a
                      href="tel:+4916091471555"
                      className="block min-h-11 rounded-xl border border-border bg-surface px-4 py-3 text-foreground hover:border-primary transition-colors"
                    >
                      <span className="block text-xs text-muted-foreground">{lang === "de" ? "Telefon" : "Phone"}</span>
                      <span className="block font-medium">+49 (0) 160 91471555</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-surface/50">
        <div className="container-x py-12 grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span aria-hidden className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm">X</span>
              <span className="font-display tracking-tight">XTTRACTION</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Factory Future Fitness — {lang === "de" ? "EMS-Firmenfitness, vor Ort." : "EMS corporate fitness, on-site."}
            </p>
          </div>
          <div>
            <h3 className="text-eyebrow !text-muted-foreground">{t("footer.location")}</h3>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-foreground hover:text-primary transition-colors"
            >
              {t("footer.maps")} →
            </a>
            <p className="mt-3 text-sm text-muted-foreground">
              gp@xttraction.studio<br />
              +49 (0) 160 91471555
            </p>
          </div>
          <div>
            <h3 className="text-eyebrow !text-muted-foreground">{lang === "de" ? "Rechtliches" : "Legal"}</h3>
            <ul className="mt-3 space-y-2 text-sm" role="list">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">{t("footer.imprint")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">{t("footer.privacy")}</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="container-x py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-3">
            <span>© {new Date().getFullYear()} XTTRACTION. {t("footer.rights")}</span>
            <span>Made for movement.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
