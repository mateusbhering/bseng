import { ArrowUpRight, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { contact } from "@/lib/data";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

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
                      Telefone fixo
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
                href={contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 border-b border-line py-6 transition-colors duration-200 hover:border-green"
              >
                <span className="flex items-center gap-5">
                  <WhatsAppIcon className="h-5 w-5 text-green" />
                  <span className="flex flex-col">
                    <span className="font-mono text-[10px] tracking-[0.22em] text-gray uppercase">
                      WhatsApp
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
