import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "de";

type Dict = Record<string, string>;

const en: Dict = {
  "nav.about": "About",
  "nav.services": "Services",
  "nav.tech": "Technology",
  "nav.team": "Team",
  "nav.book": "Book a session",

  "hero.eyebrow": "Factory Future Fitness",
  "hero.title": "Strength built into\nthe working day.",
  "hero.sub": "EMS corporate fitness delivered on-site. A full workout in 20 minutes, designed to fit into shifts, meetings and team culture — not around them.",
  "hero.cta": "Book a session",
  "hero.cta2": "How it works",

  "stats.time": "minutes per session",
  "stats.muscles": "of muscle groups trained",
  "stats.calories": "× calorie burn vs. conventional",
  "stats.results": "weeks to visible results",

  "about.eyebrow": "More than a workout",
  "about.title": "Fitness that respects your schedule.",
  "about.body": "We bring EMS training directly to your premises. No commute, no locker rooms, no excuses — just a focused session that improves health, posture and performance during working hours.",

  "services.eyebrow": "Services",
  "services.title": "Three ways we work with you.",
  "services.coach.title": "Personal Coaching",
  "services.coach.body": "One-on-one programmes built around your goals, schedule and current fitness — guided by certified EMS coaches.",
  "services.culture.title": "Company Culture",
  "services.culture.body": "A shared fitness ritual that brings teams together, supports wellbeing and signals real investment in people.",
  "services.tech.title": "Technology & Setup",
  "services.tech.body": "We install, train and support — turning a corner of your office into a fully equipped EMS studio in days, not months.",

  "ems.eyebrow": "EMS, explained",
  "ems.title": "20 minutes that train the whole body.",
  "ems.body": "Electrical Muscle Stimulation (EMS) sends gentle impulses through the X1200 suit, contracting up to 100% of your muscle groups simultaneously — up to 85 times per second. Originally developed for clinical rehab, now refined for performance.",
  "ems.bullet1": "Full-body activation in a single session",
  "ems.bullet2": "Up to 3× the calorie burn of conventional training",
  "ems.bullet3": "Visible results in 7 weeks at 2×/week",
  "ems.cta": "Read the science",

  "chart.title": "Calorie burn per 20-minute session",
  "chart.sub": "Compared with common sports, indicative figures.",
  "chart.unit": "kcal",

  "suit.eyebrow": "The X1200 suit",
  "suit.title": "High-tech, head to toe.",
  "suit.body": "Modular electrodes adapt to your body and target every major muscle group. Lightweight, breathable, and engineered for repeat daily use.",

  "team.eyebrow": "Our coaches",
  "team.title": "Trained to push you — kindly.",
  "team1.name": "Dennis",
  "team1.role": "Personal Coaching · EMS",
  "team2.name": "Lili",
  "team2.role": "Personal Coaching · Physio",
  "team3.name": "Vincent",
  "team3.role": "Personal Coaching · CEO",

  "inclusive.eyebrow": "For everyone",
  "inclusive.title": "A fitness concept that includes everyone.",
  "inclusive.body": "EMS supports people with physical limitations, strengthens sensorimotor and cognitive skills, and gives every body — at every level — a way in.",

  "appt.eyebrow": "Appointment",
  "appt.title": "Let's get you started.",
  "appt.body": "Pick a time that suits your team. We'll confirm within one working day.",
  "appt.cta": "Open booking calendar",
  "appt.or": "Or reach us directly",

  "footer.location": "Our location",
  "footer.maps": "Show on Google Maps",
  "footer.imprint": "Imprint",
  "footer.privacy": "Privacy policy",
  "footer.rights": "All rights reserved.",
};

