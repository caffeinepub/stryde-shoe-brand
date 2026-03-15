import { motion } from "motion/react";

const stats = [
  { number: "2019", label: "Founded" },
  { number: "47+", label: "Countries Shipped" },
  { number: "100%", label: "Premium Leather" },
  { number: "12", label: "Artisan Partners" },
];

const values = [
  {
    title: "Uncompromising Quality",
    body: "We test every design through hundreds of hours of wear before a single pair ships. If it doesn't hold up to our team, it doesn't hold up to you.",
  },
  {
    title: "Timeless Design",
    body: "Trends fade. Our silhouettes are designed to outlast seasons, to be as relevant in ten years as they are today. We invest in classics, not gimmicks.",
  },
  {
    title: "Responsible Craft",
    body: "We partner with tanneries that uphold responsible sourcing practices. Our packaging is 100% recycled. We believe great things can be made ethically.",
  },
];

export function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <section className="px-6 max-w-6xl mx-auto pt-12 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-4">
            Our Story
          </p>
          <h1 className="font-display text-6xl md:text-8xl font-black text-foreground leading-none tracking-tight mb-10">
            Born to
            <br />
            <span className="text-accent italic">defy.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 font-body text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              STRYDE was born in 2019 from a simple belief — that great footwear
              should be both uncompromising in quality and unapologetic in
              style. Founded in New York's Design District, we set out to create
              shoes that move as fast as the people who wear them.
            </p>
            <p>
              We source only the finest full-grain leathers from tanneries in
              Italy and Portugal, partnering with craftspeople who share our
              obsession with detail. Every stitch, every sole, every silhouette
              is deliberate. We don't follow trends — we create them.
            </p>
            <p>
              Our mission is straightforward: build shoes that become the most
              reliable thing in your wardrobe. Shoes that look better with age,
              that feel broken in from day one, that earn their place in your
              life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-accent pl-6">
                <p className="font-display text-4xl font-bold text-foreground">
                  {stat.number}
                </p>
                <p className="font-body text-sm text-muted-foreground tracking-widest uppercase mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-secondary/20 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display text-4xl font-bold text-foreground mb-12 text-center"
          >
            What We Stand For
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-8 border border-border/60 bg-card"
              >
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
