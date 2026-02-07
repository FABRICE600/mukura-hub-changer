import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const WelcomeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2 section-title-line">
              Welcome to GS Mukura HY
            </h2>
            <p className="text-muted-foreground font-body text-lg mt-6 mb-6">
              Message from the Headteacher
            </p>
            <div className="font-body text-foreground/80 leading-relaxed space-y-4">
              <p>
                Dear students, parents, and guests,
              </p>
              <p>
                It is my great pleasure to welcome you to <strong className="text-primary">GS Mukura HY</strong>. 
                Our school is dedicated to providing an inclusive, innovative, and high-quality education. We believe 
                every student has unique potential and we strive to nurture each child academically, socially, and emotionally.
              </p>
              <p>
                I invite you to explore our website, discover our achievements, and become part of our vibrant 
                community. Together, we will continue to inspire excellence and lifelong learning.
              </p>
              <p className="italic text-muted-foreground">
                Warm regards,
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border">
              <p className="font-heading font-bold text-primary">The Headteacher</p>
              <p className="text-muted-foreground font-body">GS Mukura HY</p>
            </div>
          </motion.div>

          {/* Right - Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: "🏫", label: "Quality Education", desc: "Comprehensive curriculum" },
              { icon: "🛡️", label: "Strong Discipline", desc: "Character development" },
              { icon: "⚙️", label: "ICT Integration", desc: "Digital literacy" },
              { icon: "🌿", label: "Green Campus", desc: "Healthy environment" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all duration-300 border border-border hover:-translate-y-1"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-heading font-semibold text-primary text-sm">{item.label}</h3>
                <p className="text-muted-foreground text-xs mt-1 font-body">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
