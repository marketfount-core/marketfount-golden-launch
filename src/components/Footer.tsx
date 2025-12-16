import { Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-16 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold-sm">
                <span className="font-display text-xl font-bold text-primary-foreground">M</span>
              </div>
              <span className="font-display text-2xl font-semibold text-gradient-gold">
                MarketFount
              </span>
            </a>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Empowering businesses with intelligent automation. 
              Access expert-built tools that transform complex tasks into seamless workflows.
            </p>
            <a
              href="mailto:contact@marketfount.com"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              contact@marketfount.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("features")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("marketplace")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Marketplace
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-left"
              >
                Download
              </button>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">Legal</h4>
            <nav className="flex flex-col gap-3">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MarketFount. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with precision. Designed for excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
