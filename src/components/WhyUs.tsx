import { motion } from "framer-motion";
import { Brain, Shield, Zap, Users, LineChart, Clock } from "lucide-react";

const reasons = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    desc: "Proprietary automation tools analyze thousands of data points to optimize every decision.",
  },
  {
    icon: Shield,
    title: "Zero-Risk Recovery",
    desc: "No recovery = no fee. We only win when you win. Typical 2-5% of revenue recovered.",
  },
  {
    icon: Zap,
    title: "Speed to Impact",
    desc: "30/60/90 framework delivers measurable results starting week one, not month six.",
  },
  {
    icon: Users,
    title: "Veteran Operators",
    desc: "Former Amazon category managers, agency leaders, and brand operators—not junior freelancers.",
  },
  {
    icon: LineChart,
    title: "Full-Stack Coverage",
    desc: "From SEO to logistics, we cover every lever so nothing falls through the cracks.",
  },
  {
    icon: Clock,
    title: "Weekly Accountability",
    desc: "Scorecards, ops reviews, and named owners for every action. Total transparency.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">Why NextAI</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Built different, <span className="text-gradient">by design</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            What sets us apart from every other Amazon agency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card-hover rounded-2xl p-7 group"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
