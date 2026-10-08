import CategorySection from "@/app/components/landing/category-section";
import FeaturedProductSection from "@/app/components/landing/featured-section";
import Hero from "@/app/components/landing/hero";

export default function Home() {
  return (
    <main>
      {/* hero section */}
      <Hero />

      {/*about company */}

      {/* brand */}

      {/* category */}
      <CategorySection />

      {/* featured sections */}
      <FeaturedProductSection />

      {/* new arrivals */}
    </main>
  );
}