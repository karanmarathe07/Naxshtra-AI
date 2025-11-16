import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Brain, TrendingUp, Search, Code, Smartphone, Palette, Database, Cloud } from "lucide-react";

const Services = () => {
  const heroRef = useIntersectionObserver({ threshold: 0.2 });
  const coreRef = useIntersectionObserver({ threshold: 0.2 });
  const additionalRef = useIntersectionObserver({ threshold: 0.2 });
  const ctaRef = useIntersectionObserver({ threshold: 0.3 });

  const coreSolutions = [
    {
      icon: Brain,
      title: "AI Automations",
      description: "Intelligent automation solutions that streamline your workflows and boost productivity with cutting-edge AI technology",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that amplify your brand presence and drive measurable growth across all channels",
    },
    {
      icon: Search,
      title: "SEO (GEO)",
      description: "Advanced search optimization techniques to improve your visibility and dominate search engine rankings globally",
    },
    {
      icon: Code,
      title: "Development",
      description: "Custom software solutions built with modern technologies, scalable architecture, and best practices",
    },
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android",
    },
    {
      icon: Palette,
      title: "Website Development",
      description: "Beautiful, responsive websites that combine stunning design with powerful functionality and performance",
    },
    {
      icon: Database,
      title: "Backend Solutions",
      description: "Robust backend systems and APIs that power your applications with security, scalability, and reliability",
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Cloud infrastructure setup, migration, and optimization for AWS, Azure, and Google Cloud platforms",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div
          ref={heroRef.ref}
          className={cn(
            "text-center mb-16 space-y-6 opacity-0",
            heroRef.isIntersecting && "animate-fade-up"
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            What We <span className="text-gradient">Do</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business. From AI-powered automation to stunning
            web experiences, we deliver excellence across all domains.
          </p>
        </div>

        {/* Core Solutions */}
        <div
          ref={coreRef.ref}
          className={cn(
            "mb-20 opacity-0",
            coreRef.isIntersecting && "animate-slide-in-left"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Core Solutions</h2>
            <p className="text-muted-foreground">Our primary expertise that drives business transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreSolutions.map((service, index) => (
              <Card
                key={index}
                className="gradient-primary p-8 border-border hover:border-primary transition-all duration-300 group hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-all duration-300">
                    <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div
          ref={additionalRef.ref}
          className={cn(
            "opacity-0",
            additionalRef.isIntersecting && "animate-slide-in-right"
          )}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground">Extended capabilities to meet all your digital needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card
                key={index}
                className="gradient-primary p-6 border-border hover:border-primary transition-all duration-300 group hover:scale-105 cursor-pointer text-center"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                  <service.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef.ref}
          className={cn(
            "mt-20 gradient-primary p-12 rounded-3xl border border-primary/20 text-center opacity-0",
            ctaRef.isIntersecting && "animate-fade-up"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our comprehensive digital solutions
          </p>
          <button
            onClick={() => window.open("https://calendly.com/naxshatra-ai", "_blank")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] hover:scale-105"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
