"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/Button";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "border-b border-line bg-ink/95 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      {/* Scrim: keeps the nav legible over bright sections while transparent */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-black/80 via-black/40 to-transparent transition-opacity duration-300",
          solid ? "opacity-0" : "opacity-100",
        )}
      />

      <nav
        aria-label="Principal"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#top" aria-label="Início — Casa do Hip Hop" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="link-swipe py-1 text-sm font-semibold uppercase tracking-wide text-cream drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button href={SITE.links.inscricao} external size="md">
            Inscreva-se
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="grid h-11 w-11 place-items-center rounded-full border-2 border-line bg-ink/60 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden />
          ) : (
            <Menu className="h-5 w-5" aria-hidden />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="menu-mobile"
        inert={!open ? true : undefined}
        className={cn(
          "overflow-hidden border-t border-line bg-ink lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0 border-t-0",
          "transition-[max-height] duration-300 ease-in-out",
        )}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-lg font-display uppercase tracking-wide text-cream hover:bg-surface hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="px-1 pt-3">
            <Button
              href={SITE.links.inscricao}
              external
              size="lg"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Inscreva-se grátis
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
