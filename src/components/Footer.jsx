import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-ring-inner" aria-hidden="true"></div>
      <div className="footer-ring-dot" aria-hidden="true"></div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <span className="footer-brand-name">Leister Consultants</span>
          <p>
            Independent management consultancy in financial management,
            governance, and corporate finance.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navigate</h4>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:robert@leisterconsultants.com">robert@leisterconsultants.com</a>
          <a href="tel:+254701772323">+254 701 772 323</a>
          <span className="footer-note">Robert Maganda, Lead Consultant</span>
        </div>

        <div className="footer-col">
          <h4>Engagement</h4>
          <span className="footer-note">Typical delivery: 3&ndash;6 weeks</span>
          <span className="footer-note">Scope dependent on project complexity</span>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {year} Leister Consultants. All rights reserved.</span>
      </div>
    </footer>
  );
}