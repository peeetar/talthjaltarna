/**
 * SiteImage
 * ---------
 * Drop-in replacement for <ImagePlaceholder>.
 * - If `src` is a non-empty string → renders a real <img>
 * - If `src` is "" or undefined   → renders the dashed placeholder
 *
 * Usage:
 *   <SiteImage src={home.hero.image} alt={home.hero.imageAlt} aspect="4/5" />
 */

type Props = {
  src?: string;
  alt?: string;
  /** CSS aspect-ratio value, e.g. "4/3", "16/10", "1/1" */
  aspect?: string;
  className?: string;
  /** Placeholder label shown when src is empty */
  placeholder?: string;
};

export function SiteImage({
  src,
  alt = "",
  aspect = "4/3",
  className = "",
  placeholder = "Bildplats — ladda upp bild via cPanel",
}: Props) {
  if (src) {
    return (
      <div
        className={`w-full overflow-hidden rounded-xl ${className}`}
        style={{ aspectRatio: aspect }}
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          onError={(e) => {
            // If the image 404s, hide it and show nothing
            // (avoids broken-image icon while the file is being uploaded)
            const el = e.currentTarget as HTMLImageElement;
            el.style.display = "none";
            const parent = el.parentElement;
            if (parent) {
              parent.innerHTML = `
                <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(135deg,#f3f4f6,#e5e7eb);border:1.5px dashed #d1d5db;border-radius:0.75rem;gap:0.5rem;padding:1.5rem;text-align:center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                  <p style="font-size:0.8rem;color:#6b7280;margin:0">Bild laddas upp: ${src}</p>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  }

  // No src → placeholder
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/30 bg-gradient-to-br from-secondary to-muted text-center ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="px-6">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
        <p className="text-sm font-medium text-foreground/80">{placeholder}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          Ladda upp bilden via cPanel File Manager → public_html/images/
        </p>
      </div>
    </div>
  );
}
