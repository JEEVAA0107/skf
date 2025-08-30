import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const scrollToProducts = () => {
    if (location.pathname === '/') {
      const productsSection = document.getElementById('products');
      productsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-foreground">
            SHREE KALYANI FOODS
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            {location.pathname === '/' ? (
              <Button 
                onClick={scrollToProducts}
                variant="default" 
                size="sm"
                className="bg-gradient-warm hover:shadow-warm transition-all duration-300"
              >
                Our Products
              </Button>
            ) : (
              <Link to="/">
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-warm hover:shadow-warm transition-all duration-300"
                >
                  Our Products
                </Button>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;