import { useEffect, useRef, useState } from "react";
import { useI18n, type Lang } from "@/lib/i18n";

const navItems = [
  { id: "about", key: "nav.about" as const },
  { id: "services", key: "nav.services" as const },
  { id: "tech", key: "nav.tech" as const },
  { id: "team", key: "nav.team" as const },
];

const languages: { code: Lang; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "de", label: "German", native: "Deutsch" },
  { code: "uk", label: "Ukrainian", native: "Українська" },
];

function LanguagePicker({ variant = "header" }: { variant?: "header" | "mobile" }) {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const triggerLabel = variant === "mobile" ? "Change language" : "Change language";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${triggerLabel} (current: ${languages.find((l) => l.code === lang)?.native})`}
        className="inline-flex items-center gap-2 min-h-11 rounded-full border border-border bg-surface/70 px-4 text-sm font-medium text-foreground hover:bg-surface transition-colors"
      >
        <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
        <span>{triggerLabel}</span>
        <span className="uppercase tracking-wider text-muted-foreground">{lang}</span>
        <svg aria-hidden viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Languages"
          className={`absolute z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border bg-background shadow-xl ${
            variant === "mobile" ? "left-0" : "right-0"
          }`}
        >
          {languages.map((l) => {
            const selected = l.code === lang;
            return (
              <li key={l.code} role="option" aria-selected={selected}>
                <button
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors ${
                    selected
                      ? "bg-surface text-foreground"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <span className="flex flex-col">
                    <span className="font-medium text-foreground">{l.native}</span>
                    <span className="text-xs text-muted-foreground">{l.label}</span>
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {l.code}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export function Header() {
  const { t } = useI18n();
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
          <div className="hidden sm:block">
            <LanguagePicker />
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
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <LanguagePicker variant="mobile" />
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
