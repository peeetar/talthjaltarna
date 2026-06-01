import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Tälthjältarna" },
      { name: "description", content: "Kontakta Tälthjältarna för offert eller frågor om tältuthyrning. Vi svarar snabbt och hjälper dig planera ditt evenemang." },
      { property: "og:title", content: "Kontakt — Tälthjältarna" },
      { property: "og:description", content: "Kontakta Tälthjältarna för offert eller frågor." },
      { property: "og:url", content: "/kontakt" },
    ],
    links: [{ rel: "canonical", href: "/kontakt" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">Kontakt</span>
      <h1 className="mt-3 font-display text-5xl">Hör av dig</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Frågor, offertförfrågningar eller bara vill bolla idéer? Vi finns här
        för att hjälpa dig planera ditt evenemang.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-7">
          <h2 className="font-display text-2xl text-primary">Kontaktuppgifter</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">E-post</p>
              <a href="mailto:info@talthjaltarna.se" className="text-base text-foreground hover:text-primary">info@talthjaltarna.se</a>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Telefon</p>
              <span className="text-base text-foreground">[Telefonnummer — fyll i]</span>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Område</p>
              <span className="text-base text-foreground">[Verksamhetsområde — fyll i]</span>
            </li>
            <li>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Webb</p>
              <span className="text-base text-foreground">talthjaltarna.se</span>
            </li>
          </ul>
        </div>

        <div className="rounded-2xl border border-border bg-primary p-7 text-primary-foreground">
          <h2 className="font-display text-2xl">Snabbast: boka direkt</h2>
          <p className="mt-3 opacity-90">
            Välj en tid i vår onlinekalender, så återkommer vi med bekräftelse
            och detaljer kring ditt evenemang.
          </p>
          <Link to="/boka" className="mt-6 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground hover:opacity-90">
            Till bokningskalendern
          </Link>
        </div>
      </div>
    </section>
  );
}
