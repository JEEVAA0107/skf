import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Ready to Eat Images
import kuspuIdliImage from "@/assets/kuspuidli.jpg";
import ravaIdliImage from "@/assets/ravaidli.jpg";
import heartIdliImage from "@/assets/heartidli.jpg";
import thattuIdliImage from "@/assets/thattuidli.jpg";
import riceIdiyappamImage from "@/assets/riceflouridddiyapam.jpg";
import ragiIdiyappamImage from "@/assets/ragiflouridiyappam.jpg";
import kkidiImage from "@/assets/kkidi.webp"; 
import rrImage from "@/assets/rr.jpg";
import ricePuttuImage from "@/assets/riceflourputtu.jpg";
import ragiPuttuImage from "@/assets/ragiflourputtu.jpg";
import kkImage from "@/assets/kk.webp"
import rrpImage from "@/assets/rrp.jpg";
import sevaiImage from "@/assets/sevai.jpg";

// Ready to Fry Images
import normalPooriImage from "@/assets/poorii.jpg";
import mintPooriImage from "@/assets/mint&palak.webp";
import beetPooriImage from "@/assets/beetrootpoori.jpg";
import methiPooriImage from "@/assets/methiipoori.jpg";
import cholaPooriImage from "@/assets/chola.jpg";
import minicholaPooriImage from "@/assets/minichola.webp";

// Ready to Cook Images
import wheatChapathiImage from "@/assets/chapathii.jpg";
import methiChapathiImage from "@/assets/methichapathi.jpg";
import mintChapathiImage from "@/assets/methi.jpg";
import ragiChapathiImage from "@/assets/ragi.jpg";
import beetrootChapathiImage from "@/assets/beetroot.jpg";

// Ready to Toast Images
import maidaParottaImage from "@/assets/parotta.jpg";
import bunParottaImage from "@/assets/bunparota.jpg";
import noolParottaImage from "@/assets/noolparota.jpg";
import coinParottaImage from "@/assets/coinparotta.jpg";
import malabarParottaImage from "@/assets/malabarparota.jpg";
import traditionalPulkaImage from "@/assets/pulka-roti.jpg";
import garlicPulkaImage from "@/assets/garlicpulka.jpg";

interface Dish {
  name: string;
  image: string;
  description: string;
}

interface ProductCategory {
  title: string;
  dishes: Dish[];
}

