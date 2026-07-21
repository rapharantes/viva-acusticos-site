import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const GTM_ID = "GTM-MVF36H2Z";

export const metadata: Metadata = {
  title:
    "Viva Acústicos – Música Ao Vivo",
  description:
    "O Viva Acústicos oferece música ao vivo de alta qualidade para eventos que pedem sofisticação, emoção e boa energia. Com formações acústicas versáteis e repertório cuidadosamente selecionado, levamos ao seu evento uma experiência musical envolvente, elegante e personalizada, ideal para eventos corporativos, celebrações, confraternizações e momentos especiais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
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
      </body>
    </html>
  );
}
