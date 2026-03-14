import ProductSection from "@/components/ProductSection";
import IngredientsSection from "@/components/IngredientsSection";
import NutritionSection from "@/components/NutritionSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductSection />
      <IngredientsSection />
      <NutritionSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Products;