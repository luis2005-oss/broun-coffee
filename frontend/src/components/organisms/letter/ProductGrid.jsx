import { ProductCard } from "../../molecules/letter/ProductCard";

function ProductGrid({ products, onOrder }) {
  return (
    <main className="max-w-7xl mx-auto px-6 pb-12 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.nombre}
            nombre={product.nombre}
            precio={product.precio}
            rating={product.rating}
            imagen={product.imagen}
            onOrder={() => onOrder(product)}
          />
        ))}
      </div>
    </main>
  );
}

export { ProductGrid };