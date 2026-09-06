import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

const heroMetrics = [
  "+30 anos de experiência",
  "Projetos residenciais, comerciais, institucionais e industriais",
  "Engenharia especializada em concreto armado",
];

export default function Hero() {
  return (
    <section id="inicio" className="blueprint-grid relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-28 pb-16 sm:px-8 lg:min-h-dvh lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:pt-32 lg:pb-24">
        {/* Texto */}
        <div className="relative">
          <Reveal>
            <p className="tech-label flex items-center gap-3 text-green">
              <span className="inline-block h-px w-10 bg-green" aria-hidden="true" />
              Engenharia estrutural • Desde 1991
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-extrabold tracking-tight text-ink sm:text-6xl lg:text-[4.4rem]">
              Engenharia que sustenta{" "}
              <span className="text-green">grandes projetos.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-gray sm:text-lg">
              Há mais de três décadas desenvolvemos soluções estruturais
              seguras, eficientes e economicamente inteligentes para projetos
              de diferentes escalas e complexidades.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 bg-green px-7 py-4 text-sm font-medium text-white transition-all duration-200 hover:bg-green-dark active:translate-y-px"
              >
                Solicitar uma proposta
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#servicos"
                className="inline-flex items-center justify-center border border-ink/20 px-7 py-4 text-sm font-medium text-ink transition-colors duration-200 hover:border-green hover:text-green"
              >
                Conhecer serviços
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <ul className="mt-14 grid gap-5 border-t border-line pt-8 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <li
                  key={metric}
                  className="border-l-2 border-green/60 pl-4 text-sm leading-snug text-ink/75"
                >
                  {metric}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Imagem com marcações técnicas */}
        <Reveal delay={0.2} className="relative hidden lg:block">
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/hero-structure.svg"
              alt="Estrutura de edifício em concreto com pilares e lajes aparentes"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Moldura técnica */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 border border-ink/15"
            />
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 125"
              preserveAspectRatio="none"
            >
              <line x1="8" y1="0" x2="8" y2="125" stroke="#054205" strokeWidth="0.15" opacity="0.5" />
              <line x1="0" y1="14" x2="100" y2="14" stroke="#054205" strokeWidth="0.15" opacity="0.5" />
              <line x1="0" y1="111" x2="100" y2="111" stroke="#171a18" strokeWidth="0.15" opacity="0.35" />
            </svg>
          </div>
          <p className="tech-label mt-3 flex justify-between">
            <span>BSE / Structural Engineering</span>
            <span>EST. 1991</span>
          </p>
        </Reveal>
      </div>

      {/* Coordenadas decorativas */}
      <p
        aria-hidden="true"
        className="tech-label absolute bottom-6 left-5 hidden sm:px-3 lg:block"
      >
        19°55′S — 43°56′W / Belo Horizonte, MG
      </p>
    </section>
  );
}
