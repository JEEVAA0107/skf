import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const IngredientsSection = () => {
  const batterIngredients = [
    "RICE",
    "URAD DAL", 
    "FENUGREEK",
    "RO-PURIFIED WATER"
  ];

  const chapathiIngredients = [
    "WHOLE WHEAT FLOUR",
    "RO-PURIFIED WATER",
    "REFINED SUNFLOWER OIL", 
    "IODISED COMMON SALT",
    "SUGAR"
  ];

  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Pure Ingredients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality is our promise. We use only the freshest ingredients with absolutely no preservatives or chemicals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-primary">
                Idli & Dosa Batter
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                The best idlies and dosas are made with the freshest ingredients. And that's what we use with absolutely no preservatives.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {batterIngredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium">{ingredient}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-elegant">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-primary">
                Chapathi & Breads
              </CardTitle>
              <p className="text-muted-foreground text-sm">
                Whether you eat it as a roll or a regular chapati, you're going to love the soft and fresh taste, thanks to the no chemicals policy we follow.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                {chapathiIngredients.map((ingredient, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3" />
                    <span className="text-sm font-medium">{ingredient}</span>
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

export default IngredientsSection;