import { RatingDisplay } from "../../atoms/letter/RatingDisplay";
import { PriceTag } from "../../atoms/letter/PriceTag";
import { ProductImage } from "../../atoms/letter/ProductImage";

function ProductCard({ nombre, precio, rating, imagen, onOrder }) {
  return (
    <article className="bg-[#d6c394] rounded-2xl p-5 text-center shadow-md relative">
      <h3 className="font-semibold text-lg text-[#432a0c] mb-2">
        {nombre}
      </h3>

      <div className="flex items-center relative">
        <div className="flex flex-col items-start gap-2 text-sm mb-3 text-[#2e2a23]">
          <RatingDisplay rating={rating} />

          <button
            onClick={onOrder}
            className="bg-[#fdf2dd] border border-[#b8925c] px-4 py-2 rounded-full font-semibold hover:bg-[#FFE5B6]"
          >
            Pedir
          </button>
        </div>

        <ProductImage src={imagen} alt={nombre} />

        <PriceTag precio={precio} />
      </div>
    </article>
  );
}

export { ProductCard };