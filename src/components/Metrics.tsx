import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, ShoppingCart, BarChart3, Package, DollarSign, Target } from "lucide-react";

const metrics = [
  { icon: TrendingUp, label: "Buy Box Win Rate", value: 94, suffix: "%", sub: "avg across clients" },
  { icon: ShoppingCart, label: "Conversion Lift", value: 38, prefix: "+", suffix: "%", sub: "within 90 days" },
  { icon: BarChart3, label: "TACOS Reduction", value: 27, prefix: "-", suffix: "%", sub: "avg improvement" },
  { icon: Package, label: "In-Stock Rate", value: 99.2, suffix: "%", sub: "maintained avg", decimals: 1 },
  { icon: DollarSign, label: "Cash Recovered", value: 2.1, prefix: "$", suffix: "M+", sub: "financial forensics", decimals: 1 },
  { icon: Target, label: "Sellers Consulted", value: 1000, prefix: "", suffix: "+", sub: "worldwide" },
];

function AnimatedCounter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-gradient">
      {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}{suffix}
    </span>
  );
}

const Metrics = () => {
  return (
    <section id="metrics" className="section-padding relative">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[600px] h-[400px] rounded-full bg-primary/5 blur-[120px]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">Proven Results</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Results that <span className="text-gradient">speak</span>
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            Real metrics from real Amazon brands we've scaled.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card-hover rounded-2xl p-6 md:p-8 text-center group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <m.icon className="w-5 h-5 text-primary" />
              </div>
              <AnimatedCounter
                value={m.value}
                prefix={m.prefix}
                suffix={m.suffix}
                decimals={m.decimals}
              />
              <p className="text-sm font-medium text-foreground mt-2 mb-1">{m.label}</p>
              <p className="text-xs text-muted-foreground">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
