import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vivaacusticos.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/aluguel-de-som-e-iluminacao", changeFrequency: "monthly", priority: 0.8 },
    { path: "/politica-de-privacidade", changeFrequency: "monthly", priority: 0.3 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
