import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/data";

export default function ClientsMarquee() {
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="overflow-hidden">
      <div className="marquee-track items-center">
        {doubled.map((logo, i) => (
          <div key={`${logo.name}-${i}`} className="flex h-24 w-36 shrink-0 items-center justify-center opacity-80 grayscale transition-opacity hover:opacity-100 hover:grayscale-0">
            <Image src={logo.src} alt={logo.name} width={136} height={136} className="max-h-20 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}
