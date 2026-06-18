import { SITE } from "@/lib/site";

/** Dados estruturados (schema.org) para mecanismos de busca. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    slogan: SITE.tagline,
    logo: `${SITE.url}/icon.svg`,
    image: `${SITE.url}/opengraph-image`,
    description:
      "ONG cultural em Brazlândia/DF que oferece oficinas gratuitas de cultura Hip Hop: Graffiti, MC, Break, DJ, Capoeira, Teatro, Ballet e Artesanato.",
    sameAs: [SITE.links.instagram],
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.line1,
      addressLocality: "Brazlândia",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    hasMap: SITE.links.maps,
    areaServed: "Brazlândia, Distrito Federal, Brasil",
    knowsAbout: [
      "Hip Hop",
      "Graffiti",
      "Breaking",
      "DJ",
      "MC",
      "Capoeira",
      "Cultura urbana",
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
