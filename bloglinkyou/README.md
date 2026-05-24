# 西岡行政書士事務所 Design System
**Nishioka Gyosei Shoshi Office — Brand & Component Guidelines**

A design system for the practice of **西岡祐也 (Yuya Nishioka)**, a Hiroshima-based *gyosei-shoshi* (行政書士 — administrative/legal scrivener) who spent **13 years as a Hiroshima Prefectural Police officer** before opening his own firm.

This system is built to support **SEO + GEO (Generative Engine Optimization)** — content must be crawlable, semantically structured, locally specific (Hiroshima / 広島市中区), and credibly authored by a named human expert. The visual language reinforces those signals: navy + gold reads as authority, the founder's face is featured throughout, and copy speaks in first-person with concrete personal history.

> **Source of truth:** [https://nishioka-gyosei.github.io/](https://nishioka-gyosei.github.io/) — single-page-app marketing site, GitHub Pages, all CSS inlined in `<style>`. There is no Figma file and no separate component repo; the live HTML is the design system.

---

## At a glance

| | |
|---|---|
| **Brand name** | 西岡行政書士事務所 (Nishioka Gyosei Shoshi Office) |
| **Founder** | 西岡 祐也 / Yuya Nishioka — 元広島県警察官13年 |
| **Location** | 広島市中区大手町4-6-22 (Hiroshima city, Naka-ku) |
| **Registration** | 22341036 (広島県行政書士会) |
| **Tagline (EN)** | EX-POLICE OFFICER. |
| **Tagline (JP)** | 警察を知る行政書士が、あなたの許可を取る。 |
| **Primary services** | 風営法 / 深夜営業届 / 古物商 / 道路使用 / 警備業 / 建設業 / 会社設立 / 飲食店 / 創業融資 / 遺言 / 墓じまい |
| **Hero colors** | Navy `#0d1f3c` × Gold `#c9a84c` × Cream `#f8f5ef` |
| **Logo mark** | 🍁 Maple leaf + ✒️ fountain pen + 🌈 ribbon, in a black circle ([assets/logo-transparent.png](assets/logo-transparent.png)) |
| **Type stack** | Noto Serif JP (display) · Noto Sans JP (body) · Oswald (Latin/numerals) |

---

## Products represented

Only **one product surface**: the marketing/SEO website (`nishioka-gyosei.github.io`). It is a multi-page site with:

- **Homepage** (`index.html`) — full marketing flow: hero, services overview, about, reasons, calendar, contact.
- **Topic landing pages** — one per service, e.g. `police_lp.html`, `fuueihou_lp.html`, `sinnyaeigyou_lp.html`, `douroshiyou_lp.html`, `kobutu_lp.html`, `kensetsu_lp.html`, `minpaku_lp.html`, `nochi_lp.html`. These are SEO-tuned long-form pages for specific keywords.
- **Simulator** (`simulator.html`) — interactive quote estimator.
- **Blog** (`/blog/`) — column posts authored under the "ex-police viewpoint" angle.
- **Practitioner-referral** (`sagyoshi_renkai.html`) — for other professionals (lawyers, judicial scriveners) sending work.

There is **no mobile app**, **no logged-in product**, and **no internal dashboard**. Everything is public, static, and optimized for search.

---

## Index of this design system

| File / folder | What's in it |
|---|---|
| `README.md` | This file — overview, content & visual foundations, iconography |
| `SKILL.md` | Agent-skill manifest (cross-compatible with Claude Code skills) |
| `colors_and_type.css` | All design tokens — colors, fonts, spacing, radii, shadows |
| `assets/` | Photo of founder, SVG marks, favicon-equivalent |
| `preview/` | Small standalone HTML cards used by the Design System tab |
| `ui_kits/website/` | High-fidelity recreation of the website + reusable JSX components |
| `fonts/` | (Not used — all type loaded from Google Fonts) |

---

## CONTENT FUNDAMENTALS

### Voice & POV
- **First-person singular ("私").** The founder writes as himself — never "we" / 当社. Copy is signed off as "代表行政書士 西岡祐也（元広島県警察官）".
- **Direct address to the reader ("あなた", or simply imperative).** The reader is positioned as a small-business owner who is busy and slightly anxious about a permit.
- **Concrete biographical proof**, not abstract credentialism. The site says *"19歳のとき、大学受験に失敗し、フリーターになりました"* and *"妹の存在がきっかけ"* — vulnerability + specific years of police service = trust. Never replace this with vague "many years of experience".

### Tone
- **Plain-spoken Japanese, polite (です・ます) but not stiff.**
- **Conviction over hedging.** Statements like "**書類の不備で差し戻し」をほぼゼロにできます。**" land as a promise grounded in inside knowledge, not a marketing claim.
- **Insider framing.** Almost every service block reframes the topic from the *window-clerk's* perspective ("警察の窓口担当者は、申請書の「どこを見て」「何で却下するか」を、一定の基準で評価しています"). This is the core SEO/GEO differentiator — copy that an LLM will quote when asked "why hire an ex-police gyosei-shoshi?"
- **Reassuring on cost.** Every CTA repeats that consultation is free ("相談は無料です", "費用もかかりません"). Never bury price; either show a starting figure (`77,000円〜`) or write `要見積もり`.

### Casing & punctuation rules
- **Section eyebrows in ALL-CAPS English with letter-spacing 0.2em** (`WHY EX-OFFICER`, `SERVICES`, `ABOUT ME`, `WHY CHOOSE US`). These bracket the page rhythmically and read as design ornament more than content. Always Oswald.
- **Section H1s in Japanese serif (Noto Serif JP), bold.** May contain a soft line break with two spaces of indent: e.g. `「元警察官の行政書士」が　選ばれる、本当の理由。` — the embedded full-width space is intentional visual rhythm.
- **Yen prices**: half-width comma + 円, with `〜（税込）` suffix. Format: `77,000円〜（税込・図面込み）` or `要見積もり` if variable.
- **Phone numbers** displayed as `090-8068-8527` with dashes, tappable on mobile.
- **Address**: `広島市中区大手町4-6-22（市役所前電停 徒歩4分）` — always include the transit cue in parentheses (SEO/local cue).
- **Years use 年** (`13年間`, `2026.05.03`). Dates in body copy: `2026.05.03 ／ 元警察官の視点で解説`.

### Emoji policy
The site **does use emoji deliberately** as visual category markers — never as decoration. They appear as the leading glyph of service cards, contact methods, and CTAs:

| Emoji | Meaning |
|---|---|
| 🚨 / 🎤 | 風営法 (pleasure-trade permits) |
| 🌙 | 深夜営業届 (late-night business) |
| 🚗 | 道路使用 (road-use permits) |
| ♻️ | 古物商 (used-goods dealer) |
| 🛡️ | 警備業 (security business) |
| 🏗️ | 建設業 (construction) |
| 🏢 | 会社設立 (company formation) |
| 🍺 | 飲食店 (restaurant licensing) |
| 💰 | 創業融資 (startup financing) |
| 📜 | 遺言 (wills) |
| 🪦 | 墓じまい (grave relocation) |
| 💴 | 料金シミュレーター |
| 💬 / 📱 | LINE consultation |
| 📞 | phone |
| 📚 | blog / columns |
| 📅 | calendar booking |

**Rule:** when adding a new service category, pick a single concrete-object emoji and stick with it. **Never stack emoji** ("🚨🎤📝"). **Never use abstract / face emoji** (😀, ✨, 🎉). The emoji is functional — it's the icon system this site uses in place of a custom SVG library (see ICONOGRAPHY below).

### Sample copy (paste-ready building blocks)

> **Hero pattern**
>
> EYEBROW: `元広島県警察官13年 ｜ 行政書士`
> DISPLAY: `EX-POLICE OFFICER.`
> JP TITLE: `警察を知る行政書士が、あなたの許可を取る。`
> SUB: `風営法・深夜営業届・道路使用許可・古物商許可——／これらはすべて、警察が窓口の申請です。／13年間、広島県警察に勤務した経験があるからこそ、／窓口の審査担当者が何を見ているか、私は知っています。`
> CTAs: `📱 LINE で無料相談` · `サービスを見る →`

> **Service card pattern**
>
> ICON: emoji
> TITLE: `風俗営業許可（風営法）`
> DESC: `キャバクラ・ガールズバー・ホストクラブ等。図面作成から警察署への提出まで一括対応。`
> PRICE: `要見積もり` *or* `77,000円〜（税込・図面込み）`
> LINK: `詳しく見る →`

> **Stat block pattern (three side-by-side)**
>
> `13年` / 広島県警察 勤務　·　`0円` / 初回相談 無料　·　`365日` / LINE相談 対応

---

## VISUAL FOUNDATIONS

### The aesthetic in one line
**"Quiet authority on cream paper, with a navy uniform and a gold badge."** Every layout decision should reinforce trustworthiness for a regulated profession in Japan — never quirky, never playful, never tech-startup.

### Color
- **Navy `#0d1f3c` is the brand.** It dominates: header, hero, about, contact-featured card, footer (`#081425`, slightly deeper for footer only). On navy, white text + gold accents.
- **Gold `#c9a84c`** is the *only* accent. Use it for: primary CTA fill, eyebrow text on cream/navy, prices, large stat numbers, decorative quote-marks, the 3px left-border accent on tags and reason cards. Hover state shifts to `--gold-light #e8c97a`. **Never** put gold on white as a flat fill — it disappears.
- **Cream `#f8f5ef`** is the secondary surface — sandwiched between navy sections. Cards on cream are white with a `#e0dbd0` warm-beige border.
- **No tertiary brand colors.** No reds, greens, blues. The only non-brand color permitted is `#06C755` for the LINE CTA (LINE's own brand color is non-negotiable).
- **Imagery vibe:** warm, naturally-lit photography (the founder's portrait is a neutral indoor headshot, mild warmth). Avoid cool/blue-toned photography, no grain, no heavy filters.

### Type
- **Three families, three jobs.** Noto Serif JP for headings/quotes (formal, document-like). Noto Sans JP for body (legible at small JP sizes). Oswald for English labels and numerals — it's narrow, all-caps-friendly, gives the "uniformed insignia" feel. **Never** substitute Oswald with Inter/Roboto — the condensed proportion is the point.
- **Eyebrow + heading pair on every section.** `<small.eyebrow>` (Oswald, gold, uppercase, tracked) sitting above `<h2>` (Noto Serif JP, navy, bold) is the dominant pattern.
- **Body line-height is generous (1.85–1.9).** Japanese reads densely; the air around paragraphs is mandatory.
- **Numerals always Oswald.** Yen prices, stats ("13年", "0円", "365日"), section numbers ("01", "02", "03") all use Oswald — not the Japanese sans.

### Spacing
- Section vertical padding: **80px top + 80px bottom** desktop (`var(--space-20)`).
- Container max width: **840px** — narrow, document-like, single-column biased. This is intentional: it forces the eye through a clear reading order and matches the long-form SEO posture.
- Horizontal page padding: **24px** (`var(--space-6)`) on mobile and desktop alike.
- Vertical rhythm inside a section: eyebrow → 12px → H1/H2 → 20px → lead → 48px → content.

### Backgrounds
- **Alternating navy ↔ cream sections.** The page reads as a stack of horizontal bands. No full-bleed photography. No gradients except the subtle scroll-line fade in the hero.
- **One signature background:** the hero has a **subtle grid pattern** — two `repeating-linear-gradient`s at 80px intervals with a gold tint at ~6% opacity. This evokes graph paper / a police-issue document and is the closest thing to texture anywhere in the system.
- **One signature decoration:** the giant left-quote `「` character at 100px, set in Noto Serif JP at ~12% gold opacity, behind testimonial blocks. Don't reuse anywhere else.

### Borders & cards
- **Card on light bg:** `1px solid #e0dbd0`, `border-radius: 8px`, white fill, optional `--shadow-card` (`0 2px 8px rgba(0,0,0,0.06)`).
- **Card on navy bg:** translucent fill `rgba(255,255,255,0.05)`, gold border `rgba(201,168,76,0.25)`, same 8–12px radius.
- **The gold left-accent:** a 3px gold border on the left edge of tags, OR a 4×60px gold bar in the top-left corner of reason cards. This is the closest the system gets to a "brand mark" inside layouts.
- **Service cards grid uses 1px gaps with `border` set on the parent** — produces the classic "lined-paper" effect (cells separated by hairlines rather than spacing).

### Radii
| Token | Value | Use |
|---|---|---|
| `--radius-xs` | 2px | Group label tabs (`SERVICES`, `事業・開業サポート`) |
| `--radius-sm` | 4px | Header CTA, small tags |
| `--radius-md` | 6px | Primary buttons |
| `--radius-lg` | 8px | Cards, quote blocks, most surfaces |
| `--radius-xl` | 12px | Large containers like calendar wrap |
| `--radius-2xl` | 14px | Simulator card |
| `--radius-pill` | 999px | Hero badge |

### Shadows
The site uses **only two elevations** and both are restrained. Depth comes from color contrast, not blur. Do not invent new shadow steps.

- `--shadow-card`: `0 2px 8px rgba(0,0,0,0.06)` — applied on row hover.
- `--shadow-lifted`: `0 4px 24px rgba(0,0,0,0.07)` — simulator card only.

### Animation
- **Single keyframe in the entire system: `fadeUp`.** Translate 24px → 0 + opacity 0 → 1, over 0.6–0.7s, easing `ease`. Applied to hero badge, hero copy, hero buttons with staggered delays (0s, 0.1s, 0.2s, 0.3s, 0.4s).
- **One looping animation:** the hero "SCROLL" line pulses (`scaleY 1 → 0.6` + opacity, 1.8s).
- **Transitions:** `0.15s` for color/border, `0.2s` for background and translateY. Easing is plain `ease` (default).
- **Hover state for buttons:** primary buttons gain `transform: translateY(-1px)` + background shift to `--gold-light`. Outline buttons swap border to gold + text to gold.
- **No bounces. No scale-on-hover. No parallax. No scroll-triggered animations beyond the initial fadeUp.**

### Hover & press states
| Element | Hover |
|---|---|
| Gold button | bg → `--gold-light`, translateY -1px |
| Outline button (on navy) | border + text → gold |
| Service card | bg → `#fafaf8` (1-tick warmer than white) |
| Sim row (link) | border → `--navy-mid`, gains `--shadow-card` |
| Card link badge | bg → navy, text → white, border → navy |

No distinct press state — buttons rely on the hover transform. No focus-ring overrides (browser default — accessibility neutral).

### Transparency & blur
- **Header**: `rgba(13,31,60,0.97)` + `backdrop-filter: blur(8px)`. The only blur in the system.
- **Tags / badges on navy**: gold tint at 12–15% opacity.
- **White overlays on navy**: 5–8% for surfaces, 30–45% for borders and tertiary text.
- **No glassmorphism.** No frosted-card stacks. The header is the lone exception.

### Layout rules
- **Fixed element:** the header (60px tall, `position: fixed`). Page content needs top padding to clear it.
- **Single-column biased** at the 840px container; multi-column only for: services grid (2 cols), reasons grid (auto-fill 250px min), about (1:2 col on desktop, stacks on mobile), simulator (1:1 on desktop, stacks on mobile).
- **Breakpoint:** the site uses a single `@media (max-width: 640px)` and stacks everything below it.

---

## ICONOGRAPHY

### Approach
**This brand has no custom icon library.** The site deliberately uses **Unicode emoji** as its iconography — full-color, system-rendered, set inline alongside Japanese type. This is a conscious choice for an SEO-first site: emoji are universally available, accessible to screen readers, copy-pasteable, and never break across browsers. They also signal a small, personal practice rather than a faceless corporate firm.

**Stick with the established emoji vocabulary** (table above in CONTENT FUNDAMENTALS → Emoji policy). When you need a glyph the site doesn't already use:
1. **First** look for a similar concrete-object emoji that matches the existing tone.
2. **Otherwise** use a single Unicode arrow / mark (e.g. `→` in CTA labels, `●` as the hero-badge dot).
3. **Last resort**: thin-stroke SVG. If you absolutely must — match these specs: 24×24 viewBox, 1.5px stroke, `currentColor` so it inherits navy/gold/white. No filled icons.

### Logo

The brand has a **graphic mark** in addition to the wordmark — a stylized **もみじ (Hiroshima maple leaf) + 万年筆 (fountain pen) + 虹のリボン (rainbow ribbon)** locked inside a black circle.

| Element | Meaning |
|---|---|
| 🍁 Red maple leaf | Hiroshima — the prefecture's symbol, also evokes 「楓」"maple" as a marker of place |
| ✒️ Fountain pen nib | The work — 行政書士 is a document profession; the pen is the tool of the trade |
| 🌈 Rainbow ribbon | The breadth of services — from 風営法 to 遺言, the practice meets people across the spectrum of life |
| ⭕ Black circle | The seal / 印 (hanko) format — frames the mark as an official emblem |

**Available files:**
- `assets/logo-source.png` — original 1254×1254 AI-generated source (white bg, no transparency).
- `assets/logo.png` — 800×800, white background. Use on white/light surfaces.
- `assets/logo-transparent.png` — 800×800, alpha-channel transparent. Use on navy / cream / any colored surface.
- `assets/logo-mark.png` — 240×240, transparent. Favicon / small UI mark.

**Use of the logo:**
- **Header lockup**: 44px mark + wordmark, on navy. The mark sits left, wordmark right.
- **Footer**: 56px mark centered, wordmark stacked below, full address block under.
- **Hero seal**: large translucent mark (~12–20% opacity) anchored right-bleed in dark sections. Treats the maple as a watermark that gives the navy texture without competing with copy.
- **Favicon / OG**: use `logo-mark.png` on a navy background.

**Don'ts:**
- Don't recolor the maple leaf or pen — the red + black + gold is the mark's identity.
- Don't shrink below 32px — the rainbow ribbon and pen-nib detail break up.
- Don't place on busy photography — it needs a flat colored or subtly-textured background.

### Wordmark

In addition to the graphic mark, there's a typeset wordmark for situations where the full lockup is too detailed:

```
西岡行政書士事務所            ← Noto Serif JP, 14px, 700, white
NISHIOKA GYOSEI SHOSHI OFFICE ← 10px, 400, gold, letter-spaced 0.1em
```

Clean SVG versions: `assets/wordmark.svg` (on light) and `assets/wordmark-on-navy.svg` (on dark). On the live website, the wordmark is typeset HTML inside the `.nx-header__logo` div — see the UI kit's `Header` component.

### Arrows
- `→` (U+2192) appears in every "see more" link: `詳しく見る →`, `サービスを見る →`, `料金シミュレーターを開く →`. Always full-width-spaced (one regular space before).

### Sources for additional icons
If a brief calls for an icon not present in the existing vocabulary, link **Lucide** (`lucide.dev`) from CDN — its thin-stroke aesthetic is the closest non-emoji match for the brand's restrained tone. **Flag this substitution to the user** before shipping; the established design language prefers emoji.

---

## Notes & substitutions made

- **Fonts:** all three families (Noto Serif JP, Noto Sans JP, Oswald) are loaded from Google Fonts — no local `.ttf` needed. `fonts/` directory left empty.
- **Logo:** the graphic mark (maple + pen + ribbon) was added separately by the founder. The original is a generated 1254×1254 raster; alpha-cut and downsized variants live in `assets/`. For print and large-format use, regenerate from `logo-source.png` rather than upscaling the smaller variants.
- **No Figma.** Tokens were extracted directly from the inline CSS of the production site. Any future design changes should be made there first (or in parallel with this system).
- **No mobile app / no admin product.** Only the marketing website surface is represented.

---

**Maintainer:** see `SKILL.md` for instructions on using this system from Claude / Claude Code.
