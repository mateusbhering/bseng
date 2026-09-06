import Image from "next/image";
import Reveal from "@/components/Reveal";
import { projectTypes } from "@/lib/data";

export default function ProjectTypes() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <p className="tech-label">Atuação</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Soluções para diferentes escalas.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((type, index) => (
            <Reveal key={type.title} delay={(index % 3) * 0.08}>
              <figure className="group">
                <div className="relative aspect-[4/3] overflow-hidden border border-line">
                  <Image
                    src={type.image}
                    alt={type.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-b border-line pb-3 transition-colors duration-300 group-hover:border-green">
                  <span className="font-display text-base font-semibold text-ink">
                    {type.title}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-gray">
                    0{index + 1}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
