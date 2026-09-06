import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="empresa" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Destaque editorial */}
          <Reveal>
            <div className="flex h-full flex-col justify-between">
              <p className="tech-label">Empresa</p>
              <div className="mt-10 lg:mt-0">
                <p className="font-mono text-xs tracking-[0.3em] text-gray uppercase">
                  Desde
                </p>
                <p className="font-display text-[7rem] leading-none font-extrabold tracking-tight text-green sm:text-[9rem]">
                  1991
                </p>
                <div className="mt-6 h-px w-24 bg-green" aria-hidden="true" />
                <p className="mt-6 max-w-xs text-sm leading-relaxed text-gray">
                  Mais de três décadas transformando desafios estruturais em
                  soluções.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Texto */}
          <div>
            <Reveal>
              <h2 className="font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Engenharia baseada em experiência, rigor e responsabilidade.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-8 max-w-2xl space-y-6 text-base leading-relaxed text-gray sm:text-lg">
                <p>
                  Desde 1991, a Beltrão Santos Engenharia atua no
                  desenvolvimento de projetos de engenharia estrutural,
                  combinando experiência técnica, análises rigorosas e soluções
                  economicamente eficientes.
                </p>
                <p>
                  Nossa equipe é formada por profissionais dedicados ao
                  desenvolvimento de estruturas seguras, funcionais e adaptadas
                  às necessidades de cada projeto.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="tech-label mt-12 border-t border-line pt-6">
                Concrete Structures / Structural Design
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
