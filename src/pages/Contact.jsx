import { useState } from 'react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Reveal from '../components/Reveal';
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
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation request from ${form.name || 'website'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:robert@leisterconsultants.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="page-contact">
      <section className="section contact-intro">
        <div className="container">
          <Reveal>
            <div>
              <p className="section-kicker">Contact</p>
              <h1>Let&apos;s talk about your project.</h1>
              <p className="contact-lead">
                Most engagements start with a short scoping conversation. Reach
                out directly, or send a few details through the form below.
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

            <ImagePlaceholder label="Leister Consultants office" ratio="16 / 10" />
          </Reveal>

          <Reveal delay={120} className="contact-form-wrap reveal-stretch">
            <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a message</h3>

            <label>
              Name
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your full name"
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company or project name"
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                rows="5"
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about your project"
              ></textarea>
            </label>

            <button type="submit" className="btn-primary">Send message</button>

            {submitted && (
              <p className="form-note">
                Opening your email client to send this to Robert &mdash; if
                nothing opens, email robert@leisterconsultants.com directly.
              </p>
            )}
          </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
