import { SectionLabel } from "./ui";
import { SignupForm } from "./SignupForm";

export function Story() {
  return (
    <section id="story" className="story" aria-labelledby="story-title">
      <div className="story-copy">
        <SectionLabel>Our story</SectionLabel>
        <h2 id="story-title">
          Built for
          <br />
          what drives you.
        </h2>
        <p>
          REXX is a developing Australian brand. Our focus is on purposeful
          design, product transparency and a premium experience for those with
          an active lifestyle.
        </p>
        <details>
          <summary className="button button-white">
            Read our story <span aria-hidden="true">→</span>
          </summary>
          <p>
            Purposeful design. Transparent ingredients. A different approach to
            energy, developed for those who train, move and explore.
          </p>
        </details>
      </div>
      <div id="updates" className="updates">
        <h2>Be first to know.</h2>
        <p>Get launch updates, product news and exclusive access.</p>
        <SignupForm />
      </div>
    </section>
  );
}
