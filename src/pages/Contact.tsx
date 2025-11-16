import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const heroRef = useIntersectionObserver({ threshold: 0.2 });
  const formRef = useIntersectionObserver({ threshold: 0.2 });
  const infoRef = useIntersectionObserver({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@naxshatra.ai",
      href: "mailto:hello@naxshatra.ai",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 94234 95350",
      href: "tel:+919423495350",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
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
            Get In <span className="text-gradient">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life. We're here to answer any
            questions you may have.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card
            ref={formRef.ref}
            className={cn(
              "gradient-primary p-8 border-border opacity-0",
              formRef.isIntersecting && "animate-slide-in-left"
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-border focus:border-primary min-h-[150px]"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,206,209,0.5)] group"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </>
                )}
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div
            ref={infoRef.ref}
            className={cn(
              "space-y-8 opacity-0",
              infoRef.isIntersecting && "animate-slide-in-right"
            )}
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
              <p className="text-muted-foreground mb-8">
                We're always excited to hear about new projects and opportunities. Whether you have a question or just
                want to say hi, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="gradient-primary p-6 border-border hover:border-primary transition-all duration-300 group"
                >
                  <a
                    href={info.href}
                    className="flex items-center gap-4"
                    {...(info.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center group-hover:bg-primary transition-all">
                      <info.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-semibold text-foreground">{info.value}</div>
                    </div>
                  </a>
                </Card>
              ))}
            </div>

            <Card className="gradient-primary p-8 border-border border-primary/20 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Response</h3>
              <p className="text-muted-foreground mb-4">
                We typically respond within 24 hours. For urgent inquiries, please call us directly.
              </p>
              <Button
                onClick={() => window.open("https://calendly.com/naxshatra-ai", "_blank")}
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Schedule a Call
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
