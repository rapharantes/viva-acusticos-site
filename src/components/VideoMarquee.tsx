import Image from "next/image";
import { SHOW_VIDEOS } from "@/lib/data";

export default function VideoMarquee() {
  const doubled = [...SHOW_VIDEOS, ...SHOW_VIDEOS];

  return (
    <div className="overflow-hidden">
      <div className="marquee-track marquee-track--videos items-start">
        {doubled.map((video, i) => (
          <a
            key={`${video.id}-${i}`}
            href={`https://www.youtube.com/watch?v=${video.id}&list=PLOkdNLI7PLV70_ubUUF30kIuQx5O4sKH7`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-56 shrink-0 overflow-hidden rounded-lg bg-surface shadow-lg transition-transform hover:scale-[1.03]"
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
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                  <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-darkest">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
            </div>
            <p className="truncate px-3 py-2 text-[13px] font-medium text-white/90">{video.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