const de: Dict = {
  "nav.about": "Über uns",
  "nav.services": "Leistungen",
  "nav.tech": "Technologie",
  "nav.team": "Team",
  "nav.book": "Termin buchen",

  "hero.eyebrow": "Factory Future Fitness",
  "hero.title": "Stärke, eingebaut in\nden Arbeitsalltag.",
  "hero.sub": "EMS-Firmenfitness direkt bei Ihnen vor Ort. Ein vollständiges Training in 20 Minuten — passt in Schichten, Meetings und Teamkultur, statt sich dagegen zu stellen.",
  "hero.cta": "Termin buchen",
  "hero.cta2": "So funktioniert's",

  "stats.time": "Minuten pro Einheit",
  "stats.muscles": "der Muskelgruppen aktiviert",
  "stats.calories": "× Kalorienverbrauch vs. herkömmlich",
  "stats.results": "Wochen bis zu sichtbaren Ergebnissen",

  "about.eyebrow": "Mehr als ein Workout",
  "about.title": "Fitness, die Ihren Tag respektiert.",
  "about.body": "Wir bringen EMS-Training direkt in Ihr Unternehmen. Keine Anfahrt, keine Umkleide, keine Ausreden — nur eine fokussierte Einheit, die Gesundheit, Haltung und Leistung während der Arbeitszeit verbessert.",

  "services.eyebrow": "Leistungen",
  "services.title": "Drei Wege, mit uns zu arbeiten.",
  "services.coach.title": "Personal Coaching",
  "services.coach.body": "Individuelle Programme, abgestimmt auf Ziele, Zeitplan und Fitnessstand — geführt von zertifizierten EMS-Coaches.",
  "services.culture.title": "Unternehmenskultur",
  "services.culture.body": "Ein gemeinsames Fitness-Ritual, das Teams verbindet, Wohlbefinden fördert und echte Wertschätzung zeigt.",
  "services.tech.title": "Technik & Setup",
  "services.tech.body": "Wir installieren, schulen und betreuen — aus einer Büroecke wird in Tagen ein voll ausgestattetes EMS-Studio.",

  "ems.eyebrow": "EMS erklärt",
  "ems.title": "20 Minuten, die den ganzen Körper trainieren.",
  "ems.body": "Elektrische Muskelstimulation (EMS) sendet sanfte Impulse durch den X1200-Anzug und kontrahiert bis zu 100 % der Muskelgruppen gleichzeitig — bis zu 85 mal pro Sekunde. Ursprünglich aus der Reha, heute fürs Training verfeinert.",
  "ems.bullet1": "Ganzkörperaktivierung in einer einzigen Einheit",
  "ems.bullet2": "Bis zu 3× Kalorienverbrauch im Vergleich zu klassischem Training",
  "ems.bullet3": "Sichtbare Ergebnisse in 7 Wochen bei 2× pro Woche",
  "ems.cta": "Mehr zur Wissenschaft",

  "chart.title": "Kalorienverbrauch pro 20-Minuten-Einheit",
  "chart.sub": "Im Vergleich zu gängigen Sportarten, Richtwerte.",
  "chart.unit": "kcal",

  "suit.eyebrow": "Der X1200-Anzug",
  "suit.title": "Hightech, von Kopf bis Fuß.",
  "suit.body": "Modulare Elektroden passen sich Ihrem Körper an und erreichen jede große Muskelgruppe. Leicht, atmungsaktiv, gemacht für den täglichen Einsatz.",

  "team.eyebrow": "Unsere Coaches",
  "team.title": "Trainiert, um Sie zu fordern — freundlich.",
  "team1.name": "Dennis",
  "team1.role": "Personal Coaching · EMS",
  "team2.name": "Lili",
  "team2.role": "Personal Coaching · Physio",
  "team3.name": "Vincent",
  "team3.role": "Personal Coaching · CEO",

  "inclusive.eyebrow": "Für alle",
  "inclusive.title": "Ein Fitnesskonzept, das alle einschließt.",
  "inclusive.body": "EMS unterstützt Menschen mit körperlichen Einschränkungen, stärkt sensomotorische und kognitive Fähigkeiten — und bietet jedem Körper, auf jedem Level, einen Einstieg.",

  "appt.eyebrow": "Termin",
  "appt.title": "Starten wir gemeinsam.",
  "appt.body": "Wählen Sie einen Termin, der zu Ihrem Team passt. Wir bestätigen innerhalb eines Werktages.",
  "appt.cta": "Buchungskalender öffnen",
  "appt.or": "Oder direkt erreichen",

  "footer.location": "Unser Standort",
  "footer.maps": "Auf Google Maps anzeigen",
  "footer.imprint": "Impressum",
  "footer.privacy": "Datenschutz",
  "footer.rights": "Alle Rechte vorbehalten.",
};

const dicts = { en, de };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: keyof typeof en) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = (typeof window !== "undefined" && localStorage.getItem("lang")) as Lang | null;
    if (stored === "en" || stored === "de") setLangState(stored);
    else if (typeof navigator !== "undefined" && navigator.language?.toLowerCase().startsWith("de")) {
      setLangState("de");
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
    if (typeof document !== "undefined") document.documentElement.lang = l;
  };

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const t = (k: keyof typeof en) => dicts[lang][k] ?? en[k];

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
