import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/founder" className="text-foreground hover:text-primary transition-colors">
              Founder
            </Link>
            <Link to="/feedback" className="text-foreground hover:text-primary transition-colors">
              Feedback
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link to="/business" className="text-foreground hover:text-primary transition-colors">
              Business Opportunities
            </Link>
            <Link to="/products">
              <Button 
                variant="default" 
                size="sm"
                className="bg-gradient-warm hover:shadow-warm transition-all duration-300"
              >
                Our Products
              </Button>
            </Link>
          </nav>

          {/* Mobile/Tablet Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted/50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/founder" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Founder
              </Link>
              <Link 
                to="/feedback" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Feedback
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                to="/business" 
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Business Opportunities
              </Link>
              <Link to="/products" onClick={() => setIsMenuOpen(false)}>
                <Button 
                  variant="default" 
                  size="sm"
                  className="bg-gradient-warm hover:shadow-warm transition-all duration-300 w-full"
                >
                  Our Products
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;