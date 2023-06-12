import { useProduct } from "./hooks/useProducts";

export function Good() {
    const { products } = useProduct();
}