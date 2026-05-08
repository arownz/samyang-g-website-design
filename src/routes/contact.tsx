import { createFileRoute } from "@tanstack/react-router";
import { Phone, Facebook, MapPin, Clock, Navigation } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location — Samyang G | Bacoor, Cavite" },
      { name: "description", content: "Visit Samyang G at Blk 1 Lot 3 Phase 3, Villa Vieja, Georgetown, Molino 4, Bacoor, Cavite. Open 24 hours. Call 0927 696 4506." },
      { property: "og:title", content: "Visit Samyang G — Bacoor, Cavite" },
      { property: "og:description", content: "Open 24/7. Dine-in, takeout, delivery." },
    ],
  }),
  component: ContactPage,
});

const address = "Blk 1 Lot 3 Phase 3, Villa Vieja, Georgetown, Molino 4, Bacoor, Cavite";
const mapsQuery = encodeURIComponent(address);

function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <p className="font-script text-3xl text-spicy">come visit</p>
        <h1 className="font-display text-5xl md:text-6xl">FIND US</h1>
        <div className="mx-auto mt-3 h-1 w-20 rounded bg-spicy" />
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <div className="space-y-5 rounded-2xl border-2 border-charcoal bg-card p-6">
            <div className="flex gap-3">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-spicy" />
              <div>
                <div className="font-semibold">Address</div>
                <p className="text-sm text-muted-foreground">{address}</p>
                <p className="mt-1 text-xs text-muted-foreground">Plus code: 9XFM+J5 Bacoor, Cavite</p>
                <p className="mt-1 text-xs text-muted-foreground">Located in: Villa Vieja</p>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-spicy" />
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:09276964506" className="text-sm text-spicy hover:underline">0927 696 4506</a>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-spicy" />
              <div>
                <div className="font-semibold">Hours</div>
                <p className="text-sm text-muted-foreground">Open 24 hours · 7 days a week</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full bg-spicy/15 px-3 py-1 text-xs font-semibold text-spicy">Dine-in</span>
              <span className="rounded-full bg-spicy/15 px-3 py-1 text-xs font-semibold text-spicy">Takeout</span>
              <span className="rounded-full bg-spicy/15 px-3 py-1 text-xs font-semibold text-spicy">Delivery</span>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href="tel:09276964506"
                className="inline-flex items-center gap-2 rounded-full bg-spicy px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61583262942785"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-semibold text-cream"
              >
                <Facebook className="h-4 w-4" /> Facebook
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal px-4 py-2 text-sm font-semibold"
              >
                <Navigation className="h-4 w-4" /> Directions
              </a>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border-2 border-charcoal md:col-span-3">
          <iframe
            title="Samyang G location map"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
