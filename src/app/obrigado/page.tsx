import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Obrigado pelo Contato",
  description: "Recebemos sua solicitação de orçamento. Em breve o time do Viva Acústicos entrará em contato.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaginaDeObrigado() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-page px-6 text-center">
      <Image
        src="/images/2025/07/logos-lk-producoes-viva-acusticos.webp"
        alt="Viva Acústicos e LK Produções"
        width={220}
        height={80}
        className="mb-10 h-16 w-auto"
      />
      <h1 className="max-w-xl text-[28px] font-bold text-white sm:text-[36px]">
        Sua solicitação foi recebida com sucesso!
      </h1>
      <p className="mt-4 max-w-md text-[16px] text-white/80">
        Em breve, nossa equipe entrará em contato para garantir que seu evento seja inesquecível.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center justify-center rounded-pill gradient-cta-blue px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
      >
        Voltar ao início
      </Link>
    </section>
  );
}
