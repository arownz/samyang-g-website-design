import { Link } from "@tanstack/react-router";
import { Facebook, Phone, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.jpg";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Samyang G logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-spicy/50" />
            <div className="font-display text-2xl text-spicy">SAMYANG G</div>
          </div>
          <p className="mt-3 text-sm text-cream/70">
            Spicy noods with cheese & love. Served 24/7 in Bacoor, Cavite.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-spicy" /> Blk 1 Lot 3 Phase 3, Villa Vieja, Georgetown, Molino 4, Bacoor, Cavite</div>
          <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-spicy" /> <a href="tel:09276964506" className="hover:underline">0927 696 4506</a></div>
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-spicy" /> Open 24 hours</div>
          <a
            href="https://web.facebook.com/profile.php?id=61583262942785"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 rounded-full bg-spicy px-4 py-2 text-sm font-semibold text-primary-foreground"
          >
            <Facebook className="h-4 w-4" /> Facebook
          </a>
        </div>
        <div className="text-sm">
          <div className="font-semibold text-spicy">Explore</div>
          <ul className="mt-2 space-y-1">
            <li><Link to="/menu" className="hover:text-spicy">Menu</Link></li>
            <li><Link to="/about" className="hover:text-spicy">About</Link></li>
            <li><Link to="/contact" className="hover:text-spicy">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} Samyang G. All rights reserved.
      </div>
    </footer>
  );
}
