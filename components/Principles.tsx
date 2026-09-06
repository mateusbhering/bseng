import Reveal from "@/components/Reveal";
import { principles } from "@/lib/data";

export default function Principles() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <p className="tech-label">Princípios</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Engenharia além do cálculo.
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={index * 0.08}>
              <article className="group h-full border-t border-line py-8 pr-8 transition-colors duration-300 hover:border-green lg:min-h-64">
                <p className="font-display text-4xl font-extrabold text-gray/30 transition-colors duration-300 group-hover:text-green">
                  {principle.number}
                </p>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray">
                  {principle.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
