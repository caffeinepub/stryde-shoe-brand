import { Category } from "../backend.d";
import type { Product } from "../backend.d";

const categoryImages: Record<Category, string[]> = {
  [Category.sneaker]: [
    "/assets/generated/sneaker-white.dim_800x800.jpg",
    "/assets/generated/sneaker-red.dim_800x800.jpg",
  ],
  [Category.boot]: [
    "/assets/generated/boot-black.dim_800x800.jpg",
    "/assets/generated/boot-tan.dim_800x800.jpg",
  ],
  [Category.sandal]: [
    "/assets/generated/sandal-nude.dim_800x800.jpg",
    "/assets/generated/sandal-black.dim_800x800.jpg",
  ],
};

const categoryCounters: Partial<Record<Category, number>> = {};
const productImageMap = new Map<string, string>();

export function getProductImage(product: Product): string {
  const key = product.id.toString();
  if (productImageMap.has(key)) {
    return productImageMap.get(key)!;
  }
  const images = categoryImages[product.category] ?? [
    "/assets/generated/sneaker-white.dim_800x800.jpg",
  ];
  const count = categoryCounters[product.category] ?? 0;
  const image = images[count % images.length];
  categoryCounters[product.category] = count + 1;
  productImageMap.set(key, image);
  return image;
}

export function getCategoryLabel(category: Category): string {
  switch (category) {
    case Category.sneaker:
      return "Sneaker";
    case Category.boot:
      return "Boot";
    case Category.sandal:
      return "Sandal";
    default:
      return "Shoe";
  }
}

export function formatPrice(cents: bigint): string {
  const dollars = Number(cents) / 100;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(dollars);
}
