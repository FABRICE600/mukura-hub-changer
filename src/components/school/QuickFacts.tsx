import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const facts = [
  { target: 700, label: "Students Enrolled", suffix: "+" },
  { target: 25, label: "Qualified Teachers", suffix: "" },
  { target: 10, label: "Annual Competitions", suffix: "+" },
  { target: 80, label: "National Exam Pass Rate", suffix: "%" },
];

const Counter = ({ target, suffix, started }: { target: number; suffix: string; started: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span className="font-heading font-extrabold text-4xl md:text-5xl text-primary-foreground">
      {count}{suffix}
    </span>
  );
};

const QuickFacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-2xl" />
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-accent/10 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground text-center mb-14"
        >
          Quick Facts
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {facts.map((fact, i) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <Counter target={fact.target} suffix={fact.suffix} started={isInView} />
              <p className="font-body text-primary-foreground/80 mt-2 text-sm">
                {fact.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickFacts;
