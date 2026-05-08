import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Samyang G logo" className="h-10 w-10 rounded-full object-cover ring-2 ring-spicy/40" />
          <span className="font-display text-xl tracking-wide">SAMYANG G</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition hover:text-spicy"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-spicy" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:09276964506"
            className="inline-flex items-center gap-2 rounded-full bg-spicy px-4 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-spicy/30 transition hover:scale-105"
          >
            <Phone className="h-4 w-4" /> Order Now
          </a>
        </nav>

        <button
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium hover:bg-secondary"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-spicy" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:09276964506"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-spicy px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
