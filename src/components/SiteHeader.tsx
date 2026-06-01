import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Hem" },
  { to: "/tjanster", label: "Tält & tjänster" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/boka", label: "Boka" },
  { to: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold text-primary">Tälthjältarna</span>
        </Link>
        <nav className="hidden gap-7 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/boka"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 md:inline-block"
        >
          Boka tält
        </Link>
      </div>
    </header>
  );
}
