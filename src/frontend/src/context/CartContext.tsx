import { type ReactNode, createContext, useContext, useState } from "react";
import type { Product } from "../backend.d";

export interface CartItem {
  product: Product;
  size: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: number) => void;
  removeItem: (productId: bigint, size: number) => void;
  clearCart: () => void;
  totalItems: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product, size: number) => {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.product.id === product.id && i.size === size,
      );
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id && i.size === size
            ? { ...i, quantity: i.quantity + 1 }
            : i,
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
  };

  const removeItem = (productId: bigint, size: number) => {
    setItems((prev) =>
      prev.filter((i) => !(i.product.id === productId && i.size === size)),
    );
  };

  const clearCart = () => setItems([]);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
