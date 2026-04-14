import type { Locale } from "@/lib/i18n";

export type DailyInfo = {
  status: string;
  temperature: string;
  wind: string;
  sea: string;
  note: string;
};

const fallbackByLocale: Record<Locale, DailyInfo> = {
  pt: {
    status: "Integração em breve",
    temperature: "Clima ao vivo",
    wind: "Vento ao vivo",
    sea: "Mar ao vivo",
    note: "Estrutura pronta para futura integração com clima e condições do dia.",
  },
  es: {
    status: "Integración próximamente",
    temperature: "Clima en vivo",
    wind: "Viento en vivo",
    sea: "Mar en vivo",
    note: "Estructura lista para futura integración con clima y condiciones del día.",
  },
  en: {
    status: "Integration coming soon",
    temperature: "Live weather",
    wind: "Live wind",
    sea: "Live sea",
    note: "Prepared for future weather and daily conditions integration.",
  },
};

export async function getDailyInfo(locale: Locale): Promise<DailyInfo> {
  return fallbackByLocale[locale];
}
