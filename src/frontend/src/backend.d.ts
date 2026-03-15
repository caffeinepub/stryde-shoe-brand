import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Product {
    id: bigint;
    name: string;
    description: string;
    sizes: Array<bigint>;
    category: Category;
    price: bigint;
}
export enum Category {
    sneaker = "sneaker",
    sandal = "sandal",
    boot = "boot"
}
export interface backendInterface {
    getAllProducts(): Promise<Array<Product>>;
    getProductById(id: bigint): Promise<Product>;
    getProductsByCategory(category: Category): Promise<Array<Product>>;
    init(): Promise<void>;
}
