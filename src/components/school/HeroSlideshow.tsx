import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImg1 from "@/assets/hero-school-1.jpg";
import heroImg2 from "@/assets/hero-school-2.jpg";
import heroImg3 from "@/assets/hero-school-3.jpg";

const slides = [
  {
    image: heroImg1,
    title: "Welcome to GS Mukura HY",
    subtitle: "Empowering students to reach their full potential in a caring, creative, and inspiring environment.",
  },
  {
    image: heroImg2,
    title: "Quality Education for All",
    subtitle: "We provide a diverse curriculum and extracurricular activities for holistic growth.",
  },
  {
    image: heroImg3,
    title: "Excellence, Discipline, Unity",
    subtitle: "Join a community built on strong values and a passion for learning.",
  },
];

const HeroSlideshow = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((p) => (p + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative h-[80vh] min-h-[500px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-primary/20" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 drop-shadow-lg">
                {slides[current].title}
              </h1>
              <p className="font-body text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
                {slides[current].subtitle}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#about"
                  className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-heading font-semibold hover:brightness-110 transition-all shadow-[var(--shadow-gold)]"
                >
                  Discover More
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border-2 border-primary-foreground/60 text-primary-foreground font-heading font-semibold hover:bg-primary-foreground/10 transition-all"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-all flex items-center justify-center"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card/30 backdrop-blur-sm text-primary-foreground hover:bg-card/50 transition-all flex items-center justify-center"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-secondary w-8" : "bg-primary-foreground/50 hover:bg-primary-foreground/80"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlideshow;
