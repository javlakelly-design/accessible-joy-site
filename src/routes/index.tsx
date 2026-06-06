import { createFileRoute } from "@tanstack/react-router";
import { I18nProvider } from "@/lib/i18n";
import { Home } from "@/components/site/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "XTTRACTION — EMS corporate fitness, on-site" },
      {
        name: "description",
        content:
          "Factory Future Fitness brings 20-minute EMS workouts directly to your workplace. Modern, inclusive corporate fitness in English & Deutsch.",
      },
      { property: "og:title", content: "XTTRACTION — EMS corporate fitness, on-site" },
      {
        property: "og:description",
        content: "20-minute EMS workouts delivered to your team, in your office.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <I18nProvider>
      <Home />
    </I18nProvider>
  );
}
