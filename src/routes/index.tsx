import { createFileRoute, Link } from "@tanstack/react-router";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tälthjältarna — Hyr partytält för bröllop, fest & event" },
      { name: "description", content: "Hyr partytält och evenemangstält i alla storlekar. Tälthjältarna levererar, reser och hämtar — boka direkt online via vår kalender." },
      { property: "og:title", content: "Tälthjältarna — Hyr partytält & evenemangstält" },
      { property: "og:description", content: "Hyr partytält för bröllop, födelsedag och företagsevent. Boka direkt online." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-block rounded-full bg-accent/30 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent-foreground">
              Partytältuthyrning
            </span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">
              Tält som lyfter <span className="text-primary">festen</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">
              Tälthjältarna hyr ut partytält och evenemangstält i flera storlekar — från
              små trädgårdsfester till stora bröllop och företagsevent. Vi levererar,
              reser och hämtar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/boka" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
                Boka via kalender
              </Link>
              <Link to="/tjanster" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary">
                Se våra tält
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              <div><p className="font-display text-2xl text-primary">2–12 m</p><p className="text-muted-foreground">Storlekar</p></div>
              <div><p className="font-display text-2xl text-primary">100%</p><p className="text-muted-foreground">Väderbeständigt</p></div>
              <div><p className="font-display text-2xl text-primary">Lokalt</p><p className="text-muted-foreground">Levereras</p></div>
            </div>
          </div>
          <ImagePlaceholder label="Hero — vitt partytält på sommaräng" aspect="4 / 5" />
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl text-foreground">Hyr partytält av Tälthjältarna</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Planerar du en utomhusfest, ett bröllop eller ett företagsevent och vill skapa
            en oförglömlig upplevelse? Då har Tälthjältarna lösningen. Hos oss hyr du
            partytält av hög kvalitet som kan anpassas till just ditt evenemang. Ett
            partytält är inte bara skydd mot regn eller sol — det är en arena där minnen
            skapas och en stilren bakgrund till dina foton.
          </p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl">Perfekt för alla tillfällen</h2>
          <p className="mt-4 text-muted-foreground">
            Bröllop, julbord, studentfest, möhippa, företagsevent eller privat
            sammankomst — vi har tält för alla typer av tillställningar.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { title: "Bröllop", desc: "Elegant ram för er stora dag, oavsett väder." },
            { title: "Födelsedagar", desc: "Från intima firanden till storslagna kalas." },
            { title: "Företagsevent", desc: "Professionell miljö för kundträffar och fester." },
            { title: "Julbord & högtider", desc: "Värme och stämning även under kalla månader." },
            { title: "Studentfest & möhippa", desc: "Skapa en plats där festen kan ta plats." },
            { title: "Trädgårdsfest", desc: "Förvandla din trädgård till en festlokal." },
          ].map((u) => (
            <div key={u.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl text-primary">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-4xl">Våra tält i bruk</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Här hittar du några exempel på tidigare uppställningar. Bilder läggs till
            efterhand.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <ImagePlaceholder label="Bröllopstält — sommarkväll" />
            <ImagePlaceholder label="Företagsevent — kvällsbelysning" />
            <ImagePlaceholder label="Trädgårdsfest — 6×12 m" />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl">Varför Tälthjältarna?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { t: "Kvalitet och variation", d: "Tält i flera storlekar och utföranden, alla i slitstarkt och väderbeständigt material — från 2 till 12 meter." },
            { t: "Helhetslösning", d: "Inte bara tält — även möbler, belysning, värme och tillbehör som lyfter ditt evenemang." },
            { t: "Lokal expertis", d: "Vi känner till området och anpassar uppställningen efter dina förutsättningar och väderlek." },
            { t: "Flexibilitet", d: "Hyr för en dag, en helg eller längre. Vi anpassar oss efter ditt schema och behov." },
          ].map((w) => (
            <div key={w.t} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl text-primary">{w.t}</h3>
              <p className="mt-2 text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-4xl">Redo att boka ditt tält?</h2>
          <p className="max-w-xl opacity-90">
            Välj en tid direkt i vår onlinekalender, så hör vi av oss och bekräftar
            detaljerna.
          </p>
          <Link to="/boka" className="rounded-full bg-accent px-7 py-3 font-medium text-accent-foreground hover:opacity-90">
            Boka tid nu
          </Link>
        </div>
      </section>
    </>
  );
}
