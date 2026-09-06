import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contato" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* Chamada */}
          <Reveal>
            <p className="tech-label">Contato</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-gray">
              Entre em contato conosco para solicitar uma proposta ou conversar
              sobre os desafios estruturais do seu projeto.
            </p>
            <p className="tech-label mt-12 hidden lg:block">
              Engenharia Estrutural • {contact.city}
            </p>
          </Reveal>

          {/* Canais */}
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col justify-center gap-2">
              <a
                href={contact.phoneHref}
                className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors duration-200 hover:border-green"
              >
                <span className="flex items-center gap-5">
                  <Phone size={20} strokeWidth={1.5} className="text-green" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-gray uppercase">
                      Telefone
                    </span>
                    <span className="mt-1 font-display text-xl font-semibold text-ink transition-colors group-hover:text-green sm:text-2xl">
                      {contact.phoneDisplay}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-gray/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green"
                  aria-hidden="true"
                />
              </a>

              <a
                href={contact.emailHref}
                className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors duration-200 hover:border-green"
              >
                <span className="flex min-w-0 items-center gap-5">
                  <Mail size={20} strokeWidth={1.5} className="text-green" aria-hidden="true" />
                  <span className="flex min-w-0 flex-col">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-gray uppercase">
                      E-mail
                    </span>
                    <span className="mt-1 truncate font-display text-lg font-semibold text-ink transition-colors group-hover:text-green sm:text-2xl">
                      {contact.email}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-gray/50 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-green"
                  aria-hidden="true"
                />
              </a>

              <p className="tech-label mt-8 lg:hidden">
                Engenharia Estrutural • {contact.city}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
