import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FlaskConical, Calculator } from "lucide-react";

const combinations = [
  {
    code: "MEG",
    name: "Mathematics - Economics - Geography",
    focus: "Business, Economics, and Spatial Analysis",
    icon: Calculator,
    color: "bg-primary/10 text-primary",
  },
  {
    code: "MCE",
    name: "Mathematics - Computer Science - Economics",
    focus: "Digital Innovation, Data Analysis, Tech Careers",
    icon: BookOpen,
    color: "bg-accent/10 text-accent",
  },
  {
    code: "PCB",
    name: "Physics - Chemistry - Biology",
    focus: "Health Sciences, Engineering, Medical Studies",
    icon: FlaskConical,
    color: "bg-secondary/20 text-gold-dark",
  },
];

const AcademicPrograms = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="academics" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary section-title-line">
            Our Academic Programs
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-6">
            Empowering students at every level of learning
          </p>
        </motion.div>

        {/* O Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-xl p-8 shadow-[var(--shadow-sm)] border border-border mb-8 max-w-4xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl text-primary flex items-center gap-2 mb-3">
            🧮 Ordinary Level (O Level)
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            The O Level curriculum at GS Mukura HY provides a strong foundation in core subjects, focusing on 
            critical thinking, problem-solving, and character formation. Subjects include Mathematics, Science, 
            English, Kinyarwanda, French, Social Studies, and ICT.
          </p>
        </motion.div>

        {/* A Level */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card rounded-xl p-8 shadow-[var(--shadow-sm)] border border-border mb-8 max-w-4xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl text-primary mb-3">
            🧠 Advanced Level (A Level)
          </h3>
          <p className="font-body text-muted-foreground leading-relaxed mb-6">
            At A Level, students specialize in academic combinations designed to match their strengths and 
            future career goals. We offer the following combinations:
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {combinations.map((combo, i) => (
              <motion.div
                key={combo.code}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="rounded-lg p-5 bg-muted/50 border border-border hover:border-primary/30 transition-all group hover:-translate-y-1"
              >
                <div className={`w-10 h-10 rounded-lg ${combo.color} flex items-center justify-center mb-3`}>
                  <combo.icon className="w-5 h-5" />
                </div>
                <h4 className="font-heading font-bold text-primary text-lg mb-1">{combo.code}</h4>
                <p className="font-body text-sm text-foreground mb-2">{combo.name}</p>
                <p className="font-body text-xs text-muted-foreground">
                  <span className="font-semibold text-secondary">Focus:</span> {combo.focus}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AcademicPrograms;
