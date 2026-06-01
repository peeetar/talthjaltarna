import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: "Tält & tjänster — Tälthjältarna" },
      { name: "description", content: "Vi erbjuder partytält i flera storlekar samt tillbehör som golv, belysning, värme, möbler och porslin för ditt evenemang." },
      { property: "og:title", content: "Tält & tjänster — Tälthjältarna" },
      { property: "og:description", content: "Partytält i flera storlekar och tillbehör för ditt evenemang." },
      { property: "og:url", content: "/tjanster" },
    ],
    links: [{ rel: "canonical", href: "/tjanster" }],
  }),
  component: Services,
});

const tents = [
  { size: "3 × 3 m", seats: "Upp till 10 gäster", desc: "Perfekt för en intim sammankomst eller som komplement." },
  { size: "4 × 6 m", seats: "Upp till 25 gäster", desc: "Idealt för mindre trädgårdsfester och familjeträffar." },
  { size: "5 × 10 m", seats: "Upp till 50 gäster", desc: "Mångsidigt val för födelsedagar och företagsevent." },
  { size: "6 × 12 m", seats: "Upp till 75 gäster", desc: "Vår populäraste storlek för bröllop och större fester." },
  { size: "8 × 16 m", seats: "Upp till 120 gäster", desc: "För stora bröllop, julbord och evenemang." },
  { size: "Skräddarsytt", seats: "På förfrågan", desc: "Större eller speciallösning? Vi hjälper dig planera." },
];

const extras = [
  { t: "Golv", d: "Stabilt och jämnt underlag oavsett terräng." },
  { t: "Belysning", d: "Ljusslingor och spotlights för rätt stämning." },
  { t: "Värme", d: "Värmeaggregat så festen kan fortsätta in på kvällen." },
  { t: "Bord & stolar", d: "Möbler i olika utföranden för dina gäster." },
  { t: "Porslin & glas", d: "Tallrikar, bestick och glas i kvalitet." },
  { t: "Dansgolv", d: "Lägg till en yta där festen verkligen tar fart." },
];

function Services() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">Tjänster</span>
          <h1 className="mt-3 font-display text-5xl">Tält & tillbehör</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Välj rätt tält för ditt evenemang — vi har storlekar från små
            trädgårdstält till stora evenemangstält. Komplettera gärna med
            tillbehör för att skapa rätt stämning.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl">Våra tältstorlekar</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tents.map((t) => (
            <div key={t.size} className="overflow-hidden rounded-2xl border border-border bg-card">
              <ImagePlaceholder label={`Bild — tält ${t.size}`} aspect="16 / 10" className="rounded-none border-0 border-b border-border" />
              <div className="p-6">
                <h3 className="font-display text-xl text-primary">{t.size}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{t.seats}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">Tillbehör</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Lägg till det som behövs för att ditt evenemang ska kännas komplett.
            Priser anges på förfrågan.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {extras.map((e) => (
              <div key={e.t} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg text-primary">{e.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-20 text-center">
        <h2 className="font-display text-3xl">Osäker på vilket tält du behöver?</h2>
        <p className="text-muted-foreground">
          Kontakta oss så hjälper vi dig att välja rätt storlek och tillbehör utifrån antal
          gäster, plats och typ av evenemang.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/boka" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">Boka tid</Link>
          <Link to="/kontakt" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary">Kontakta oss</Link>
        </div>
      </section>
    </>
  );
}
