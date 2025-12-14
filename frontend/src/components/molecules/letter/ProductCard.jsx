import { RatingDisplay } from "../../atoms/letter/RatingDisplay";
import { PriceTag } from "../../atoms/letter/PriceTag";
import { ProductImage } from "../../atoms/letter/ProductImage";
import { Button } from "../../atoms/buttons"; // 1. Importamos el botón desde átomos

function ProductCard({ product, onOrder }) {
  const { name, price, img, description } = product;

  // Ruta de imagen segura
  const imagePath = img ? `/${img}` : "/CUP-COFFEE.png";
  
  // Precio formateado
  const formattedPrice = `S/. ${parseFloat(price).toFixed(2)}`;

  return (
    <article className="bg-[#d6c394] rounded-2xl p-5 text-center shadow-md relative flex flex-col h-full justify-between gap-4">
      
      {/* Contenedor Superior: Título, Imagen, Datos */}
      <div>
        <h3 className="font-semibold text-lg text-[#432a0c] mb-2 min-h-[3.5rem] flex items-center justify-center leading-tight">
          {name}
        </h3>

        <div className="flex items-center justify-between relative mt-auto mb-2">
          {/* Columna izquierda: Solo Rating (quitamos el botón de aquí) */}
          <div className="flex flex-col items-start gap-3 text-sm mb-3 text-[#2e2a23] z-10">
            <RatingDisplay rating={4.5} />
          </div>

          {/* Imagen central */}
          <div className="flex-1 flex justify-center px-2">
            <ProductImage src={imagePath} alt={name} />
          </div>

          {/* Precio derecha */}
          <PriceTag precio={formattedPrice} />
        </div>

        {/* Descripción */}
        {description && (
          <p className="text-xs text-[#432a0c] mt-2 opacity-80 line-clamp-2 text-center">
            {description}
          </p>
        )}
      </div>
      
      {/* 2. Botón al final y ancho completo */}
      <div className="w-full">
        <Button 
          onClick={onOrder}
          className="w-full bg-[#432a0c] text-[#FFFAD3] py-2 rounded-full font-semibold text-xs hover:bg-[#5e3b12] transition-colors shadow-sm cursor-pointer"
        >
          + Añadir
        </Button>
      </div>

    </article>
  );
}

export { ProductCard };