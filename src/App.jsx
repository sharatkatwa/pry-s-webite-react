import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import RecipeSection from "./components/RecipeSection";
import SectionShell from "./components/SectionShell";
import StorySection from "./components/StorySection";
import TrustBar from "./components/TrustBar";
import { collections, products, recipes } from "./data/homepage";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--canvas)] text-[var(--ink)]">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Hero />

        <SectionShell
          id="products"
          eyebrow="Pure Essences"
          title="Crafted Around Real Flavour"
          description="Discover carefully selected spices and blends designed to bring depth, aroma, and authenticity to every meal."
        >
          <ProductGrid items={collections} variant="collection" />
        </SectionShell>

        <SectionShell
          id="bestsellers"
          eyebrow="Most Loved"
          title="Customer Favorites"
          description="Discover our most loved spice blends, trusted for their rich flavour, quality, and consistency in every meal."
          centered
        >
          <ProductGrid items={products} variant="product" />
        </SectionShell>

        <StorySection />

        <SectionShell
          id="recipes"
          eyebrow="Kitchen Inspiration"
          title="Recipes that make the catalog feel alive"
          description="This area balances editorial energy with commerce, so the homepage feels curated instead of just assembled."
        >
          <RecipeSection recipes={recipes} />
        </SectionShell>

        <TrustBar />
      </main>

      <Footer />
    </div>
  );
}

export default App;
