import { motion } from "framer-motion";
import { Search, Wrench, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    phase: "Phase 1",
    title: "Deep Audit",
    desc: "We dissect your catalog, ads, financials, and FBA records to find every leak and opportunity.",
    timeline: "Days 1–30",
    details: ["Catalog & listing analysis", "Ad account deep dive", "Financial forensics", "FBA record audit"],
  },
  {
    icon: Wrench,
    phase: "Phase 2",
    title: "Rebuild & Harvest",
    desc: "Rewrite listings, restructure campaigns, file reimbursements, and fix inventory planning.",
    timeline: "Days 31–60",
    details: ["SEO-optimized listings", "Campaign restructure", "Reimbursement filing", "Inventory optimization"],
  },
  {
    icon: Rocket,
    phase: "Phase 3",
    title: "Scale & Optimize",
    desc: "Expand winners, tune bids toward target TACOS, and automate replenishment workflows.",
    timeline: "Days 61–90",
    details: ["Winner expansion", "TACOS optimization", "Automation setup", "Growth acceleration"],
  },
  {
    icon: BarChart2,
    phase: "Ongoing",
    title: "Govern & Report",
    desc: "Weekly scorecards, monthly ops reviews with actions, owners, and dates. Continuous improvement.",
    timeline: "Month 4+",
    details: ["Weekly scorecards", "Monthly ops reviews", "Continuous optimization", "Strategic planning"],
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">How It Works</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            30/60/90 day <span className="text-gradient">framework</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven framework that delivers measurable results from day one.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px">
            <div className="w-full h-full line-glow opacity-30" />
          </div>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative lg:pl-20"
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-6 top-8 w-5 h-5 rounded-full bg-background border-2 border-primary items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass-card-hover rounded-2xl p-8 group">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:min-w-[200px]">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{step.phase}</span>
                        <h3 className="font-display text-xl font-bold">{step.title}</h3>
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-muted-foreground mb-4">{step.desc}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((d) => (
                          <div key={d} className="flex items-center gap-2 text-sm text-secondary-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {d}
                          </div>
                        ))}
                      </div>
                    </div>

                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1.5 rounded-full self-start whitespace-nowrap">
                      {step.timeline}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
