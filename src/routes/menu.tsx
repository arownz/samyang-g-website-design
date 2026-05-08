import { createFileRoute } from "@tanstack/react-router";
import { Phone, Facebook } from "lucide-react";
import { menu } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Samyang G | Buldak, Wings, Quesadillas" },
      { name: "description", content: "Full Samyang G menu: cheesy buldak, wings, tenders, rice meals, loaded spuds and quesadillas. Prices in PHP." },
      { property: "og:title", content: "Samyang G Menu" },
      { property: "og:description", content: "Cheesy buldak, wings, quesadillas — full menu and prices." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="text-center">
        <p className="font-script text-3xl text-spicy">our</p>
        <h1 className="font-display text-5xl md:text-7xl">FOOD MENU</h1>
        <div className="mx-auto mt-3 h-1 w-24 rounded bg-spicy" />
      </div>

      <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-x-16">
        {menu.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="font-display text-3xl text-spicy">{section.title.toUpperCase()}</h2>
            <ul className="mt-5 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-baseline gap-3 border-b border-dashed border-charcoal/20 pb-3"
                >
                  <span className="text-base">{item.name}</span>
                  <span className="flex-1 border-b border-dotted border-charcoal/30" />
                  <span className="font-display text-lg text-spicy">₱{item.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Floating order bar */}
      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full border border-charcoal bg-charcoal/95 p-1.5 text-cream shadow-2xl backdrop-blur">
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
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
          >
            <Facebook className="h-4 w-4" /> Message
          </a>
        </div>
      </div>
    </div>
  );
}
