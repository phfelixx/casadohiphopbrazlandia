import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STEPS } from "@/lib/data";
import { SITE } from "@/lib/site";

export function Inscricao() {
  return (
    <section
      id="inscricao"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-50" />
        <div className="absolute -left-20 top-10 h-[42vh] w-[42vh] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] translate-x-1/4 translate-y-1/4 rounded-full bg-flame/10 blur-[120px]" />
        <span className="pointer-events-none absolute -left-6 bottom-6 hidden select-none font-display text-[16rem] leading-none text-stroke-white opacity-[0.04] xl:block">
          VAGAS
        </span>
      </div>

      <Container>
        <SectionHeading
          eyebrow="Vagas abertas"
          title="Como se inscrever"
          lead="A pré-inscrição é feita online; a vaga só é confirmada presencialmente, no dia da aula, com a assinatura do aluno ou responsável."
        />

        {/* Numbered timeline of steps */}
        <ol className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const num = String(i + 1).padStart(2, "0");
            const tilt = i % 2 === 0 ? "sm:-rotate-1" : "sm:rotate-1";
            return (
              <li
                key={step.title}
                className={`group relative flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-[6px_6px_0_0_#000] transition-transform duration-200 hover:-translate-y-1 ${tilt}`}
              >
                {/* Connector dot to next step */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute right-5 top-9 hidden h-px w-5 translate-x-full bg-gold/40 lg:block"
                  />
                )}
                <span
                  aria-hidden
                  className="font-display text-6xl leading-none text-gold sm:text-7xl"
                >
                  {num}
                </span>
                <h3 className="mt-4 font-display text-xl uppercase leading-tight text-paper">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.text}
                </p>
              </li>
            );
          })}
        </ol>

        {/* CTA panel — impossible to miss */}
        <div className="relative mt-12 rounded-2xl border-2 border-black bg-gold p-7 shadow-[10px_10px_0_0_#000] sm:mt-16 sm:p-10">
          {/* sticker accent */}
          <span
            aria-hidden
            className="absolute -top-4 right-6 hidden -rotate-3 rounded-full border-2 border-black bg-paper px-4 py-1 font-display text-sm uppercase tracking-wide text-black shadow-[4px_4px_0_0_#000] sm:inline-block"
          >
            100% gratuito ✊
          </span>

          <div className="flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="-rotate-1 font-marker text-lg text-black/70">
                Bora garantir a sua vaga?
              </p>
              <h3 className="mt-2 font-display text-3xl uppercase leading-[0.95] text-black sm:text-4xl md:text-5xl">
                Faça sua pré-inscrição agora mesmo
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-black/80 sm:text-base">
                As oficinas são <strong>100% gratuitas</strong>, com 3 meses de
                curso e certificado ao final. No dia da aula,{" "}
                <strong>leve um documento</strong> e assine a inscrição
                presencial na nossa sede em Brazlândia.
              </p>

              <p className="mt-5 inline-flex items-start gap-2 rounded-xl border-2 border-black bg-paper px-4 py-3 text-sm font-semibold text-black shadow-[4px_4px_0_0_#000]">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 fill-current"
                  aria-hidden
                >
                  <path d="M12 2 1 21h22L12 2Zm0 4.6L19.5 19h-15L12 6.6ZM11 10v4h2v-4h-2Zm0 6v2h2v-2h-2Z" />
                </svg>
                <span>
                  A inscrição online não garante a vaga sem a confirmação
                  presencial.
                </span>
              </p>
            </div>

            <div className="flex w-full shrink-0 flex-col items-stretch gap-3 lg:w-auto lg:items-end">
              <Button
                href={SITE.links.inscricao}
                external
                variant="dark"
                size="lg"
                className="w-full justify-center lg:w-auto"
              >
                Fazer pré-inscrição →
              </Button>
              <p className="text-center text-xs font-semibold uppercase tracking-wide text-black/60 lg:text-right">
                Leve um documento · vaga confirmada na sede
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
