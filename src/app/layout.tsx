import type { Metadata } from "next";
import "./globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";

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
      {/* suppressHydrationWarning: extensões de navegador (ex.: ColorZilla) injetam atributos no body antes do React hidratar */}
      <body suppressHydrationWarning>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
