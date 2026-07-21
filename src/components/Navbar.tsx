"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS, WHATSAPP_URL } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="container-max flex items-center justify-between gap-6 py-6">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/marca/logo-horizontal-com-slogan.png"
            alt="Viva Acústicos"
            width={811}
            height={221}
            className="h-14 w-auto md:h-20"
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-[16px] text-white transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center rounded-pill gradient-cta-blue px-8 py-[18px] text-[16px] font-bold uppercase text-darkest transition-transform hover:scale-[1.03]"
        >
          Agende um Show
        </a>

        <button
          aria-label="Alternar menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span className={`h-0.5 w-7 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-darkest/98 px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-[16px] text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center justify-center rounded-pill gradient-cta-blue px-8 py-[14px] text-[16px] font-bold uppercase text-darkest"
              >
                Agende um Show
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
