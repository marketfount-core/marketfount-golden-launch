import { Button } from "@/components/ui/button";
import { Download, Monitor, Shield, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free to download and install",
  "No credit card required",
  "Runs locally on your computer",
  "All data stays private",
];

const DownloadSection = () => {
  const handleDownload = () => {
    // TODO: Replace with actual download link
    console.log("Download initiated");
    // window.open('https://your-download-link.com', '_blank');
  };

  return (
    <section id="download" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-navy/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-card border border-border shadow-elegant overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold animate-float">
                <Monitor className="w-10 h-10 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your{" "}
                <span className="text-gradient-gold">Business?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Download MarketFount today and unlock the power of automated workflows. 
                Join thousands of professionals who have elevated their productivity.
              </p>
              
              {/* Benefits */}
              <div className="flex flex-wrap justify-center gap-4 mb-10">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-emerald" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Button
                variant="hero"
                size="xl"
                onClick={handleDownload}
                className="group"
              >
                <Download className="w-5 h-5" />
                Download for Windows
              </Button>
              
              {/* System Requirements */}
              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>Windows 10/11</span>
                </div>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>64-bit</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>~150MB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
