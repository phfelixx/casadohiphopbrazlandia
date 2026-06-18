import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";

const VALORES: { word: string; line: string; rotate: string; bg: string }[] = [
  {
    word: "Acesso gratuito",
    line: "Cultura de qualidade não pode ter preço. Aqui é 100% de graça, sempre.",
    rotate: "rotate-1",
    bg: "bg-gold",
  },
  {
    word: "Comunidade",
    line: "Um espaço comunitário que fortalece a periferia e acolhe quem chega.",
    rotate: "-rotate-2",
    bg: "bg-surface",
  },
  {
    word: "Protagonismo jovem",
    line: "Lugar pra criar, pertencer e encontrar a própria voz na quebrada.",
    rotate: "rotate-2",
    bg: "bg-surface",
  },
  {
    word: "Cultura de raiz",
    line: "Os 5 elementos do Hip Hop vividos por quem faz a cultura acontecer.",
    rotate: "-rotate-1",
    bg: "bg-gold",
  },
];

export function Sobre() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden py-20 bg-ink sm:py-28"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -left-20 top-10 h-[50vh] w-[50vh] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />
        <span className="pointer-events-none absolute -left-8 bottom-0 hidden select-none font-display text-[16rem] leading-none text-stroke-white opacity-[0.04] xl:block">
          ONG
        </span>
      </div>

      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <SectionHeading
              eyebrow="Quem somos"
              title={
                <>
                  Mais que oficinas,
                  <span className="block text-stroke">um movimento</span>
                </>
              }
              lead="A Casa do Hip Hop de Brazlândia é um ponto de cultura — um espaço comunitário, vivo e aberto — no coração de Brazlândia/DF."
            />

            <div className="flex flex-col gap-5 text-base leading-relaxed text-cream/85 sm:text-lg">
              <p>
                Usamos os{" "}
                <strong className="text-paper">elementos do Hip Hop</strong> —
                MC, DJ, Break, Graffiti e Conhecimento — para transformar vidas e
                democratizar o acesso à arte na periferia. Aqui a juventude
                encontra um lugar pra pertencer, criar e descobrir a própria voz.
              </p>
              <p>
                Tudo <strong className="text-paper">100% gratuito</strong>, com{" "}
                <strong className="text-paper">
                  professores que vivem a cultura
                </strong>{" "}
                e <strong className="text-paper">certificado</strong> ao final de
                cada formação. Mais que aulas, a gente fortalece a comunidade e
                abre caminhos.
              </p>
            </div>

            {/* MINC sticker */}
            <div className="w-fit max-w-md -rotate-1 rounded-xl border-2 border-gold bg-surface px-5 py-4 shadow-[6px_6px_0_0_rgba(255,210,0,0.22)]">
              <p className="flex items-start gap-2 text-sm leading-relaxed text-cream/85">
                <span aria-hidden className="text-base">
                  ✊
                </span>
                <span>{SITE.support}</span>
              </p>
            </div>

            <div className="pt-1">
              <Button href="#oficinas" variant="outline" size="lg">
                Ver as oficinas →
              </Button>
            </div>
          </div>

          {/* Right: valores sticker cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {VALORES.map((v) => {
              const onGold = v.bg === "bg-gold";
              return (
                <div
                  key={v.word}
                  className={[
                    "group flex flex-col gap-2 rounded-2xl p-5 transition-transform duration-200 hover:-translate-y-1",
                    v.rotate,
                    onGold
                      ? "border-2 border-black bg-gold shadow-[6px_6px_0_0_#000]"
                      : "border-2 border-gold bg-surface shadow-[6px_6px_0_0_rgba(255,210,0,0.2)]",
                  ].join(" ")}
                >
                  <h3
                    className={[
                      "font-display text-2xl uppercase leading-[0.95] sm:text-3xl",
                      onGold ? "text-black" : "text-gold",
                    ].join(" ")}
                  >
                    {v.word}
                  </h3>
                  <p
                    className={[
                      "text-sm leading-relaxed",
                      onGold ? "text-black/80" : "text-cream/80",
                    ].join(" ")}
                  >
                    {v.line}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
