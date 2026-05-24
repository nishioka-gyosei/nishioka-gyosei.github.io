/* lp-sections.jsx — LP-specific React components.
   Loaded AFTER atoms.jsx + components.jsx + sections.jsx so Header/Footer/Contact reuse.
*/

const LP_LINE_URL = 'https://lin.ee/UKhZQbE';

/* ===== LP HERO ===== */
const LPHero = ({ category, title, lead, icon, meta, breadcrumb }) => (
  <section className="nx-lp-hero" data-screen-label="01 LP Hero">
    <div className="nx-lp-hero__pattern"></div>
    <img src="assets/logo-transparent.png" alt="" className="nx-lp-hero__seal" />
    <div className="nx-lp-hero__inner">
      <div className="nx-lp-hero__breadcrumb">
        <a href="index.html">トップ</a>
        <span>›</span>
        <span>{breadcrumb || category}</span>
      </div>
      {icon && <div className="nx-lp-hero__service-icon">{icon}</div>}
      <div className="nx-lp-hero__category">{category}</div>
      <h1 className="nx-lp-hero__title">{title}</h1>
      <p className="nx-lp-hero__lead">{lead}</p>
      {meta && meta.length > 0 && (
        <div className="nx-lp-hero__meta">
          {meta.map((m, i) => (
            <div className="nx-lp-meta-item" key={i}>
              <div className="nx-lp-meta-item__label">{m.label}</div>
              <div className="nx-lp-meta-item__val">{m.value}{m.unit && <small>{m.unit}</small>}</div>
            </div>
          ))}
        </div>
      )}
      <div className="nx-lp-hero__buttons">
        <Btn variant="primary" icon="📱" href={LP_LINE_URL} target="_blank" rel="noopener noreferrer">LINE で無料相談</Btn>
        <Btn variant="outline" href="#pricing">料金を見る →</Btn>
      </div>
    </div>
  </section>
);

/* ===== LP SECTION wrapper ===== */
const LPSection = ({ children, num, tone = 'cream', id, screenLabel }) => (
  <section className={`nx-lp-section nx-lp-section--${tone}`} id={id} data-screen-label={screenLabel}>
    {num && <div className="nx-lp-section__num" aria-hidden="true">{num}</div>}
    <Bracket pos="tl" />
    <Bracket pos="br" />
    <div className="nx-lp-section__inner">
      {children}
    </div>
  </section>
);

/* ===== INFO CARDS GRID — for "対象店舗", "必要なもの", etc. ===== */
const InfoCardGrid = ({ items }) => (
  <div className="nx-info-grid">
    {items.map((it, i) => (
      <div className="nx-info-card" key={i}>
        <div className="nx-info-card__icon">{it.icon}</div>
        <div className="nx-info-card__title">{it.title}</div>
        <div className="nx-info-card__body">{it.body}</div>
      </div>
    ))}
  </div>
);

/* ===== PROCESS STEPS ===== */
const ProcessSteps = ({ steps }) => (
  <div className="nx-steps">
    {steps.map((s, i) => (
      <div className="nx-step" key={i}>
        <div className="nx-step__num">{String(i + 1).padStart(2, '0')}</div>
        <div className="nx-step__body">
          <div className="nx-step__title">{s.title}</div>
          <div className="nx-step__desc">{s.desc}</div>
          {s.duration && <div className="nx-step__duration">所要 ・ {s.duration}</div>}
        </div>
      </div>
    ))}
  </div>
);

/* ===== PRICING TABLE ===== */
const PricingTable = ({ heading, price, priceNote, rows, note }) => (
  <div className="nx-pricing">
    <div className="nx-pricing__header">
      <div className="nx-pricing__heading">{heading}</div>
      <div className="nx-pricing__price">{price}{priceNote && <small>{priceNote}</small>}</div>
    </div>
    {rows.map((r, i) => (
      <div className="nx-pricing__row" key={i}>
        <div className="nx-pricing__row-label">{r.label}</div>
        <div className="nx-pricing__row-val">{r.val}</div>
      </div>
    ))}
    {note && <div className="nx-pricing__note">{note}</div>}
  </div>
);

/* ===== FAQ ===== */
const FAQ = ({ items }) => (
  <div className="nx-faq">
    {items.map((it, i) => (
      <div className="nx-faq-item" key={i}>
        <div className="nx-faq-item__q">{it.q}</div>
        <div className="nx-faq-item__a">{it.a}</div>
      </div>
    ))}
  </div>
);

/* ===== RELATED LPS ===== */
const RelatedLPs = ({ items }) => (
  <div className="nx-related-grid">
    {items.map((it, i) => (
      <a className="nx-related-card" href={it.href} key={i}>
        <div className="nx-related-card__icon">{it.icon}</div>
        <div className="nx-related-card__title">{it.title}</div>
        <div className="nx-related-card__price">{it.price}</div>
      </a>
    ))}
  </div>
);

/* ===== CTA BAND ===== */
const CTABand = ({ title, sub }) => (
  <div className="nx-cta-band" style={{'--seal-bg': "url('assets/logo-transparent.png')"}}>
    <div className="nx-cta-band__text">
      <div className="nx-cta-band__title">{title}</div>
      <div className="nx-cta-band__sub">{sub}</div>
    </div>
    <div className="nx-cta-band__buttons">
      <Btn variant="primary" icon="📱" href={LP_LINE_URL} target="_blank" rel="noopener noreferrer">LINE で無料相談</Btn>
      <Btn variant="outline" href="tel:09080688527">📞 090-8068-8527</Btn>
    </div>
  </div>
);

Object.assign(window, {
  LPHero, LPSection, InfoCardGrid, ProcessSteps, PricingTable, FAQ, RelatedLPs, CTABand,
});
