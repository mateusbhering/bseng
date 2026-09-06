import Reveal from "@/components/Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="blueprint-grid border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <p className="tech-label">Processo</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Do desafio à solução estrutural.
          </h2>
        </Reveal>

        {/* Timeline: vertical no mobile, horizontal no desktop */}
        <ol className="relative mt-14 grid gap-10 border-l border-line pl-8 lg:grid-cols-4 lg:gap-8 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-10">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <li className="relative">
                {/* Marcador na linha */}
                <span
                  aria-hidden="true"
                  className="absolute top-1.5 -left-[2.28rem] h-2.5 w-2.5 rounded-full border-2 border-green bg-bg lg:-top-[2.85rem] lg:left-0"
                />
                <p className="font-display text-3xl font-extrabold text-green">
                  {step.number}
                </p>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-gray">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
