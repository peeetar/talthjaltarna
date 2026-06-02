import { createFileRoute } from "@tanstack/react-router";
import { site, booking } from "@/content";

export const Route = createFileRoute("/boka")({
  head: () => ({
    meta: [
      { title: `Boka tält — ${site.name}` },
      {
        name: "description",
        content: `Boka ditt partytält direkt online via vår kalender. Välj datum och tid som passar dig.`,
      },
      { property: "og:title", content: `Boka tält — ${site.name}` },
      { property: "og:url", content: "/boka" },
    ],
    links: [{ rel: "canonical", href: "/boka" }],
  }),
  component: Book,
});

function Book() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <span className="text-sm font-medium uppercase tracking-wider text-accent-foreground">
        Boka
      </span>
      <h1 className="mt-3 font-display text-5xl">{booking.heading}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{booking.subheading}</p>

      <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {booking.calendarEmbedUrl ? (
          /**
           * The Google Calendar Appointment Schedule embed.
           * The URL comes from src/content.ts → booking.calendarEmbedUrl
           *
           * The iframe renders Google's own booking UI which already enforces
           * your configured days, hours, and blocked dates.
           */
          <iframe
            title={`Boka tid med ${site.name}`}
            src={booking.calendarEmbedUrl}
            style={{ border: 0 }}
            width="100%"
            height="700"
            frameBorder={0}
            // Allow the calendar to open Google's OAuth consent inside the frame
            // (needed when guests sign in to confirm their booking)
            allow="payment"
          />
        ) : (
          /* ── Setup guide shown until the embed URL is set ── */
          <div className="flex min-h-[520px] flex-col items-center justify-center gap-5 px-8 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="4" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
            </div>
            <h2 className="font-display text-2xl">Sätt upp Google Calendar-bokning</h2>
            <div className="max-w-lg text-left text-sm text-muted-foreground space-y-3">
              <p className="font-medium text-foreground">
                Så här sätter du upp dag/tidsbegränsningar och hämtar embed-URL:en:
              </p>
              <ol className="list-decimal list-inside space-y-2 leading-relaxed">
                <li>
                  Gå till <strong>calendar.google.com</strong> med det Google-konto du vill ta emot
                  bokningar på.
                </li>
                <li>
                  Klicka <strong>+ Skapa → Bokningsschema</strong>.
                </li>
                <li>
                  Fyll i titel och duration (t.ex. 30 min för en förfrågan).
                </li>
                <li>
                  Klicka <strong>Nästa</strong> → ange din tillgänglighet:
                  <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                    <li>Välj <strong>vilka veckodagar</strong> du tar bokningar (avmarkera lediga dagar).</li>
                    <li>Ange dina timmar per dag (t.ex. 09:00–17:00).</li>
                    <li>
                      Under <strong>"Datum-specifika timmar"</strong> kan du blockera enskilda datum
                      (helgdagar, semester, redan bokade dagar) — klicka "Lägg till datum".
                    </li>
                  </ul>
                </li>
                <li>
                  Under <strong>"Bokningsfönster"</strong>: ange hur långt i förväg folk kan boka
                  (t.ex. 60 dagar) och minsta varsel (t.ex. 2 dagar).
                </li>
                <li>
                  Lägg gärna till intakefrågor (t.ex. "Typ av event?", "Antal gäster?",
                  "Tältstorlek?").
                </li>
                <li>
                  Klicka <strong>Spara</strong>.
                </li>
                <li>
                  På schemasidan, klicka <strong>Dela → Bädda in</strong>.
                </li>
                <li>
                  Kopiera hela URL:en från{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5">iframe src="..."</code>.
                </li>
                <li>
                  Klistra in den i{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5">src/content.ts</code> → fältet{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5">booking.calendarEmbedUrl</code>.
                </li>
              </ol>
            </div>
          </div>
        )}
      </div>

      {booking.fallbackText && (
        <div className="mt-10 rounded-2xl border border-border bg-secondary/50 p-6 text-sm text-muted-foreground">
          <strong className="text-foreground">Föredrar du att höra av dig direkt? </strong>
          {booking.fallbackText}
        </div>
      )}
    </section>
  );
}
