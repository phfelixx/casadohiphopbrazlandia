import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SITE } from "@/lib/site";

export function Localizacao() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-20 sm:py-28 bg-ink-2"
    >
      {/* Background texture */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots opacity-40" />
        <div className="absolute -left-20 top-1/3 h-[40vh] w-[40vh] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Vem pra cá"
          title="Onde a gente fica"
          lead="A Casa do Hip Hop é ponto de encontro em Brazlândia. Passa lá, conhece as oficinas e faz parte da nossa quebrada."
        />

        <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT: address + links */}
          <div className="flex flex-col gap-6">
            {/* Address sticker card */}
            <div className="rounded-2xl border-2 border-gold bg-surface p-6 shadow-[6px_6px_0_0_#000] sm:p-8">
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-black bg-gold shadow-[3px_3px_0_0_#000]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 fill-black"
                    aria-hidden
                  >
                    <path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-display text-2xl uppercase leading-none text-paper sm:text-3xl">
                    Nosso endereço
                  </h3>
                  <address className="mt-3 not-italic leading-relaxed text-cream">
                    <span className="block text-lg font-semibold text-paper">
                      {SITE.address.line1}
                    </span>
                    <span className="block text-muted">{SITE.address.line2}</span>
                  </address>
                </div>
              </div>

              {/* Instagram handle */}
              <a
                href={SITE.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 font-display text-lg uppercase tracking-wide text-gold transition-colors hover:text-gold-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                  aria-hidden
                >
                  <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.43 9.05 3.42 9.4 3.42 12s0 2.95.08 4.19c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.08 4.74.08s3.5 0 4.74-.08c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.08-1.59.08-4.19s0-2.95-.08-4.19c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.68-1.06 2.86 2.86 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-.43a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
                </svg>
                @casadohiphopbrazlandia
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SITE.links.maps} variant="outline" size="lg" external>
                Ver no mapa
              </Button>
              <Button href={SITE.links.instagram} variant="solid" size="lg" external>
                Seguir no Instagram
              </Button>
            </div>

            {/* Little marker accent */}
            <p className="font-marker text-base text-gold/90 -rotate-1">
              ✊ Cultura é de quem faz — e a porta tá sempre aberta.
            </p>
          </div>

          {/* RIGHT: map embed */}
          <div className="relative">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-gold bg-surface shadow-[6px_6px_0_0_#000]">
              <iframe
                src={SITE.links.mapsEmbed}
                title="Mapa - Casa do Hip Hop de Brazlândia"
                loading="lazy"
                className="h-full min-h-[20rem] w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
