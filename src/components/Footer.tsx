import Image from "next/image";
import Link from "next/link";
import { CONTACTS, NAV_ITEMS, WHATSAPP_URL } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-darkest">
      <div className="container-max grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Image
            src="/images/marca/logo-horizontal-com-slogan.png"
            alt="Viva Acústicos"
            width={811}
            height={221}
            className="mb-4 h-16 w-auto md:h-20"
          />
          <div className="flex gap-3">
            <a href={CONTACTS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <SocialIcon path="M12 2.2c3.2 0 3.6 0 4.8.07 1.2.06 2 .25 2.5.42.6.24 1 .5 1.5 1 .5.5.76.9 1 1.5.17.5.36 1.3.42 2.5.06 1.2.07 1.6.07 4.8s0 3.6-.07 4.8c-.06 1.2-.25 2-.42 2.5-.24.6-.5 1-1 1.5-.5.5-.9.76-1.5 1-.5.17-1.3.36-2.5.42-1.2.06-1.6.07-4.8.07s-3.6 0-4.8-.07c-1.2-.06-2-.25-2.5-.42-.6-.24-1-.5-1.5-1-.5-.5-.76-.9-1-1.5-.17-.5-.36-1.3-.42-2.5C2.21 15.6 2.2 15.2 2.2 12s0-3.6.07-4.8c.06-1.2.25-2 .42-2.5.24-.6.5-1 1-1.5.5-.5.9-.76 1.5-1 .5-.17 1.3-.36 2.5-.42C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52 0-4.76.07-1 .05-1.5.2-1.86.34-.47.18-.8.4-1.15.75-.35.35-.57.68-.75 1.15-.14.36-.29.86-.34 1.86C3.01 8.48 3 8.85 3 12s0 3.52.07 4.76c.05 1 .2 1.5.34 1.86.18.47.4.8.75 1.15.35.35.68.57 1.15.75.36.14.86.29 1.86.34 1.24.07 1.61.07 4.76.07s3.52 0 4.76-.07c1-.05 1.5-.2 1.86-.34.47-.18.8-.4 1.15-.75.35-.35.57-.68.75-1.15.14-.36.29-.86.34-1.86.07-1.24.07-1.61.07-4.76s0-3.52-.07-4.76c-.05-1-.2-1.5-.34-1.86-.18-.47-.4-.8-.75-1.15a3.1 3.1 0 0 0-1.15-.75c-.36-.14-.86-.29-1.86-.34C15.52 4 15.15 4 12 4Zm0 3.3a4.7 4.7 0 1 1 0 9.4 4.7 4.7 0 0 1 0-9.4Zm0 1.8a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Zm5-2.15a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
            </a>
            <a href={CONTACTS.youtube} target="_blank" rel="noopener noreferrer" aria-label="Youtube">
              <SocialIcon path="M23 12s0-3.6-.46-5.3a3 3 0 0 0-2.1-2.1C18.7 4.1 12 4.1 12 4.1s-6.7 0-8.44.5a3 3 0 0 0-2.1 2.1C1 8.4 1 12 1 12s0 3.6.46 5.3a3 3 0 0 0 2.1 2.1c1.74.5 8.44.5 8.44.5s6.7 0 8.44-.5a3 3 0 0 0 2.1-2.1C23 15.6 23 12 23 12ZM9.8 15.5V8.5l6.2 3.5-6.2 3.5Z" />
            </a>
          </div>
        </div>

        <div>
          <Image
            src="/images/2025/07/logo_lk_producoes-rodape.webp"
            alt="LK Produções"
            width={160}
            height={48}
            className="mb-2 h-20 w-auto md:h-24"
          />
          <p className="text-[14px] text-white/70">Parceiro Viva Acústicos</p>
        </div>

        <div>
          <h3 className="mb-4 text-[18px] font-bold text-white">Menu</h3>
          <ul className="space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-white/90 transition-colors hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/politica-de-privacidade" className="text-white/90 transition-colors hover:text-accent">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-white/90 transition-colors hover:text-accent">
                Entre em contato
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[18px] font-bold text-white">Contatos</h3>
          <ul className="space-y-3 text-white/90">
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                {CONTACTS.phone1}
              </a>
            </li>
            <li>{CONTACTS.phone2}</li>
            <li>
              <a href={`mailto:${CONTACTS.email}`} className="hover:text-accent">
                {CONTACTS.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="container-max text-center text-[14px] text-white/70">
          © 2026. Viva Acústicos <br className="md:hidden" />
          Todos direitos reservados.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ path }: { path: string }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-accent">
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
        <path d={path} />
      </svg>
    </span>
  );
}
