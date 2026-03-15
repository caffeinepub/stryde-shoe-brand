import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Link, useParams } from "@tanstack/react-router";
import { ArrowLeft, Check, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useProduct } from "../hooks/useQueries";
import {
  formatPrice,
  getCategoryLabel,
  getProductImage,
} from "../lib/productImages";

export function ProductDetailPage() {
  const { id } = useParams({ from: "/product/$id" });
  const productId = BigInt(id);
  const { data: product, isLoading } = useProduct(productId);
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    if (!product || selectedSize === null) return;
    addItem(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  if (isLoading) {
    return (
      <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          data-ocid="product.detail.loading_state"
        >
          <Skeleton className="aspect-square w-full" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/4" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center" data-ocid="product.detail.error_state">
          <p className="font-display text-2xl text-muted-foreground">
            Product not found.
          </p>
          <Link
            to="/shop"
            className="text-accent hover:text-accent/80 mt-4 inline-block font-body text-sm tracking-widest uppercase"
          >
            Back to Shop
          </Link>
        </div>
      </main>
    );
  }

  const image = getProductImage(product);
  const label = getCategoryLabel(product.category);
  const price = formatPrice(product.price);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-6xl mx-auto">
      <Link
        to="/shop"
        data-ocid="product.back.link"
        className="inline-flex items-center gap-2 font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-accent transition-colors mb-10"
      >
        <ArrowLeft size={16} /> Back to Shop
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="aspect-square bg-card overflow-hidden rounded-sm border border-border/60"
        >
          <img
            src={image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-6"
        >
          <div>
            <Badge
              variant="outline"
              className="mb-4 text-xs tracking-widest uppercase border-accent/50 text-accent font-body"
            >
              {label}
            </Badge>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>
            <p className="font-body text-3xl font-bold text-accent mt-3">
              {price}
            </p>
          </div>

          <p className="font-body text-muted-foreground leading-relaxed text-base">
            {product.description}
          </p>

          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
              Select Size{" "}
              {selectedSize && (
                <span className="text-accent">— US {selectedSize}</span>
              )}
            </p>
            <div
              className="flex flex-wrap gap-2"
              data-ocid="product.size.select"
            >
              {product.sizes.map((size) => {
                const sizeNum = Number(size);
                return (
                  <button
                    type="button"
                    key={sizeNum}
                    onClick={() => setSelectedSize(sizeNum)}
                    className={`w-12 h-12 font-body text-sm font-medium border transition-all duration-200 ${
                      selectedSize === sizeNum
                        ? "bg-accent text-accent-foreground border-accent"
                        : "border-border/60 text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    {sizeNum}
                  </button>
                );
              })}
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleAddToCart}
            disabled={selectedSize === null}
            data-ocid="product.cart.primary_button"
            className={`w-full py-6 font-body text-sm tracking-widest uppercase rounded-none transition-all duration-300 ${
              added
                ? "bg-green-600 hover:bg-green-600"
                : "bg-accent text-accent-foreground hover:bg-accent/90"
            } disabled:opacity-40`}
          >
            {added ? (
              <>
                <Check size={18} className="mr-2" /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag size={18} className="mr-2" /> Add to Cart
              </>
            )}
          </Button>

          {selectedSize === null && (
            <p className="font-body text-xs text-muted-foreground text-center -mt-4">
              Please select a size to continue
            </p>
          )}
        </motion.div>
      </div>
    </main>
  );
}
