import { createFileRoute } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: "Om oss — Tälthjältarna" },
      { name: "description", content: "Tälthjältarna är ett lokalt företag som hyr ut partytält och evenemangstält. Vi brinner för att hjälpa dig skapa minnesvärda evenemang." },
      { property: "og:title", content: "Om oss — Tälthjältarna" },
      { property: "og:description", content: "Lär känna Tälthjältarna — ett lokalt företag för tältuthyrning." },
      { property: "og:url", content: "/om-oss" },
    ],
    links: [{ rel: "canonical", href: "/om-oss" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
        <div>
          <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">Om oss</span>
          <h1 className="mt-3 font-display text-5xl">Lokala hjältar med tält i bagaget</h1>
          <p className="mt-5 text-lg text-muted-foreground">
            Tälthjältarna är ett lokalt företag som hyr ut partytält och
            evenemangstält. Vi vet hur viktigt det är att festen sitter — från
            första uppställning till sista hämtning. Vårt mål är att din dag ska
            bli enkel, snygg och oförglömlig.
          </p>
          <p className="mt-4 text-muted-foreground">
            [Placeholder för bolagsbeskrivning — fyll i historia, grundare,
            referenskunder, certifieringar eller annan information ni vill lyfta.]
          </p>
        </div>
        <ImagePlaceholder label="Bild på team eller uppställning" aspect="4 / 5" />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">Vad vi står för</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Kvalitet", d: "Material och rutiner som håller — varje gång." },
              { t: "Service", d: "Personlig kontakt och flexibla lösningar." },
              { t: "Pålitlighet", d: "Vi kommer i tid, river i tid, och håller vad vi lovar." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-xl text-primary">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
