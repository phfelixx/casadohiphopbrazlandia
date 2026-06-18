import { BadgeCheck } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Logo } from "@/components/Logo";
import { Container } from "@/components/ui/Container";
import { NAV, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-ink-2">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs font-marker text-lg text-gold">{SITE.tagline}.</p>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Ponto de cultura Hip Hop em Brazlândia/DF. Oficinas gratuitas que formam
              artistas e transformam histórias.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Rodapé">
            <h3 className="mb-3 font-display text-sm uppercase tracking-widest text-cream/60">
              Navegação
            </h3>
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-1.5 text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="mb-3 font-display text-sm uppercase tracking-widest text-cream/60">
              Encontre a gente
            </h3>
            <ul className="flex flex-col gap-1.5 text-sm text-cream/80">
              <li>{SITE.address.line1}</li>
              <li>{SITE.address.line2}</li>
              <li className="pt-1">
                <a
                  href={SITE.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 py-1.5 font-semibold text-gold hover:underline"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0" />
                  @casadohiphopbrazlandia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Support / MINC */}
        <div className="mt-12 rounded-xl border border-line bg-surface px-5 py-4">
          <p className="flex items-center justify-center gap-2 text-center text-xs leading-relaxed text-muted sm:text-sm">
            <BadgeCheck className="h-4 w-4 shrink-0 text-gold" aria-hidden />
            {SITE.support}
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Feito com cultura e atitude.
          </p>
          <p className="font-marker text-sm text-gold">Paz, amor, união e diversão.</p>
        </div>
      </Container>
    </footer>
  );
}
