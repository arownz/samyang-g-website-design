import { createFileRoute } from "@tanstack/react-router";
import spreadImg from "@/assets/samyang-spread.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Samyang G | Bacoor's 24/7 Spicy Spot" },
      { name: "description", content: "The story behind Samyang G — a small-time fast food joint serving spicy, cheesy comfort food 24/7 in Villa Vieja, Bacoor, Cavite." },
      { property: "og:title", content: "About Samyang G" },
      { property: "og:description", content: "Small-time fast food. Big spicy energy. Open 24/7 in Bacoor." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Fresh", desc: "Cooked to order, never sitting around." },
  { title: "Spicy", desc: "Real Samyang heat, dialed for cravings." },
  { title: "Cheesy", desc: "Generous melts on everything that wants it." },
  { title: "24/7", desc: "Cravings don't sleep — neither do we." },
];

function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <p className="font-script text-3xl text-spicy">our story</p>
          <h1 className="font-display text-5xl md:text-6xl">SMALL-TIME, <br /><span className="text-spicy">BIG FLAVOR.</span></h1>
          <p className="mt-5 text-muted-foreground">
            Samyang G started with a simple craving: that perfect bite of fiery Korean noodles smothered in cheese.
            Today we serve our neighbors in Villa Vieja, Bacoor with the same recipe — cooked fresh, packed hot, and
            ready any hour of the day or night.
          </p>
          <p className="mt-3 text-muted-foreground">
            From cheesy buldak to saucy wings, every plate is built around two things: heat and comfort.
            Pull up, dine in, take it out, or have it delivered — whatever the craving calls for.
          </p>
        </div>
        <img
          src={spreadImg}
          alt="Samyang G takeout spread"
          className="w-full rotate-[-2deg] rounded-2xl border-4 border-charcoal shadow-xl"
          loading="lazy"
        />
      </div>

      <section className="mt-16">
        <h2 className="text-center font-display text-4xl">WHAT WE'RE ABOUT</h2>
        <div className="mx-auto mt-2 h-1 w-16 rounded bg-spicy" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border-2 border-charcoal bg-card p-6 text-center">
              <div className="font-display text-3xl text-spicy">{v.title.toUpperCase()}</div>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-charcoal p-10 text-cream md:p-14">
        <p className="font-script text-3xl text-spicy">a happy customer said</p>
        <blockquote className="mt-3 font-display text-3xl leading-tight md:text-4xl">
          "10/10 🌟 sarap ipartner ng Samyang sa green apple juice nilaaa"
        </blockquote>
        <footer className="mt-3 text-sm text-cream/70">— Jhasmine Maia</footer>
      </section>
    </div>
  );
}
