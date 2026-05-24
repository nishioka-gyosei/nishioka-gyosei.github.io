/* atoms.jsx — small reusable elements
   Exported on window for use by other Babel scripts.
   ----------------------------------------------------------- */

const Eyebrow = ({ children, color = 'gold', className = '' }) => (
  <div className={`nx-eyebrow nx-eyebrow--${color} ${className}`}>{children}</div>
);

const SectionTitle = ({ children, tone = 'navy', className = '' }) => (
  <h2 className={`nx-section-title nx-section-title--${tone} ${className}`}>{children}</h2>
);

const Lead = ({ children, tone = 'mid', className = '' }) => (
  <p className={`nx-lead nx-lead--${tone} ${className}`}>{children}</p>
);

const Btn = ({ variant = 'primary', children, href = '#', icon, className = '', ...rest }) => (
  <a href={href} className={`nx-btn nx-btn--${variant} ${className}`} {...rest}>
    {icon && <span className="nx-btn__icon">{icon}</span>}
    <span>{children}</span>
  </a>
);

const HeroBadge = ({ children }) => (
  <div className="nx-hero-badge">{children}</div>
);

const PoliceTag = ({ icon, children }) => (
  <span className="nx-police-tag">{icon && <span className="nx-police-tag__icon">{icon}</span>}{children}</span>
);

const GroupLabel = ({ tone = 'navy', children }) => (
  <span className={`nx-group-label nx-group-label--${tone}`}>{children}</span>
);

const SimChip = ({ children }) => (
  <span className="nx-sim-chip">{children}</span>
);

const Stat = ({ value, unit, label }) => (
  <div className="nx-stat">
    <div className="nx-stat__val">
      {value}
      {unit && <span>{unit}</span>}
    </div>
    <div className="nx-stat__label">{label}</div>
  </div>
);

const CareerItem = ({ children }) => (
  <div className="nx-career-item">
    <div className="nx-career-item__dot"></div>
    <div className="nx-career-item__text">{children}</div>
  </div>
);

const ArrowLink = ({ href = '#', children, tone = 'navy' }) => (
  <a href={href} className={`nx-arrow-link nx-arrow-link--${tone}`}>
    {children} <span aria-hidden="true">→</span>
  </a>
);

Object.assign(window, {
  Eyebrow, SectionTitle, Lead, Btn, HeroBadge, PoliceTag, GroupLabel,
  SimChip, Stat, CareerItem, ArrowLink,
});
