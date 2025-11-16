import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import client1 from "@/assets/client1.jpg";
import client2 from "@/assets/client2.jpg";

const Reviews = () => {
  const heroRef = useIntersectionObserver({ threshold: 0.2 });
  const reviewsRef = useIntersectionObserver({ threshold: 0.1 });
  const ctaRef = useIntersectionObserver({ threshold: 0.3 });

  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      image: client1,
      rating: 5,
      review: "Naxshatra AI transformed our digital presence completely. Their AI automation solutions saved us countless hours and significantly improved our efficiency. Highly recommended!",
    },
    {
      name: "Maria Garcia",
      role: "Marketing Director, GrowthCo",
      image: client2,
      rating: 5,
      review: "The team's expertise in digital marketing is unmatched. They helped us triple our online reach and double our conversion rates within just 6 months. Exceptional work!",
    },
    {
      name: "David Chen",
      role: "Founder, InnovateLab",
      image: client1,
      rating: 5,
      review: "Working with Naxshatra AI was a game-changer for our startup. Their mobile app development skills are top-notch, and they delivered beyond our expectations.",
    },
    {
      name: "Emily Rodriguez",
      role: "Operations Manager, RetailPro",
      image: client2,
      rating: 5,
      review: "From initial consultation to final delivery, the professionalism and technical expertise were outstanding. Our new website has received incredible feedback from customers!",
    },
    {
      name: "Michael Thompson",
      role: "CTO, DataFlow Solutions",
      image: client1,
      rating: 5,
      review: "The backend solutions they built for us are robust, scalable, and perfectly aligned with our needs. Their team truly understands modern architecture and best practices.",
    },
    {
      name: "Lisa Anderson",
      role: "Director, E-Commerce Plus",
      image: client2,
      rating: 5,
      review: "Their SEO expertise helped us rank #1 for our key search terms. The results speak for themselves - our organic traffic has increased by 300%. Worth every penny!",
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
            What Our Clients Say <span className="text-gradient">About Us</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience
            working with Naxshatra AI.
          </p>
        </div>

        {/* Reviews Grid */}
        <div
          ref={reviewsRef.ref}
          className={cn(
            "grid md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0",
            reviewsRef.isIntersecting && "animate-scale-in"
          )}
        >
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="gradient-primary p-8 border-border hover:border-primary transition-all duration-300 group hover:scale-105"
            >
              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="fill-primary text-primary" size={20} />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed">{review.review}</p>

                {/* Client Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary transition-all"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "30+", label: "Happy Clients" },
            { value: "99%", label: "Satisfaction Rate" },
            { value: "5.0", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Join Our Success Stories?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Schedule a consultation to discuss your project.
          </p>
          <button
            onClick={() => window.open("https://calendly.com/naxshatra-ai", "_blank")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,206,209,0.5)] hover:scale-105"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
