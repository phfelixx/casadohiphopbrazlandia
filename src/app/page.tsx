import { Navbar } from "@/components/Navbar";
import { JsonLd } from "@/components/JsonLd";
import { Marquee } from "@/components/ui/Marquee";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Elementos } from "@/components/sections/Elementos";
import { Oficinas } from "@/components/sections/Oficinas";
import { Cronograma } from "@/components/sections/Cronograma";
import { Inscricao } from "@/components/sections/Inscricao";
import { Localizacao } from "@/components/sections/Localizacao";
import { Footer } from "@/components/sections/Footer";
import { TICKER } from "@/lib/data";

export default function Home() {
  return (
    <>
      <JsonLd />
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-60 focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:font-display focus:uppercase focus:text-black"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee items={TICKER} />
        <Sobre />
        <Elementos />
        <Oficinas />
        <Marquee items={TICKER} reverse />
        <Cronograma />
        <Inscricao />
        <Localizacao />
      </main>
      <Footer />
    </>
  );
}
