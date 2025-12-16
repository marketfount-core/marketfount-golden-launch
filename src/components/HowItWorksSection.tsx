import { Download, Link2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Download,
    title: "Download & Install",
    description: "Get the free MarketFount application and install it on your Windows computer in minutes.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Connect Your Accounts",
    description: "Securely link your business accounts and data sources. All connections stay local on your machine.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Automate",
    description: "Browse the marketplace, purchase credits, and deploy powerful automation workflows instantly.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            How It Works
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Get Started in{" "}
            <span className="text-gradient-gold">Three Steps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From download to deployment in minutes. No complex setup, 
            no technical knowledge required.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px">
                    <div className="w-full h-full bg-gradient-to-r from-primary/40 to-primary/10" />
                    <ArrowRight className="absolute -right-2 -top-2 w-4 h-4 text-primary/40" />
                  </div>
                )}
                
                <div className="text-center group">
                  {/* Step Number */}
                  <div className="relative inline-block mb-8">
                    <span className="absolute -top-2 -right-2 text-6xl font-display font-bold text-primary/10 select-none">
                      {step.number}
                    </span>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-gold-sm transition-all duration-500">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
