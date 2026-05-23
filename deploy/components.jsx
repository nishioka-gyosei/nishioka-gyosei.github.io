/* components.jsx — composite UI elements
   ServiceCard, ReasonCard, ContactCard, QuoteBlock, FounderCard, SimRow
   ----------------------------------------------------------- */

const ServiceCard = ({ icon, title, desc, price, href = '#', linkLabel = '詳しく見る →' }) => (
  <div className="nx-service-card">
    <div className="nx-service-card__icon">{icon}</div>
    <div className="nx-service-card__title">{title}</div>
    <div className="nx-service-card__desc">{desc}</div>
    <div className="nx-service-card__price">{price}</div>
    {href && <a href={href} className="nx-service-card__link">{linkLabel}</a>}
  </div>
);

const ReasonCard = ({ num, title, body }) => (
  <div className="nx-reason-card">
    <div className="nx-reason-card__accent"></div>
    <div className="nx-reason-card__num">{num}</div>
    <div className="nx-reason-card__title">{title}</div>
    <div className="nx-reason-card__body">{body}</div>
  </div>
);

const QuoteBlock = ({ children, author }) => (
  <div className="nx-quote">
    <p>{children}</p>
    {author && <div className="nx-quote__author">— {author}</div>}
  </div>
);

const ContactCard = ({ icon, title, desc, action, featured }) => (
  <div className={`nx-contact-card${featured ? ' nx-contact-card--featured' : ''}`}>
    <div className="nx-contact-card__icon">{icon}</div>
    <div className="nx-contact-card__title">{title}</div>
    <div className="nx-contact-card__desc">{desc}</div>
    {action}
  </div>
);

const FounderCard = ({ photoSrc, nameJa, nameEn, items }) => (
  <div className="nx-about__name-block">
    <div className="nx-about__photo">
      {photoSrc ? <img src={photoSrc} alt={nameEn || nameJa} /> : null}
      <img src="assets/logo-transparent.png" alt="" className="nx-about__photo-badge" />
    </div>
    <div className="nx-about__name">{nameJa}</div>
    <div className="nx-about__name-en">{nameEn}</div>
    <div className="nx-about__career">
      {items.map((it, i) => <CareerItem key={i}>{it}</CareerItem>)}
    </div>
  </div>
);

const SimRow = ({ icon, name, price, href = '#' }) => (
  <a href={href} className="nx-sim__row">
    <div className="nx-sim__row-left">
      <span className="nx-sim__row-icon">{icon}</span>
      <span className="nx-sim__row-name">{name}</span>
    </div>
    <span className="nx-sim__row-price">{price}</span>
  </a>
);

const InfoItem = ({ label, children }) => (
  <div className="nx-info-item">
    <div className="nx-info-item__label">{label}</div>
    <div className="nx-info-item__val">{children}</div>
  </div>
);

Object.assign(window, {
  ServiceCard, ReasonCard, QuoteBlock, ContactCard, FounderCard, SimRow, InfoItem,
});
