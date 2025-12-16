import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-elegant"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold-sm group-hover:shadow-gold transition-shadow duration-300">
              <span className="font-display text-xl font-bold text-primary-foreground">M</span>
            </div>
            <span className="font-display text-2xl font-semibold text-gradient-gold">
              MarketFount
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("marketplace")}
              className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Marketplace
            </button>
            <Button
              variant="gold"
              size="default"
              onClick={() => scrollToSection("download")}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Download Free
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("marketplace")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium text-left py-2"
              >
                Marketplace
              </button>
              <Button
                variant="gold"
                size="lg"
                onClick={() => scrollToSection("download")}
                className="gap-2 mt-2"
              >
                <Download className="w-4 h-4" />
                Download Free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
