import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import team1 from "@/assets/team1.jpg";
import team2 from "@/assets/team2.jpg";
import team3 from "@/assets/team3.jpg";
import team4 from "@/assets/team4.jpg";

const About = () => {
  const heroRef = useIntersectionObserver({ threshold: 0.2 });
  const valuesRef = useIntersectionObserver({ threshold: 0.2 });
  const teamRef = useIntersectionObserver({ threshold: 0.1 });

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "Founder & CEO",
      image: team3,
      description: "Visionary leader with 15+ years in digital transformation",
    },
    {
      name: "Priya Sharma",
      role: "Head of Design",
      image: team2,
      description: "Creative director specializing in user-centric experiences",
    },
    {
      name: "Arjun Patel",
      role: "Lead Developer",
      image: team1,
      description: "Full-stack expert passionate about scalable solutions",
    },
    {
      name: "Vikram Singh",
      role: "Marketing Director",
      image: team4,
      description: "Growth strategist driving digital marketing excellence",
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
            Our Story – <span className="text-gradient">Where Vision Meets Innovation</span>
          </h1>
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

        {/* Values Section */}
        <div
          ref={valuesRef.ref}
          className={cn(
            "mb-20 opacity-0",
            valuesRef.isIntersecting && "animate-fade-in-view"
          )}
        >
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
            ].map((value, index) => (
              <div
                key={index}
                className="gradient-primary p-8 rounded-2xl border border-border text-center hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div
          ref={teamRef.ref}
          className={cn(
            "opacity-0",
            teamRef.isIntersecting && "animate-scale-in"
          )}
        >
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The brilliant minds behind Naxshatra AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            </Card>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
