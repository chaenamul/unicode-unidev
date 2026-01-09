import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-8 z-50 shadow-lg flex flex-col items-center gap-1 h-auto py-3 px-4
        right-8
        min-[1040px]:right-[calc((100vw-1024px)/2-64px)]
      "
      size="lg"
    >
      <ArrowUp className="h-5 w-5" />
      <span className="text-xs font-semibold">TOP</span>
    </Button>
  );
};

export default ScrollToTopButton;
