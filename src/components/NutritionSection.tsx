import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const NutritionSection = () => {
  const batterNutrition = [
    { label: "ENERGY", value: "138.7 KCAL" },
    { label: "PROTEIN", value: "1.74G" },
    { label: "FAT", value: "1.61G" },
    { label: "CARBOHYDRATE", value: "26.32G" },
    { label: "MUFA", value: "0.54G" },
    { label: "PUFA", value: "0.36G" },
    { label: "SATURATED FATTY ACID", value: "0.62G" },
    { label: "TRANS FATTY ACID", value: "0G" },
    { label: "CHOLESTEROL", value: "0MG" },
    { label: "SODIUM", value: "142.4MG" }
  ];

  const chapathiNutrition = [
    { label: "ENERGY", value: "273 KCAL" },
    { label: "PROTEIN", value: "11.89G" },
    { label: "FAT", value: "3.78G" },
    { label: "CARBOHYDRATE", value: "48.09G" },
    { label: "SATURATED FATTY ACIDS", value: "0.48G" },
    { label: "DIETARY FIBER", value: "7.37G" },
    { label: "SODIUM", value: "1402.05MG" },
    { label: "SUGAR", value: "0G" },
    { label: "MUFA", value: "3.6G" },
    { label: "PUFA", value: "1.96G" },
    { label: "TRANS FATTY ACIDS", value: "0G" }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nutritional Facts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Health first - detailed nutritional information for our products (Per 100g)
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-border/50 shadow-elegant">
            <CardHeader className="bg-gradient-warm text-white text-center rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                Idli & Dosa Batter
              </CardTitle>
              <p className="text-white/90 text-sm">
                Just like all SKF products, the idli and dosa batter is made to bring you only fresh food and a dose of health.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-3">
                {batterNutrition.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border/30 pb-2">
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-bold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/50 shadow-elegant">
            <CardHeader className="bg-gradient-warm text-white text-center rounded-t-lg">
              <CardTitle className="text-2xl font-bold">
                Chapathi & Breads
              </CardTitle>
              <p className="text-white/90 text-sm">
                We guarantee you'll be asking for more because it's health first with our chemical-free whole wheat chapatis.
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-3">
                {chapathiNutrition.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-border/30 pb-2">
                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-bold text-foreground">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;