import { ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WORKSHOPS } from "@/lib/data";
import { SITE } from "@/lib/site";

export function Oficinas() {
  return (
    <section
      id="oficinas"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -left-20 top-10 h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-[36vh] w-[36vh] rounded-full bg-flame/10 blur-[120px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Mão na massa"
          title="Escolha a sua oficina"
          lead="São 8 oficinas 100% gratuitas, em cursos de 3 meses e com certificado ao final. Da rima ao traço, do passo à roda — tem um lugar pra você na nossa quebrada."
        />

        {/* Workshop grid */}
        <ul className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {WORKSHOPS.map((w) => (
            <li key={w.slug}>
              <article className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-surface p-6 shadow-[6px_6px_0_0_#000] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-gold">
                {/* Icon badge */}
                <span
                  aria-hidden
                  className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-gold text-black shadow-[4px_4px_0_0_#000] transition-transform duration-200 group-hover:-rotate-6"
                >
                  <w.icon className="h-7 w-7" strokeWidth={2.25} />
                </span>

                {/* Tagline + name */}
                <div className="flex flex-col gap-1">
                  <span className="font-marker text-sm text-gold">{w.tagline}</span>
                  <h3 className="font-display text-2xl uppercase leading-none text-paper transition-colors group-hover:text-gold sm:text-3xl">
                    {w.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted">{w.description}</p>

                {/* Schedule footer */}
                <div className="mt-auto flex items-center gap-2 border-t border-line pt-4 text-sm font-semibold text-cream">
                  <Clock className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                  <span>{w.schedule}</span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* Closing note + CTA */}
        <div className="mt-14 flex flex-col items-center gap-6 text-center sm:mt-16">
          <p className="max-w-xl font-marker text-lg text-gold sm:text-xl">
            Todas as oficinas são 100% gratuitas e com certificado.
          </p>
          <Button href={SITE.links.inscricao} external variant="solid" size="lg">
            Quero me inscrever
            <ArrowRight className="h-5 w-5" aria-hidden />
          </Button>
        </div>
      </Container>
    </section>
  );
}
