# Website UI Kit — 西岡行政書士事務所

High-fidelity recreation of the marketing site at [nishioka-gyosei.github.io](https://nishioka-gyosei.github.io/), broken into reusable JSX components.

## Run

Open `index.html` directly — all dependencies (React 18, Babel standalone) are loaded from CDN.

## Files

| File | Purpose |
|---|---|
| `index.html` | Mounts the full homepage demo |
| `atoms.jsx` | Eyebrow, SectionTitle, Btn, Tag, Badge, etc. |
| `components.jsx` | ServiceCard, ReasonCard, ContactCard, QuoteBlock, StatItem |
| `sections.jsx` | Header, Hero, PoliceStrength, Services, About, Reasons, SimulatorCTA, BookCalendar, Contact, InfoStrip, Footer, FloatingLineCTA |
| `app.jsx` | Composes the homepage |
| `kit.css` | Base component styles |
| `polish.css` | Visual polish layer: scroll-reveal, watermarks, brackets, dramatic hover states |
| `enhance.js` | Vanilla JS: IntersectionObserver scroll-reveals, stat counter animation, sticky LINE FAB |

## Component coverage

Includes recreations of every major section of the live homepage:

- **Fixed Header** with logo + nav + CTA
- **Hero** with grid pattern, badge, display headline, Japanese subtitle, lead copy, button pair, scroll cue
- **Police-Strength** section with chip tags + giant-quote testimonial block
- **Services** grid with two group labels (警察窓口の申請 / 事業・開業サポート / 暮らしのサポート), 1px hairline dividers
- **About** founder block with photo, name, career timeline, body copy, stats strip
- **Reasons** 3-up grid with ghost numbers + gold accent
- **Simulator CTA** with two-column navy + cream split, service rows with prices
- **Booking** calendar placeholder
- **Contact** dual-card (featured LINE + phone)
- **Info strip** with address / hours / registration
- **Footer** with copyright + nav links

## What is *not* recreated

- Real Google Calendar embed (placeholder).
- Live simulator interactivity (it's a static panel on the homepage; the actual simulator lives on its own page).
- Blog post bodies (linked list only).
