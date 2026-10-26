import Image from "next/image";
import { ButtonLink, SectionLabel } from "./ui";

export function Concept() {
  return (
    <section id="concept" className="concept" aria-labelledby="concept-title">
      <div className="concept-image">
        <Image
          src="/assets/concept-athlete.webp"
          alt="Athlete taking a moment in the mountains"
          fill
          sizes="(max-width: 700px) 100vw, 68vw"
        />
      </div>
      <div className="concept-fade" />
      <div className="concept-copy">
        <SectionLabel>The concept</SectionLabel>
        <h2 id="concept-title">
          A different
          <br />
          approach
          <br />
          to energy.
        </h2>
        <p>
          REXX caffeine pouches are placed between your lip and gum, where
          caffeine is absorbed through the oral mucosa for a clean and
          convenient energy option.
        </p>
        <ButtonLink href="#ingredients">Explore the concept</ButtonLink>
      </div>
      <p className="concept-mantra">
        <span>
          <b>RE</b>THINK.
        </span>
        <span>
          <b>RE</b>DEFINE.
        </span>
        <span>
          <b>RE</b>EXPLORE.
        </span>
        <i className="red-rule" />
      </p>
    </section>
  );
}
