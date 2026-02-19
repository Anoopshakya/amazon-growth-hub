import { motion } from "framer-motion";
import { ShieldCheck, Megaphone, DollarSign, Truck, ArrowRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: ShieldCheck,
    title: "Amazon Account Management",
    tagline: "Be the brand customers actually find—and buy from.",
    description: "Full-service catalog hygiene, Buy Box optimization, listing conversion, inventory management, customer experience, and weekly reporting.",
    bullets: [
      "Catalog Hygiene & Compliance — variations, attributes, images, browse nodes, suppressed/stranded fixes, policy appeals, and brand protection",
      "Buy Box & Pricing Ops — MAP guardrails, promo planning, and repricer coordination to improve Buy Box% without eroding margin",
      "Listing Quality & Conversion — title/bullets, A+ Content, Store, alt text, and backend terms tuned from real search intent",
      "Inventory & FBA Admin — inbounds/WROs, carton/pallet plans, capacity limits, restock alerts, and check-in reconciliation",
      "CX & Reviews — proactive CS macros, response SLAs, templated resolution flows, and review/NCX monitoring to protect ODR",
      "Reporting & Governance — weekly scorecard + monthly ops review with actions, owners, and dates",
    ],
    kpis: ["Buy Box %", "Sessions", "CVR", "ODR", "In-Stock %", "TACOS", "Contribution Margin"],
  },
  {
    icon: Megaphone,
    title: "Advertising + SEO",
    tagline: "Turn search intent into profitable orders.",
    description: "Complete keyword-to-conversion pipeline: SEO foundation, SP/SB/SD campaigns, creative testing, budget automation, and full measurement.",
    bullets: [
      "SEO Foundation — keyword map, listing rewrites, image briefs, A+ modules, Store taxonomy, and backend terms",
      "Campaign System — SP/SB/SD portfolios with Research → Harvest → Scale stages; exact/phrase isolation, negatives, dayparting",
      "Creative That Converts — SB Video, Store-linked SB headline tests, lifestyle/benefit imagery, and editorial angles",
      "Budget & Bid Automation — rule-based bid moves, budget reallocation, placement multipliers, and new-to-brand capture",
      "Measurement — TACOS/ROAS, CVR/CTR, CPC trends, search term gainers/losers, incremental NTB, and campaign guardrails",
      "30/60/90 Launch — 1) audit + rebuild, 2) harvest + scale, 3) efficiency tuning toward target TACOS",
    ],
    kpis: ["TACOS", "ROAS", "CVR/CTR", "CPC Trends", "NTB Revenue"],
  },
  {
    icon: DollarSign,
    title: "Recovery & Reimbursement",
    tagline: "Get your money back—safely and by the book.",
    description: "Evidence-first FBA audits based on Financial Forensics learned from a decade of being overcharged by Amazon. ToS-compliant case filing, and optional 3PL/parcel invoice audits. Zero-risk pricing: no recovery = no fee.",
    bullets: [
      "FBA Audits — lost/damaged, over-receipts, returns not returned, over-weight/dims, overcharged storage, removals/disposals, carrier issues",
      "Evidence-First Cases — time-boxed lookbacks, SKU-level proof, ToS-compliant wording, and case tracking to closure",
      "3PL/Parcel Invoice Audits — UPS/FedEx bill review for errors, late guarantees, residential/ODA mis-codes",
      "Zero-Risk Pricing — % of funds actually recovered. No recovery = no fee",
      "Financial Forensics — decade of experience identifying where Amazon overcharges sellers systematically",
      "6–18 Month Lookback — high-velocity ASINs, frequent returns, and big restock cycles",
    ],
    kpis: ["No recovery = No fee", "2-5% revenue recovered", "$2.1M+ total recovered"],
  },
  {
    icon: Truck,
    title: "Logistics & Forecasting",
    tagline: "End-to-End Logistics Resilience. Right inventory, right place, right time.",
    description: "We handle the 'un-sexy' side of Amazon that others ignore: freight forwarding, customs hurdles, 3PL coordination, and FBA shipment reconciliations. If it's stuck in a warehouse, we're the ones getting it out.",
    bullets: [
      "Demand Forecast — 104-week history, seasonality, promo plans, price changes, stockouts, lead times, MOQs, case-packs, returns, and restock limits",
      "Replenishment Engine — Min/Max & ROP per SKU, triggers when projected DOH < threshold, safety stock by service level",
      "FBA Inbound Planning — ASIN→FC split, cartonization & pallet plans, label sets (FNSKU/box/pallet), ASN & BOL package",
      "Execution — WROs, partnered/non-partnered freight, customs, 3PL coordination, check-in reconciliation",
      "Exception Handling — expedite triggers, allocation across DCs, kill-switch for slow movers, shortage reconciliation",
      "Optimization Loops — forecast error learning, lead-time recalibration, demand cannibalization, what-if scenarios",
    ],
    kpis: ["MAPE", "In-Stock %", "DOH", "Turns", "Excess/Aged %", "Check-in SLA"],
  },
];

const Services = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = services[activeIdx];

  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">Services</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Everything you need to
            <br />
            <span className="text-gradient">dominate Amazon</span>
          </h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            Four integrated pillars that cover every lever of Amazon profitability.
          </p>
        </motion.div>

        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((svc, i) => (
            <motion.button
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setActiveIdx(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeIdx === i
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(88_68%_48%/0.3)]"
                  : "bg-secondary/50 text-secondary-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              <svc.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{svc.title}</span>
              <span className="sm:hidden">{svc.title.split(' ')[0]}</span>
            </motion.button>
          ))}
        </div>

        {/* Active service detail */}
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {/* Left: Description */}
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <active.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">{active.title}</h3>
                <p className="text-sm text-primary">{active.tagline}</p>
              </div>
            </div>
            <p className="text-secondary-foreground mb-6 leading-relaxed">{active.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {active.kpis.map((kpi) => (
                <span key={kpi} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  {kpi}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Bullet list */}
          <div className="glass-card rounded-2xl p-8 lg:p-10">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-6">What's included</p>
            <ul className="space-y-4">
              {active.bullets.map((b, i) => {
                const [title, ...rest] = b.split(" — ");
                const desc = rest.join(" — ");
                return (
                  <motion.li
                    key={b}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex gap-3"
                  >
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-primary shrink-0" />
                    <div>
                      <span className="font-semibold text-foreground text-sm">{title}</span>
                      {desc && <span className="text-secondary-foreground text-sm"> — {desc}</span>}
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
