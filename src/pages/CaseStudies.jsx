import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import AnimatedStat from '../components/AnimatedStat';
import './CaseStudies.css';

export default function CaseStudies() {
  return (
    <div className="page-case-studies">
      <section className="section case-intro">
        <div className="container">
          <Reveal>
            <div>
              <p className="section-kicker">Case Studies</p>
              <h1>Where the models met the ground.</h1>
              <p className="case-lead">
                Two engagements that show the range of our work &mdash; from
                pre-feasibility grant funding through to a multi-SPV project
                closed with a private equity fund.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section case-study case-study-tiac">
        <div className="container case-grid">
          <Reveal className="case-media">
            <ImagePlaceholder label="TIAC project site photo" ratio="1 / 1" />
            <div className="case-stat-row">
              <div className="case-stat">
                <AnimatedStat value="5" className="stat-number" />
                <span className="stat-label">SPVs modelled under one structure</span>
              </div>
              <div className="case-stat">
                <AnimatedStat value="20MW" className="stat-number" />
                <span className="stat-label">Grid connection secured</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="case-content">
            <span className="case-tag">Closed with PE Fund</span>
            <h2>TIAC Project</h2>
            <p className="case-location">Tana River County, Kenya</p>

            <h3>Overview</h3>
            <p>
              A multi-SPV green project spanning ethanol, power, biogas,
              fertilizer, and logistics &mdash; now under implementation
              stage in Tana River County.
            </p>

            <h3>Our role</h3>
            <ul className="case-role-list">
              <li>Designed and tested financial models for all SPVs.</li>
              <li>Reviewed feasibility studies to ensure assumption consistency with financial projections.</li>
              <li>Supported tariff modelling for the Power SPV (Tana Biomass Generating Company).</li>
              <li>Guided PPA negotiations for a 20MW grid connection under the renewable energy framework.</li>
              <li>Provided the consolidated model that secured PE fund investment and debt structuring.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section case-study case-study-gt">
        <div className="container case-grid case-grid-reverse">
          <Reveal className="case-content">
            <span className="case-tag">Pre-feasibility &amp; Grant Funding</span>
            <h2>Grant Thornton &amp; UNDP</h2>
            <p className="case-location">Pre-feasibility projects for grant funding</p>

            <h3>Our role</h3>
            <ul className="case-role-list">
              <li>Translated feasibility studies into investor-grade financial models.</li>
              <li>Strengthened due diligence by stress-testing key assumptions.</li>
              <li>Provided confidence to the PE fund and lenders, enabling funding closure.</li>
              <li>Currently guiding implementation-stage monitoring for the Tana Biomass SPV.</li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <ImagePlaceholder label="Grant Thornton / UNDP project photo" ratio="1 / 1" />
          </Reveal>
        </div>
      </section>

     
    </div>
  );
}
