import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ELEMENTS } from "@/lib/data";

export function Elementos() {
  return (
    <section
      id="elementos"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-2"
    >
      {/* Camadas decorativas de fundo */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -left-20 top-10 h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
        <span className="pointer-events-none absolute -left-6 bottom-0 hidden select-none font-display text-[16rem] leading-none text-stroke-white opacity-[0.04] lg:block">
          5
        </span>
      </div>

      <Container>
        <SectionHeading
          eyebrow="A cultura"
          title="Os 5 elementos do Hip Hop"
          lead="Mais que ritmo, o Hip Hop é uma cultura completa. São cinco pilares que se conectam — e o quinto, o Conhecimento, é a base sobre a qual a nossa Casa foi construída."
        />

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
          {ELEMENTS.map((el, i) => {
            const number = String(i + 1).padStart(2, "0");
            const isKnowledge = el.name === "Conhecimento";

            if (isKnowledge) {
              return (
                <li key={el.name} className="sm:col-span-2">
                  <article className="relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border-2 border-black bg-gold p-7 shadow-[6px_6px_0_0_#000] transition-transform duration-200 hover:-translate-y-1 sm:flex-row sm:items-center sm:gap-8 sm:p-9">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-5 top-3 select-none font-display text-7xl leading-none text-black/10 sm:text-8xl"
                    >
                      {number}
                    </span>

                    <div
                      aria-hidden
                      className="grid h-20 w-20 shrink-0 place-items-center rounded-2xl border-2 border-black bg-paper text-black shadow-[4px_4px_0_0_#000] sm:h-24 sm:w-24"
                    >
                      <el.icon className="h-10 w-10 sm:h-12 sm:w-12" strokeWidth={2.25} />
                    </div>

                    <div className="relative flex flex-col gap-2">
                      <span className="inline-flex w-fit items-center gap-2 rounded-full border-2 border-black bg-paper px-3 py-1 font-display text-xs uppercase tracking-wide text-black">
                        O 5º elemento · a base da nossa Casa
                      </span>
                      <h3 className="font-display text-4xl uppercase leading-none text-black sm:text-5xl">
                        {el.name}
                      </h3>
                      <p className="font-marker text-lg text-black/80">{el.role}</p>
                      <p className="max-w-xl text-sm leading-relaxed text-black/80 sm:text-base">
                        {el.description}
                      </p>
                    </div>
                  </article>
                </li>
              );
            }

            const rotation = i % 2 === 0 ? "sm:rotate-1" : "sm:-rotate-2";

            return (
              <li key={el.name}>
                <article
                  className={`relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[6px_6px_0_0_#000] transition-transform duration-200 hover:-translate-y-1 sm:p-7 ${rotation}`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute right-4 top-2 select-none font-display text-7xl leading-none text-paper/[0.06] sm:text-8xl"
                  >
                    {number}
                  </span>

                  <div
                    aria-hidden
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-line bg-ink text-gold"
                  >
                    <el.icon className="h-8 w-8 sm:h-9 sm:w-9" strokeWidth={2.25} />
                  </div>

                  <h3 className="font-display text-3xl uppercase leading-none text-paper sm:text-4xl">
                    {el.name}
                  </h3>
                  <p className="font-marker text-lg text-gold">{el.role}</p>
                  <p className="text-sm leading-relaxed text-muted">{el.description}</p>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
