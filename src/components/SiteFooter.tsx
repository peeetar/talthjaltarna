import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h3 className="font-display text-xl text-primary">Tälthjältarna</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Vi täcker festen — partytält för bröllop, födelsedagar, företagsevent och allt däremellan.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Kontakt</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Mejl: <a className="hover:text-primary" href="mailto:kontakt@talthjaltarna.se">kontakt@talthjaltarna.se</a></li>
            <li>Telefon: <a className="hover:text-primary" href="tel:+46736956465">+46 73 695 64 65</a></li>
            <li>talthjaltarna.se</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Navigera</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/tjanster" className="hover:text-primary">Tält & tjänster</Link></li>
            <li><Link to="/om-oss" className="hover:text-primary">Om oss</Link></li>
            <li><Link to="/boka" className="hover:text-primary">Boka</Link></li>
            <li><Link to="/kontakt" className="hover:text-primary">Kontakt</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Tälthjältarna. Alla rättigheter förbehållna.
      </div>
    </footer>
  );
}
