import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Truck, Globe, Star, TrendingUp, Package, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BusinessEnquiry } from "@/types";
import { validateBusinessEnquiry } from "@/utils/validation";

const Business = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    message: ""
  });

  const validateForm = () => {
    const phoneRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive"
      });
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const message = `🏢 *Business Enquiry - Shree Kalyani Foods*

👤 *Name:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🥘 *Product:* ${formData.product}
💬 *Message:* ${formData.message}`;
      
      const whatsappUrl = `https://wa.me/919025921448?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      
      toast({
        title: "Redirecting to WhatsApp",
        description: "Your enquiry will be sent via WhatsApp",
      });
      setFormData({ name: "", phone: "", email: "", product: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      <main className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 space-y-16">
          
          {/* Customer Info Section */}
          <section className="text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                  <Users className="h-8 w-8 text-primary" />
                  Our Daily Reach
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gradient-warm text-white p-6 rounded-lg">
                    <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">3,000 - 5,000</h3>
                    <p className="text-lg">Daily Customers</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary text-primary-foreground p-6 rounded-lg">
                    <MapPin className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold">70 Direct + 30 Indirect</h3>
                    <p className="text-lg">Neighboring Customers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Dealers & Distributors Section */}
          <section>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                  <Truck className="h-8 w-8 text-primary" />
                  Dealers & Distributors Welcome
                </CardTitle>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Special Offers</h3>
                  <p className="text-muted-foreground">Competitive pricing and bulk discounts for our partners</p>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Marketing Support</h3>
                  <p className="text-muted-foreground">Complete marketing materials and promotional support</p>
                </div>
                <div className="text-center p-6 bg-secondary/20 rounded-lg">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Always Welcome</h3>
                  <p className="text-muted-foreground">We're always looking for new distribution partners</p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Export Section */}
          <section>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-3xl">
                  <Globe className="h-8 w-8 text-primary" />
                  Frozen Items Export Only
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="bg-gradient-warm text-white p-8 rounded-lg max-w-2xl mx-auto">
                  <Globe className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Frozen Products Pan-India Delivery</h3>
                  <p className="text-lg mb-4">
                    We specialize in exporting frozen South Indian food items across India. 
                    Our frozen products maintain freshness and authentic taste during long-distance transport.
                  </p>
                  <p className="text-base opacity-90">
                    Temperature-controlled packaging, reliable cold chain delivery, and consistent quality guaranteed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Enquiry Form Section */}
          <section>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-3xl text-center">Business Enquiry</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="bg-background/50"
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="bg-background/50"
                  />
                  
                  <Select onValueChange={(value) => setFormData({...formData, product: value})}>
                    <SelectTrigger className="bg-background/50">
                      <SelectValue placeholder="Product to Export" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="maida-parotta">Maida Parotta</SelectItem>
                      <SelectItem value="bun-parotta">Bun Parotta</SelectItem>
                      <SelectItem value="coin-parotta">Coin Parotta</SelectItem>
                      <SelectItem value="nool-parotta">Nool Parotta</SelectItem>
                      <SelectItem value="malabar-parotta">Malabar Parotta</SelectItem>
                      <SelectItem value="wheat-chapathi">Wheat Chapathi</SelectItem>
                      <SelectItem value="methi-chapathi">Methi Chapathi</SelectItem>
                      <SelectItem value="ragi-chapathi">Ragi Chapathi</SelectItem>
                      <SelectItem value="beetroot-carrot-chapathi">Beetroot & Carrot Chapathi</SelectItem>
                      <SelectItem value="mint-chapathi">Mint Chapathi</SelectItem>
                      <SelectItem value="traditional-pulka">Traditional Pulka Roti</SelectItem>
                      <SelectItem value="garlic-pulka">Garlic Pulka</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="bg-background/50"
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-warm hover:shadow-warm transition-all duration-300"
                    size="lg"
                  >
                    Submit Enquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Business;