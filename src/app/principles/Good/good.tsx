"use client"; // This is a client component 👈🏽

import { Filter, filterProducts } from "./filter";
import { useProduct } from "./hooks/useProducts";
import { useRateFilterProducts } from "./hooks/useRateFilterProducts";
import { Product } from "./product";

export function Good() {
  const { products } = useProduct();
  const { filterRate, handleRate } = useRateFilterProducts();
  return (
    <div className="flex flex-col h-full">
      <Filter filterRate={filterRate as number} handleRate={handleRate} />
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
