import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Clock, User } from "lucide-react";

const newsItems = [
  {
    day: "06",
    month: "Jun",
    title: "Annual School Day Celebration",
    time: "10:30 AM",
    author: "School Admin",
    text: "We are preparing for the annual school celebration, a special day dedicated to showcasing our students' talents and achievements.",
  },
  {
    day: "10",
    month: "Jun",
    title: "End of Third Term Examination",
    time: "2:00 PM",
    author: "Director of Study",
    text: "We are planning for the final exams for the third semester to be held on that date. Students should prepare accordingly.",
  },
  {
    day: "09",
    month: "Jul",
    title: "National Examination Start",
    time: "8:00 AM",
    author: "NESA",
    text: "The National Examinations Service (NESA) has announced that the state exams will begin on this date.",
  },
];

const LatestNews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="py-20 bg-muted/50" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary section-title-line">
            Latest News
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] transition-all border border-border group hover:-translate-y-1"
            >
              {/* Date badge */}
              <div className="flex">
                <div className="w-20 flex-shrink-0 flex flex-col items-center justify-center py-6"
                  style={{ background: "var(--gradient-hero)" }}
                >
                  <span className="font-heading font-extrabold text-2xl text-primary-foreground">{item.day}</span>
                  <span className="font-body text-xs text-primary-foreground/80 uppercase tracking-wider">{item.month}</span>
                </div>
                <div className="p-5 flex-1">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {item.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" /> {item.author}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
