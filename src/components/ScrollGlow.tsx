import { useEffect, useState } from "react";

const ScrollGlow = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = Math.min(scrollY / 300, 0.6);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[45] transition-opacity duration-300"
      style={{ opacity }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/20 blur-[100px] rounded-full" />
    </div>
  );
};

export default ScrollGlow;
