import React from 'react';
import {
  FooterWrapper,
  FooterColumnList,
  FooterColumnTitle,
  FooterColumn,
  FooterColumnItem,
  FooterColumnLink,
  FooterContent,
} from './styled';

import footerData from '../../data/footer.json';

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div>
        <nav className="text-center footer-utility" aria-label="Footer Utility Links" data-placeholder="footer-top-row" data-rendering="Footer Utility Nav">

          <ul className="link-list">
            <li>
              <a href="https://my.snhu.edu/" target="_blank" className="flex-shrink-1 ">
                my.SNHU Login
              </a>
            </li>
            <li>
              <a href="/admission/academic-catalogs" className="flex-shrink-1 ">
                Academic Catalogs
              </a>
            </li>
            <li>
              <a href="https://www.snhu.edu/about-us/university-store" target="_blank" className="flex-shrink-1 ">
                University Store
              </a>
            </li>
            <li>
              <a href="https://admission.snhu.edu/" target="_blank" className="flex-shrink-1 ">
                Admission Portal Login
              </a>
            </li>
          </ul>



          <ul className="link-list">
            <li>
              <a href="https://www.snhupenmen.com/landing/index" target="_blank" className="flex-shrink-1 ">
                Athletics
              </a>
            </li>
            <li>
              <a href="/student-experience/international-experience" className="flex-shrink-1 ">
                International
              </a>
            </li>
            <li>
              <a href="https://www.snhu.edu/about-us/employment" target="_blank" className="flex-shrink-1 ">
                Employment
              </a>
            </li>
          </ul>
        </nav>

      </div>
      <div>
        <hr />

          <address className="signature text-center" data-placeholder="footer-bottom-row" data-rendering="Marketing Site Identity">
            <div className="main-rows">
              <div>
                Copyright © 2024
              </div>
              <div className="name">Southern New Hampshire University</div>
            </div>
            <div className="main-rows">
              <div>2500 North River Road</div>
              <div>Manchester, NH 03106</div>
            </div>
          </address>
          <nav aria-label="Footer Links" data-placeholder="footer-bottom-row" data-rendering="Footer Bottom Links">
            <div className="text-center">

              <ul className="link-list">
                <li>
                  <a href="https://www.snhu.edu/about-us/contact-us" target="_blank" className="flex-shrink-1 ">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://www.snhu.edu/consumer-information" target="_blank" className="flex-shrink-1 ">
                    Consumer Information
                  </a>
                </li>
                <li>
                  <a href="https://www.snhu.edu/sitemap" target="_blank" className="flex-shrink-1 ">
                    Site Map
                  </a>
                </li>
                <li>
                  <a href="https://www.snhu.edu/privacy-policy" target="_blank" className="flex-shrink-1 ">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="https://www.snhu.edu/about-us/accessibility" target="_blank" className="flex-shrink-1 ">
                    Accessibility at SNHU
                  </a>
                </li>
                <li>
                  <a href="https://www.snhu.edu/privacy-policy/sms-terms-and-conditions" target="_blank" className="flex-shrink-1 ">
                    SMS Terms &amp; Conditions
                  </a>
                </li>
              </ul>

            </div>
          </nav>

      </div>


      <div className="social-links" role="group">
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="https://www.twitter.com/snhu" aria-label="Follow Us on Twitter" target="_blank" rel="noreferrer noopener">
              <span className="icon icon-twitter--white" aria-hidden="true"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.facebook.com/snhu" aria-label="Follow Us on Facebook" target="_blank" rel="noreferrer noopener">
              <span className="icon icon-facebook--white" aria-hidden="true"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.instagram.com/snhu" aria-label="Follow Us on Instagram" target="_blank" rel="noreferrer noopener">
              <span className="icon icon-instagram--white" aria-hidden="true"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/school/snhu" aria-label="Follow Us on LinkedIn" target="_blank" rel="noreferrer noopener">
              <span className="icon icon-linkedin--white" aria-hidden="true"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.tiktok.com/@snhu" aria-label="Follow Us on TikTok" target="_blank" rel="noreferrer noopener">
              <span className="icon icon-tiktok--white" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </div></footer>
  );
};

export default Footer;
