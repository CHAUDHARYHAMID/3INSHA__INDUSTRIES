"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-24 right-6 z-50 h-16 w-16 rounded-full bg-primary/80 text-primary-foreground shadow-lg transition-opacity hover:bg-primary flex items-center justify-center",
        isVisible ? "opacity-100" : "opacity-0"
      )}
      suppressHydrationWarning
    >
      <ArrowUp className="h-8 w-8" />
      <span className="sr-only">Go to top</span>
    </Button>
  );
};

export default ScrollToTop;
