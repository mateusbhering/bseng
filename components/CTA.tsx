import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function CTA() {
  return (
    <section className="blueprint-grid-dark bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-36">
        <Reveal>
          <p className="font-mono text-[0.625rem] tracking-[0.22em] uppercase text-white/40">
            BSE / Structural Engineering
          </p>
          <h2 className="mt-6 max-w-4xl font-display text-3xl leading-tight font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Projetar estruturas é transformar arquitetura em realidade.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
            Cada projeto exige equilíbrio entre segurança, eficiência,
            arquitetura e viabilidade construtiva.
          </p>
          <Link
            href="#contato"
            className="group mt-10 inline-flex items-center gap-3 border border-white/25 px-7 py-4 text-sm font-medium text-white transition-colors duration-200 hover:border-green-mid hover:bg-green-mid"
          >
            Fale com nossos engenheiros
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
