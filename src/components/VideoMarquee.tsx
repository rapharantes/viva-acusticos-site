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
            className="group relative block w-[420px] shrink-0 overflow-hidden rounded-xl bg-surface shadow-lg transition-transform hover:scale-[1.03] sm:w-[520px]"
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
          </a>
        ))}
      </div>
    </div>
  );
}
