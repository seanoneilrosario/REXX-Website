import {
  Header,
  Hero,
  Concept,
  Activities,
  ProductRange,
  Ingredients,
  Story,
  Footer,
} from "@/components/landing/sections";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Concept />
        <Activities />
        <ProductRange />
        <Ingredients />
        <Story />
      </main>
      <Footer />
    </>
  );
}
