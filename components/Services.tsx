import Reveal from "@/components/Reveal";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="tech-label">Serviços</p>
              <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Especialidades
              </h2>
            </div>
            <p className="tech-label hidden sm:block">
              Structural Design / Est. 1991
            </p>
          </div>
        </Reveal>

        <ul className="mt-14">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.number} delay={index * 0.06}>
                <li className="group border-t border-line py-8 transition-colors duration-300 hover:border-green last:border-b last:border-b-line sm:py-10">
                  <div className="grid gap-4 sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8">
                    <p className="font-mono text-sm text-gray transition-colors duration-300 group-hover:text-green">
                      {service.number}
                    </p>
                    <div className="transition-transform duration-300 group-hover:translate-x-1.5">
                      <h3 className="font-display text-xl font-bold text-ink sm:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-gray sm:text-base">
                        {service.description}
                      </p>
                    </div>
                    <Icon
                      size={28}
                      strokeWidth={1.25}
                      aria-hidden="true"
                      className="hidden text-gray/50 transition-all duration-300 group-hover:rotate-6 group-hover:text-green sm:block"
                    />
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
