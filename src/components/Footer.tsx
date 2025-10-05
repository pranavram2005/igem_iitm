import React from 'react';
import { stringToSlug } from "../utils";

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  return (
    <footer className="custom-footer">
      <div className="custom-footer__container">
        
        {/* Left Section - Logo and EPIC Title */}
        <div className="custom-footer__left">
          <img 
            src="/img/logo.png" 
            alt="Team Logo" 
            className="custom-footer__logo"
          />
          <h3 className="custom-footer__title">EPIC</h3>
        </div>

        {/* Middle Section - Sponsors */}
        <div className="custom-footer__middle">
          <div className="custom-footer__sponsors-section">
            <h4 className="custom-footer__sponsors-title">Title Sponsors</h4>
            <ul className="custom-footer__sponsors-list">
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Sponsor 1</a>
              </li>
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Sponsor 2</a>
              </li>
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Sponsor 3</a>
              </li>
            </ul>
          </div>
          
          <div className="custom-footer__sponsors-section">
            <h4 className="custom-footer__sponsors-title">Other Sponsors</h4>
            <ul className="custom-footer__sponsors-list">
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Partner A</a>
              </li>
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Partner B</a>
              </li>
              <li className="custom-footer__sponsors-item">
                <a href="#" className="custom-footer__sponsors-link">Partner C</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section - Contact Information */}
        <div className="custom-footer__right">
          <h4 className="custom-footer__contact-title">Contact Information</h4>
          <div className="custom-footer__address">
            IIT Madras<br />
            Chennai, Tamil Nadu<br />
            India - 600036<br />
            <br />
            Email: team@iitm.igem.org
          </div>
          
          <div className="custom-footer__social">
            <a 
              href="https://instagram.com/yourteam" 
              className="custom-footer__social-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="Instagram"
            >
              📷
            </a>
            <a 
              href="https://github.com/yourteam" 
              className="custom-footer__social-link"
              target="_blank" 
              rel="noopener noreferrer"
              title="GitHub"
            >
              🐙
            </a>
            <a 
              href="mailto:team@iitm.igem.org" 
              className="custom-footer__social-link"
              title="Email"
            >
              📧
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Required iGEM License Information */}
      <div className="custom-footer__bottom">
        <p style={{marginBottom: '0.5rem'}}>
          <small>
            © 2025 - Content on this site is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="license"
              style={{color: 'var(--palette-accent-light)'}}
            >
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </small>
        </p>
        <p style={{margin: 0}}>
          <small>
            The repository used to create this website is available at{" "}
            <a 
              href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}
              style={{color: 'var(--palette-accent-light)'}}
            >
              gitlab.igem.org/{teamYear}/{teamSlug}
            </a>
            .
          </small>
        </p>
      </div>
    </footer>
  );
}
