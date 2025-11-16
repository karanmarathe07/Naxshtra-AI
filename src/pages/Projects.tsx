import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const heroRef = useIntersectionObserver({ threshold: 0.2 });
  const projectsRef = useIntersectionObserver({ threshold: 0.1 });
  const ctaRef = useIntersectionObserver({ threshold: 0.3 });

  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully-featured online marketplace with AI-powered recommendations and real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "AI/ML"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Secure financial management app with biometric authentication and real-time stock tracking",
      tech: ["React Native", "Firebase", "Stripe"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Development",
      description: "Comprehensive patient management system with telemedicine capabilities and analytics",
      tech: ["Next.js", "PostgreSQL", "WebRTC"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "AI Chatbot Solution",
      category: "AI Automation",
      description: "Intelligent customer service automation with natural language processing and multi-language support",
      tech: ["Python", "TensorFlow", "NLP"],
      color: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Property listing platform with virtual tours, mortgage calculators, and CRM integration",
      tech: ["Vue.js", "Laravel", "MySQL"],
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Logistics Tracking System",
      category: "Web Development",
      description: "Real-time shipment tracking with route optimization and predictive delivery analytics",
      tech: ["Angular", "Express", "MongoDB"],
      color: "from-yellow-500/20 to-orange-500/20",
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
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries. Each one represents our commitment
            to excellence and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsRef.ref}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0",
            projectsRef.isIntersecting && "animate-scale-in"
          )}
        >
          {projects.map((project, index) => (
            <Card
              key={index}
              className="gradient-primary border-border hover:border-primary transition-all duration-300 group hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />
              <div className="p-8 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" size={20} />
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div
          ref={ctaRef.ref}
          className={cn(
            "mt-20 gradient-primary p-12 rounded-3xl border border-primary/20 text-center opacity-0",
            ctaRef.isIntersecting && "animate-fade-up"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life. Our team is ready to tackle your next big challenge.
          </p>
          <button
            onClick={() => window.open("https://calendly.com/naxshatra-ai", "_blank")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
