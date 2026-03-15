import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "motion/react";
import { useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { Category, useProductsByCategory } from "../hooks/useQueries";

type FilterTab = "all" | Category;

const tabs: { value: FilterTab; label: string }[] = [
  { value: "all", label: "All" },
  { value: Category.sneaker, label: "Sneakers" },
  { value: Category.boot, label: "Boots" },
  { value: Category.sandal, label: "Sandals" },
];

export function ShopPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const { data: products = [], isLoading } = useProductsByCategory(activeTab);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-body text-accent text-xs tracking-[0.3em] uppercase mb-2">
          Collections
        </p>
        <h1 className="font-display text-6xl font-bold text-foreground">
          Shop
        </h1>
      </motion.div>

      <Tabs
        value={activeTab}
        onValueChange={(v) => setActiveTab(v as FilterTab)}
        className="mb-12"
      >
        <TabsList className="bg-transparent border border-border/60 p-1 h-auto gap-1">
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              data-ocid="shop.filter.tab"
              className="font-body text-xs tracking-widest uppercase px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none transition-all"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          data-ocid="shop.products.loading_state"
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="aspect-square w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/3" />
            </div>
          ))}
        </div>
      ) : products.length === 0 ? (
        <div
          className="text-center py-20"
          data-ocid="shop.products.empty_state"
        >
          <p className="font-display text-2xl text-muted-foreground">
            No products found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <ProductCard
              key={product.id.toString()}
              product={product}
              index={i}
            />
          ))}
        </div>
      )}
    </main>
  );
}
