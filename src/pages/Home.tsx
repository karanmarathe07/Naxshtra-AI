import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "@/assets/logo.png";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const Home = () => {
  const handleScheduleMeeting = () => {
    window.open("https://calendly.com/naxshatra-ai", "_blank");
  };

  const heroLeft = useIntersectionObserver({ threshold: 0.2 });
  const heroRight = useIntersectionObserver({ threshold: 0.2 });
  const statsRef = useIntersectionObserver({ threshold: 0.3 });
  const featuresRef = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={heroLeft.ref}
            className={cn(
              "space-y-8 opacity-0",
              heroLeft.isIntersecting && "animate-slide-in-left"
            )}
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Building Your
                <span className="text-gradient block mt-2">Business Online</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                We transform ambitious ideas into powerful digital realities. From cutting-edge AI solutions to
                stunning web experiences, we're your partners in innovation. Let's build something extraordinary
                together.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={handleScheduleMeeting}
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] hover:scale-105 group"
              >
                Schedule Meeting
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div
              ref={statsRef.ref}
              className={cn(
                "grid grid-cols-3 gap-8 pt-8 border-t border-border opacity-0",
                statsRef.isIntersecting && "animate-fade-up"
              )}
            >
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Logo */}
          <div
            ref={heroRight.ref}
            className={cn(
              "flex items-center justify-center opacity-0",
              heroRight.isIntersecting && "animate-slide-in-right"
            )}
          >
            <div className="relative">
              <div className="absolute inset-0 gradient-glow rounded-full blur-3xl opacity-50" />
              <img
                src={logo}
                alt="Naxshatra AI Logo"
                className="relative w-80 h-80 md:w-96 md:h-96 object-contain animate-float hover:animate-spin-slow transition-all duration-700 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        ref={featuresRef.ref}
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 py-20 opacity-0",
          featuresRef.isIntersecting && "animate-fade-in-view"
        )}
      >
        <div className="text-center mb-16 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our Story – <span className="text-gradient">Where Vision Meets Innovation</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>
              At <span className="text-primary font-semibold">Naxshatra AI</span>, we believe in the power of
              technology to transform businesses and lives. Founded in 2020, our journey began with a simple yet
              powerful vision: to bridge the gap between ambitious ideas and digital reality.
            </p>
            <p>
              We are a passionate team of innovators, designers, and developers who live and breathe technology. From
              AI-powered solutions to stunning web experiences, we craft digital products that don't just meet
              expectations—they exceed them.
            </p>
            <p>
              Our mission is to empower businesses of all sizes to thrive in the digital age. We combine cutting-edge
              technology with creative excellence to deliver solutions that drive real results. Every project we
              undertake is a testament to our commitment to quality, innovation, and client success.
            </p>
            <p className="text-primary font-medium">
              Join us on this journey as we continue to push boundaries and redefine what's possible in the digital
              world.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation First",
              description: "We embrace new technologies and methodologies to stay ahead of the curve",
            },
            {
              title: "Client Success",
              description: "Your goals become our goals. We measure our success by your achievements",
            },
            {
              title: "Excellence Always",
              description: "We never compromise on quality. Every detail matters in our pursuit of perfection",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="gradient-primary p-8 rounded-2xl border border-border hover:border-primary transition-all duration-300 group hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <div className="w-6 h-6 bg-primary rounded group-hover:bg-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
