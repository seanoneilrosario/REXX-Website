import { Logo, navigation } from "./ui";
import "./Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#" aria-label="REXX home">
          <Logo />
        </a>
        <nav aria-label="Footer navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a href="#faq">FAQ</a>
          <a href="#updates">Contact</a>
        </nav>
        <div className={`right`}>
          <div className={`socials`} aria-label="Social media">
            <span role="img" aria-label="Instagram">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </span>
            <span role="img" aria-label="YouTube">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M21.5 6.3a2.8 2.8 0 0 0-2-2C17.8 3.8 12 3.8 12 3.8s-5.8 0-7.5.5a2.8 2.8 0 0 0-2 2C2 8 2 12 2 12s0 4 .5 5.7a2.8 2.8 0 0 0 2 2c1.7.5 7.5.5 7.5.5s5.8 0 7.5-.5a2.8 2.8 0 0 0 2-2C22 16 22 12 22 12s0-4-.5-5.7ZM10 15.5v-7l6 3.5-6 3.5Z" />
              </svg>
            </span>
          </div>
          {/* Static labels until legal pages and social URLs are supplied. */}
          <div className={`legal`}>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
          <p className={`copyright`}>© 2026 REXX. A brand of Ironheart Group Pty Ltd.</p>
        </div>
      </div>
      {/* <details id="faq" className="footer-faq">
        <summary>FAQ — Is REXX available yet?</summary>
        <p>
          REXX is in development. The proposed format is 30 mg of caffeine per
          pouch. Full ingredients and launch information will be shared prior to
          release.
        </p>
      </details> */}
      {/* <div className="footer-bottom">
        <span>Australian brand. A different approach.</span>
        <span>© 2026 REXX. All rights reserved.</span>
      </div> */}
    </footer>
  );
}
