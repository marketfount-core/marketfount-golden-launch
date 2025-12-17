import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Shield, Zap, BarChart3 } from "lucide-react";

const HeroSection = () => {
  const scrollToDownload = () => {
    document.getElementById("download")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeatures = () => {
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[120px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(43_30%_20%/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(43_30%_20%/0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-emerald animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Now Available for Windows</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up leading-tight" style={{ animationDelay: "0.2s" }}>
            Your Business.{" "}
            <span className="text-gradient-gold">Elevated.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-up leading-relaxed" style={{ animationDelay: "0.3s" }}>
            Access a curated marketplace of specialized automation apps built by verified experts. 
            Transform complex daily tasks into seamless workflows—no technical expertise required.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button variant="hero" onClick={scrollToDownload} className="group">
              <Download className="w-5 h-5" />
              Download Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" onClick={scrollToFeatures}>
              Explore Features
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Secure & Private</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Instant Results</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-medium">Expert-Built Tools</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
