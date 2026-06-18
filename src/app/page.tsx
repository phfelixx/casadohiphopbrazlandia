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
