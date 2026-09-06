import Reveal from "@/components/Reveal";

/**
 * Mapa incorporado. Quando o embed oficial do Google Maps for fornecido,
 * substitua o valor de `mapSrc` pela URL do iframe oficial.
 */
const mapSrc =
  "https://www.google.com/maps?q=Beltr%C3%A3o+Santos+Engenharia+de+Estruturas&output=embed";

export default function Map() {
  return (
    <section className="border-t border-line">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="tech-label">Localização</p>
            <h2 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
              Onde estamos
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-gray">
              Atendemos projetos em Belo Horizonte, em Minas Gerais e em outras
              regiões do país.
            </p>
            <p className="tech-label mt-10">Belo Horizonte / MG</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative border border-line p-2 sm:p-3">
              <iframe
                src={mapSrc}
                title="Mapa — Beltrão Santos Engenharia de Estruturas"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-72 w-full grayscale-[0.4] sm:h-96"
              />
              <p className="tech-label mt-3 flex justify-between px-1 pb-1">
                <span>Beltrão Santos Engenharia de Estruturas</span>
                <span aria-hidden="true">MAP / 01</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
