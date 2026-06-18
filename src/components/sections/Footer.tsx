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
            <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-cream/60">
              Navegação
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/80 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-cream/60">
              Encontre a gente
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/80">
              <li>{SITE.address.line1}</li>
              <li>{SITE.address.line2}</li>
              <li className="pt-1">
                <a
                  href={SITE.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-gold hover:underline"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
                    <path d="M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.7.32-.43.16-.74.36-1.06.68-.32.32-.52.63-.68 1.06-.13.32-.28.8-.32 1.7C3.43 9.05 3.42 9.4 3.42 12s0 2.95.08 4.19c.04.9.19 1.38.32 1.7.16.43.36.74.68 1.06.32.32.63.52 1.06.68.32.13.8.28 1.7.32 1.24.07 1.59.08 4.74.08s3.5 0 4.74-.08c.9-.04 1.38-.19 1.7-.32.43-.16.74-.36 1.06-.68.32-.32.52-.63.68-1.06.13-.32.28-.8.32-1.7.07-1.24.08-1.59.08-4.19s0-2.95-.08-4.19c-.04-.9-.19-1.38-.32-1.7a2.86 2.86 0 0 0-.68-1.06 2.86 2.86 0 0 0-1.06-.68c-.32-.13-.8-.28-1.7-.32C15.5 4 15.15 4 12 4Zm0 3.05a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9Zm0 1.8a3.15 3.15 0 1 0 0 6.3 3.15 3.15 0 0 0 0-6.3Zm5.15-.43a1.16 1.16 0 1 1-2.32 0 1.16 1.16 0 0 1 2.32 0Z" />
                  </svg>
                  @casadohiphopbrazlandia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Support / MINC */}
        <div className="mt-12 rounded-xl border border-line bg-surface px-5 py-4">
          <p className="text-center text-xs leading-relaxed text-muted sm:text-sm">
            ✊ {SITE.support}
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
