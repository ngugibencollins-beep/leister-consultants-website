import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import AnimatedStat from '../components/AnimatedStat';
import './Home.css';

const SPECIALIZATIONS = [
  {
    title: 'Financial Modelling & Feasibility Validation',
    text: 'Integrated SPV and group models tested against real technical and market assumptions.',
    image: 'Financial modelling session',
  },
  {
    title: 'Project Finance Structuring & Compliance',
    text: 'Debt and equity structuring aligned with lender and investor requirements.',
    image: 'Project finance structuring meeting',
  },
  {
    title: 'Due Diligence',
    text: 'Financial, operational, and regulatory review for transactions and funding rounds.',
    image: 'Due diligence document review',
  },
  {
    title: 'Corporate Governance Advisory',
    text: 'Board structures, charters, and governance frameworks built for accountability.',
    image: 'Board & governance advisory meeting',
  },
  {
    title: 'PPA Structuring & Negotiations',
    text: 'Power purchase agreement terms negotiated with regulators and offtakers.',
    image: 'PPA negotiation, Tana River County',
  },
];

const OUTCOMES = [
  {
    title: 'Custom-built financial models',
    text: 'Tailored, dynamic models reflecting SPV, holding, and group structures, with transparent assumptions and scenario toggles.',
  },
  {
    title: 'Feasibility & assumption validation',
    text: 'Technical and market feasibility aligned with financial assumptions, benchmarked against industry standards.',
  },
  {
    title: 'Tariff & pricing models',
    text: 'Tariff design aligned to regulatory frameworks, including escalation clauses and PPA/offtake terms.',
  },
  {
    title: 'Financing & transaction support',
    text: 'Debt structuring, equity valuation, and return expectations negotiated with investors.',
  },
  {
    title: 'Outputs for stakeholders',
    text: 'IRR, NPV, DSCR, payback, sensitivity analysis, and investor-ready Excel models and pitch decks.',
  },
  {
    title: 'Compliance & due diligence readiness',
    text: 'Models aligned with PE, DFI, and IFC requirements, with full audit trails.',
  },
  {
    title: 'Capacity building & handover',
    text: 'Client teams trained to update and use models, with a structured handover of files and manuals.',
  },
];

const GALLERY = [
  { label: 'Financial modelling session' },
  { label: 'Project site visit, Tana River County' },
  { label: 'Board & governance advisory meeting' },
];

export default function Home() {
  const [activeSpec, setActiveSpec] = useState(0);

  return (
    <div className="page-home">
      <section className="hero">
        <div className="hero-grid-bg" aria-hidden="true"></div>
        <div className="container hero-inner">
          <div className="hero-text">
            <p className="hero-kicker">Management Consultancy</p>
            <h1>
              Independent financial and governance advisory for
              complex projects.
            </h1>
            <p className="hero-lead">
              Leister Consultants builds investor-grade financial models,
              validates feasibility, and structures project finance for
              infrastructure and energy transactions across Kenya and the
              region.
            </p>
            <div className="hero-actions">
              <Link to="/case-studies" className="btn-secondary">See our track record</Link>
            </div>
          </div>

          <div className="hero-stats">
            <span className="hero-stats-label" aria-hidden="true">Selected indicators</span>
            <div className="hero-stat">
              <AnimatedStat value="20MW" className="stat-number" />
              <span className="stat-label">Grid connection secured through PPA negotiation on the TIAC project</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">3&ndash;6</span>
              <span className="stat-label">Weeks typical delivery, depending on complexity</span>
            </div>
            <div className="hero-stat">
              <AnimatedStat value="5" className="stat-number" />
              <span className="stat-label">Interlinked SPVs modelled under one consolidated structure</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section specializations">
        <div className="container">
          <Reveal>
            <div className="specializations-header">
              <p className="section-kicker">Specializations</p>
              <h2>Where we focus</h2>
            </div>
          </Reveal>

          <div className="specializations-grid">
            <div className="spec-list">
              {SPECIALIZATIONS.map((item, i) => (
                <Reveal as="div" delay={i * 60} key={item.title}>
                  <div
                    className={`spec-row ${activeSpec === i ? 'spec-row-active' : ''}`}
                    onMouseEnter={() => setActiveSpec(i)}
                  >
                    <span className="spec-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120} className="spec-visual">
              <div className="spec-visual-sticky">
                <div key={activeSpec} className="spec-image-fade">
                  <ImagePlaceholder label={SPECIALIZATIONS[activeSpec].image} ratio="4 / 3" />
                </div>
                <div className="spec-stat-card">
                  <AnimatedStat value={String(SPECIALIZATIONS.length)} className="stat-number" />
                  <span className="stat-label">Core service areas, one consolidated engagement</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section gallery-strip">
        <div className="container">
          <Reveal><p className="section-kicker">Our work in the field</p></Reveal>
          <div className="gallery-grid">
            {GALLERY.map((item, i) => (
              <Reveal delay={i * 90} key={item.label} className="reveal-stretch">
                <ImagePlaceholder label={item.label} ratio="4 / 3" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section track-record">
        <div className="container track-record-grid">
          <Reveal className="track-record-text">
            <p className="section-kicker">Track record</p>
            <h2>Closed with a private equity fund, now in implementation.</h2>
            <p className="track-record-lead">
              The TIAC project is a multi-SPV green project spanning ethanol,
              power, biogas, fertilizer, and logistics, now under
              implementation in Tana River County. We designed and tested
              financial models for all five SPVs, reviewed feasibility
              studies for consistency with projections, guided PPA
              negotiations for a 20MW grid connection, and delivered the
              consolidated model that secured PE fund investment and debt
              structuring.
            </p>
            <Link to="/case-studies" className="text-link">Read the full case study <span className="case-study-arrow" aria-hidden="true">→</span></Link>
          </Reveal>
          <Reveal delay={120} className="track-record-image-wrapper">
            <ImagePlaceholder label="TIAC project photo" ratio="1 / 1" />
          </Reveal>
        </div>
      </section>

      <section className="section outcomes">
        <div className="container">
          <Reveal>
            <div>
              <p className="section-kicker">What you get</p>
              <h2>A consultancy engagement, start to finish.</h2>
            </div>
          </Reveal>
          <div className="outcomes-list">
            {OUTCOMES.map((item, i) => (
              <Reveal delay={(i % 2) * 80 + Math.floor(i / 2) * 40} key={item.title}>
                <div className="outcome-row">
                  <span className="outcome-index">{i + 1}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
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