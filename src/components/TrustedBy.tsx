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
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-muted-foreground mb-8 tracking-wider uppercase"
      >
        Trusted by fast-growing Amazon brands
      </motion.p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="mx-12 flex items-center gap-2 text-muted-foreground/60"
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
