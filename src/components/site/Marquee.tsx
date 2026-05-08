export function Marquee() {
  const items = ["OPEN 24/7", "DINE-IN", "TAKEOUT", "DELIVERY", "SPICY × CHEESY", "BACOOR, CAVITE"];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-spicy py-3 text-primary-foreground">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-lg tracking-wider">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t} <span className="text-primary-foreground/60">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
