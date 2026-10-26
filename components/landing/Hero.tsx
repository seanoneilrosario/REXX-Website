import Image from "next/image";
import { ButtonLink, FeatureIcon, Logo } from "./ui";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image">
        <Image
          src="/assets/hero-landscape.webp"
          alt="Hiker above an alpine lake beside a REXX Original caffeine pouch tin"
          fill
          priority
          sizes="(max-width: 700px) 100vw, 75vw"
        />
      </div>
      <div className="hero-shade" />
      <div className="hero-content">
        <h1 id="hero-title">
          <Logo large />
          <span className="muted-heading">Energy,</span>
          <span>Reimagined.</span>
        </h1>
        <span className="red-rule" />
        <p>
          A new approach to energy.
          <br />
          Designed for those with an active lifestyle.
        </p>
        <div className="hero-actions">
          <ButtonLink href="#range" variant="red">
            Explore REXX
            <span aria-hidden="true">→</span>

          </ButtonLink>
          <ButtonLink href="#concept">Learn the concept</ButtonLink>
        </div>
        <div className="hero-features">
          <div>
            <FeatureIcon type="energy" />
            <p>
              30 mg 
              <br />
              caffeine
              <br />
              per pouch<small>(proposed)</small>
            </p>
          </div>
          <div>
            <FeatureIcon type="leaf" />
            <p>
              Nicotine
              <br />
              free
            </p>
          </div>
          <div>
            <FeatureIcon type="free" />
            <p>
              Tobacco
              <br />
              free
            </p>
          </div>
          <div>
            <FeatureIcon type="pouch" />
            <p>
              Pouch format
              <br />
              850 mg<small>(proposed)</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
