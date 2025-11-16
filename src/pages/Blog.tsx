import { Card } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business Automation",
      excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your organization",
      author: "Rajesh Kumar",
      date: "Nov 10, 2025",
      category: "AI & Technology",
      readTime: "5 min read",
    },
    {
      title: "10 SEO Strategies That Actually Work in 2025",
      excerpt: "Stay ahead of the competition with these proven SEO techniques that drive real organic traffic",
      author: "Vikram Singh",
      date: "Nov 8, 2025",
      category: "Digital Marketing",
      readTime: "7 min read",
    },
    {
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Learn why mobile-first approach is crucial for modern web development and user experience",
      author: "Priya Sharma",
      date: "Nov 5, 2025",
      category: "Design",
      readTime: "6 min read",
    },
    {
      title: "Building Scalable Backend Systems",
      excerpt: "Best practices for creating robust, scalable backend architectures that grow with your business",
      author: "Arjun Patel",
      date: "Nov 2, 2025",
      category: "Development",
      readTime: "8 min read",
    },
    {
      title: "The Rise of Progressive Web Apps",
      excerpt: "Why PWAs are becoming the preferred choice for businesses looking to enhance user engagement",
      author: "Priya Sharma",
      date: "Oct 28, 2025",
      category: "Web Development",
      readTime: "5 min read",
    },
    {
      title: "Digital Marketing Trends to Watch",
      excerpt: "Stay informed about the latest trends shaping the digital marketing landscape in 2025",
      author: "Vikram Singh",
      date: "Oct 25, 2025",
      category: "Marketing",
      readTime: "6 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Our <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on technology, design, and digital transformation
          </p>
        </div>

        {/* Featured Post */}
        <Card className="gradient-primary border-border hover:border-primary transition-all duration-300 mb-12 overflow-hidden group">
          <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">Featured</span>
                <span>{blogPosts[0].category}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-muted-foreground">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <span>{blogPosts[0].readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                Read More
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="hidden lg:flex items-center justify-center">
              <div className="w-full h-64 gradient-glow rounded-2xl" />
            </div>
          </div>
        </Card>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="gradient-primary border-border hover:border-primary transition-all duration-300 group hover:scale-105 cursor-pointer overflow-hidden"
            >
              <div className="h-48 gradient-glow" />
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary">{post.category}</span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 gradient-primary p-12 rounded-3xl border border-primary/20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights on technology and digital innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background/50 border border-border focus:border-primary outline-none text-foreground"
            />
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,206,209,0.5)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
