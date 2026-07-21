"use client";

import { useState } from "react";
import Image from "next/image";
import { SHOW_VIDEOS } from "@/lib/data";

export default function VideoMarquee() {
  const doubled = [...SHOW_VIDEOS, ...SHOW_VIDEOS];
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const activeVideo = SHOW_VIDEOS.find((v) => v.id === activeVideoId) || null;

  return (
    <div className="overflow-hidden">
      <div className="marquee-track marquee-track--videos items-start">
        {doubled.map((video, i) => (
          <button
            key={`${video.id}-${i}`}
            type="button"
            onClick={() => setActiveVideoId(video.id)}
            className="group relative block w-[420px] shrink-0 overflow-hidden rounded-xl bg-surface text-left shadow-lg transition-transform hover:scale-[1.03] sm:w-[520px]"
          >
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                alt={`Vídeo: ${video.title} - William Maia e Viva Acústicos`}
                fill
                unoptimized
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" className="ml-1 h-9 w-9 fill-darkest">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <p className="truncate px-5 py-4 text-[18px] font-medium text-white/90">{video.title}</p>
          </button>
        ))}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideoId(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoId(null)}
              aria-label="Fechar vídeo"
              className="absolute -top-12 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white">
                <path d="M18.3 5.71 12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.3 6.3 1.41-1.41-6.3-6.3 6.3-6.3z" />
              </svg>
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`}
                title={`Vídeo: ${activeVideo.title} - William Maia e Viva Acústicos`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className="mt-3 text-center text-[16px] font-medium text-white/90">{activeVideo.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
