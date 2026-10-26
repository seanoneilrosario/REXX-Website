import Image from "next/image";
import { ButtonLink, SectionLabel } from "./ui";

const products = [
  {
    name: "Original",
    image: "original",
    description: "Bold. Clean. Classic.",
    color: "#e52032",
  },
  {
    name: "Ice mint",
    image: "ice-mint",
    description: "Cool. Crisp. Refreshing.",
    color: "#168da4",
  },
  {
    name: "Citrus",
    image: "citrus",
    description: "Bright. Zesty. Uplifting.",
    color: "#7a9020",
  },
  {
    name: "Berry",
    image: "berry",
    description: "Smooth. Fruity. Balanced.",
    color: "#a32b96",
  },
];
export function ProductRange() {
  return (
    <section id="range" className="product-range" aria-labelledby="range-title">
      <div className="range-copy">
        <SectionLabel>The range</SectionLabel>
        <h2 id="range-title">
          Same concept.
          <br />
          Different
          <br />
          flavours.
        </h2>
        <ButtonLink href="#products">View the range 
            <span aria-hidden="true">→</span>

        </ButtonLink>
      </div>
      <div className="products" id="products">
        {products.map((product) => (
          <article className="product" key={product.name}>
            <Image
              src={`/assets/${product.image}.webp`}
              alt={`REXX ${product.name} caffeine pouch tin`}
              width={370}
              height={354}
              sizes="(max-width: 600px) 45vw, 20vw"
            />
            <h3 style={{ color: product.color }}>{product.name}</h3>
            <p>{product.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
