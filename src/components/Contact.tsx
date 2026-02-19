import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, CheckCircle2 } from "lucide-react";

const benefits = [
  "Free account audit & gap analysis",
  "Custom 90-day growth roadmap",
  "Zero-risk recovery assessment",
  "No long-term contracts required",
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-primary font-semibold tracking-wider uppercase mb-3">Get Started</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-foreground">
            Ready to <span className="text-gradient">scale?</span>
          </h2>
          <p className="text-secondary-foreground text-lg max-w-xl mx-auto mb-10">
            Book a free strategy call. We'll audit your account, show you the gaps, and map out a 90-day plan—no strings attached.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:hello@nextaicommerce.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:brightness-110 transition-all shadow-[0_0_30px_-5px_hsl(88_68%_48%/0.3)]"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://calendly.com/barry-guze-next"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-border bg-secondary/50 text-foreground font-semibold text-base hover:bg-secondary transition-all"
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Benefits */}
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-3 text-sm text-secondary-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground">
                For recovery services: <span className="font-semibold text-primary">Zero-Risk Pricing</span> — No recovery = No fee.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
