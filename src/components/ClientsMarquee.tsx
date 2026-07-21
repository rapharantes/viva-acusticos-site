import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientsMarquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track marquee-track--partners items-center">
        {doubled.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex h-[14rem] w-[14rem] shrink-0 items-center justify-center opacity-80 grayscale transition-opacity hover:opacity-100 hover:grayscale-0">
            <Image src={logo.src} alt={logo.name} width={416} height={416} unoptimized className="h-[11.7rem] w-[11.7rem] object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
