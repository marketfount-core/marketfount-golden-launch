import { Sparkles, Lock, Users, Workflow, CreditCard, Laptop } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Curated Marketplace",
    description: "Access specialized automation apps built by verified industry experts, tailored to your business needs.",
    accent: "primary",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "All workflows run locally on your computer. Your data never leaves your machine—complete privacy guaranteed.",
    accent: "navy",
  },
  {
    icon: Users,
    title: "Virtual Workforce",
    description: "Deploy an on-demand team of automated assistants that work tirelessly to deliver professional results.",
    accent: "emerald",
  },
  {
    icon: Workflow,
    title: "No-Code Automation",
    description: "Launch sophisticated workflows without any technical expertise. Simply connect, configure, and run.",
    accent: "primary",
  },
  {
    icon: CreditCard,
    title: "Pay-As-You-Go",
    description: "Purchase credits to unlock only the tools you need. No subscriptions, no commitments—complete flexibility.",
    accent: "navy",
  },
  {
    icon: Laptop,
    title: "Desktop Application",
    description: "A powerful desktop program that integrates seamlessly with your existing tools and workflows.",
    accent: "emerald",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="text-gradient-gold">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            MarketFount provides a comprehensive suite of tools designed to automate 
            your most complex business operations with elegance and precision.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                  feature.accent === "primary"
                    ? "bg-primary/10 text-primary"
                    : feature.accent === "navy"
                    ? "bg-navy/20 text-secondary"
                    : "bg-emerald/20 text-emerald"
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
