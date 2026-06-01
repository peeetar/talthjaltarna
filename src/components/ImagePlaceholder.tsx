type Props = {
  label?: string;
  aspect?: string;
  className?: string;
};

export function ImagePlaceholder({ label = "Bildplats — lägg till bild", aspect = "4 / 3", className = "" }: Props) {
  return (
    <div
      className={`flex w-full items-center justify-center overflow-hidden rounded-xl border border-dashed border-primary/30 bg-gradient-to-br from-secondary to-muted text-center ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <div className="px-6">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
        </div>
        <p className="text-sm font-medium text-foreground/80">{label}</p>
        <p className="mt-1 text-xs text-muted-foreground">Placeholder — ersätt med riktig bild</p>
      </div>
    </div>
  );
}
