import { Filter, filterProducts } from "./filter";
import { useProduct } from "./hooks/useProducts";
import { useRateFilterProducts } from "./hooks/useRateFilterProducts";

export function Good() {
  const { products } = useProduct();
  const { filterRate, handleRating } = useRateFilterProducts();

  return (
    <div className="flex flex-col h-full">
      <Filter filterRate={filterRate as number} handleRate={handleRating} />
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product: any) => (
        //   <Product product={product} />
        ))}
      </div>
    </div>
  );
}
