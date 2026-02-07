import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Shield, Monitor, TreePine, Globe } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Quality Education",
    desc: "We deliver a balanced curriculum with experienced teachers committed to academic success and character development.",
  },
  {
    icon: Shield,
    title: "Strong Discipline",
    desc: "Our school promotes a culture of respect, punctuality, and responsibility, nurturing self-driven learners.",
  },
  {
    icon: Monitor,
    title: "ICT Integration",
    desc: "Students gain digital literacy skills through practical exposure to computers and innovative learning tools.",
  },
  {
    icon: TreePine,
    title: "Safe & Green Environment",
    desc: "Our serene and clean campus promotes concentration and a healthy learning environment.",
  },
  {
    icon: Globe,
    title: "Inclusive & Diverse",
    desc: "We welcome students from all backgrounds and help them grow together with mutual understanding and cooperation.",
  },
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary section-title-line">
            Why Choose GS Mukura HY?
          </h2>
          <p className="text-muted-foreground font-body text-lg mt-6">
            Discover what makes us a unique center of excellence
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-8 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-border group hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
