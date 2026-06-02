import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteImage } from "@/components/SiteImage";
import { site, services } from "@/content";

export const Route = createFileRoute("/tjanster")({
  head: () => ({
    meta: [
      { title: `Tält & tjänster — ${site.name}` },
      {
        name: "description",
        content:
          "Vi erbjuder partytält i flera storlekar samt tillbehör som golv, belysning, värme, möbler och porslin.",
      },
      { property: "og:title", content: `Tält & tjänster — ${site.name}` },
      { property: "og:url", content: "/tjanster" },
    ],
    links: [{ rel: "canonical", href: "/tjanster" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">
            Tjänster
          </span>
          <h1 className="mt-3 font-display text-5xl">{services.heading}</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{services.subheading}</p>
        </div>
      </section>

      {/* TENTS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="font-display text-3xl">Våra tältstorlekar</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.tents.map((t) => (
            <div key={t.size} className="overflow-hidden rounded-2xl border border-border bg-card">
              <SiteImage
                src={t.image}
                alt={`Bild — tält ${t.size}`}
                aspect="16/10"
                placeholder={`Bild — tält ${t.size}`}
                className="rounded-none border-0 border-b border-border"
              />
              <div className="p-6">
                <h3 className="font-display text-xl text-primary">{t.size}</h3>
                <p className="mt-1 text-sm font-medium text-foreground/80">{t.seats}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRAS */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">Tillbehör</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Lägg till det som behövs för att ditt evenemang ska kännas komplett. Priser på
            förfrågan.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.extras.map((e) => (
              <div key={e.title} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg text-primary">{e.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-6 py-20 text-center">
        <h2 className="font-display text-3xl">Osäker på vilket tält du behöver?</h2>
        <p className="text-muted-foreground">
          Kontakta oss så hjälper vi dig att välja rätt storlek och tillbehör utifrån antal gäster,
          plats och typ av evenemang.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/boka"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Boka tid
          </Link>
          <Link
            to="/kontakt"
            className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary"
          >
            Kontakta oss
          </Link>
        </div>
      </section>
    </>
  );
}
