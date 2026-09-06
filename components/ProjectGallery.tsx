import Image from "next/image";
import Reveal from "@/components/Reveal";
import { galleryItems } from "@/lib/data";

/**
 * Galeria visual. As imagens são placeholders em /public/images —
 * para trocar por fotografias reais, basta substituir os arquivos ou
 * atualizar os caminhos em lib/data.ts (galleryItems).
 */
export default function ProjectGallery() {
  const [first, second, third, fourth] = galleryItems;

  return (
    <section id="experiencia" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tech-label">Experiência</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Estruturas que dão forma à arquitetura.
              </h2>
            </div>
            <p className="tech-label hidden sm:block">BSE / Est. 1991</p>
          </div>
        </Reveal>

        {/* Composição assimétrica */}
        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <GalleryImage item={first} ratio="aspect-[3/2]" />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <GalleryImage item={second} ratio="aspect-[3/2] lg:aspect-auto lg:h-full" />
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-5">
            <GalleryImage item={third} ratio="aspect-[4/3]" />
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <GalleryImage item={fourth} ratio="aspect-[16/9] lg:aspect-auto lg:h-full" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function GalleryImage({
  item,
  ratio,
}: {
  item: (typeof galleryItems)[number];
  ratio: string;
}) {
  return (
    <figure className="group h-full">
      <div className={`relative overflow-hidden border border-line ${ratio}`}>
        <Image
          src={item.image}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <figcaption className="tech-label absolute bottom-3 left-4 bg-white/80 px-2 py-1 backdrop-blur-sm">
          {item.label}
        </figcaption>
      </div>
    </figure>
  );
}
