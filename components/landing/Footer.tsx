import { Logo, navigation } from "./ui";

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
        <span className="footer-tagline">Rethink your energy.</span>
      </div>
      <details id="faq" className="footer-faq">
        <summary>FAQ — Is REXX available yet?</summary>
        <p>
          REXX is in development. The proposed format is 30 mg of caffeine per
          pouch. Full ingredients and launch information will be shared prior to
          release.
        </p>
      </details>
      <div className="footer-bottom">
        <span>Australian brand. A different approach.</span>
        <span>© 2026 REXX. All rights reserved.</span>
      </div>
    </footer>
  );
}
