import { MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
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
                  <MapPin className="h-6 w-6 text-black" strokeWidth={2.25} aria-hidden />
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
                <InstagramIcon className="h-5 w-5" />
                @casadohiphopbrazlandia
              </a>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={SITE.links.maps} variant="outline" size="lg" external>
                <MapPin className="h-5 w-5" aria-hidden />
                Ver no mapa
              </Button>
              <Button href={SITE.links.instagram} variant="solid" size="lg" external>
                <InstagramIcon className="h-5 w-5" />
                Seguir no Instagram
              </Button>
            </div>

            {/* Little marker accent */}
            <p className="font-marker text-base text-gold/90 -rotate-1">
              Cultura é de quem faz — e a porta tá sempre aberta.
            </p>
          </div>

          {/* RIGHT: map embed */}
          <div className="relative">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-gold bg-surface shadow-[6px_6px_0_0_#000]">
              <iframe
                src={SITE.links.mapsEmbed}
                title="Mapa - Casa do Hip Hop de Brazlândia"
                loading="lazy"
                className="h-full min-h-80 w-full"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
