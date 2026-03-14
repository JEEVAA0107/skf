import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Traditional Recipes",
    description: "Time-honored recipes preserved through generations, ensuring authentic taste in every bite."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every product is crafted with care and passion, bringing the warmth of home-cooked meals."
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Prepared fresh daily with premium ingredients, ensuring maximum nutrition and flavor."
  }
];

const ProductsPreview = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Authentic South Indian Delights
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From traditional fermented batters to ready-to-eat delicacies, we bring you the authentic taste 
            of South India with modern convenience. Every product is crafted with love, using time-honored recipes 
            passed down through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center p-8 hover:shadow-elegant transition-all duration-300 border-border/50 bg-card/50">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;