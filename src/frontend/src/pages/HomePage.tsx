import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { ProductCard } from "../components/ProductCard";
import { useAllProducts } from "../hooks/useQueries";

export function HomePage() {
  const { data: products = [], isLoading } = useAllProducts();
  const featured = products.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-banner.dim_1600x900.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-body text-accent text-sm uppercase tracking-[0.3em] mb-6"
          >
            Premium Footwear Collection
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-7xl md:text-9xl font-black text-foreground leading-none tracking-tight mb-6"
          >
            BUILT
            <br />
            <span className="text-accent italic">TO</span>
            <br />
            MOVE.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-xl text-foreground/70 tracking-widest uppercase mb-10"
          >
            Footwear for the relentless.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link to="/shop">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body text-sm tracking-widest uppercase px-10 py-6 rounded-none shadow-glow transition-all duration-300 hover:shadow-glow hover:scale-105"
                data-ocid="hero.shop.primary_button"
              >
                Shop Now
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs text-foreground/40 tracking-widest uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            className="w-px h-8 bg-gradient-to-b from-foreground/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-14"
        >
          <div>
            <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-2">
              Handpicked
            </p>
            <h2 className="font-display text-5xl font-bold text-foreground">
              Featured
            </h2>
          </div>
          <Link
            to="/shop"
            data-ocid="home.shop.link"
            className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors flex items-center gap-2"
          >
            View All <ArrowRight size={14} />
          </Link>
        </motion.div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="home.products.loading_state"
          >
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="aspect-square w-full" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <ProductCard
                key={product.id.toString()}
                product={product}
                index={i}
              />
            ))}
          </div>
        )}
      </section>

      {/* Brand Statement */}
      <section className="border-t border-border/40 py-32 px-6 bg-secondary/20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Crafted for
            <br />
            <span className="text-accent italic">extraordinary</span>
            <br />
            lives.
          </h2>
          <p className="font-body text-muted-foreground mt-8 text-lg leading-relaxed">
            Every pair of STRYDE shoes is a statement — that you refuse to
            compromise on quality, on style, or on what you demand from your
            footwear.
          </p>
          <Link
            to="/about"
            data-ocid="home.about.link"
            className="inline-block mt-8 font-body text-sm tracking-widest uppercase text-accent hover:text-accent/80 transition-colors"
          >
            Our Story →
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
