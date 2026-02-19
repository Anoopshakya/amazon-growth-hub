import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const FounderSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-primary/3 blur-[120px]" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">From the Founder's Desk</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why We Built <span className="text-gradient">NextAI Commerce</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-12 relative"
        >
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
          
          <div className="relative z-10 space-y-6 text-secondary-foreground leading-relaxed">
            <p className="text-lg md:text-xl">
              After a decade in the trenches scaling my own Amazon business to{" "}
              <span className="text-foreground font-semibold">$20M in annual revenue</span>, I realized most sellers
              aren't failing because of a lack of effort—they're failing because of{" "}
              <span className="text-primary font-semibold">complexity</span>.
            </p>

            <p className="text-base md:text-lg">
              As the founder of <span className="text-foreground font-semibold">Eva</span>, I've consulted for over{" "}
              <span className="text-foreground font-semibold">1,000 resellers and private label brands</span>.
              I've seen every restricted category issue, every lost FBA shipment, and every PPC pitfall.
            </p>

            <p className="text-base md:text-lg">
              I didn't just build another agency; I{" "}
              <span className="text-primary font-semibold">hand-trained a team to think like owners</span>, not
              freelancers. We don't just "manage" your account; we protect your contribution margin and solve
              the logistics nightmares that keep you up at night.
            </p>
          </div>

          {/* Founder info */}
          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/30">
              <span className="font-display text-xl font-bold text-primary">BG</span>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-foreground">Barry Guze</p>
              <p className="text-sm text-muted-foreground">Founder & CEO, NextAI Commerce</p>
              <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Former Eva Founder
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  10+ Years Active Seller
                </span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  $20M+ Revenue
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
