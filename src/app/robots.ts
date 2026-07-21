import type { MetadataRoute } from "next";

const SITE_URL = "https://www.vivaacusticos.com.br";

// Agentes de IA liberados explicitamente para leitura do site (GEO / Generative Engine Optimization):
// permite que ferramentas como ChatGPT, Perplexity, Claude e Google AI Overviews leiam e citem o conteúdo.
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "Google-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-Web",
  "anthropic-ai",
  "CCBot",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "Bytespider",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
