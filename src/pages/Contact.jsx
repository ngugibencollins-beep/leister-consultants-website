import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
import { SITE_IMAGES } from '../content/siteImages';
import './Contact.css';

const TERMS = [
  {
    title: 'Confidentiality',
    text: 'Protection of sensitive information shared during the consultancy project.',
  },
  {
    title: 'Payment Terms',
    text: 'Agreed-upon payment schedule and methods, set out before work begins.',
  },
  {
    title: 'Termination',
    text: 'Conditions under which either party may terminate the consultancy agreement.',
  },
  {
    title: 'Governing Law',
    text: 'Jurisdiction and laws governing the consultancy agreement.',
  },
];

export default function Contact() {
  return (
    <div className="page-contact">
      <section className="section contact-intro">
        <div className="container">
          <Reveal>
            <div>
              <p className="section-kicker">Contact</p>
              <h1>Let&apos;s talk about your project.</h1>
              <p className="contact-lead">
                Most engagements start with a short scoping conversation.
                Reach out directly using the details below.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section contact-main">
        <div className="container contact-grid">
          <Reveal className="contact-details">
            <div className="contact-detail-block">
              <h3>Robert Maganda</h3>
              <p className="contact-detail-role">Lead Consultant</p>
              <a href="mailto:robert@leisterconsultants.com" className="contact-detail-line">
                robert@leisterconsultants.com
              </a>
              <a href="tel:+254701772323" className="contact-detail-line">
                +254 701 772 323
              </a>
            </div>

            <div className="contact-detail-block">
              <h3>Engagement timeline</h3>
              <p>
                Typical delivery time is 3&ndash;6 weeks, depending on
                project complexity and the information support provided.
              </p>
            </div>

            <div className="contact-detail-block">
              <h3>Terms &amp; conditions</h3>
              <div className="terms-list">
                {TERMS.map((term) => (
                  <div className="terms-item" key={term.title}>
                    <span className="terms-title">{term.title}</span>
                    <span className="terms-text">{term.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="contact-image-wrap reveal-stretch">
            <ImagePlaceholder
              label="Leister Consultants project workspace"
              image={SITE_IMAGES.financialDesk}
              ratio="4 / 5"
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}