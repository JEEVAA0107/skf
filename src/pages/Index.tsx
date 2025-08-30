import Hero from "@/components/Hero";
import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import NutritionSection from "@/components/NutritionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductSection />
      <IngredientsSection />
      <NutritionSection />
      <Footer />
    </div>
  );
};

export default Index;
