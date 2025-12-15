import { ProductCard } from "../../molecules/letter/ProductCard";

function ProductGrid({ products, onOrder }) {
  if (!products || products.length === 0) return null;

  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr">
      {products.map((product) => (
        <div key={product.idProduct} className="h-full">
          <ProductCard product={product} onOrder={() => onOrder(product)} />
        </div>
      ))}
    </div>
  );
}

export { ProductGrid };