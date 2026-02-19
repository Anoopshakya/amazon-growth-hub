import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, TrendingUp } from "lucide-react";

const heroStats = [
  { icon: TrendingUp, value: "$20M+", label: "Revenue Scaled" },
  { icon: Users, value: "1,000+", label: "Sellers Consulted" },
  { icon: Shield, value: "$2.1M+", label: "Cash Recovered" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern radial-fade opacity-30" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[100px] animate-glow-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto text-center section-padding pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pedigree Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-secondary/50 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-secondary-foreground">
              Founded by former Eva Creator · 10+ Years Active Amazon Selling
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] mb-6 tracking-tight text-foreground">
            Stop Hiring Agencies with
            <br />
            <span className="text-gradient-hero glow-text">Junior Account Managers</span>
          </h1>

          <p className="text-lg sm:text-xl text-secondary-foreground max-w-3xl mx-auto mb-6 leading-relaxed">
            Built by a decade-long Amazon seller who scaled to{" "}
            <span className="text-foreground font-semibold">$20M in annual revenue</span>{" "}
            and founded an ecommerce tech company. We've consulted for{" "}
            <span className="text-foreground font-semibold">1,000+ sellers</span>—now,
            we're running your playbook with battle-tested strategies and elite logistics.
          </p>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Our recovery process is built on <span className="text-primary font-semibold">Financial Forensics</span> learned
            from a decade of being overcharged by Amazon. The AI is the tool—our{" "}
            <span className="text-foreground font-medium">$20M-revenue-proven team</span> is the pilot.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-[0_0_30px_-5px_hsl(88_68%_48%/0.3)]"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold text-base hover:bg-secondary transition-all"
            >
              Explore Services
            </motion.button>
          </div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
                className="glass-card rounded-xl p-4 text-center"
              >
                <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-2.5 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
