import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import { SITE_IMAGES } from '../content/siteImages';
import './Services.css';

const MODELLING_ITEMS = [
  {
    title: 'Development of Corporate Financial Models',
    text: 'Integrated SPV and group models for complex projects, built to hold up under investor and lender scrutiny.',
    image: SITE_IMAGES.financialLaptop,
  },
  {
    title: 'Tariff Modelling',
    text: 'Energy pricing models aligned with regulatory guidelines and investor requirements.',
    image: SITE_IMAGES.solarProject,
  },
  {
    title: 'Feasibility Consistency Reviews',
    text: 'Alignment of technical feasibility studies with financial outputs, so assumptions hold together end to end.',
    image: SITE_IMAGES.financialDesk,
  },
  {
    title: 'Scenario & Sensitivity Analysis',
    text: 'Stress-tested revenue streams, feedstock assumptions, and tariff structures against real-world variability.',
    image: SITE_IMAGES.financialLaptop,
  },
  {
    title: 'Investor-Ready Outputs',
    text: 'IRR, NPV, DSCR, payback, and valuation metrics presented the way funders expect to see them.',
    image: SITE_IMAGES.advisoryMeeting,
  },
];

const OTHER_SERVICES = [
  {
    category: 'Corporate Governance',
    image: SITE_IMAGES.governanceBoardroom,
    items: [
      'Board trainings',
      'Preparation of board annual work plans',
      'Development of Governance and Ethics Manual',
      'Risk assessment and matrix development',
    ],
  },
  {
    category: 'Compliance',
    image: SITE_IMAGES.complianceTiles,
    items: [
      'Registration of business names, partnerships, and companies',
      'Attending board meetings and taking minutes',
      'Filing of annual company returns with the registrar',
      'Maintaining company statutory registers',
      'Filing company changes required under the Companies Act',
      'Arbitration and alternative dispute resolution',
    ],
  },
  {
    category: 'Financial Management',
    image: SITE_IMAGES.financialCoins,
    items: [
      'Accounting & controls',
      'Advice on financial system setup',
      'Statutory registrations such as KRA, NHIF, NSSF',
      'Review and advice on adequacy and efficiency of controls',
    ],
  },
  {
    category: 'Company Secretarial & Corporate Governance',
    image: SITE_IMAGES.secretarialTable,
    items: [
      'Board set-up',
      'Constituting boards and sourcing competent board members',
      'Development of board charters and board manuals',
      'Guidance in establishment of board committees',
      'Development of board duties checklist',
    ],
  },
];

// True only on devices with a real mouse (laptops/desktops) — never on touch.
const supportsRealHover = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function Services() {
  const [activeModel, setActiveModel] = useState(0);
  const [flippedIndex, setFlippedIndex] = useState(null);

  const flipTo = (i) => setFlippedIndex(i);
  const flipBack = () => setFlippedIndex(null);

  const handleCardMouseEnter = (i) => {
    if (supportsRealHover()) flipTo(i);
  };

  const handleCardMouseLeave = (i) => {
    if (supportsRealHover() && flippedIndex === i) flipBack();
  };

  return (
    <div className="page-services">
      <section className="section services-intro">
        <div className="container services-intro-grid">
          <Reveal>
            <div>
              <p className="section-kicker">Services</p>
              <h1>From feasibility to financing, and everything a board needs in between.</h1>
              <p className="services-lead">
                Our work spans two connected areas: the technical financial
                modelling and project finance work that gets transactions to
                close, and the governance, compliance, and financial
                management work that keeps organizations running well after
                they do.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder label="Financial modelling workspace" image={SITE_IMAGES.financialLaptop} ratio="4 / 3" />
          </Reveal>
        </div>
      </section>

      <section className="section modelling-section">
        <div className="container">
          <Reveal><h2>Financial Modelling &amp; Project Finance</h2></Reveal>

          <div className="modelling-grid">
            <div className="modelling-list">
              {MODELLING_ITEMS.map((item, i) => (
                <Reveal delay={i * 50} key={item.title}>
                  <div
                    className={`modelling-row ${activeModel === i ? 'modelling-row-active' : ''}`}
                    onMouseEnter={() => setActiveModel(i)}
                  >
                    <span className="modelling-index">{i + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="modelling-visual">
              <div className="modelling-visual-sticky">
                <div key={activeModel} className="modelling-image-fade">
                  <ImagePlaceholder
                    label={MODELLING_ITEMS[activeModel].title}
                    image={MODELLING_ITEMS[activeModel].image}
                    ratio="4 / 3"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section other-services">
        <div className="container">
          <Reveal>
            <div className="other-services-header">
              <p className="section-kicker">Also on offer</p>
              <h2>Governance, compliance &amp; financial management</h2>
            </div>
          </Reveal>
          <div className="other-services-grid">
            {OTHER_SERVICES.map((group, i) => (
              <Reveal delay={(i % 2) * 90} key={group.category}>
                <div
                  className={`flip-card ${flippedIndex === i ? 'flip-card-flipped' : ''}`}
                  onMouseEnter={() => handleCardMouseEnter(i)}
                  onMouseLeave={() => handleCardMouseLeave(i)}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-face flip-card-front">
                      <img
                        className="flip-card-front-photo"
                        src={group.image.src}
                        alt={group.image.alt}
                        loading="lazy"
                      />
                      <div className="flip-card-front-overlay" aria-hidden="true"></div>
                      <div className="flip-card-front-content">
                        <h3>{group.category}</h3>
                        <button
                          type="button"
                          className="flip-card-learn-more"
                          onClick={() => flipTo(i)}
                        >
                          Learn more <span className="flip-card-arrow" aria-hidden="true">&rarr;</span>
                        </button>
                      </div>
                    </div>
                    <div className="flip-card-face flip-card-back">
                      <h3>{group.category}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <div className="flip-card-back-actions">
                        <button
                          type="button"
                          className="flip-card-back-btn"
                          onClick={flipBack}
                        >
                          <span className="flip-card-arrow-back" aria-hidden="true">&larr;</span> Back
                        </button>
                        <Link to="/contact" className="other-service-link">Talk to us &rarr;</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}