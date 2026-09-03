import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import './About.css';

const CREDENTIALS = [
  'Leading development of corporate financial models and tariff models for large-scale infrastructure and energy projects.',
  'Playing a leading role in Power Purchase Agreement (PPA) negotiations with regulators and offtakers.',
  'Supporting project sponsors in investor engagement and transaction structuring, ensuring alignment with private equity and debt providers.',
];

export default function About() {
  return (
    <div className="page-about">
      <section className="section about-intro">
        <div className="container about-intro-grid">
          <Reveal>
            <div>
              <p className="section-kicker">About Leister Consultants</p>
              <h1>An independent voice on complex financial decisions.</h1>
              <p className="about-lead">
                Leister Consultants is an independent management consultancy
                with expertise in financial management, governance, and
                corporate finance. We work alongside project sponsors,
                investors, and boards to turn feasibility into financing, and
                financing into implementation.
              </p>
              <p className="about-lead">
                Our work sits at the point where technical feasibility meets
                financial reality &mdash; building the models, structures, and
                governance frameworks that let complex projects reach
                investment decisions with confidence.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder label="Leister Consultants team / office photo" ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      <section className="section about-focus">
        <div className="container">
          <Reveal><h2>What we specialize in</h2></Reveal>
          <div className="focus-grid">
            <Reveal delay={0} className="reveal-stretch">
              <div className="focus-item">
                <h3>Financial Modelling &amp; Feasibility Validation</h3>
                <p>Integrated SPV and group models tested against real technical and market assumptions.</p>
              </div>
            </Reveal>
            <Reveal delay={60} className="reveal-stretch">
              <div className="focus-item">
                <h3>Project Finance Structuring &amp; Compliance</h3>
                <p>Debt and equity structures aligned with lender and investor requirements.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="reveal-stretch">
              <div className="focus-item">
                <h3>Due Diligence</h3>
                <p>Financial, operational, and regulatory review for transactions and funding rounds.</p>
              </div>
            </Reveal>
            <Reveal delay={0} className="reveal-stretch">
              <div className="focus-item">
                <h3>Corporate Governance Advisory</h3>
                <p>Board structures, charters, and governance frameworks built for accountability.</p>
              </div>
            </Reveal>
            <Reveal delay={60} className="reveal-stretch">
              <div className="focus-item">
                <h3>PPA Structuring &amp; Negotiations</h3>
                <p>Power purchase agreement terms negotiated with regulators and offtakers.</p>
              </div>
            </Reveal>
            <Reveal delay={120} className="reveal-stretch">
              <Link to="/services" className="focus-item focus-item-link">
                <h3>See the full service breakdown</h3>
                <p>Governance, compliance, and financial management services &rarr;</p>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section partner-section">
        <div className="container partner-grid">
          <Reveal>
            <ImagePlaceholder label="Robert Maganda, Lead Consultant &mdash; portrait" ratio="4 / 5" />
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="section-kicker">Leadership</p>
              <h2>Robert Maganda</h2>
              <p className="partner-role">Lead Consultant</p>
              <div className="credential-list">
                {CREDENTIALS.map((text) => (
                  <div className="credential-item" key={text}>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="text-link">Get in touch with Robert &rarr;</Link>
            </div>
          </Reveal>
        </div>
      </section>

    
    </div>
  );
}
