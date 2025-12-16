import { TrendingUp, Mail, FileSearch, BarChart2, Users2, FileSpreadsheet } from "lucide-react";

const apps = [
  {
    icon: TrendingUp,
    name: "Lead Generator Pro",
    category: "Sales",
    description: "Automatically find and qualify leads from multiple sources with AI-powered scoring.",
    credits: "50",
  },
  {
    icon: Mail,
    name: "Smart Email Responder",
    category: "Communication",
    description: "AI-driven email responses that maintain your voice while saving hours daily.",
    credits: "30",
  },
  {
    icon: FileSearch,
    name: "Document Analyzer",
    category: "Productivity",
    description: "Extract insights, summarize, and organize information from any document type.",
    credits: "25",
  },
  {
    icon: BarChart2,
    name: "Market Intelligence",
    category: "Research",
    description: "Real-time competitive analysis and market trend monitoring for strategic decisions.",
    credits: "75",
  },
  {
    icon: Users2,
    name: "CRM Sync Master",
    category: "Integration",
    description: "Keep all your customer data synchronized across platforms automatically.",
    credits: "40",
  },
  {
    icon: FileSpreadsheet,
    name: "Report Builder",
    category: "Analytics",
    description: "Generate professional reports and dashboards from your data in seconds.",
    credits: "35",
  },
];

const MarketplaceSection = () => {
  return (
    <section id="marketplace" className="py-24 md:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Marketplace Preview
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Expert-Built{" "}
            <span className="text-gradient-gold">Automation Apps</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover a growing collection of specialized tools created by verified 
            industry professionals, ready to transform your workflows.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {apps.map((app, index) => (
            <div
              key={app.name}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-500 hover-lift cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <app.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                  {app.category}
                </span>
              </div>
              
              <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                {app.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {app.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-sm text-muted-foreground">Starting at</span>
                <span className="font-semibold text-primary">{app.credits} credits</span>
              </div>
            </div>
          ))}
        </div>

        {/* More Apps Coming */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            <span className="text-primary font-semibold">50+</span> more apps available in the marketplace
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketplaceSection;
