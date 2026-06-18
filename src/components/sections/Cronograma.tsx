import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCHEDULE } from "@/lib/data";

export function Cronograma() {
  return (
    <section
      id="cronograma"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-2"
    >
      {/* Decorative background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
        <span className="pointer-events-none absolute -left-8 bottom-4 hidden select-none font-display text-[14rem] leading-none text-stroke-white opacity-[0.04] xl:block">
          SEMANA
        </span>
      </div>

      <Container>
        <SectionHeading
          eyebrow="Toda semana"
          title="Cronograma das oficinas"
          lead="A casa fica em movimento de segunda a sábado. Encontre o melhor dia e horário pra você e venha fazer parte."
        />

        {/* Calendar grid */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-16 md:grid-cols-3 xl:grid-cols-6">
          {SCHEDULE.map((day, i) => {
            const tilt =
              i % 3 === 0 ? "sm:rotate-1" : i % 3 === 1 ? "sm:-rotate-1" : "";
            return (
              <article
                key={day.short}
                className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[6px_6px_0_0_#000] transition-transform duration-200 ease-out hover:-translate-y-1 ${tilt}`}
              >
                {/* Gold header band */}
                <div className="border-b-2 border-black bg-gold px-4 py-3">
                  <h3 className="font-display text-3xl uppercase leading-none text-black sm:text-4xl">
                    {day.short}
                  </h3>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-black/70">
                    {day.day}
                  </p>
                </div>

                {/* Slots */}
                <ul className="flex flex-1 flex-col gap-3 p-4">
                  {day.slots.map((slot) => (
                    <li
                      key={`${slot.activity}-${slot.time}`}
                      className="flex flex-col gap-1.5 rounded-xl border border-line bg-ink/40 p-3"
                    >
                      <span className="font-display text-lg uppercase leading-tight text-paper">
                        {slot.activity}
                      </span>
                      <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-gold px-2.5 py-0.5 font-display text-xs uppercase tracking-wide text-black">
                        <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-black" />
                        {slot.time}
                      </span>
                    </li>
                  ))}
                  {day.slots.length === 1 && (
                    <li
                      aria-hidden
                      className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-line/70 p-3 text-center"
                    >
                      <span className="font-marker text-sm text-muted">
                        bora marcar ✶
                      </span>
                    </li>
                  )}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-muted sm:text-sm">
          <span aria-hidden className="text-gold">
            ✶
          </span>
          Horários sujeitos a alteração — confirme na sua inscrição.
        </p>
      </Container>
    </section>
  );
}
