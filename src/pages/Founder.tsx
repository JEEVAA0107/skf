import { memo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Card, CardContent } from "@/components/ui/card";
import yuvarajImage from "@/assets/yuvaraj.jpg";

const Founder = memo(() => {
  return (
    <div className="min-h-screen">
      <Header />
      <BreadcrumbNav />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              Meet Our Founder
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground">
              The visionary behind Shree Kalyani Foods
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-4 sm:p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                
                {/* Founder Image */}
                <div className="text-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 mx-auto bg-gradient-warm/30 rounded-lg flex items-center justify-center mb-4 sm:mb-6 p-2">
                    <img 
                      src={yuvarajImage} 
                      alt="Founder" 
                      className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-lg object-cover"
                    />
                    <div className="w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-lg bg-muted flex items-center justify-center text-4xl text-muted-foreground hidden">
                      👤
                    </div>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    YUVARAJ(B.sc Computer Science)
                  </h2>
                  <p className="text-sm sm:text-base text-primary font-semibold">
                    Founder
                  </p>
                </div>

                {/* Founder Introduction */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">
                      A Passion for Authentic Flavors
                    </h3>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        With over 25 years of dedication to preserving traditional South Indian 
                        culinary heritage, our founder started this journey from a humble kitchen 
                        with a simple yet powerful vision.
                      </p>
                      <p>
                        Driven by the belief that authentic taste should never be compromised, 
                        they established Shree Kalyani Foods to bring fresh, preservative-free 
                        South Indian delicacies to families across the region.
                      </p>
                      <p>
                        Their commitment to quality ingredients, traditional preparation methods, 
                        and customer satisfaction has made Shree Kalyani Foods a trusted name 
                        in authentic South Indian cuisine.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg">
                    <blockquote className="text-foreground italic">
                      "Our mission is simple - to deliver the authentic taste of home-cooked 
                      South Indian food to every family, preserving our culinary traditions 
                      for future generations."
                    </blockquote>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
});

Founder.displayName = 'Founder';

export default Founder;