import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";

const navItems = [
  { id: "about", key: "nav.about" as const },
  { id: "services", key: "nav.services" as const },
  { id: "tech", key: "nav.tech" as const },
  { id: "team", key: "nav.team" as const },
];

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/75 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2.5" aria-label="XTTRACTION home">
          <span
            aria-hidden
            className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-display text-sm"
          >
            X
          </span>
          <span className="font-display text-base tracking-tight">XTTRACTION</span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {navItems.map((i) => (
            <a
              key={i.id}
              href={`#${i.id}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {t(i.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label="Language"
            className="hidden sm:flex items-center rounded-full border border-border bg-surface/70 p-0.5 text-xs"
          >
            {(["en", "de"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`min-h-9 min-w-9 rounded-full px-2.5 font-medium uppercase tracking-wider transition-colors ${
                  lang === l ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#appointment"
            className="hidden sm:inline-flex items-center justify-center min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02]"
          >
            {t("nav.book")}
          </a>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-foreground"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="block h-0.5 w-4 bg-current relative before:absolute before:-top-1.5 before:h-0.5 before:w-4 before:bg-current after:absolute after:top-1.5 after:h-0.5 after:w-4 after:bg-current" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-x flex flex-col py-4" aria-label="Mobile">
            {navItems.map((i) => (
              <a
                key={i.id}
                href={`#${i.id}`}
                onClick={() => setOpen(false)}
                className="min-h-11 flex items-center text-base text-foreground"
              >
                {t(i.key)}
              </a>
            ))}
            <div className="mt-3 flex items-center gap-2">
              {(["en", "de"] as const).map((l) => (
                <button
                  key={l}
                  type="button"
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`min-h-11 px-4 rounded-full border border-border text-sm uppercase tracking-wider ${
                    lang === l ? "bg-foreground text-background" : "text-muted-foreground"
                  }`}
                >
                  {l}
                </button>
              ))}
              <a
                href="#appointment"
                onClick={() => setOpen(false)}
                className="ml-auto inline-flex items-center min-h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                {t("nav.book")}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
