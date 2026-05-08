# Samyang G — Website Plan

A bold, appetite-driving site for a 24/7 Korean-Filipino fast food spot in Bacoor, Cavite. Spicy noodles with cheese vibes — warm cream background, fiery orange/red accents, deep charcoal type, playful script accents echoing the menu poster you shared.

## Brand direction

- **Vibe:** Street-food energy meets cozy comfort. Bold display type + flowing script accent (like the "Menu" word on your poster).
- **Palette (oklch tokens in `src/styles.css`):**
  - Background cream `#fcf6e8`
  - Spicy orange primary `#f59022`
  - Buldak red accent `#d63a2c`
  - Charcoal foreground `#1a1a1a`
  - Cheese-cream highlight for cards
- **Typography:** Display — "Bebas Neue" or "Anton" (chunky, like FOOD on poster). Script accent — "Caveat" / "Sacramento". Body — "DM Sans".
- **Motion:** Subtle hero noodle/steam fade-in, sticker-style "pop" on hovered prices, marquee strip for "OPEN 24 HOURS · DINE-IN · TAKEOUT · DELIVERY".

## Pages (TanStack Start routes)

```
src/routes/
  index.tsx        → Home / landing
  menu.tsx         → Full food menu
  about.tsx        → Story + reviews
  contact.tsx      → Location, hours, phone, FB
```

Shared `src/components/site/Navbar.tsx` and `Footer.tsx`.

### 1. Home (`/`)
- Sticky nav: logo "SAMYANG G", links Menu / About / Contact, "Order Now" button → tel:09276964506
- **Hero:** Big headline "Spicy noods with cheese & love 🌶️", subcopy "Order · Pickup · Delivery — Open 24 Hours in Bacoor, Cavite". Hero image of cheesy samyang plate with spicy orange accent shapes.
- **Marquee strip:** scrolling "OPEN 24/7 • DINE-IN • TAKEOUT • DELIVERY •"
- **Featured categories:** 4 cards — Buldak, Chicken, Spud Potato, Quesadilla — each links to `/menu#section`
- **Bestsellers row:** Cheesy Samyang ₱139, Buffalo Wings ₱189, Burrito Samyang ₱199, Chili Con Carne ₱179
- **Review highlight:** Jhasmine's 10/10 quote in a sticker-style card
- **CTA band:** "Crave it? Call 0927 696 4506" + FB link

### 2. Menu (`/menu`)
Two-column layout matching poster vibe with section anchors:
- **Buldak:** Cheesy Samyang ₱139, Samyang Overload ₱179, Samyang Poppers ₱189, Burrito Samyang ₱199
- **Chicken:** Garlic Parmesan Wings ₱189, Buffalo Wings ₱189, Garlic Parmesan Tenders ₱179, Buffalo Tenders ₱179
- **Rice Meal:** Spam Rice ₱99, Chicken Tenders ₱119, Wings Rice Bowl ₱119
- **Spud Potato:** Chili Con Carne ₱179, Cheesy Bacon ₱149, Chicken Poppers ₱149
- **Quesadilla:** Tuna ₱149, Beef ₱159
- Sticky "Order via Call/FB" floating button.

### 3. About (`/about`)
- Story block: small-time fast food in Villa Vieja, Bacoor — open 24/7 because cravings don't sleep.
- "Why people love us" — review card(s).
- Values strip: Fresh · Spicy · Cheesy · 24/7.

### 4. Contact (`/contact`)
- Address: Blk 1 Lot 3 Phase 3, Villa Vieja, Georgetown, Molino 4, Bacoor, Cavite
- Plus code: 9XFM+J5
- Hours: Open 24 hours
- Phone: 0927 696 4506 (tap-to-call)
- Facebook button → provided URL
- Embedded Google Maps iframe centered on the address
- Service options chips: Dine-in · Takeout · Delivery

## Technical notes

- Per-route `head()` with unique title/description/og tags for SEO (e.g. "Samyang G — Cheesy Buldak in Bacoor, Cavite").
- Semantic tokens only; define palette in `src/styles.css` `:root` using oklch.
- Use the three uploaded images as hero/section visuals — copy to `src/assets/` and import as ES6 modules.
- `framer-motion` for hero entrance + marquee.
- JSON-LD `Restaurant` schema on home (name, address, phone, hours, priceRange ₱).
- Mobile-first; phone CTA prominent since most local traffic is mobile.

## Out of scope (ask if you want them)

- Online ordering/checkout system
- Admin dashboard / CMS for menu editing
- Login / accounts