import { useEffect, useState } from "react";
import chapathiImage from "@/assets/chapathii.jpg";
import parottaImage from "@/assets/parota.jpg";
import idliImage from "@/assets/idlli.jpg";
import dosaImage from "@/assets/dosa.jpg";

const ProductSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { image: chapathiImage, title: "Fresh Chapathi", description: "Soft & Nutritious" },
    { image: parottaImage, title: "Layered Parotta", description: "Flaky & Delicious" },
    { image: idliImage, title: "Steamed Idli", description: "Light & Healthy" },
    { image: dosaImage, title: "Crispy Dosa", description: "Golden & Crispy" }
  ];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [slides.length]);

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-subtle overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Signature Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Authentic South Indian delicacies made fresh daily
          </p>
        </div>
        
        <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={index} className="min-w-full h-full relative">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 text-white">
                  <h3 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">{slide.title}</h3>
                  <p className="text-sm xs:text-base sm:text-lg opacity-90">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="absolute bottom-4 right-4 sm:right-6 lg:right-8 flex space-x-1.5 sm:space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;