import { useEffect } from "react";

const useSmoothScroll = () => {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const delta = event.deltaY || -event.detail;
      const scrollSpeed = 4.5; // Adjust this value to control the scroll speed
      const scrollAmount = delta * scrollSpeed;

      window.scrollBy({
        top: scrollAmount,
        left: 0,
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);
};

export default useSmoothScroll;
