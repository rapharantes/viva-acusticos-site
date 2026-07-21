import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const GTM_ID = "GTM-MVF36H2Z";
const SITE_URL = "https://www.vivaacusticos.com.br";
const SITE_NAME = "Viva Acústicos";
const OG_IMAGE = "/images/marca/og-image.jpg";
const DEFAULT_DESCRIPTION =
  "Viva Acústicos leva música ao vivo, som e iluminação profissional para casamentos, formaturas, eventos corporativos, aniversários e agenda de shows de bares e restaurantes em Belo Horizonte e região. Voz e violão, duo, trio, banda completa ou DJ, com repertório em MPB, Sertanejo, Pop/Rock, Samba/Pagode e muito mais. Peça seu orçamento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Viva Acústicos – Música ao Vivo, Som e Iluminação para Eventos em BH e Região",
    template: "%s | Viva Acústicos",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "música ao vivo para eventos",
    "banda para casamento",
    "voz e violão para eventos",
    "aluguel de som e iluminação",
    "DJ para festa e evento",
    "música ao vivo Belo Horizonte",
    "banda para formatura",
    "banda para evento corporativo",
    "agenda de shows para bares e restaurantes",
    "Viva Acústicos",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: "LK Produções",
  category: "Entretenimento e Eventos",
  applicationName: SITE_NAME,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Viva Acústicos – Música ao Vivo, Som e Iluminação para Eventos",
    description:
      "Bandas, voz e violão, DJ, som e iluminação profissional para casamentos, formaturas, eventos corporativos e agenda de shows de bares e restaurantes.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Viva Acústicos - Música ao vivo para o seu evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viva Acústicos – Música ao Vivo para Eventos",
    description: "Bandas, voz e violão, DJ, som e iluminação profissional para o seu evento.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "LK Produções e Viva Acústicos",
  description: DEFAULT_DESCRIPTION,
  url: SITE_URL,
  telephone: "+5531991891820",
  email: "viva.acusticos@gmail.com",
  image: `${SITE_URL}/images/marca/logo-principal-circular.png`,
  logo: `${SITE_URL}/images/marca/logo-principal-circular.png`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Belo Horizonte" },
    { "@type": "AdministrativeArea", name: "Região Metropolitana de Belo Horizonte" },
  ],
  sameAs: ["https://www.instagram.com/vivaacusticos", "https://www.youtube.com/@vivaacusticos"],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Música ao vivo para eventos",
        description: "Voz e violão, duo, trio ou banda completa, com repertório em MPB, Sertanejo, Pop/Rock, Samba/Pagode e Gospel.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "DJ para eventos",
        description: "Serviço de Deejay para festas, casamentos e eventos corporativos.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Aluguel de som e iluminação",
        description: "Estrutura completa de palco, sonorização, iluminação profissional e painéis de LED.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Vídeos e filmagens de eventos",
        description: "Cobertura em vídeo e foto para registrar os melhores momentos do evento.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/*
          Algumas extensões de navegador (bloqueadores de anúncio, cupons, tradutores etc.)
          inserem ou removem elementos do DOM por fora do controle do React. Isso pode fazer
          o React lançar "NotFoundError: Failed to execute 'removeChild'/'insertBefore'" durante
          a navegação entre páginas, quebrando a troca de rota para quem tem essas extensões
          instaladas. Este patch torna removeChild/insertBefore tolerantes a esse cenário,
          evitando que a navegação quebre por causa de um script de terceiros.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
  if (typeof Node !== "function" || !Node.prototype) return;
  var origRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function(child) {
    try {
      return origRemoveChild.call(this, child);
    } catch (e) {
      if (e && e.name === "NotFoundError") return child;
      throw e;
    }
  };
  var origInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function(newNode, referenceNode) {
    try {
      return origInsertBefore.call(this, newNode, referenceNode);
    } catch (e) {
      if (e && e.name === "NotFoundError") return this.appendChild(newNode);
      throw e;
    }
  };
})();`,
          }}
        />
      </head>
      {/* suppressHydrationWarning: extensões de navegador (ex.: ColorZilla) injetam atributos no body antes do React hidratar */}
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <WhatsAppFloat />
        <GoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
