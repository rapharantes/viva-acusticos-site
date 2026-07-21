import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import CookieBanner from "@/components/CookieBanner";
import GoogleReviews from "@/components/GoogleReviews";
import InstagramFeed from "@/components/InstagramFeed";
import ClientsMarquee from "@/components/ClientsMarquee";
import VideoMarquee from "@/components/VideoMarquee";
import { EVENT_TYPES, GALLERY_IMAGES, PRESENTATION_VIDEO_ID, SERVICES, WHATSAPP_URL } from "@/lib/data";

const FAQS = [
  {
    question: "Quais estilos musicais o Viva Acústicos toca?",
    answer:
      "Trabalhamos com um repertório versátil que vai de MPB, Sertanejo, Pop/Rock, Samba e Pagode a Gospel/Louvores, músicas nacionais e internacionais. Também oferecemos serviço de DJ (Deejay) para quem prefere um repertório mais eletrônico.",
  },
  {
    question: "Quais formatos de apresentação estão disponíveis?",
    answer:
      "Do simples voz e violão ao duo, trio ou banda completa — o formato é escolhido de acordo com o porte e o estilo do seu evento, sempre com apresentação 100% ao vivo.",
  },
  {
    question: "O Viva Acústicos atende casamentos, formaturas e eventos corporativos?",
    answer:
      "Sim. Atendemos casamentos, formaturas, aniversários, eventos corporativos e também mantemos agenda fixa de shows para bares e restaurantes em parceria com a LK Produções.",
  },
  {
    question: "Além dos músicos, vocês fornecem som e iluminação para o evento?",
    answer:
      "Sim, oferecemos infraestrutura completa: palco, sonorização profissional, iluminação, painéis de LED e equipe técnica para cuidar de cada detalhe do seu evento.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer:
      "Basta preencher o formulário no site com os dados do seu evento ou chamar diretamente no WhatsApp. Nosso time retorna rapidamente com uma proposta personalizada e sem compromisso.",
  },
  {
    question: "Vocês atendem em Belo Horizonte e região?",
    answer:
      "Sim, atendemos Belo Horizonte e toda a região metropolitana, levando música ao vivo, som e iluminação para eventos particulares e corporativos.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CookieBanner />

      {/* HERO */}
      <section className="relative overflow-hidden bg-page">
        <Navbar />
        <Image
          src="/images/2025/07/banner.webp"
          alt=""
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        <div className="container-max relative grid gap-10 pt-40 pb-20 lg:grid-cols-2 lg:pt-56 lg:pb-28">
          <div>
            <h1 className="text-[44px] font-bold leading-[1.06] tracking-tight text-white sm:text-[60px] lg:text-[80px]">
              Precisa de <br /> música ao vivo?
              <br />
              <span className="txt-lkgold">Contrate Aqui!</span>
            </h1>
            <p className="mt-6 max-w-lg text-[18px] leading-relaxed text-white/90">
              Você procura música ao vivo para seu evento? Do voz e violão a banda completa, DJ
              (Deejay), vários estilos musicais{" "}
              <b>(MPB, Pop Rock, Sertanejo, Nacional e Internacional).</b> <b>Encontre tudo aqui!</b>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-pill gradient-cta-green px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
            >
              Agende um Show!
            </a>
          </div>

          <div id="orcamento" className="lg:justify-self-end lg:w-full lg:max-w-md">
            <ContactForm variant="hero" />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-white/5 bg-darkest">
        <div className="container-max grid gap-6 py-8 text-[15px] text-white/85 sm:grid-cols-3">
          <p>Banda ou músicos acústicos profissionais (duo, trio, banda completa)</p>
          <p>Material completos para o evento: Aluguel de som, iluminação e DJ</p>
          <p>Produção completa para casamentos, formaturas e eventos corporativos</p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
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
              Por que escolher o <span className="txt-lkgold">Viva Acústicos?</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {[
                "Apresentações 100% ao vivo – qualidade, emoção e autenticidade em cada nota",
                "Formatos flexíveis – voz e violão, duo, trio ou banda para adequar ao estilo e porte do seu evento",
                "Solução completa – Músicos, sonorização, iluminação, e DJ para seu evento!",
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
              Agende um Show
            </a>
          </div>
        </div>
      </section>

      {/* PRESENTATION VIDEO */}
      <section className="section-pad bg-darkest">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">
              Conheça o <span className="txt-lkgold">Viva Acústicos</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Assista ao nosso vídeo de apresentação e veja de perto a energia e a qualidade que
              levamos para cada evento.
            </p>
          </div>
          <div className="mx-auto mt-12 aspect-video max-w-4xl overflow-hidden rounded-xl shadow-xl">
            <iframe
              src={`https://www.youtube.com/embed/${PRESENTATION_VIDEO_ID}`}
              title="Vídeo de apresentação - Viva Acústicos"
              className="h-full w-full"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="section-pad bg-surface">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="whitespace-nowrap text-[24px] font-bold text-white sm:text-[32px] lg:text-[42px]">
              Serviços completos para o seu evento
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Todas as apresentações vão do formato de um simples voz e violão ao duo, trio ou
              banda completa. Dessa forma, conseguimos atender com qualidade a qualquer tipo de
              evento, cerimônia, casamentos, aniversários e muito mais!
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {SERVICES.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-md bg-page">
                <div className="relative h-56 w-full">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-[22px] font-bold text-white">{service.title}</h3>
                  <p className="mb-4 text-[15px] leading-relaxed text-white/80">{service.description}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] font-bold text-accent hover:text-accent-hover"
                  >
                    Clique para falar no Whatsapp →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES + GALLERY */}
      <section id="tipos-de-eventos" className="section-pad bg-page">
        <div className="container-max grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">
              Estamos preparados para todos os eventos
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Viva Acústicos, um projeto que incorpora músicos de qualidade profissional.
              Oferecemos apresentações diferenciadas, atrativas e executadas totalmente AO VIVO!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-pill gradient-cta-blue px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
            >
              Agende um Show
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {EVENT_TYPES.map((ev) => (
              <div key={ev.label} className="rounded-md bg-surface p-6">
                <Image src={ev.icon} alt="" width={32} height={32} className="mb-4 h-8 w-8" />
                <p className="text-[16px] text-white/90">
                  <b>{ev.label}:</b> {ev.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div id="galeria" className="container-max mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((src, i) => (
            <div key={src} className={`relative aspect-square overflow-hidden rounded-lg ${i === 0 ? "col-span-2 row-span-2 aspect-auto" : ""}`}>
              <Image
                src={src}
                alt={`Foto ${i + 1} de evento com música ao vivo realizado pelo Viva Acústicos`}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* VIDEO MARQUEE - SHOWS */}
      <section className="section-pad bg-surface">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="whitespace-nowrap text-[26px] font-bold text-white sm:text-[32px] lg:text-[42px]">
              Assista a alguns dos nossos shows
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Uma amostra do nosso repertório ao vivo, direto do canal do Viva Acústicos no
              YouTube.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <VideoMarquee />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="clientes" className="section-pad bg-page">
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

      {/* INSTAGRAM FEED */}
      <section className="section-pad bg-surface">
        <div className="container-max">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="whitespace-nowrap text-[22px] font-bold text-white sm:text-[32px] lg:text-[38px]">
              Siga o Viva Acústicos no Instagram
            </h2>
            <p className="mt-4 text-[16px] text-white/80">
              Acompanhe bastidores, shows e novidades direto do nosso perfil.
            </p>
          </div>

          <div className="mt-12">
            <InstagramFeed />
          </div>
        </div>
      </section>

      {/* BAR/RESTAURANT CTA + LOGOS MARQUEE */}
      <section className="section-pad bg-page">
        <div className="container-max text-center">
          <h2 className="mx-auto text-[24px] font-bold leading-tight text-white sm:text-[30px] lg:text-[34px]">
            Deixe a Agenda de Shows do seu Bar ou
            <br />
            Restaurantes por conta do <span className="txt-lkgold">Viva Acústicos e LK Produções!</span>
          </h2>
          <p className="mt-4 text-[16px] text-white/80">
            Para você que é dono de Bar ou Restaurante nossa equipe pode cuidar da sua agenda de
            Eventos!
          </p>
        </div>
        <div className="mt-12">
          <ClientsMarquee />
        </div>
      </section>

      {/* BUDGET FORM */}
      <section className="section-pad bg-surface">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">
              Solicite seu orçamento personalizado
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Viva Acústicos: a combinação perfeita para tornar seu evento memorável. Faça do seu
              evento uma experiência única com som, luz e emoção!
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Proposta completa e sem compromisso",
                "Planejamento ajustado ao seu estilo e público",
                "Retorno rápido — nosso time entrará em contato em breve",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-[16px] text-white/90">
                  <CheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <ContactForm variant="footer" />
        </div>
      </section>

      {/* FAQ */}
      <section id="perguntas-frequentes" className="section-pad bg-page">
        <div className="container-max">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-[32px] font-bold text-white sm:text-[42px]">Perguntas Frequentes</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Tire suas dúvidas sobre música ao vivo, som e iluminação para o seu evento.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {FAQS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-md bg-surface p-6 open:bg-surface"
              >
                <summary className="cursor-pointer list-none text-[17px] font-bold text-white marker:content-none">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-[15px] leading-relaxed text-white/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* MUSICIAN CTA */}
      <section className="bg-darkest py-14 text-center">
        <div className="container-max">
          <h2 className="text-[24px] font-bold text-white sm:text-[28px]">
            Ei músico! Entre em contato e faça parte da nossa equipe
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-pill gradient-cta-green px-10 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
          >
            Fale agora pelo WhatsApp
          </a>
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
