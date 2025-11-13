import Hero from "@/components/Hero";
import AboutSection, { OurStorySection } from "@/components/AboutSection";
import ProductSlider from "@/components/ProductSlider";
import ProductsPreview from "@/components/ProductsPreview";
import Pd from "@/components/pd";   // 🔹 Change name here
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductsPreview />
      <AboutSection />
      <ProductSlider />
      <OurStorySection />
      <Pd />   {/* 🔹 Use with uppercase */}
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
