import { createFileRoute } from "@tanstack/react-router";
import { SiteImage } from "@/components/SiteImage";
import { site, about } from "@/content";

export const Route = createFileRoute("/om-oss")({
  head: () => ({
    meta: [
      { title: `Om oss — ${site.name}` },
      {
        name: "description",
        content: `${site.name} är ett lokalt företag som hyr ut partytält och evenemangstält.`,
      },
      { property: "og:title", content: `Om oss — ${site.name}` },
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
          <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">
            Om oss
          </span>
          <h1 className="mt-3 font-display text-5xl">{about.heading}</h1>
          <p className="mt-5 text-lg text-muted-foreground">{about.body1}</p>
          <p className="mt-4 text-muted-foreground">{about.body2}</p>
        </div>
        <SiteImage
          src={about.image}
          alt={about.imageAlt}
          aspect="4/5"
          placeholder="Bild på team eller uppställning"
        />
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-3xl">Vad vi står för</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {about.values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-background p-6">
                <h3 className="font-display text-xl text-primary">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
