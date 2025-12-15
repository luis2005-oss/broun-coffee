import { RatingDisplay } from "../../atoms/letter/RatingDisplay";
import { PriceTag } from "../../atoms/letter/PriceTag";
import { ProductImage } from "../../atoms/letter/ProductImage";
import { Button } from "../../atoms/buttons";

function ProductCard({ product, onOrder }) {
  const { name = "Producto", price = 0, img, description } = product || {};
  
  const imagePath = img ? `/${img}` : "/CUP-COFFEE.png";
  const formattedPrice = `S/. ${parseFloat(price).toFixed(2)}`;

  return (
    <article className="bg-[#d6c394] rounded-2xl p-4 shadow-lg flex flex-col h-full relative overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
      
      {/* 1. PRECIO FLOTANTE (Corrección Definitiva) */}
      {/* Usamos 'price' (inglés) para coincidir con el átomo estándar.
          top-3 right-3: Lo separa un poco del borde.
          z-40: Lo pone por encima de la imagen y decoración. */}
      <div className="absolute top-3 right-3 z-40">
        <PriceTag price={formattedPrice} />
      </div>

      {/* 2. Título */}
      <h3 className="font-bold text-lg text-[#432a0c] mt-6 mb-2 text-center leading-tight min-h-[3rem] flex items-center justify-center px-2">
        {name}
      </h3>

      {/* 3. Imagen */}
      <div className="w-full flex-1 flex items-center justify-center mb-4 min-h-[140px]">
        <div className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center drop-shadow-2xl z-10 transition-transform duration-500 hover:rotate-6">
          <ProductImage src={imagePath} alt={name} className="object-contain w-full h-full" />
        </div>
      </div>

      {/* 4. Footer */}
      <div className="flex flex-col gap-3 mt-auto w-full">
        
        <div className="flex justify-center scale-90 sm:scale-100">
          <RatingDisplay rating={4.5} />
        </div>

        {description && (
          <p className="text-xs text-[#432a0c] text-center opacity-80 line-clamp-2 px-1 hidden sm:block">
            {description}
          </p>
        )}

        <div className="w-full pt-1">
          <Button 
            onClick={onOrder}
            className="w-full bg-[#432a0c] text-[#FFFAD3] py-2.5 rounded-full font-bold text-sm hover:bg-[#5e3b12] active:scale-95 transition-all shadow-md flex items-center justify-center cursor-pointer"
          >
            + Añadir
          </Button>
        </div>
      </div>

    </article>
  );
}

export { ProductCard };