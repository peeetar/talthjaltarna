import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/boka")({
  head: () => ({
    meta: [
      { title: "Boka tält — Tälthjältarna" },
      { name: "description", content: "Boka ditt partytält direkt online via vår Google Calendar-kalender. Välj datum och tid som passar dig." },
      { property: "og:title", content: "Boka tält — Tälthjältarna" },
      { property: "og:description", content: "Boka ditt partytält direkt online via vår kalender." },
      { property: "og:url", content: "/boka" },
    ],
    links: [{ rel: "canonical", href: "/boka" }],
  }),
  component: Book,
});

// Replace this with your Google Calendar Appointment Schedule embed URL.
// Get it from: Google Calendar → Appointment schedule → Share → Embed
const GOOGLE_CALENDAR_EMBED_URL = "";

function Book() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">Boka</span>
      <h1 className="mt-3 font-display text-5xl">Boka ditt tält</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Välj en tid som passar dig nedan, så hör vi av oss för att bekräfta
        detaljerna kring tält, leverans och tillbehör.
      </p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {GOOGLE_CALENDAR_EMBED_URL ? (
          <iframe
            title="Boka tid med Tälthjältarna"
            src={GOOGLE_CALENDAR_EMBED_URL}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder={0}
          />
        ) : (
          <div className="flex min-h-[480px] flex-col items-center justify-center gap-4 px-6 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            </div>
            <h2 className="font-display text-2xl">Google Calendar-bokning</h2>
            <p className="max-w-md text-muted-foreground">
              Klistra in din Google Calendar Appointment-schemats embed-URL i
              <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-sm">src/routes/boka.tsx</code>
              (variabeln <code className="rounded bg-muted px-1.5 py-0.5 text-sm">GOOGLE_CALENDAR_EMBED_URL</code>).
            </p>
            <p className="text-xs text-muted-foreground">
              Skapa via Google Kalender → Bokningsschema → Dela → Bädda in.
            </p>
          </div>
        )}
      </div>

      <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
        <strong className="text-foreground">Föredrar du att höra av dig direkt?</strong> Ring eller
        mejla oss så hjälper vi dig — se kontaktuppgifter i sidfoten eller på
        kontaktsidan.
      </div>
    </section>
  );
}