const ProductSection = () => {
  const productCategories: ProductCategory[] = [
    {
      title: "READY TO EAT",
      dishes: [
        {
          name: "Kuspu Idli",
          image: kuspuIdliImage,
          description: "Small, soft steamed rice cakes, traditional Tamil Nadu style"
        },
        {
          name: "Rava Idli",
          image: ravaIdliImage,
          description: "Fluffy semolina steamed cakes with curry leaves and spices"
        },
        {
          name: "Heart Shape Idli",
          image: heartIdliImage,
          description: "Romantic heart-shaped idlis, perfect for special occasions"
        },
        {
          name: "Bangalore Thattu Idli",
          image: thattuIdliImage,
          description: "Flat button-shaped idlis, famous Karnataka street food style"
        },
        {
          name: "Rice Flour Idiyappam",
          image: riceIdiyappamImage,
          description: "Delicate white rice noodles, traditional Kerala breakfast"
        },
        {
          name: "Ragi Flour Idiyappam",
          image: ragiIdiyappamImage,
          description: "Healthy finger millet string hoppers, nutrient-rich option"
        },
        {
          name: "Karupu Kavuni Idiyappam",
          image: kkidiImage,
          description: "Black rice string hoppers, premium traditional variety"
        },
        {
          name: "Red Rice Idiyappam",
          image: rrImage,
          description: "Nutritious red rice noodles with natural antioxidants"
        },
        {
          name: "Rice Flour Puttu",
          image: ricePuttuImage,
          description: "Steamed cylindrical rice cakes, traditional Kerala specialty"
        },
        {
          name: "Ragi Flour Puttu",
          image: ragiPuttuImage,
          description: "Healthy finger millet steamed cylinders, wholesome breakfast"
        },
        {
          name: "Karupu Kavunu Puttu",
          image: kkImage,
          description: "Premium black rice steamed puttu, rich in nutrients"
        },
        {
          name: "Red Flour Puttu",
          image: rrpImage,
          description: "Antioxidant-rich red rice steamed puttu cylinders"
        },
        {
          name: "Sandhavai (Sevai)",
          image: sevaiImage,
          description: "Traditional rice vermicelli, minimum 30kg order"
        }
      ]
    },
    {
      title: "READY TO FRY",
      dishes: [
        {
          name: "Normal Poori",
          image: normalPooriImage,
          description: "Traditional wheat flour rounds, ready for deep frying"
        },
        {
          name: "Chola Poori",
          image: cholaPooriImage,
          description: "Chickpea flour enhanced dough rounds for crispy pooris"
        },
        {
          name: "Mini Chola Poori",
          image: minicholaPooriImage,
          description: "Bite-sized chickpea flour pooris, perfect for snacking"
        },
        {
          name: "Mint & Palak Poori",
          image: mintPooriImage,
          description: "Fresh herb-infused poori dough with mint and spinach"
        },
        {
          name: "Carrot & Beetroot Poori",
          image: beetPooriImage,
          description: "Colorful vegetable-enriched poori dough, nutritious and tasty"
        },
        {
          name: "Methi Poori",
          image: methiPooriImage,
          description: "Fenugreek leaf pooris, aromatic and healthy choice"
        }
      ]
    },
    {
      title: "READY TO COOK",
      dishes: [
        {
          name: "Wheat Chapathi",
          image: wheatChapathiImage,
          description: "Fresh whole wheat flatbread, soft and nutritious"
        },
        {
          name: "Methi Chapathi",
          image: mintChapathiImage ,
          description: "Fenugreek leaf chapathi, aromatic and health-enhancing"
        },
        {
          name: "Ragi Chapathi",
          image: ragiChapathiImage,
          description: "Finger millet flatbread, rich in calcium and fiber"
        },
        {
          name: "Beetroot & Carrot Chapathi",
          image: beetrootChapathiImage,
          description: "Colorful vegetable chapathi, naturally sweet and nutritious"
        },
        {
          name: "Mint Chapathi",
          image: methiChapathiImage,
          description: "Fresh mint-infused flatbread, cooling and flavorful"
        }
      ]
    },
    {
      title: "READY TO TOAST",
      dishes: [
        {
          name: "Maida Parotta",
          image: maidaParottaImage,
          description: "Traditional layered flatbread, flaky and delicious"
        },
        {
          name: "Bun Parotta",
          image: bunParottaImage,
          description: "Soft layered bread, perfect for pairing with curries"
        },
        {
          name: "Coin Parotta",
          image: coinParottaImage,
          description: "Small round layered breads, convenient portion size"
        },
        {
          name: "Nool Parotta",
          image: noolParottaImage,
          description: "String-style layered bread, unique texture and taste"
        },
        {
          name: "Malabar Parotta",
          image: malabarParottaImage,
          description: "Kerala-style layered flatbread, authentic coastal flavor"
        },
        {
          name: "Traditional Pulka Roti",
          image: traditionalPulkaImage,
          description: "Thin unleavened bread, soft and versatile"
        },
        {
          name: "Garlic Pulka",
          image: garlicPulkaImage,
          description: "Aromatic garlic-infused pulka roti, flavorful and appetizing"
        }
      ]
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background"><br /><br />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Product Range
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of traditional South Indian foods
          </p>
        </div>
        
        {productCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">
              {category.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {category.dishes.map((dish, dishIndex) => (
                <Card key={dishIndex} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={dish.image} 
                        alt={dish.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <CardTitle className="absolute bottom-4 left-4 text-white text-lg font-bold leading-tight">
                        {dish.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;