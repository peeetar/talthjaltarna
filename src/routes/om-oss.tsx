import { createFileRoute } from "@tanstack/react-router";
import familjAsset from "@/assets/familj.webp.asset.json";

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
          <div className="mt-5 space-y-4 text-muted-foreground">
            <p>
              Det hela började med en studentfest och en idé.
            </p>
            <p>
              Inför vår dotters stora dag köptes ett partytält för att skapa den perfekta platsen för firandet. Efter festen väcktes tanken – kanske kunde tältet få komma till användning fler gånger och hjälpa andra skapa sina egna minnesvärda stunder.
            </p>
            <p>
              Intresset visade sig vara större än väntat, och det blev starten på Tälthjältarna.
            </p>
            <p>
              Idag är vi ett familjeföretag som brinner för att hjälpa människor skapa plats för livets alla firanden. Vi tar hand om hela processen – från första kontakt till färdig uppställning. Med personlig service, noggrann montering och ett genuint engagemang vill vi göra det enkelt för våra kunder att fokusera på det viktigaste: att njuta av stunden.
            </p>
            <p>
              Bakom Tälthjältarna står en familj där alla bidrar på sitt sätt. Vi möter våra kunder, bygger upp tälten och ser till att varje detalj finns på plats. Samtidigt arbetar vi med att utveckla vår närvaro och göra det enkelt att boka och hitta rätt lösning.
            </p>
            <p>
              För oss handlar det inte bara om tält – det handlar om människorna, ögonblicken och minnena som skapas under dem.
            </p>
          </div>
        </div>
        <img
          src={familjAsset.url}
          alt="Familjen bakom Tälthjältarna"
          className="w-full rounded-xl object-cover"
          style={{ aspectRatio: "4 / 5" }}
          width={800}
          height={1000}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
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
