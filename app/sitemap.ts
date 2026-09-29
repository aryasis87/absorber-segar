import type { MetadataRoute } from "next";
import { TIPS } from "@/lib/tips";

const BASE = "https://absorber-segar.vercel.app";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/kamus-buah", priority: 0.9 },
  { path: "/hitung", priority: 0.9 },
  { path: "/tips", priority: 0.7 },
  ...TIPS.map((t) => ({ path: `/tips/${t.slug}`, priority: 0.6 })),
  { path: "/faq", priority: 0.8 },
  { path: "/kontak", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({ url: `${BASE}${r.path}`, lastModified, changeFrequency: "monthly", priority: r.priority }));
}
