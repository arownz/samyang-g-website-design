import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Facebook, Flame, Star, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/menu-poster.jpg";
import wingsImg from "@/assets/wings.jpg";
import spreadImg from "@/assets/samyang-spread.jpg";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samyang G — Cheesy Buldak, Wings & More | Bacoor 24/7" },
      { name: "description", content: "Crave-worthy Samyang noodles, wings, and quesadillas in Bacoor, Cavite. Open 24 hours. Order, pickup, or delivery." },
      { property: "og:title", content: "Samyang G — Cheesy Buldak in Bacoor" },
      { property: "og:description", content: "Spicy noods with cheese & love. Open 24/7." },
    ],
  }),
  component: Home,
});

const bestsellers = [
  { name: "Cheesy Samyang", price: 139, tag: "Crowd favorite" },
  { name: "Buffalo Wings", price: 189, tag: "10/10" },
  { name: "Burrito Samyang", price: 199, tag: "New" },
  { name: "Chili Con Carne Spud", price: 179, tag: "Loaded" },
];

const categories = [
  { id: "buldak", title: "Buldak", desc: "Spicy Korean noodles, our way." },
  { id: "chicken", title: "Chicken", desc: "Wings & tenders, sauced up." },
  { id: "spud-potato", title: "Spud Potato", desc: "Loaded baked spuds." },
  { id: "quesadilla", title: "Quesadilla", desc: "Cheesy, melty, crispy." },
];

function Home() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Samyang G",
            servesCuisine: ["Korean", "Filipino", "Fast Food"],
            priceRange: "₱",
            telephone: "+639276964506",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Blk 1 Lot 3 Phase 3, Villa Vieja, Georgetown, Molino 4",
              addressLocality: "Bacoor",
              addressRegion: "Cavite",
              addressCountry: "PH",
            },
            openingHours: "Mo-Su 00:00-23:59",
          }),
        }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
              <Flame className="h-3.5 w-3.5" /> Open 24 Hours · Bacoor, Cavite
            </div>
            <h1 className="mt-5 font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              SPICY NOODS <br />
              <span className="text-spicy">WITH CHEESE</span>
              <span className="font-script text-5xl text-accent"> & love</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground">
              Order, pickup, or delivery. Cheesy buldak, saucy wings, melty quesadillas — served any hour you crave them.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="tel:09276964506"
                className="inline-flex items-center gap-2 rounded-full bg-spicy px-6 py-3 font-semibold text-primary-foreground shadow-lg shadow-spicy/30 transition hover:scale-105"
              >
                <Phone className="h-4 w-4" /> 0927 696 4506
              </a>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full border-2 border-charcoal bg-cream px-6 py-3 font-semibold text-charcoal transition hover:bg-charcoal hover:text-cream"
              >
                See the Menu
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-spicy/30 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />
            <img
              src={heroImg}
              alt="Samyang G food menu featuring cheesy noodles and crispy chicken"
              className="relative w-full rounded-2xl border-4 border-charcoal object-cover shadow-2xl"
              loading="eager"
            />
            <div className="absolute -bottom-4 -left-4 rotate-[-6deg] rounded-xl bg-charcoal px-4 py-2 font-script text-2xl text-spicy shadow-xl">
              so cheesy 🧀
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee />

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-script text-3xl text-spicy">explore the</p>
            <h2 className="font-display text-4xl md:text-5xl">FLAVOR LANES</h2>
          </div>
          <Link to="/menu" className="hidden text-sm font-semibold text-spicy hover:underline md:inline">
            View full menu →
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to="/menu"
                hash={c.id}
                className="group block h-full rounded-2xl border-2 border-charcoal bg-card p-6 transition hover:-translate-y-1 hover:bg-spicy hover:text-primary-foreground"
              >
                <div className="font-display text-2xl">{c.title.toUpperCase()}</div>
                <p className="mt-2 text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                  {c.desc}
                </p>
                <span className="mt-6 inline-block text-sm font-semibold text-spicy group-hover:text-primary-foreground">
                  See items →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="bg-charcoal py-16 text-cream">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-script text-3xl text-spicy">people's pick</p>
              <h2 className="font-display text-4xl text-cream md:text-5xl">BESTSELLERS</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((b) => (
              <div
                key={b.name}
                className="rounded-2xl border border-cream/15 bg-cream/5 p-5 transition hover:scale-[1.03] hover:border-spicy"
              >
                <div className="flex items-center gap-1 text-spicy">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-spicy" />
                  ))}
                </div>
                <div className="mt-3 font-display text-xl">{b.name}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-cream/60">{b.tag}</div>
                <div className="mt-4 font-display text-2xl text-spicy">₱{b.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW + SPREAD */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="relative">
          <img
            src={spreadImg}
            alt="Samyang G takeout spread with buldak noodles and rice meal"
            className="w-full rotate-[2deg] rounded-2xl border-4 border-charcoal shadow-xl"
            loading="lazy"
          />
          <img
            src={wingsImg}
            alt="Saucy buffalo wings with ranch dip"
            className="absolute -bottom-8 -right-6 hidden w-48 rotate-[-6deg] rounded-2xl border-4 border-charcoal shadow-xl md:block"
            loading="lazy"
          />
        </div>
        <div>
          <p className="font-script text-3xl text-spicy">what they say</p>
          <h2 className="font-display text-4xl md:text-5xl">10/10 🌟</h2>
          <blockquote className="mt-6 rounded-2xl border-2 border-charcoal bg-card p-6 text-lg leading-relaxed">
            "Sarap ipartner ng Samyang sa green apple juice nilaaa"
            <footer className="mt-4 text-sm font-semibold text-muted-foreground">— Jhasmine Maia</footer>
          </blockquote>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1"><Clock className="h-4 w-4 text-spicy" /> 24 Hours</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1"><MapPin className="h-4 w-4 text-spicy" /> Villa Vieja, Bacoor</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1">Dine-in · Takeout · Delivery</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-spicy p-10 text-primary-foreground md:p-14">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl">CRAVING IT?</h2>
              <p className="mt-2 max-w-xl text-primary-foreground/90">
                Tap to call or message us on Facebook — we'll get your order ready, hot and cheesy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="tel:09276964506"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal px-6 py-3 font-semibold text-cream transition hover:scale-105"
              >
                <Phone className="h-4 w-4" /> Call now
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61583262942785"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 font-semibold text-charcoal transition hover:scale-105"
              >
                <Facebook className="h-4 w-4" /> Message us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
