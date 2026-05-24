---
name: nishioka-gyosei-design
description: Use this skill to generate well-branded interfaces and assets for 西岡行政書士事務所 (Nishioka Gyosei Shoshi Office, Hiroshima) — landing pages, SEO/GEO content, slides, prototypes, social cards, anything that needs to look like it belongs to this practice. Contains the brand's design tokens, typography (Noto Serif JP / Noto Sans JP / Oswald), color system (navy + gold + cream), content/voice rules in Japanese, an emoji-based icon vocabulary, and a high-fidelity React UI kit recreating the marketing site.
user-invocable: true
---

# Nishioka Gyosei Shoshi Office — Brand & Design Skill

Read `README.md` in this skill first — it is the single source of truth for content fundamentals, visual foundations, and iconography. Then explore the supporting files:

- `colors_and_type.css` — ready-to-`<link>` design tokens (colors, type, spacing, radii, shadows, semantic helpers like `.eyebrow` / `.h1` / `.lead`).
- `assets/photo.jpg` — the founder's portrait (the visual anchor on every page).
- `assets/logo-transparent.png` — the graphic mark (maple + pen + ribbon). The primary identity element. Use on any colored surface.
- `assets/logo.png` — same mark on a white background (use on white surfaces only if alpha-blending is impossible).
- `assets/logo-mark.png` — 240px version for favicons / small UI marks.
- `assets/wordmark.svg` & `assets/wordmark-on-navy.svg` — typeset wordmarks for slides and decks.
- `preview/` — small standalone HTML cards showing every token in use; useful as reference.
- `ui_kits/website/` — pixel-faithful React recreation of the marketing site. Atoms in `atoms.jsx`, composite components in `components.jsx`, full sections in `sections.jsx`. Reuse `kit.css` as a starting point for new pages.

## Core rules

- **Voice is first-person singular ("私"), polite, conviction-led.** Copy must sound like Yuya Nishioka, not a corporate "we". Always anchor in concrete biographical proof: *元広島県警察官13年*, 広島市中区, the sister's story, specific permit names.
- **Color: navy + gold + cream.** Never invent additional brand colors. LINE green `#06C755` is the only allowed exception (LINE's own color).
- **Type: Noto Serif JP for headings & quotes, Noto Sans JP for body, Oswald for English/numerals.** Numerals (prices, stats, "01"/"02") are ALWAYS Oswald.
- **Iconography is Unicode emoji**, drawn from the established vocabulary (see README). Never invent new SVG icons for service categories. Never use abstract / face emoji. The one exception is the **brand logo** (`logo-transparent.png`) — that *is* a graphic mark and should appear in headers, footers, hero seals, and on slide title pages.
- **Section rhythm:** `Eyebrow (Oswald, gold, uppercase)` → `H1/H2 (Noto Serif JP, navy)` → `Lead (Noto Sans JP, 1.85 line-height)` → content. Sections alternate navy ↔ cream.
- **No gradients, no glassmorphism, no playful motion.** One entry animation (`fadeUp`), one looping scroll cue. Hover = color shift + 1px translate. That's it.

## When the user invokes this skill

If they ask for something specific (a new LP, a slide, a social card, a tweak to the existing site), build it directly using the tokens and UI kit. If they invoke it without context, ask:

1. **What surface?** New service LP, blog post, slide deck, social/OG card, leaflet, business card, email signature?
2. **Which service vertical?** 風営法 / 深夜営業 / 古物商 / 道路使用 / 警備業 / 建設業 / 会社設立 / 飲食店 / 創業融資 / 遺言 / 墓じまい — each has its own emoji and angle.
3. **SEO/GEO target?** What query should this rank for? What location modifier (広島 / 広島市 / 広島市中区)?
4. **Audience?** Small-business owner, fellow professional (士業の先生), end consumer for life events?
5. **CTA?** LINE / 電話 / 予約カレンダー / シミュレーター?

## Output formats

- **Visual artifacts** (slides, mocks, throwaway prototypes): copy the assets you need into a fresh HTML file alongside `colors_and_type.css`. Link the CSS, then build with the tokens. For multi-section pages, lift component patterns from `ui_kits/website/`.
- **Production code (handoff to the live site at nishioka-gyosei.github.io):** because the live site has all CSS inlined, port relevant rules from `colors_and_type.css` and `kit.css` into the page's `<style>` block. Keep token names (`--navy`, `--gold`, etc.) identical — the existing site already uses them.

## Critical do-nots

- Don't translate Japanese copy to English unless asked — Japanese first, English secondary.
- Don't use bluish-purple gradients, emoji cards, or cards with rounded corners + colored left-border alone (these are AI-design tropes that conflict with the brand).
- Don't pad layouts with filler "trust badges", "as-seen-in" logos, or testimonial avatars the practice doesn't have.
- Don't widen the container past **840px** unless designing a wide hero or a full-bleed dark band.
- Don't add cool-toned imagery — photography should feel warm and neutral, matching the founder's portrait.
