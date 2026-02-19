import { motion } from "framer-motion";

const brands = [
  "Amazon Sellers",
  "DTC Brands",
  "Private Label",
  "Wholesale",
  "Agency Partners",
  "Enterprise",
  "FBA Aggregators",
  "Marketplace Leaders",
];

const TrustedBy = () => {
  return (
    <section className="py-16 border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <p className="text-sm text-muted-foreground tracking-wider uppercase mb-2">
          Trusted by fast-growing Amazon brands
        </p>
        <p className="text-2xl font-display font-bold text-foreground">
          <span className="text-gradient">1,000+</span> Sellers Consulted Worldwide
        </p>
      </motion.div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="mx-12 flex items-center gap-2 text-secondary-foreground/60"
            >
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <span className="font-display text-lg font-medium">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
