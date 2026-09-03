import { Link } from 'react-router-dom';
import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import './Services.css';

const MODELLING_ITEMS = [
  {
    title: 'Development of Corporate Financial Models',
    text: 'Integrated SPV and group models for complex projects, built to hold up under investor and lender scrutiny.',
    image: 'Corporate financial modelling',
  },
  {
    title: 'Tariff Modelling',
    text: 'Energy pricing models aligned with regulatory guidelines and investor requirements.',
    image: 'Tariff modelling for energy projects',
  },
  {
    title: 'Feasibility Consistency Reviews',
    text: 'Alignment of technical feasibility studies with financial outputs, so assumptions hold together end to end.',
    image: 'Feasibility consistency review',
  },
  {
    title: 'Scenario & Sensitivity Analysis',
    text: 'Stress-tested revenue streams, feedstock assumptions, and tariff structures against real-world variability.',
    image: 'Scenario and sensitivity analysis',
  },
  {
    title: 'Investor-Ready Outputs',
    text: 'IRR, NPV, DSCR, payback, and valuation metrics presented the way funders expect to see them.',
    image: 'Investor-ready financial outputs',
  },
];

const OTHER_SERVICES = [
  {
    category: 'Corporate Governance',
    items: [
      'Board trainings',
      'Preparation of board annual work plans',
      'Development of Governance and Ethics Manual',
      'Risk assessment and matrix development',
    ],
  },
  {
    category: 'Compliance',
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
    items: [
      'Accounting & controls',
      'Advice on financial system setup',
      'Statutory registrations such as KRA, NHIF, NSSF',
      'Review and advice on adequacy and efficiency of controls',
    ],
  },
  {
    category: 'Company Secretarial & Corporate Governance',
    items: [
      'Board set-up',
      'Constituting boards and sourcing competent board members',
      'Development of board charters and board manuals',
      'Guidance in establishment of board committees',
      'Development of board duties checklist',
    ],
  },
];

export default function Services() {
  const [activeModel, setActiveModel] = useState(0);

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
            <ImagePlaceholder label="Financial modelling workspace" ratio="4 / 3" />
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
                  <ImagePlaceholder label={MODELLING_ITEMS[activeModel].image} ratio="4 / 3" />
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
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-face flip-card-front">
                      <div className="flip-card-front-pattern" aria-hidden="true"></div>
                      <div className="flip-card-front-content">
                        <h3>{group.category}</h3>
                        <span className="flip-card-hint">Hover to see what&apos;s included</span>
                      </div>
                    </div>
                    <div className="flip-card-face flip-card-back">
                      <h3>{group.category}</h3>
                      <ul>
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                      <Link to="/contact" className="other-service-link">Learn more &rarr;</Link>
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