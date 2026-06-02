import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteImage } from "@/components/SiteImage";
import { site, home } from "@/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — Hyr partytält för bröllop, fest & event` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — Hyr partytält & evenemangstält` },
      { property: "og:description", content: site.description },
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
              {home.hero.badge}
            </span>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-foreground md:text-6xl">
              {home.hero.heading}{" "}
              <span className="text-primary">{home.hero.headingAccent}</span>.
            </h1>
            <p className="mt-5 max-w-lg text-lg text-muted-foreground">{home.hero.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/boka"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Boka via kalender
              </Link>
              <Link
                to="/tjanster"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary"
              >
                Se våra tält
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 text-sm">
              {home.hero.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl text-primary">{s.value}</p>
                  <p className="text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <SiteImage
            src={home.hero.image}
            alt={home.hero.imageAlt}
            aspect="4/5"
            placeholder="Hero — vitt partytält på sommaräng"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl text-foreground">{home.intro.heading}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{home.intro.body}</p>
        </div>
      </section>

      {/* USE CASES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl">Perfekt för alla tillfällen</h2>
          <p className="mt-4 text-muted-foreground">
            Bröllop, julbord, studentfest, möhippa, företagsevent eller privat sammankomst — vi
            har tält för alla typer av tillställningar.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.useCases.map((u) => (
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
          <h2 className="font-display text-4xl">{home.gallery.heading}</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">{home.gallery.subheading}</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {home.gallery.images.map((img, i) => (
              <SiteImage
                key={i}
                src={img.src}
                alt={img.alt}
                placeholder={img.alt}
              />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="font-display text-4xl">Varför {site.name}?</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {home.whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl text-primary">{w.title}</h3>
              <p className="mt-2 text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-16 text-center">
          <h2 className="font-display text-4xl">Redo att boka ditt tält?</h2>
          <p className="max-w-xl opacity-90">
            Välj en tid direkt i vår onlinekalender, så hör vi av oss och bekräftar detaljerna.
          </p>
          <Link
            to="/boka"
            className="rounded-full bg-accent px-7 py-3 font-medium text-accent-foreground hover:opacity-90"
          >
            Boka tid nu
          </Link>
        </div>
      </section>
    </>
  );
}
