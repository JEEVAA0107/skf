import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Truck } from "lucide-react";

const AboutSection = () => {
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      number: "10,000+",
      label: "Happy Customers"
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      number: "4.9/5",
      label: "Customer Rating"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      number: "15+",
      label: "Years Experience"
    },
    {
      icon: <Truck className="w-8 h-8 text-primary" />,
      number: "100+",
      label: "Daily Deliveries"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            With over 25 years of experience in crafting authentic South Indian foods, 
            we have become the trusted choice for families who value quality, tradition, and taste.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardContent className="p-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 text-primary">{stat.icon}</div>
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// New separate component for Our Story
export const OurStorySection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Story Section */}
        <div className="bg-card/50 rounded-2xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">
              Our Story
            </h3>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Born from a passion for preserving authentic South Indian culinary traditions, 
                our journey began in a small kitchen with a simple mission: to bring the taste 
                of home-cooked meals to every family.
              </p>
              <p className="text-lg">
                Today, we continue to honor our heritage by using traditional methods and 
                the finest ingredients, ensuring that every product carries the essence of 
                authentic South Indian flavors. From our family to yours, we deliver not 
                just food, but memories and traditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;