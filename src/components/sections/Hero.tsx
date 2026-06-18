import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/data";
import { SITE } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-60" />
        <div className="absolute left-1/2 top-0 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-gold/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[40vh] w-[40vh] translate-x-1/4 translate-y-1/4 rounded-full bg-flame/15 blur-[120px]" />
        <div className="absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
        {/* giant ghost word */}
        <span className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[20rem] leading-none text-stroke-white opacity-[0.04] xl:block">
          HHOP
        </span>
      </div>

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: headline */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 font-marker text-sm text-gold">
              <span className="h-2 w-2 animate-pulse rounded-full bg-gold" />
              Brazlândia · Distrito Federal
            </span>

            <h1 className="font-display uppercase leading-[0.85] text-paper">
              <span className="block text-6xl sm:text-7xl md:text-8xl">Casa do</span>
              <span className="block text-7xl text-stroke sm:text-8xl md:text-[9rem]">
                Hip Hop
              </span>
            </h1>

            <p className="max-w-xl font-marker text-xl text-gold sm:text-2xl">
              {SITE.tagline}.
            </p>

            <p className="max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
              Um ponto de cultura em Brazlândia que oferece{" "}
              <strong className="text-paper">oficinas 100% gratuitas</strong> de Graffiti,
              MC, Break, DJ, Capoeira, Teatro, Ballet e Artesanato — com certificado e
              professores que vivem a cultura.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SITE.links.inscricao} external size="lg">
                Inscreva-se grátis
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button href="#oficinas" variant="outline" size="lg">
                Conheça as oficinas
              </Button>
            </div>
          </div>

          {/* Right: sticker stack */}
          <div className="relative mx-auto hidden h-full min-h-80 w-full max-w-sm lg:block">
            <div className="absolute right-4 top-2 w-56 rotate-6 rounded-2xl border-2 border-black bg-gold p-5 shadow-[8px_8px_0_0_#000]">
              <p className="font-display text-5xl uppercase leading-none text-black">100%</p>
              <p className="mt-1 font-display text-xl uppercase text-black">Gratuito</p>
            </div>
            <div className="absolute left-2 top-36 w-60 -rotate-3 rounded-2xl border-2 border-gold bg-surface p-5 shadow-[8px_8px_0_0_rgba(255,210,0,0.25)]">
              <p className="font-marker text-lg text-gold">com certificado</p>
              <p className="mt-1 text-sm text-cream/80">
                Cursos de 3 meses, abertos a toda a comunidade.
              </p>
            </div>
            <div className="absolute bottom-2 right-10 w-52 rotate-3 rounded-2xl border-2 border-black bg-paper p-4 shadow-[8px_8px_0_0_#000]">
              <p className="font-marker text-base text-black">apoio do MINC</p>
              <p className="mt-1 text-xs font-semibold text-black/70">
                Termo de Fomento nº 976084/2025
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-20 lg:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-ink-2 px-5 py-6 text-center sm:py-7">
              <dt className="font-display text-4xl text-gold sm:text-5xl">{s.value}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wide text-muted sm:text-sm">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
