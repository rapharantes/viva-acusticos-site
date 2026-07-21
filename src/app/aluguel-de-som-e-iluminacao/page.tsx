import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import GoogleReviews from "@/components/GoogleReviews";
import ClientsMarquee from "@/components/ClientsMarquee";
import { WHATSAPP_URL } from "@/lib/data";
import type { Metadata } from "next";

const PAGE_URL = "https://www.vivaacusticos.com.br/aluguel-de-som-e-iluminacao";

export const metadata: Metadata = {
  title: "Aluguel de Som e Iluminação para Eventos",
  description:
    "Aluguel de palco, som e iluminação profissional para eventos: sonorização de alta fidelidade, iluminação cênica, painéis de LED e pistas iluminadas. Estrutura completa com equipe técnica especializada em Belo Horizonte e região. Solicite uma cotação.",
  alternates: {
    canonical: "/aluguel-de-som-e-iluminacao",
  },
  openGraph: {
    title: "Aluguel de Som e Iluminação para Eventos | Viva Acústicos",
    description:
      "Palco, sonorização, iluminação profissional e painéis de LED para eventos particulares e corporativos.",
    url: PAGE_URL,
    images: [{ url: "/images/marca/og-image.jpg", width: 1200, height: 630 }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: "https://www.vivaacusticos.com.br/" },
    { "@type": "ListItem", position: 2, name: "Aluguel de Som e Iluminação", item: PAGE_URL },
  ],
};

const STRUCTURES = [
  {
    title: "Palco e Sonorização para Bandas",
    image: "/images/2025/07/banda-e-musicos-ao-vivo.webp",
    description:
      "Ofereça à sua banda o melhor: palcos modulares e som de alta qualidade com microfones, retornos e mesa digital para apresentações potentes e equilibradas.",
  },
  {
    title: "DJ (Deejay) + Sonorização e Iluminação",
    image: "/images/2025/07/som-e-iluminacao.webp",
    description:
      "Equipamentos profissionais de áudio e iluminação para garantir que seu evento tenha a melhor estrutura. Cuidamos de cada detalhe técnico para que você aproveite com tranquilidade.",
  },
  {
    title: "Pistas e Painéis de LED",
    image: "/images/2025/09/Captura-de-tela-2025-09-07-212211.png",
    description:
      "Experiência visual e sonora completa! Painéis de LED de alta definição e pistas iluminadas para transformar seu evento em um espetáculo inesquecível.",
  },
];

const GALLERY = [
  "/images/2025/09/IMG-20220401-WA0067.jpg",
  "/images/2025/09/IMG-20220401-WA0072.jpg",
  "/images/2025/09/IMG-20220401-WA0068.jpg",
  "/images/2025/09/IMG-20220401-WA0074.jpg",
  "/images/2025/09/IMG-20220401-WA0078.jpg",
];

export default function AluguelSomEIluminacao() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative overflow-hidden bg-page">
        <Navbar />
        <Image
          src="/images/2026/02/VIVA-ACUSTICOS-SOM-E-ILUMINACAO-PARA-EVENTOS.png"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="container-max relative pt-40 pb-20 lg:pt-56 lg:pb-28">
          <h1 className="max-w-2xl text-[40px] font-bold leading-[1.1] text-white sm:text-[56px]">
            Aluguel de <span className="txt-lkgold">Palco, Som e Iluminação</span>
          </h1>
          <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/90">
            Infraestrutura <b>COMPLETA</b> para seu Evento, <b>Encontre tudo aqui!</b>
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-pill gradient-cta-green px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
          >
            Faça uma Cotação
          </a>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">Veja algumas de nossas estruturas</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Cada evento pede uma estrutura à altura. Confira algumas das soluções que já
              realizamos em palco, som e iluminação e inspire-se para tornar o seu momento ainda
              mais especial.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STRUCTURES.map((s) => (
              <div key={s.title} className="overflow-hidden rounded-md bg-page">
                <div className="relative h-56 w-full">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[20px] font-bold text-white">{s.title}</h3>
                  <p className="text-[15px] leading-relaxed text-white/80">{s.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {GALLERY.map((src, i) => (
              <div key={src} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`Estrutura de palco, som e iluminação montada pelo Viva Acústicos - foto ${i + 1}`}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-page">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/2025/07/musico-sentado-tocando-violao.webp"
              alt="Músico sentado tocando violão no show"
              width={600}
              height={700}
              className="w-full rounded-xl object-cover shadow-xl"
            />
            <div className="absolute bottom-6 left-6 rounded-md bg-darkest/90 px-5 py-4 backdrop-blur-sm">
              <p className="font-bold text-accent">Viva Acústicos</p>
              <p className="max-w-[220px] text-[14px] text-white/80">
                A combinação perfeita para tornar o seu evento inesquecível.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-[32px] font-bold leading-tight text-white sm:text-[42px]">
              Por que escolher a <span className="txt-lkgold">Viva Acústicos?</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Apresentações 100% ao vivo – qualidade, emoção e autenticidade em cada nota",
                "Formatos flexíveis – duo, trio ou banda para adequar ao estilo e porte do seu evento",
                "Experiência completa – som, palco, iluminação, pistas de LED e DJ para animação garantida",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[16px] text-white/90">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-pill gradient-cta-blue px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
            >
              Faça uma Cotação
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">Alguns de nossos clientes</h2>
            <p className="mt-4 text-[16px] text-white/80">
              Conte com uma equipe experiente que te ajudará a criar o projeto perfeito para
              qualquer evento!
            </p>
          </div>
          <div className="mt-12">
            <GoogleReviews />
          </div>
        </div>
      </section>

      <section className="section-pad bg-page">
        <div className="container-max text-center">
          <h2 className="mx-auto max-w-3xl text-[28px] font-bold leading-tight text-white sm:text-[36px]">
            Deixe a Agenda de Shows do seu Bar ou Restaurantes por conta do Viva Acústicos e LK
            Produções!
          </h2>
        </div>
        <div className="mt-12">
          <ClientsMarquee />
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">
              Solicite seu orçamento personalizado
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Viva Acústicos é a combinação perfeita para tornar seu evento memorável. Faça do seu
              evento uma experiência única com som, luz e emoção!
            </p>
          </div>
          <ContactForm variant="footer" />
        </div>
      </section>

      <Footer />
    </>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 fill-accent">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.2 14.4-4.2-4.2 1.4-1.4 2.8 2.8 6-6 1.4 1.4-7.4 7.4Z" />
    </svg>
  );
}
