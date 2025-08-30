import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import idliDosaImage from "@/assets/idli-dosa.jpg";
import chapathiImage from "@/assets/chapathi.jpg";
import pooriImage from "@/assets/poori.jpg";

interface ProductCategory {
  title: string;
  image: string;
  items: string[];
  description?: string;
}

const ProductSection = () => {
  const productCategories: ProductCategory[] = [
    {
      title: "BATTER",
      image: idliDosaImage,
      description: "Fresh, authentic batters made with traditional methods",
      items: [
        "IDLY BATTER",
        "DOSA BATTER", 
        "COMBINED IDLY & DOSA BATTER",
        "RAGI IDLY & DOSA BATTER",
        "ALL KINDS OF MILLETS & TRADITIONAL RICE BATTER"
      ]
    },
    {
      title: "CHAPATHI",
      image: chapathiImage,
      description: "Soft, fresh chapathis made with premium ingredients",
      items: [
        "WHEAT CHAPATHI",
        "METHI CHAPATHI",
        "RAGI CHAPATHI", 
        "ALL FLAVOURED CHAPATHI",
        "CAN BE CUSTOMISED"
      ]
    },
    {
      title: "PAROTA",
      image: chapathiImage,
      description: "Traditional South Indian layered breads",
      items: [
        "PAROTTA",
        "WHEAT PAROTTA",
        "COIN PAROTTA"
      ]
    },
    {
      title: "POORI",
      image: pooriImage,
      description: "Crispy, golden fried breads in various flavors",
      items: [
        "POORI",
        "WHEAT POORI",
        "CHOLA POORI",
        "MINI CHOLA POORI",
        "CARROT POORI",
        "METHI POORI"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional South Indian foods
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <CardTitle className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                    {category.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 text-sm">
                  {category.description}
                </p>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;