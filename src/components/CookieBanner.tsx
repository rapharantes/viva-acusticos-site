"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "viva-acusticos-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(STORAGE_KEY);
    if (!consent) setVisible(true);
  }, []);

  function choose(value: "accepted" | "rejected") {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm rounded-md bg-white p-5 text-neutral-900 shadow-xl">
      <h3 className="mb-2 text-[16px] font-bold">Valorizamos a sua privacidade</h3>
      <p className="mb-4 text-[14px] leading-relaxed text-neutral-600">
        Utilizamos cookies para melhorar sua experiência de navegação, veicular anúncios ou
        conteúdo personalizado e analisar nosso tráfego. Ao clicar em &quot;Aceitar tudo&quot;,
        você concorda com o uso de cookies.{" "}
        <Link href="/politica-de-privacidade" className="text-accent-link underline">
          Política de Privacidade
        </Link>
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => choose("rejected")}
          className="flex-1 rounded-sm border border-neutral-900/20 px-4 py-2 text-[14px] font-medium"
        >
          Rejeitar tudo
        </button>
        <button
          onClick={() => choose("accepted")}
          className="flex-1 rounded-sm bg-neutral-900 px-4 py-2 text-[14px] font-medium text-white"
        >
          Aceitar tudo
        </button>
      </div>
    </div>
  );
}
