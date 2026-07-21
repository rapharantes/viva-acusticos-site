"use client";

import Image from "next/image";
import { useState } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const perView = 2;
  const maxIndex = Math.max(0, TESTIMONIALS.length - perView);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
        >
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="w-full shrink-0 px-3 sm:w-1/2">
              <div className="h-full rounded-md bg-surface p-6">
                <p className="mb-4 text-[16px] leading-relaxed text-white/90">&ldquo;{t.content}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <Image src={t.photo} alt={t.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <span className="font-medium text-white">{t.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          aria-label="Slide anterior"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          ‹
        </button>
        <button
          aria-label="Próximo slide"
          onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
        >
          ›
        </button>
      </div>
    </div>
  );
}
