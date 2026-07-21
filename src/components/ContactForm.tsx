"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const MUSIC_STYLES = ["Sertanejo", "Pop/Rock", "Samba/Pagode", "MPB", "Gospel/Louvores", "Diversas", "Deejay DJ"];
const EVENT_TYPES = ["Evento Corporativo", "Casamento", "Aniversário", "Outros"];

// Número do WhatsApp que recebe os pedidos de orçamento (mesmo número do botão flutuante)
const WHATSAPP_NUMBER = "5531991891820";

function formatDateBR(value: string) {
  if (!value) return "Não informada";
  const [year, month, day] = value.split("-");
  return `${day}/${month}/${year}`;
}

export default function ContactForm({ variant = "hero" }: { variant?: "hero" | "footer" }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const nome = String(data.get("nome") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const estilo = String(data.get("estilo") || "");
    const tipoEvento = String(data.get("tipo_evento") || "");
    const dataEvento = formatDateBR(String(data.get("data_evento") || ""));
    const convidados = String(data.get("convidados") || "").trim() || "Não informado";

    const mensagem =
      `Olá! Gostaria de solicitar um orçamento para meu evento:\n\n` +
      `*Nome:* ${nome}\n` +
      `*Telefone/WhatsApp:* ${telefone}\n` +
      `*Estilo musical desejado:* ${estilo}\n` +
      `*Tipo de evento:* ${tipoEvento}\n` +
      `*Data do evento:* ${dataEvento}\n` +
      `*Número de convidados:* ${convidados}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => router.push("/obrigado"), 300);
  }

  const idPrefix = variant;

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-md bg-darkest/90 p-6 shadow-xl backdrop-blur-sm md:p-9"
    >
      <div className="mb-4">
        <label htmlFor={`${idPrefix}-nome`} className="mb-2 block text-[16px] font-medium text-white">
          Nome completo:
        </label>
        <input
          id={`${idPrefix}-nome`}
          name="nome"
          type="text"
          required
          placeholder="Nome completo"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`${idPrefix}-tel`} className="mb-2 block text-[16px] font-medium text-white">
          Telefone/WhatsApp:
        </label>
        <input
          id={`${idPrefix}-tel`}
          name="telefone"
          type="text"
          required
          placeholder="(XX) 99999-9999"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>

      <div className="mb-4">
        <label htmlFor={`${idPrefix}-estilo`} className="mb-2 block text-[16px] font-medium text-white">
          Estilo musical desejado:
        </label>
        <select
          id={`${idPrefix}-estilo`}
          name="estilo"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white outline-none focus:ring-1 focus:ring-white/20"
        >
          {MUSIC_STYLES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor={`${idPrefix}-tipo`} className="mb-2 block text-[16px] font-medium text-white">
          Tipo de evento:
        </label>
        <select
          id={`${idPrefix}-tipo`}
          name="tipo_evento"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white outline-none focus:ring-1 focus:ring-white/20"
        >
          {EVENT_TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor={`${idPrefix}-data`} className="mb-2 block text-[16px] font-medium text-white">
          Data do seu evento:
        </label>
        <input
          id={`${idPrefix}-data`}
          name="data_evento"
          type="date"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>

      <div className="mb-5">
        <label htmlFor={`${idPrefix}-convidados`} className="mb-2 block text-[16px] font-medium text-white">
          Número de convidados:
        </label>
        <input
          id={`${idPrefix}-convidados`}
          name="convidados"
          type="text"
          placeholder="Coloque aqui a quantidade aproximada de convidados"
          className="w-full rounded-sm bg-surface px-4 py-2 text-[16px] text-white placeholder:text-neutral-500 outline-none focus:ring-1 focus:ring-white/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-sm gradient-gold py-5 text-[16px] font-bold text-darkest transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "ENVIANDO..." : "ENVIAR MENSAGEM"}
      </button>

      <p className="mt-3 text-center text-[13px] text-neutral-500">
        Fique tranquilo, seus dados estão protegidos.
      </p>
    </form>
  );
}
