import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Product } from "../backend.d";
import {
  formatPrice,
  getCategoryLabel,
  getProductImage,
} from "../lib/productImages";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const image = getProductImage(product);
  const label = getCategoryLabel(product.category);
  const price = formatPrice(product.price);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group bg-card border border-border/60 overflow-hidden rounded-sm"
      data-ocid={`shop.product.card.${index + 1}`}
    >
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground leading-tight">
            {product.name}
          </h3>
          <Badge
            variant="outline"
            className="text-xs tracking-widest uppercase border-accent/50 text-accent font-body shrink-0"
          >
            {label}
          </Badge>
        </div>
        <p className="font-body text-xl font-bold text-foreground mb-4">
          {price}
        </p>
        <Link to="/product/$id" params={{ id: product.id.toString() }}>
          <Button
            variant="outline"
            className="w-full border-border hover:border-accent hover:text-accent hover:bg-transparent transition-all duration-200 font-body text-sm tracking-widest uppercase"
            data-ocid={`shop.product.view.button.${index + 1}`}
          >
            View Details
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
