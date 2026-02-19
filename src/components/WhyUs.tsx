import { motion } from "framer-motion";
import { Shield, Truck, Zap, Users, LineChart, Clock } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Battle-Tested Expertise",
    desc: "Every team member is hand-trained by our founder to think like an owner. We apply the same $20M+ strategies that worked for us to your brand.",
  },
  {
    icon: Truck,
    title: "Logistics-First Growth",
    desc: "While others only focus on PPC, we handle the 'un-sexy' logistics that actually protect your profit—from customs hurdles and 3PL coordination to FBA reconciliations.",
  },
  {
    icon: Shield,
    title: "Zero-Risk Recovery",
    desc: "No recovery = no fee. Our Financial Forensics process is built on a decade of being overcharged by Amazon. Typical 2-5% of revenue recovered.",
  },
  {
    icon: LineChart,
    title: "Total Transparency",
    desc: "We focus on the KPIs that matter to your bottom line: Contribution Margin, TACOS, and In-Stock %. Weekly scorecards with named owners.",
  },
  {
    icon: Zap,
    title: "Operator-Led, AI-Augmented",
    desc: "The AI is the tool—our $20M-revenue-proven team is the pilot. No junior account managers learning on your dime.",
  },
  {
    icon: Clock,
    title: "30/60/90 Day Results",
    desc: "Our proven framework delivers measurable results from week one. Audit → Rebuild → Scale → Govern. No six-month ramp-ups.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="section-padding bg-card relative overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">Why NextAI</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Built by <span className="text-gradient">Operators</span>, Not Account Managers
          </h2>
          <p className="text-secondary-foreground text-lg max-w-3xl mx-auto">
            Most agencies are run by marketers. NextAI Commerce was built by a 10-year Amazon Seller
            who has been exactly where you are.
          </p>
        </motion.div>

        {/* The $20M Perspective callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-6 md:p-8 mb-12 max-w-3xl mx-auto text-center border-primary/20"
        >
          <p className="font-display text-lg font-bold text-primary mb-2">The $20M Perspective</p>
          <p className="text-secondary-foreground leading-relaxed">
            Our founder didn't just study the Amazon marketplace—he conquered it, scaling his own business
            to $20M in annual revenue. Having personally consulted for over 1,000 resellers and private label
            brands, he saw a recurring problem: sellers were drowning in complexity and losing margin to logistics nightmares.
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
              <h3 className="font-display text-lg font-bold mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-secondary-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            "Stop managing complexity. Start scaling with a team that has already been there."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUs;
