import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useI18n } from "@/lib/i18n";

const data = [
  { name: "EMS", value: 540, highlight: true },
  { name: "HIIT", value: 380 },
  { name: "Running", value: 300 },
  { name: "Cycling", value: 260 },
  { name: "Boxing", value: 240 },
  { name: "Football", value: 200 },
  { name: "Handball", value: 180 },
  { name: "Badminton", value: 150 },
];

export function CalorieChart() {
  const { t } = useI18n();
  return (
    <div className="rounded-2xl border border-border bg-surface/50 p-5 sm:p-8">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl">{t("chart.title")}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{t("chart.sub")}</p>
      </div>
      <div className="h-[340px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 8, left: -16, bottom: 8 }}>
            <CartesianGrid stroke="var(--color-border)" vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              tickLine={false}
              axisLine={{ stroke: "var(--color-border)" }}
            />
            <YAxis
              tick={{ fill: "var(--color-muted-foreground)", fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={48}
            />
            <Tooltip
              cursor={{ fill: "var(--color-elevated)", opacity: 0.5 }}
              contentStyle={{
                background: "var(--color-surface)",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                color: "var(--color-foreground)",
                fontSize: 13,
              }}
              formatter={(v: number) => [`${v} ${t("chart.unit")}`, ""]}
            />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {data.map((d, i) => (
                <Cell key={i} fill={d.highlight ? "var(--color-primary)" : "var(--color-elevated)"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
