import { FeatureIcon, SectionLabel } from "./ui";

export function Ingredients() {
  return (
    <section
      id="ingredients"
      className="ingredients"
      aria-labelledby="ingredients-title"
    >
      <div className="ingredients-copy">
        <SectionLabel>Ingredients</SectionLabel>
        <h2 id="ingredients-title">
          Simple.
          <br />
          Transparent.
        </h2>
        <p>
          REXX is developed with carefully selected ingredients to deliver a
          consistent 30 mg of caffeine per pouch.
        </p>
      </div>
      <div className="caffeine">
        <p className="dose">
          30<span>mg</span>
        </p>
        <h3>Caffeine</h3>
        <p>
          Per pouch<small>(proposed)</small>
        </p>
      </div>
      <div className="ingredient-details">
        <div className="ingredient-features">
          <div>
            <FeatureIcon type="leaf" />
            <h3>
              Nicotine
              <br />
              free
            </h3>
          </div>
          <div>
            <FeatureIcon type="free" />
            <h3>
              Tobacco
              <br />
              free
            </h3>
          </div>
          <div>
            <FeatureIcon type="science" />
            <h3>
              Selected
              <br />
              ingredients
            </h3>
          </div>
        </div>
        <p>
          Full ingredient list and nutritional information will be provided
          prior to launch. Product in development.
        </p>
      </div>
    </section>
  );
}
